# Platform Manifest System

This directory contains the infrastructure for generating platform-specific manifests from a single source of truth.

## Architecture Overview

```
clinical-toolkit/
├── manifest/
│   ├── manifest.json          # ⭐ Single source of truth
│   ├── templates/             # 📋 Platform templates (this directory)
│   │   ├── claude.template.json
│   │   ├── github-copilot.template.json
│   │   ├── cursor.template.json
│   │   ├── gemini-cli.template.json
│   │   └── openai-codex.template.json
│   └── overrides/             # 🎨 Platform-specific customizations (optional)
│       └── <platform>.override.json
└── scripts/
    └── generate-manifests.js  # 🔨 Build script
```

## How It Works

1. **Master Manifest** (`manifest/manifest.json`)
   - Platform-agnostic source of truth
   - Contains all package metadata and skill definitions
   - Includes rich metadata (tags, categories, requirements)

2. **Templates** (`manifest/templates/*.template.json`)
   - Define platform-specific manifest structure
   - Map master manifest fields to platform format
   - Specify whether YAML frontmatter is needed in SKILL.md files

3. **Overrides** (`.manifest-overrides/*.override.json`) - Optional
   - Platform-specific additions or modifications
   - Merged with generated manifest
   - Use sparingly - prefer keeping platforms aligned

4. **Build Script** (`scripts/generate-manifests.js`)
   - Reads master manifest
   - Applies template mappings
   - Merges platform overrides
   - Adds YAML frontmatter to SKILL.md files if needed
   - Writes platform-specific manifests

## Usage

### Generate all manifests

```bash
npm run generate:manifests
```

### Generate for specific platform

```bash
npm run generate:claude
npm run generate:copilot
npm run generate:cursor
npm run generate:gemini
npm run generate:codex
```

### Dry run (preview changes)

```bash
npm run generate:manifests:dry-run
```

## Workflow

### Adding a new skill

1. Edit `manifest/manifest.json`
2. Add skill entry with all metadata
3. Create `skills/<skill-id>/SKILL.md`
4. Run `npm run generate:manifests`
5. Commit all changes

### Modifying existing skill

1. Update `manifest/manifest.json`
2. Run `npm run generate:manifests`
3. Commit changes

### Adding platform-specific customization

1. Create `manifest/overrides/<platform>.override.json`
2. Add only the fields you want to override/add
3. Run `npm run generate:manifests`
4. Commit changes

### Adding a new platform

1. Research platform's manifest format
2. Create `.manifest-templates/<platform>.template.json`
3. Add platform to `manifest/manifest.json` `compatiblePlatforms`
4. Run `npm run generate:manifests`
5. Test with the platform
6. Commit changes

## Template Format

Templates use a simple mapping format:

```json
{
  "_comment": "Description of the platform",
  "_mapping": {
    "fieldName": "{{path.to.masterField}}",
    "skills[].name": "{{id}}"
  },
  "_skillsFrontmatter": {
    "enabled": true,
    "fields": {
      "name": "{{id}}",
      "description": "{{description}}"
    }
  },
  "_output": "path/to/manifest.json"
}
```

### Template Variables

- `{{meta.name}}` - Package name
- `{{meta.version}}` - Package version
- `{{meta.description}}` - Package description
- `{{meta.author}}` - Package author
- `{{meta.license}}` - Package license
- `{{meta.repository}}` - Repository URL

### Skill Variables

- `{{id}}` - Skill ID
- `{{path}}` - Path to SKILL.md
- `{{name}}` - Skill display name
- `{{description}}` - Skill description
- `{{category}}` - Skill category
- `{{tags}}` - Array of tags

## CI/CD Integration

GitHub Actions automatically:
- Generates manifests when manifest/ directory changes
- Commits generated files back to repo
- Validates PRs to ensure manifests are in sync

## Supported Platforms

| Platform | Status | Directory | Frontmatter Required |
|----------|--------|-----------|---------------------|
| Claude Code | ✅ Active | `.claude-plugin/` | No |
| GitHub Copilot | ✅ Active | `.github/copilot/` | Yes |
| Cursor IDE | ✅ Active | `.cursor/` | Yes |
| Gemini CLI | ✅ Active | `.gemini/` | Yes |
| OpenAI Codex | ✅ Active | `.codex/` | Yes |

## Design Principles

1. **DRY** - Single source of truth eliminates duplication
2. **Flexibility** - Templates + overrides handle platform differences
3. **Transparency** - Generated files committed for user convenience
4. **Automation** - CI/CD keeps everything in sync
5. **Extensibility** - Easy to add new platforms

## Troubleshooting

### Manifests out of sync

```bash
npm run generate:manifests
git add .
git commit -m "chore: regenerate manifests"
```

### Template syntax error

- Check template JSON is valid
- Verify template variables exist in master manifest
- Run dry-run to preview: `npm run generate:manifests:dry-run`

### Platform-specific issues

- Check platform documentation for manifest format
- Create override file if needed
- Test with actual platform to verify

## Future Enhancements

- [ ] Schema validation for manifest.json
- [ ] Template linting
- [ ] Override validation
- [ ] Platform-specific skill validators
- [ ] Multi-language support
- [ ] Version management across platforms
