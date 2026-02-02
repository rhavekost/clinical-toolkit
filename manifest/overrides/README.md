# Platform Manifest Overrides

This directory contains optional platform-specific overrides that are merged with the generated manifests.

## When to Use Overrides

Use overrides when a platform requires:
- Platform-specific metadata fields
- Different skill ordering or grouping
- Custom configuration that doesn't apply to other platforms
- Temporary platform-specific workarounds

**Note:** Use sparingly. Most customization should happen in templates to keep platforms aligned.

## Override Format

Create a file named `<platform>.override.json` with the fields you want to override:

```json
{
  "platformSpecificField": "value",
  "skills": [
    {
      "name": "skill-name",
      "customField": "platform-specific value"
    }
  ]
}
```

## Example: GitHub Copilot Override

`manifest/overrides/github-copilot.override.json`:
```json
{
  "copilotVersion": "2.0",
  "requiredFeatures": ["agent-mode"],
  "skills": [
    {
      "name": "depression-screening",
      "copilotPriority": "high"
    }
  ]
}
```

## How Overrides Work

1. Master manifest is processed through template
2. If `<platform>.override.json` exists, it's loaded
3. Override is deep-merged with generated manifest
4. Final manifest is written to platform directory

## Available Platforms

- `claude.override.json` - Claude Code overrides
- `github-copilot.override.json` - GitHub Copilot overrides
- `cursor.override.json` - Cursor IDE overrides
- `gemini-cli.override.json` - Gemini CLI overrides
- `openai-codex.override.json` - OpenAI Codex overrides

## Example Scenarios

### Adding platform-specific metadata

```json
{
  "platformVersion": "1.2.3",
  "requiredCapabilities": ["vision", "tools"]
}
```

### Customizing skill metadata

```json
{
  "skills": [
    {
      "name": "suicide-screening",
      "priority": "critical",
      "requiresConfirmation": true
    }
  ]
}
```

### Platform-specific skill lists

```json
{
  "skills": [
    {
      "name": "platform-specific-skill",
      "path": "skills/platform-only/SKILL.md",
      "description": "Only available on this platform"
    }
  ]
}
```

## Best Practices

1. **Document why** - Add comments explaining why override is needed
2. **Keep minimal** - Only override what's absolutely necessary
3. **Align when possible** - If multiple platforms need it, add to master
4. **Test thoroughly** - Verify override doesn't break platform
5. **Track upstream** - Check if platform evolves to standard format
