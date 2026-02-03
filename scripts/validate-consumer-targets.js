#!/usr/bin/env node

/**
 * Validate consumer chatbot bundle outputs in dist/consumer.
 *
 * Usage:
 *   node scripts/validate-consumer-targets.js
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');
const MASTER_MANIFEST_PATH = path.join(ROOT_DIR, 'manifest/manifest.json');
const DIST_DIR = path.join(ROOT_DIR, 'dist/consumer');
const SCHEMA_DIR = path.join(ROOT_DIR, 'docs/schemas/consumer');

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function exists(filePath) {
  return fs.existsSync(filePath);
}

function validate() {
  const manifest = readJson(MASTER_MANIFEST_PATH);
  const skills = manifest.skills.map(skill => skill.id);
  const missing = [];
  const schemaErrors = [];

  const targets = {
    'claude': { required: ['SKILL.md'], mode: 'claude' },
    'chatgpt': { required: ['instructions.md', 'gpt.json'], mode: 'knowledge' },
    'gemini': { required: ['instructions.md', 'gem.json'], mode: 'knowledge' },
    'perplexity': { required: ['instructions.md', 'space.json'], mode: 'knowledge' },
    'ollama': { required: ['instructions.md', 'Modelfile'], mode: 'knowledge' },
    'copilot-consumer': { required: ['README.md', 'skills.json'], mode: 'copilot-consumer' },
    'instruction-pack': { required: ['instructions.md', 'pack.json'], mode: 'knowledge' },
  };

  const schemaFiles = {
    'chatgpt': path.join(SCHEMA_DIR, 'chatgpt.schema.json'),
    'gemini': path.join(SCHEMA_DIR, 'gemini.schema.json'),
    'perplexity': path.join(SCHEMA_DIR, 'perplexity.schema.json'),
    'copilot-consumer': path.join(SCHEMA_DIR, 'copilot-consumer.schema.json'),
    'instruction-pack': path.join(SCHEMA_DIR, 'instruction-pack.schema.json'),
    'instruction-pack-index': path.join(SCHEMA_DIR, 'instruction-pack-index.schema.json'),
    'index': path.join(SCHEMA_DIR, 'index.schema.json'),
  };

  function valueType(value) {
    if (Array.isArray(value)) return 'array';
    if (value === null) return 'null';
    return typeof value;
  }

  function validateAgainstSchema(target, schemaPath, payloadPath) {
    if (!exists(schemaPath) || !exists(payloadPath)) return;

    let schema;
    let payload;

    try {
      schema = readJson(schemaPath);
    } catch (err) {
      schemaErrors.push(`${target}: invalid schema JSON at ${path.relative(ROOT_DIR, schemaPath)}`);
      return;
    }

    try {
      payload = readJson(payloadPath);
    } catch (err) {
      schemaErrors.push(`${target}: invalid JSON in ${path.relative(ROOT_DIR, payloadPath)}`);
      return;
    }

    function check(value, schemaNode, currentPath) {
      if (!schemaNode || typeof schemaNode !== 'object') return;
      if (schemaNode.type) {
        const actual = valueType(value);
        const expected = schemaNode.type;
        if (actual !== expected) {
          schemaErrors.push(
            `${target}: ${currentPath} expected ${expected}, got ${actual} in ${path.relative(ROOT_DIR, payloadPath)}`
          );
          return;
        }
      }

      if (schemaNode.type === 'object') {
        if (schemaNode.required) {
          schemaNode.required.forEach(field => {
            if (!value || typeof value !== 'object' || !(field in value)) {
              schemaErrors.push(
                `${target}: ${currentPath}.${field} missing in ${path.relative(ROOT_DIR, payloadPath)}`
              );
            }
          });
        }

        if (schemaNode.properties && value && typeof value === 'object') {
          Object.entries(schemaNode.properties).forEach(([key, propSchema]) => {
            if (!(key in value)) return;
            check(value[key], propSchema, `${currentPath}.${key}`);
          });
        }
      }

      if (schemaNode.type === 'array') {
        if (!Array.isArray(value)) return;
        if (schemaNode.minItems !== undefined && value.length < schemaNode.minItems) {
          schemaErrors.push(
            `${target}: ${currentPath} expected at least ${schemaNode.minItems} items in ${path.relative(
              ROOT_DIR,
              payloadPath
            )}`
          );
        }
        if (schemaNode.items) {
          value.forEach((item, index) => {
            check(item, schemaNode.items, `${currentPath}[${index}]`);
          });
        }
      }
    }

    check(payload, schema, '$');
  }

  Object.entries(targets).forEach(([target, spec]) => {
    const targetDir = path.join(DIST_DIR, target);
    if (!exists(targetDir)) {
      missing.push(`missing target dir: ${target}`);
      return;
    }

    if (spec.mode === 'copilot-consumer') {
      spec.required.forEach(req => {
        if (!exists(path.join(targetDir, req))) {
          missing.push(`${target}: missing ${req}`);
        }
      });
      validateAgainstSchema(
        'copilot-consumer',
        schemaFiles['copilot-consumer'],
        path.join(targetDir, 'skills.json')
      );
      return;
    }

    skills.forEach(skill => {
      const skillDir = path.join(targetDir, skill);
      if (!exists(skillDir)) {
        missing.push(`${target}/${skill}: missing skill dir`);
        return;
      }

      spec.required.forEach(req => {
        if (!exists(path.join(skillDir, req))) {
          missing.push(`${target}/${skill}: missing ${req}`);
        }
      });

      if (target === 'chatgpt') {
        validateAgainstSchema('chatgpt', schemaFiles.chatgpt, path.join(skillDir, 'gpt.json'));
      } else if (target === 'gemini') {
        validateAgainstSchema('gemini', schemaFiles.gemini, path.join(skillDir, 'gem.json'));
      } else if (target === 'perplexity') {
        validateAgainstSchema('perplexity', schemaFiles.perplexity, path.join(skillDir, 'space.json'));
      } else if (target === 'instruction-pack') {
        validateAgainstSchema(
          'instruction-pack',
          schemaFiles['instruction-pack'],
          path.join(skillDir, 'pack.json')
        );
      }

      const skillSrcDir = path.join(ROOT_DIR, 'skills', skill);
      const hasAssets = exists(path.join(skillSrcDir, 'assets'));
      const hasRefs = exists(path.join(skillSrcDir, 'references'));

      if (spec.mode === 'knowledge') {
        const knowledgeDir = path.join(skillDir, 'knowledge');
        if ((hasAssets || hasRefs) && !exists(knowledgeDir)) {
          missing.push(`${target}/${skill}: missing knowledge/`);
        }
      } else if (spec.mode === 'claude') {
        if (hasAssets && !exists(path.join(skillDir, 'assets'))) {
          missing.push(`${target}/${skill}: missing assets/`);
        }
        if (hasRefs && !exists(path.join(skillDir, 'references'))) {
          missing.push(`${target}/${skill}: missing references/`);
        }
      }
    });

    if (!exists(path.join(targetDir, 'README.md'))) {
      missing.push(`${target}: missing README.md`);
    }

    if (target === 'instruction-pack') {
      validateAgainstSchema(
        'instruction-pack-index',
        schemaFiles['instruction-pack-index'],
        path.join(targetDir, 'index.json')
      );
    }
  });

  const rootIndex = path.join(DIST_DIR, 'index.json');
  if (exists(rootIndex)) {
    validateAgainstSchema('index', schemaFiles.index, rootIndex);
  } else {
    missing.push('dist/consumer/index.json is missing');
  }

  if (missing.length) {
    console.error('Validation failed. Missing items:');
    missing.forEach(item => console.error(`- ${item}`));
    process.exit(1);
  }

  if (schemaErrors.length) {
    console.error('Schema validation failed:');
    schemaErrors.forEach(item => console.error(`- ${item}`));
    process.exit(1);
  }

  console.log('Validation complete. All required files present for all targets.');
}

validate();
