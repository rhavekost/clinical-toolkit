#!/usr/bin/env node

/**
 * Package individual skills for claude.ai web interface
 *
 * claude.ai requires exactly ONE SKILL.md per upload, so we create
 * separate .zip files for each skill.
 *
 * This is different from the Claude Code package which supports
 * multiple skills in a single plugin.
 */

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const SKILLS_DIR = path.join(__dirname, '../skills');
const DIST_DIR = path.join(__dirname, '../dist/claudeai');

// Ensure dist directory exists
if (!fs.existsSync(DIST_DIR)) {
  fs.mkdirSync(DIST_DIR, { recursive: true });
}

/**
 * Get all skill directories (only those with SKILL.md)
 */
function getSkillDirs() {
  const entries = fs.readdirSync(SKILLS_DIR, { withFileTypes: true });
  return entries
    .filter(entry => entry.isDirectory())
    .map(entry => entry.name)
    .filter(name => {
      const skillPath = path.join(SKILLS_DIR, name, 'SKILL.md');
      return fs.existsSync(skillPath);
    });
}

/**
 * Create a zip file for a single skill using system zip command
 * claude.ai requires all files in top-level folder
 */
function packageSkill(skillName) {
  const skillDir = path.join(SKILLS_DIR, skillName);
  const outputPath = path.join(DIST_DIR, `${skillName}.zip`);

  // Remove existing zip if present
  if (fs.existsSync(outputPath)) {
    fs.unlinkSync(outputPath);
  }

  // Use system zip command to create archive
  // -r: recursive
  // For claude.ai, we want all files at the top level of the zip, so we run from the skill directory.
  try {
    execFileSync('zip', ['-r', outputPath, '.'], { cwd: skillDir, stdio: 'pipe' });

    const stats = fs.statSync(outputPath);
    console.log(`✅ ${skillName}.zip (${stats.size} bytes)`);
  } catch (error) {
    const isMissingZip = error && error.code === 'ENOENT';
    const message = isMissingZip
      ? 'zip command not found. Install zip (e.g., `brew install zip` on macOS).'
      : error.message;
    throw new Error(`Failed to create zip for ${skillName}: ${message}`);
  }
}

/**
 * Main execution
 */
function main() {
  console.log('🎯 Packaging skills for claude.ai web interface\n');

  const skills = getSkillDirs();

  if (skills.length === 0) {
    console.error('❌ No skills found with SKILL.md files');
    process.exit(1);
  }

  console.log(`📦 Found ${skills.length} skills to package:\n`);

  for (const skill of skills) {
    packageSkill(skill);
  }

  console.log(`\n✨ All skills packaged successfully!`);
  console.log(`📂 Output directory: ${DIST_DIR}`);
  console.log(`\n💡 Upload these .zip files individually to claude.ai/settings/capabilities`);
}

try {
  main();
} catch (err) {
  console.error('❌ Error:', err.message);
  process.exit(1);
}
