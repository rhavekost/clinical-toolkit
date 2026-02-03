#!/bin/bash
# Package all clinical toolkit skills for Claude.ai upload

set -e

echo "📦 Packaging Clinical Toolkit for Claude.ai..."

# Create temporary build directory
BUILD_DIR="$(mktemp -d)"
PACKAGE_NAME="clinical-toolkit-complete"
ZIP_FILE="${PACKAGE_NAME}.zip"

# Copy manifest
echo "  → Copying manifest..."
cp .claude-plugin/manifest.json "$BUILD_DIR/"

# Copy all skills with their supporting files
echo "  → Copying skills..."
mkdir -p "$BUILD_DIR/skills"
cp -r skills/* "$BUILD_DIR/skills/"

# Create ZIP file
echo "  → Creating ZIP archive..."
cd "$BUILD_DIR"
zip -r "$ZIP_FILE" . -x "*.DS_Store" -x "__pycache__/*"

# Move ZIP to project root
mv "$ZIP_FILE" "$OLDPWD/"
cd "$OLDPWD"

# Cleanup
rm -rf "$BUILD_DIR"

echo ""
echo "✅ Package created: ${ZIP_FILE}"
echo ""
echo "📱 To install in Claude.ai:"
echo "   1. Go to Settings → Capabilities"
echo "   2. Enable 'Skills' toggle"
echo "   3. Click 'Upload skill'"
echo "   4. Select: ${ZIP_FILE}"
echo "   5. Turn the skill toggle ON"
echo ""
SKILL_COUNT=$(node -p "require('./manifest/manifest.json').skills.length" 2>/dev/null || echo "all")
echo "This package includes ${SKILL_COUNT} clinical skills."
echo "See manifest/manifest.json for the full list."
echo ""
