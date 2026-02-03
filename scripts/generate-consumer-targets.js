#!/usr/bin/env node

/**
 * Consumer Chatbot Translation Layer Generator
 *
 * Builds per-skill bundles for consumer chatbots where SKILL.md libraries
 * are not directly supported.
 *
 * Targets:
 * - claude-consumer (folders for per-skill ZIP uploads)
 * - chatgpt (Custom GPT template bundle)
 * - gemini (Gem template bundle)
 * - perplexity (Space template bundle)
 * - ollama (Modelfile template)
 * - copilot-consumer (info-only)
 *
 * Usage:
 *   node scripts/generate-consumer-targets.js
 *   node scripts/generate-consumer-targets.js --target=chatgpt
 *   node scripts/generate-consumer-targets.js --dry-run
 *   node scripts/generate-consumer-targets.js --ollama-model=llama3.1
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');
const MASTER_MANIFEST_PATH = path.join(ROOT_DIR, 'manifest/manifest.json');
const DIST_DIR = path.join(ROOT_DIR, 'dist/consumer');

const args = process.argv.slice(2);
const options = {
  target: null,
  dryRun: false,
  ollamaModel: process.env.OLLAMA_BASE_MODEL || 'llama3.1',
};

args.forEach(arg => {
  if (arg.startsWith('--target=')) {
    options.target = arg.split('=')[1];
  } else if (arg === '--dry-run') {
    options.dryRun = true;
  } else if (arg.startsWith('--ollama-model=')) {
    options.ollamaModel = arg.split('=')[1];
  }
});

const TARGETS = [
  'claude-consumer',
  'chatgpt',
  'gemini',
  'perplexity',
  'ollama',
  'copilot-consumer',
  'instruction-pack',
];

function ensureDir(dirPath) {
  if (options.dryRun) return;
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeText(filePath, content) {
  if (options.dryRun) return;
  fs.writeFileSync(filePath, content, 'utf8');
}

function writeJson(filePath, payload) {
  const content = JSON.stringify(payload, null, 2) + '\n';
  writeText(filePath, content);
}

function stripFrontmatter(content) {
  if (!content.startsWith('---\n')) return content;
  const endIndex = content.indexOf('\n---', 4);
  if (endIndex === -1) return content;
  return content.slice(endIndex + 4).replace(/^\n+/, '');
}

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  const entries = fs.readdirSync(src, { withFileTypes: true });
  entries.forEach(entry => {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      ensureDir(destPath);
      copyDir(srcPath, destPath);
    } else {
      if (!options.dryRun) {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  });
}

function loadSkills(masterManifest) {
  return masterManifest.skills.map(skill => {
    const skillPath = path.join(ROOT_DIR, skill.path);
    const skillDir = path.dirname(skillPath);
    const content = fs.existsSync(skillPath) ? fs.readFileSync(skillPath, 'utf8') : '';
    const stripped = stripFrontmatter(content);

    return {
      id: skill.id,
      name: skill.name || skill.id,
      description: skill.description || '',
      category: skill.category || 'general',
      tags: Array.isArray(skill.tags) ? skill.tags : [],
      skillPath,
      skillDir,
      content,
      instructions: stripped,
      assetsDir: path.join(skillDir, 'assets'),
      referencesDir: path.join(skillDir, 'references'),
    };
  });
}

function writeKnowledgeBundle(baseDir, skill) {
  const knowledgeDir = path.join(baseDir, 'knowledge');
  ensureDir(knowledgeDir);

  if (fs.existsSync(skill.assetsDir)) {
    const assetsTarget = path.join(knowledgeDir, 'assets');
    ensureDir(assetsTarget);
    copyDir(skill.assetsDir, assetsTarget);
  }

  if (fs.existsSync(skill.referencesDir)) {
    const referencesTarget = path.join(knowledgeDir, 'references');
    ensureDir(referencesTarget);
    copyDir(skill.referencesDir, referencesTarget);
  }
}

function generateClaudeConsumer(skills) {
  const targetDir = path.join(DIST_DIR, 'claude');
  ensureDir(targetDir);

  skills.forEach(skill => {
    const skillTarget = path.join(targetDir, skill.id);
    ensureDir(skillTarget);
    if (!options.dryRun) {
      fs.copyFileSync(skill.skillPath, path.join(skillTarget, 'SKILL.md'));
    }
    if (fs.existsSync(skill.assetsDir)) {
      const assetsTarget = path.join(skillTarget, 'assets');
      ensureDir(assetsTarget);
      copyDir(skill.assetsDir, assetsTarget);
    }
    if (fs.existsSync(skill.referencesDir)) {
      const referencesTarget = path.join(skillTarget, 'references');
      ensureDir(referencesTarget);
      copyDir(skill.referencesDir, referencesTarget);
    }
  });

  const readme = [
    '# Claude Consumer Bundles',
    '',
    'Claude consumer apps require one skill per upload.',
    'Each folder in this directory is a per-skill bundle ready to zip.',
    '',
    'Suggested workflow:',
    '1. Zip a single skill folder (folder contents at zip root).',
    '2. Upload the zip in Claude Settings -> Capabilities -> Skills.',
    '',
    'Tip: use `npm run package:claudeai` to generate per-skill zip files.',
  ].join('\n');
  writeText(path.join(targetDir, 'README.md'), readme + '\n');
}

function generateChatGPT(skills) {
  const targetDir = path.join(DIST_DIR, 'chatgpt');
  ensureDir(targetDir);

  skills.forEach(skill => {
    const skillTarget = path.join(targetDir, skill.id);
    ensureDir(skillTarget);

    const gptSpec = {
      name: skill.name,
      description: skill.description,
      instructions: skill.instructions,
      conversation_starters: [
        `Help me with ${skill.name.toLowerCase()}.`,
        `Guide me through ${skill.name.toLowerCase()}.`,
      ],
      knowledge_files: [],
      tags: skill.tags,
      category: skill.category,
    };

    writeJson(path.join(skillTarget, 'gpt.json'), gptSpec);
    writeText(path.join(skillTarget, 'instructions.md'), skill.instructions + '\n');
    writeKnowledgeBundle(skillTarget, skill);
  });

  const readme = [
    '# ChatGPT Custom GPT Bundles',
    '',
    'Each folder contains a template you can use to create a Custom GPT.',
    '',
    'Manual setup:',
    '1. Create a new GPT in ChatGPT.',
    '2. Copy text from instructions.md into GPT instructions.',
    '3. Upload files from knowledge/ as GPT knowledge.',
    '4. Optionally use gpt.json as a reference for metadata.',
  ].join('\n');
  writeText(path.join(targetDir, 'README.md'), readme + '\n');
}

function generateGemini(skills) {
  const targetDir = path.join(DIST_DIR, 'gemini');
  ensureDir(targetDir);

  skills.forEach(skill => {
    const skillTarget = path.join(targetDir, skill.id);
    ensureDir(skillTarget);

    const gemSpec = {
      name: skill.name,
      description: skill.description,
      instructions: skill.instructions,
      suggested_prompts: [
        `Use ${skill.name} for this scenario.`,
        `Walk me through ${skill.name}.`,
      ],
      tags: skill.tags,
      category: skill.category,
    };

    writeJson(path.join(skillTarget, 'gem.json'), gemSpec);
    writeText(path.join(skillTarget, 'instructions.md'), skill.instructions + '\n');
    writeKnowledgeBundle(skillTarget, skill);
  });

  const readme = [
    '# Gemini Gem Bundles',
    '',
    'Each folder is a Gem template bundle.',
    '',
    'Manual setup:',
    '1. Create a new Gem in Gemini.',
    '2. Paste instructions.md into the Gem instructions.',
    '3. Upload knowledge/ files if supported in your plan.',
    '4. Use gem.json as a metadata reference.',
  ].join('\n');
  writeText(path.join(targetDir, 'README.md'), readme + '\n');
}

function generatePerplexity(skills) {
  const targetDir = path.join(DIST_DIR, 'perplexity');
  ensureDir(targetDir);

  skills.forEach(skill => {
    const skillTarget = path.join(targetDir, skill.id);
    ensureDir(skillTarget);

    const spaceSpec = {
      name: skill.name,
      description: skill.description,
      instructions: skill.instructions,
      tags: skill.tags,
      category: skill.category,
    };

    writeJson(path.join(skillTarget, 'space.json'), spaceSpec);
    writeText(path.join(skillTarget, 'instructions.md'), skill.instructions + '\n');
    writeKnowledgeBundle(skillTarget, skill);
  });

  const readme = [
    '# Perplexity Space Bundles',
    '',
    'Each folder is a Space template bundle.',
    '',
    'Manual setup:',
    '1. Create a new Space in Perplexity.',
    '2. Paste instructions.md into Space instructions.',
    '3. Upload knowledge/ files to the Space.',
    '4. Use space.json as a metadata reference.',
  ].join('\n');
  writeText(path.join(targetDir, 'README.md'), readme + '\n');
}

function generateOllama(skills) {
  const targetDir = path.join(DIST_DIR, 'ollama');
  ensureDir(targetDir);

  skills.forEach(skill => {
    const skillTarget = path.join(targetDir, skill.id);
    ensureDir(skillTarget);

    const modelfile = [
      `FROM ${options.ollamaModel}`,
      '',
      'SYSTEM """',
      skill.instructions.trim(),
      '"""',
      '',
      '# Optional parameters',
      '# PARAMETER temperature 0.2',
    ].join('\n');

    writeText(path.join(skillTarget, 'Modelfile'), modelfile + '\n');
    writeText(path.join(skillTarget, 'instructions.md'), skill.instructions + '\n');
    writeKnowledgeBundle(skillTarget, skill);
  });

  const readme = [
    '# Ollama Bundles',
    '',
    'Each folder contains a Modelfile template.',
    '',
    'Manual setup:',
    '1. Review Modelfile and adjust base model if needed.',
    '2. Run: ollama create <model-name> -f Modelfile',
    '3. Use the created model in your Ollama client.',
    '',
    `Default base model: ${options.ollamaModel}`,
    'Override with --ollama-model or OLLAMA_BASE_MODEL.',
  ].join('\n');
  writeText(path.join(targetDir, 'README.md'), readme + '\n');
}

function generateCopilotConsumer(skills) {
  const targetDir = path.join(DIST_DIR, 'copilot-consumer');
  ensureDir(targetDir);

  const summary = {
    supported: false,
    reason: 'Consumer Copilot does not support third-party skill packages or agents.',
    skills: skills.map(skill => ({
      id: skill.id,
      name: skill.name,
      description: skill.description,
    })),
  };

  writeJson(path.join(targetDir, 'skills.json'), summary);

  const readme = [
    '# Copilot Consumer',
    '',
    'Microsoft Copilot consumer currently does not support third-party skill or agent packages.',
    'This folder only includes a skills.json inventory for reference.',
  ].join('\n');
  writeText(path.join(targetDir, 'README.md'), readme + '\n');
}

function generateInstructionPack(skills) {
  const targetDir = path.join(DIST_DIR, 'instruction-pack');
  ensureDir(targetDir);

  const packs = skills.map(skill => {
    const packDir = path.join(targetDir, skill.id);
    ensureDir(packDir);

    const packSpec = {
      id: skill.id,
      name: skill.name,
      description: skill.description,
      category: skill.category,
      tags: skill.tags,
      instructionsFile: 'instructions.md',
      knowledgeDir: 'knowledge',
    };

    writeJson(path.join(packDir, 'pack.json'), packSpec);
    writeText(path.join(packDir, 'instructions.md'), skill.instructions + '\n');
    writeKnowledgeBundle(packDir, skill);

    return {
      id: skill.id,
      name: skill.name,
      description: skill.description,
      category: skill.category,
      tags: skill.tags,
      path: `${skill.id}/`,
      files: ['pack.json', 'instructions.md', 'knowledge/'],
    };
  });

  const index = {
    name: 'clinical-toolkit-instruction-packs',
    version: '1.0.0',
    description: 'Generic instruction packs for consumer chatbots',
    packs,
  };

  writeJson(path.join(targetDir, 'index.json'), index);

  const readme = [
    '# Generic Instruction Packs',
    '',
    'Each folder is a portable instruction pack that can be used in chatbots',
    'that accept instructions and optional knowledge files but lack a native',
    'skills API.',
    '',
    'Contents per pack:',
    '- pack.json (metadata)',
    '- instructions.md (core system instructions)',
    '- knowledge/ (assets + references, when available)',
    '',
    'How to use:',
    '1. Copy instructions.md into your chatbot system or custom instructions.',
    '2. Upload knowledge/ files if the platform supports file attachments.',
    '3. Use pack.json to map metadata into the platform UI.',
  ].join('\n');

  writeText(path.join(targetDir, 'README.md'), readme + '\n');
}

function writeIndex(skills, targets) {
  const index = {
    generatedAt: new Date().toISOString(),
    targets,
    skillCount: skills.length,
    skills: skills.map(skill => ({
      id: skill.id,
      name: skill.name,
      description: skill.description,
      category: skill.category,
    })),
  };

  ensureDir(DIST_DIR);
  writeJson(path.join(DIST_DIR, 'index.json'), index);
}

function main() {
  console.log('🚀 Generating consumer chatbot bundles\n');

  if (options.dryRun) {
    console.log('🔍 DRY RUN MODE - No files will be modified\n');
  }

  const masterManifest = readJson(MASTER_MANIFEST_PATH);
  const skills = loadSkills(masterManifest);

  const targets = options.target ? [options.target] : TARGETS;

  const targetHandlers = {
    'claude-consumer': generateClaudeConsumer,
    'chatgpt': generateChatGPT,
    'gemini': generateGemini,
    'perplexity': generatePerplexity,
    'ollama': generateOllama,
    'copilot-consumer': generateCopilotConsumer,
    'instruction-pack': generateInstructionPack,
  };

  targets.forEach(target => {
    const handler = targetHandlers[target];
    if (!handler) {
      console.warn(`⚠️  Unknown target: ${target}`);
      return;
    }
    console.log(`\n🔧 Target: ${target}`);
    handler(skills);
  });

  writeIndex(skills, targets);
  console.log('\n✨ Done!\n');
}

main();
