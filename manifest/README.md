# Multi-Platform Manifest System

This project uses a unified manifest system to support multiple LLM platforms from a single source of truth.

## Quick Start

### Making Changes to Skills

1. **Edit the master manifest:**
   ```bash
   # Edit manifest/manifest.json to add/modify skills
   vim manifest/manifest.json
   ```

2. **Generate platform manifests:**
   ```bash
   npm run generate:manifests
   ```

3. **Commit all changes:**
   ```bash
   git add .
   git commit -m "feat: update skills"
   ```

That's it! The CI/CD will validate your changes when you push.

## Supported Platforms

| Platform | Directory | Status | Frontmatter |
|----------|-----------|--------|-------------|
| **Claude Code** | `.claude-plugin/` | ✅ Active | No |
| **GitHub Copilot** | `.github/copilot/` | ✅ Active | Yes |
| **Cursor IDE** | `.cursor/` | ✅ Active | Yes |
| **Gemini CLI** | `.gemini/` | ✅ Active | Yes |
| **OpenAI Codex** | `.codex/` | ✅ Active | Yes |

## File Structure

```
clinical-toolkit/
├── manifest/
│   ├── manifest.json      # ⭐ EDIT THIS
│   ├── templates/         # Platform templates (rarely change)
│   ├── overrides/         # Platform-specific tweaks (optional)
│   └── README.md          # This file
├── scripts/generate-manifests.js # Build script
└── Generated manifests:
    ├── .claude-plugin/manifest.json
    ├── .github/copilot/manifest.json
    ├── .cursor/manifest.json
    ├── .gemini/manifest.json
    └── .codex/manifest.json
```

## Common Tasks

### Add a new skill

1. Create skill directory and SKILL.md:
   ```bash
   mkdir -p skills/my-skill
   touch skills/my-skill/SKILL.md
   ```

2. Add to manifest/manifest.json:
   ```json
   {
     "skills": [
       {
         "id": "my-skill",
         "path": "skills/my-skill/SKILL.md",
         "name": "My Skill",
         "description": "What this skill does",
         "category": "screening",
         "tags": ["tag1", "tag2"]
       }
     ]
   }
   ```

3. Generate and commit:
   ```bash
   npm run generate:manifests
   git add .
   git commit -m "feat: add my-skill"
   ```

### Update skill metadata

1. Edit `manifest/manifest.json`
2. Run `npm run generate:manifests`
3. Commit changes

### Platform-specific customization

Only if absolutely necessary:

1. Create `manifest/overrides/<platform>.override.json`
2. Add override fields (only what's needed)
3. Run `npm run generate:manifests`
4. Document why override is needed
5. Commit changes

### Preview changes before generating

```bash
npm run generate:manifests:dry-run
```

### Generate for single platform

```bash
npm run generate:claude
npm run generate:copilot
npm run generate:cursor
npm run generate:gemini
npm run generate:codex
```

## Architecture Benefits

✅ **DRY** - Edit once, deploy everywhere
✅ **Flexibility** - Platform-specific overrides when needed
✅ **Transparency** - Generated files committed for users
✅ **Automation** - CI/CD keeps everything in sync
✅ **Extensibility** - Easy to add new platforms

## How It Works

```
                     ┌─────────────────────────┐
                     │ manifest/manifest.json  │ ← You edit this
                     └──────────┬──────────────┘
                                │
                    ┌───────────▼───────────┐
                    │  generate-manifests.js │
                    └───────────┬───────────┘
                                │
            ┌───────────────────┼───────────────────┐
            │                   │                   │
    ┌───────▼────────┐ ┌────────▼────────┐ ┌───────▼────────┐
    │   + template   │ │   + template    │ │   + template   │
    │   + override   │ │   + override    │ │   + override   │
    └───────┬────────┘ └────────┬────────┘ └───────┬────────┘
            │                   │                   │
    ┌───────▼────────┐ ┌────────▼────────┐ ┌───────▼────────┐
    │ .claude-plugin │ │ .github/copilot │ │   .cursor/     │
    │  manifest.json │ │  manifest.json  │ │ manifest.json  │
    └────────────────┘ └─────────────────┘ └────────────────┘
```

## CI/CD Integration

GitHub Actions automatically:
- ✅ Generates manifests when manifest/ directory changes
- ✅ Commits generated files back to repo on main branch
- ✅ Validates PRs to ensure manifests are in sync
- ✅ Fails PR checks if manifests are out of sync

## Troubleshooting

### CI fails: "manifests are out of sync"

```bash
npm run generate:manifests
git add .
git commit --amend --no-edit
git push --force-with-lease
```

### Need to add platform-specific field

1. Try to add it to manifest/manifest.json first (preferred)
2. If truly platform-specific, use override system
3. Document why it's needed in override file

### SKILL.md frontmatter issues

The script automatically adds frontmatter for platforms that need it:
- GitHub Copilot: Yes
- Cursor: Yes
- Gemini CLI: Yes
- OpenAI Codex: Yes
- Claude: No

Don't manually edit frontmatter - let the script manage it.

## Advanced Usage

### Custom template variables

Edit templates in `manifest/templates/`:
- Use `{{meta.field}}` for package metadata
- Use `{{skill.field}}` for skill properties
- Deep paths work: `{{meta.author.name}}`

### Override precedence

1. Master manifest (base)
2. Template mapping (structure)
3. Platform override (customization)

Final manifest = base + template + override (deep merged)

## Migration Guide

### From manual manifests

1. Consolidate metadata into `manifest/manifest.json`
2. Run `npm run generate:manifests`
3. Compare generated vs manual files
4. Adjust templates/overrides if needed
5. Delete old manual manifests
6. Commit new system

### To new platform

1. Research platform manifest format
2. Create template in `manifest/templates/`
3. Add to `compatiblePlatforms` in manifest/manifest.json
4. Test generation
5. Commit changes

## Getting Help

- 📖 Template documentation: [templates/README.md](templates/README.md)
- 🎨 Override documentation: [overrides/README.md](overrides/README.md)
- 🔧 Script source: [../scripts/generate-manifests.js](../scripts/generate-manifests.js)

## Design Philosophy

This system follows these principles:

1. **Single Source of Truth** - One file to rule them all
2. **Platform Agnostic** - Master manifest knows nothing about platforms
3. **Template-Driven** - Platform details live in templates
4. **Override Sparingly** - Keep platforms aligned when possible
5. **Commit Generated** - Users can clone and use immediately
6. **Automate Everything** - CI/CD handles the boring parts

Built for the fast-moving AI platform landscape of 2026. 🚀
