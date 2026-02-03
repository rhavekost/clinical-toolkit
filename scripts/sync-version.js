#!/usr/bin/env node

/**
 * Sync versioned metadata from manifest/manifest.json to other files.
 * - package.json version
 * - README version lines
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');
const MANIFEST_PATH = path.join(ROOT_DIR, 'manifest/manifest.json');
const PACKAGE_PATH = path.join(ROOT_DIR, 'package.json');
const README_PATH = path.join(ROOT_DIR, 'README.md');

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJson(filePath, payload) {
  const content = JSON.stringify(payload, null, 2) + '\n';
  fs.writeFileSync(filePath, content, 'utf8');
}

function main() {
  const manifest = readJson(MANIFEST_PATH);
  const version = manifest?.meta?.version;

  if (!version) {
    console.error('❌ manifest/manifest.json missing meta.version');
    process.exit(1);
  }

  // Sync package.json
  if (fs.existsSync(PACKAGE_PATH)) {
    const packageJson = readJson(PACKAGE_PATH);
    if (packageJson.version !== version) {
      packageJson.version = version;
      writeJson(PACKAGE_PATH, packageJson);
      console.log(`✅ Updated package.json version to ${version}`);
    } else {
      console.log('ℹ️  package.json version already up to date');
    }
  }

  // Sync README version lines (best effort)
  if (fs.existsSync(README_PATH)) {
    const readme = fs.readFileSync(README_PATH, 'utf8');
    let updated = readme;

    updated = updated.replace(/^\*\*Version:\*\*\s+.*$/m, `**Version:** ${version}`);
    updated = updated.replace(/^\*Version\s+.*?\s+-\s+Production Ready\*/m, `*Version ${version} - Production Ready*`);

    if (updated !== readme) {
      fs.writeFileSync(README_PATH, updated, 'utf8');
      console.log(`✅ Updated README.md version to ${version}`);
    } else {
      console.log('ℹ️  README.md version already up to date');
    }
  }
}

main();
