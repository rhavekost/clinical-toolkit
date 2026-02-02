#!/usr/bin/env node

/**
 * Manifest Generation Script
 *
 * Generates platform-specific manifests from the manifest/manifest.json
 * using templates and optional platform overrides.
 *
 * Architecture:
 * - manifest/manifest.json: Single source of truth
 * - manifest/templates/: Platform-specific templates
 * - manifest/overrides/: Optional platform-specific customizations
 * - Generated manifests are committed to repo for immediate use
 *
 * Usage:
 *   node scripts/generate-manifests.js [--platform=<name>] [--dry-run]
 */

const fs = require('fs');
const path = require('path');

// Configuration
const ROOT_DIR = path.join(__dirname, '..');
const MASTER_MANIFEST_PATH = path.join(ROOT_DIR, 'manifest/manifest.json');
const TEMPLATES_DIR = path.join(ROOT_DIR, 'manifest/templates');
const OVERRIDES_DIR = path.join(ROOT_DIR, 'manifest/overrides');

// Parse command line arguments
const args = process.argv.slice(2);
const options = {
  platform: null,
  dryRun: false,
};

args.forEach(arg => {
  if (arg.startsWith('--platform=')) {
    options.platform = arg.split('=')[1];
  } else if (arg === '--dry-run') {
    options.dryRun = true;
  }
});

/**
 * Replace template variables like {{meta.name}} with actual values
 */
function replaceTemplateVars(template, data) {
  if (typeof template !== 'string') return template;

  return template.replace(/\{\{([^}]+)\}\}/g, (match, path) => {
    const parts = path.split('.');
    let value = data;

    for (const part of parts) {
      value = value?.[part];
    }

    return value !== undefined ? value : match;
  });
}

/**
 * Apply template mapping to master manifest
 */
function applyMapping(template, masterManifest) {
  const mapping = template._mapping;
  const result = {};

  // Map top-level fields
  Object.entries(mapping).forEach(([key, value]) => {
    if (key.includes('[].')) return; // Skip array mappings for now
    if (key === 'skills') return; // Handle skills separately

    result[key] = replaceTemplateVars(value, masterManifest);
  });

  // Map skills array
  if (mapping.skills) {
    result.skills = masterManifest.skills.map(skill => {
      const skillData = {};

      Object.entries(mapping).forEach(([key, value]) => {
        if (!key.startsWith('skills[].')) return;

        const skillKey = key.replace('skills[].', '');
        skillData[skillKey] = replaceTemplateVars(value, {
          ...skill,
          meta: masterManifest.meta
        });
      });

      return skillData;
    });
  }

  return result;
}

/**
 * Load and merge override file if it exists
 */
function loadOverride(platform) {
  const overridePath = path.join(OVERRIDES_DIR, `${platform}.override.json`);

  if (!fs.existsSync(overridePath)) {
    return null;
  }

  try {
    return JSON.parse(fs.readFileSync(overridePath, 'utf8'));
  } catch (error) {
    console.warn(`⚠️  Failed to load override for ${platform}:`, error.message);
    return null;
  }
}

/**
 * Deep merge two objects
 */
function deepMerge(target, source) {
  const result = { ...target };

  Object.keys(source).forEach(key => {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = deepMerge(result[key] || {}, source[key]);
    } else {
      result[key] = source[key];
    }
  });

  return result;
}

/**
 * Add YAML frontmatter to SKILL.md files for platforms that need it
 */
function addSkillFrontmatter(template, masterManifest) {
  const frontmatterConfig = template._skillsFrontmatter;
  if (!frontmatterConfig?.enabled) return;

  console.log('  📝 Adding YAML frontmatter to SKILL.md files...');

  masterManifest.skills.forEach(skill => {
    const skillPath = path.join(ROOT_DIR, skill.path);

    if (!fs.existsSync(skillPath)) {
      console.warn(`    ⚠️  Skill file not found: ${skill.path}`);
      return;
    }

    let content = fs.readFileSync(skillPath, 'utf8');

    // Check if frontmatter already exists
    if (content.startsWith('---\n')) {
      console.log(`    ℹ️  Frontmatter already exists: ${skill.id}`);
      return;
    }

    // Build frontmatter
    const frontmatter = {};
    Object.entries(frontmatterConfig.fields).forEach(([key, value]) => {
      frontmatter[key] = replaceTemplateVars(value, {
        ...skill,
        meta: masterManifest.meta
      });
    });

    // Add frontmatter to file
    const frontmatterYaml = Object.entries(frontmatter)
      .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
      .join('\n');

    const newContent = `---\n${frontmatterYaml}\n---\n\n${content}`;

    if (!options.dryRun) {
      fs.writeFileSync(skillPath, newContent, 'utf8');
    }

    console.log(`    ✅ Added frontmatter: ${skill.id}`);
  });
}

/**
 * Generate manifest for a specific platform
 */
function generateManifest(platform, template, masterManifest) {
  console.log(`\n🔨 Generating ${platform} manifest...`);

  // Apply template mapping
  let manifest = applyMapping(template, masterManifest);

  // Load and merge overrides
  const override = loadOverride(platform);
  if (override) {
    console.log('  📦 Applying platform overrides...');
    manifest = deepMerge(manifest, override);
  }

  // Add skill frontmatter if needed
  if (template._skillsFrontmatter?.enabled) {
    addSkillFrontmatter(template, masterManifest);
  }

  // Determine output path
  const outputPath = path.join(ROOT_DIR, template._output);
  const outputDir = path.dirname(outputPath);

  // Create output directory if needed
  if (!fs.existsSync(outputDir)) {
    if (!options.dryRun) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    console.log(`  📁 Created directory: ${path.relative(ROOT_DIR, outputDir)}`);
  }

  // Write manifest
  const manifestJson = JSON.stringify(manifest, null, 2) + '\n';

  if (options.dryRun) {
    console.log('  🔍 [DRY RUN] Would write to:', path.relative(ROOT_DIR, outputPath));
    console.log('  📄 Content preview:');
    console.log(manifestJson.split('\n').slice(0, 10).join('\n'));
    console.log('  ...');
  } else {
    fs.writeFileSync(outputPath, manifestJson, 'utf8');
    console.log(`  ✅ Written: ${path.relative(ROOT_DIR, outputPath)}`);
  }
}

/**
 * Main execution
 */
function main() {
  console.log('🚀 Manifest Generation Script\n');

  if (options.dryRun) {
    console.log('🔍 DRY RUN MODE - No files will be modified\n');
  }

  // Load master manifest
  console.log('📖 Loading master manifest...');
  const masterManifest = JSON.parse(fs.readFileSync(MASTER_MANIFEST_PATH, 'utf8'));
  console.log(`  ✅ Loaded: ${masterManifest.meta.name} v${masterManifest.meta.version}`);
  console.log(`  📦 Skills: ${masterManifest.skills.length}`);
  console.log(`  🎯 Platforms: ${masterManifest.meta.compatiblePlatforms.join(', ')}`);

  // Get list of platforms to process
  const platforms = options.platform
    ? [options.platform]
    : masterManifest.meta.compatiblePlatforms;

  // Load and process each template
  platforms.forEach(platform => {
    const templatePath = path.join(TEMPLATES_DIR, `${platform}.template.json`);

    if (!fs.existsSync(templatePath)) {
      console.error(`\n❌ Template not found for platform: ${platform}`);
      console.error(`   Expected: ${templatePath}`);
      return;
    }

    try {
      const template = JSON.parse(fs.readFileSync(templatePath, 'utf8'));
      generateManifest(platform, template, masterManifest);
    } catch (error) {
      console.error(`\n❌ Failed to generate ${platform} manifest:`, error.message);
    }
  });

  console.log('\n✨ Done!\n');
}

// Run the script
main();
