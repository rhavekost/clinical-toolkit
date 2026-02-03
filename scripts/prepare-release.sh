#!/bin/bash
# Prepare a new release locally (test before pushing)

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if version provided
if [ -z "$1" ]; then
  echo -e "${RED}Error: Version number required${NC}"
  echo "Usage: $0 <version>"
  echo "Example: $0 1.0.0"
  exit 1
fi

VERSION=$1

# Validate version format
if ! [[ "$VERSION" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
  echo -e "${RED}Error: Version must be in format X.Y.Z (e.g., 1.0.0)${NC}"
  exit 1
fi

echo -e "${GREEN}🚀 Preparing release v${VERSION}${NC}"
echo ""

# Check for uncommitted changes
if ! git diff-index --quiet HEAD --; then
  echo -e "${YELLOW}⚠️  Warning: You have uncommitted changes${NC}"
  echo "Please commit or stash your changes first."
  exit 1
fi

# Check if tag already exists
if git rev-parse "v${VERSION}" >/dev/null 2>&1; then
  echo -e "${RED}Error: Tag v${VERSION} already exists${NC}"
  exit 1
fi

# Get current branch
CURRENT_BRANCH=$(git branch --show-current)

# Update manifest version (source of truth)
echo "📝 Updating manifest version..."
node -e "const fs=require('fs');const path='manifest/manifest.json';const m=JSON.parse(fs.readFileSync(path,'utf8'));m.meta.version='${VERSION}';fs.writeFileSync(path, JSON.stringify(m, null, 2)+'\\n');"

# Regenerate manifests and consumer bundles
echo "🧩 Regenerating manifests and consumer bundles..."
node scripts/generate-manifests.js
node scripts/generate-consumer-targets.js
node scripts/validate-consumer-targets.js

# Sync README/package versions
node scripts/sync-version.js

# Build package
echo "📦 Building package..."
./scripts/package-for-claude-ai.sh

# Generate changelog preview
echo ""
echo -e "${GREEN}📋 Changelog since last release:${NC}"
echo ""
LAST_TAG=$(git describe --tags --abbrev=0 2>/dev/null || git rev-list --max-parents=0 HEAD)
git log ${LAST_TAG}..HEAD --pretty=format:"  - %s (%h)" --no-merges || echo "  - Initial release"
echo ""
echo ""

# Summary
echo -e "${GREEN}✅ Release prepared locally${NC}"
echo ""
echo "Next steps:"
echo ""
echo "1. Review the changes:"
echo "   git diff manifest/manifest.json"
echo ""
echo "2. Test the package:"
echo "   unzip -l clinical-toolkit-complete.zip"
echo ""
echo "3. If everything looks good, commit and push:"
echo "   git add manifest/manifest.json .claude-plugin/manifest.json .github/copilot/manifest.json .cursor/manifest.json .gemini/manifest.json .codex/manifest.json skills/*/SKILL.md dist/consumer README.md package.json"
echo "   git commit -m \"chore: bump version to ${VERSION}\""
echo "   git push origin ${CURRENT_BRANCH}"
echo ""
echo "4. Create the release on GitHub:"
echo "   - Go to: https://github.com/rhavekost/clinical-toolkit/actions/workflows/release.yml"
echo "   - Click 'Run workflow'"
echo "   - Enter version: ${VERSION}"
echo "   - Click 'Run workflow'"
echo ""
echo "   OR manually create tag and push:"
echo "   git tag -a v${VERSION} -m \"Release v${VERSION}\""
echo "   git push origin v${VERSION}"
echo ""
