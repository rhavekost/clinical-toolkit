# Release Process

This document describes how to create and publish new releases of the Clinical Toolkit.

## Overview

The Clinical Toolkit uses **manual release workflows** to give you full control over when releases are published. Releases are created through GitHub Actions and automatically package all skills into a single ZIP file for easy distribution.

## Quick Release Guide

### Method 1: GitHub Actions (Recommended)

1. **Prepare your changes**
   ```bash
   # Make sure all changes are committed and pushed
   git status
   git push origin main
   ```

2. **Trigger the release workflow**
   - Go to: https://github.com/rhavekost/clinical-toolkit/actions
   - Click on "Create Release" workflow
   - Click "Run workflow" button
   - Enter the version number (e.g., `1.0.0`)
   - Optionally mark as pre-release
   - Click "Run workflow"

3. **Wait for completion** (usually 1-2 minutes)
   - The workflow will:
     - ✅ Validate version format
     - ✅ Update manifest.json
     - ✅ Build the package
     - ✅ Generate changelog
     - ✅ Create git tag
     - ✅ Create GitHub release
     - ✅ Upload ZIP file

4. **Share the release**
   - The release is now live at: `https://github.com/rhavekost/clinical-toolkit/releases`
   - Share the download link with users

### Method 2: Local Preparation + GitHub Actions

1. **Prepare release locally**
   ```bash
   # Run the preparation script
   ./scripts/prepare-release.sh 1.0.0
   ```

2. **Review changes**
   ```bash
   # Check the updated manifest
   git diff .claude-plugin/manifest.json

   # Test the package
   unzip -l clinical-toolkit-complete.zip
   ```

3. **Commit and push**
   ```bash
   git add .claude-plugin/manifest.json
   git commit -m "chore: bump version to 1.0.0"
   git push origin main
   ```

4. **Trigger GitHub Actions workflow** (same as Method 1, step 2)

### Method 3: Tag-Based Release (Optional)

**Note:** This method is disabled by default. To enable it, edit [.github/workflows/release-on-tag.yml](.github/workflows/release-on-tag.yml) and uncomment the `on:` section.

Once enabled, simply push a tag:

```bash
# Create and push a tag
git tag -a v1.0.0 -m "Release v1.0.0"
git push origin v1.0.0

# The workflow will automatically create the release
```

## Version Numbering (Semantic Versioning)

Follow [Semantic Versioning](https://semver.org/) format: `MAJOR.MINOR.PATCH`

**Examples:**

- `1.0.0` - Initial stable release
- `1.1.0` - Added new skill (minor feature)
- `1.0.1` - Fixed typo in documentation (patch)
- `2.0.0` - Changed skill structure (breaking change)

**Guidelines:**

- **MAJOR** (X.0.0) - Breaking changes, major restructuring
- **MINOR** (1.X.0) - New skills, new features, backwards-compatible
- **PATCH** (1.0.X) - Bug fixes, documentation updates, minor tweaks

**Pre-releases:**
- `1.0.0-beta.1` - Beta testing
- `1.0.0-rc.1` - Release candidate

## What Gets Included in a Release

Each release automatically includes:

1. **Package ZIP** (`clinical-toolkit-complete.zip`)
   - All 8 skill directories
   - All supporting files (assets, references)
   - Updated manifest.json

2. **Release Notes**
   - Version number
   - Changelog (auto-generated from commits)
   - Installation instructions
   - List of included skills

3. **Git Tag** (e.g., `v1.0.0`)

## Changelog Generation

Changelogs are automatically generated from commit messages since the last release.

**Good commit messages for changelog:**
```bash
git commit -m "feat: add PHQ-9 severity interpretation guide"
git commit -m "fix: correct GAD-7 scoring threshold"
git commit -m "docs: update installation instructions"
```

**Commit prefixes:**
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `refactor:` - Code restructuring
- `chore:` - Maintenance tasks

## Release Checklist

Before creating a release:

- [ ] All changes committed and pushed to main
- [ ] All skills tested and working
- [ ] Documentation updated (if needed)
- [ ] Version number decided (following semver)
- [ ] Review commit messages for changelog quality

## Troubleshooting

### "Tag already exists" error

You're trying to use a version that's already been released.

**Solution:** Use a new version number (e.g., increment to next version)

### Workflow fails during package build

Check that `scripts/package-for-claude-ai.sh` is executable and works locally:

```bash
chmod +x scripts/package-for-claude-ai.sh
./scripts/package-for-claude-ai.sh
```

### Release created but no ZIP file

Check the GitHub Actions logs:
1. Go to Actions tab
2. Click on the failed workflow run
3. Review the "Build package" step

### Need to delete a release

```bash
# Delete the GitHub release (via web UI or gh CLI)
gh release delete v1.0.0

# Delete the local tag
git tag -d v1.0.0

# Delete the remote tag
git push origin :refs/tags/v1.0.0
```

## Advanced: Customizing Release Notes

Edit the release workflow: [.github/workflows/release.yml](.github/workflows/release.yml)

Find the "Generate changelog" step and modify the release notes template.

## Testing Before Release

Always test the package before releasing:

```bash
# Build locally
./scripts/package-for-claude-ai.sh

# Extract to test directory
mkdir -p test-release
cd test-release
unzip ../clinical-toolkit-complete.zip

# Verify all skills present
ls -la skills/

# Check manifest
cat manifest.json
```

## Release Frequency Recommendations

**For this project:**
- **Major releases** (X.0.0) - When adding multiple new skills or restructuring
- **Minor releases** (1.X.0) - When adding a new skill or significant feature
- **Patch releases** (1.0.X) - Bug fixes, documentation updates

**Suggested schedule:**
- Don't release on every commit
- Bundle related changes together
- Release when you have meaningful updates
- Consider user disruption (they need to re-upload)

## Communicating Releases to Users

After releasing:

1. **Update README.md** with latest version info
2. **Announce in discussions/issues** (if applicable)
3. **Email/notify users** who are using the toolkit
4. **Update documentation site** (if you create one)

## Future Enhancements

Consider adding:

- [ ] Automated testing before release
- [ ] Release approval workflow
- [ ] Beta/staging releases
- [ ] Download statistics tracking
- [ ] Automatic notification system
- [ ] Version compatibility checks

---

## Quick Reference

| Task | Command |
|------|---------|
| Prepare release locally | `./scripts/prepare-release.sh 1.0.0` |
| Build package locally | `./scripts/package-for-claude-ai.sh` |
| Create release via GitHub | Actions → Create Release → Run workflow |
| Create release via tag | `git tag -a v1.0.0 -m "..." && git push origin v1.0.0` |
| View releases | https://github.com/rhavekost/clinical-toolkit/releases |
| Delete release | `gh release delete v1.0.0` |

---

**Questions?** Open an issue or check the [GitHub Actions documentation](https://docs.github.com/en/actions).
