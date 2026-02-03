# Claude Consumer (Web, Desktop, Mobile)

Claude consumer apps require exactly one skill per upload.

## Generate Bundles

```bash
npm run generate:consumers
npm run package:claudeai
```

Bundles live in `dist/consumer/claude/<skill-id>/`.
Zip files live in `dist/claudeai/<skill-id>.zip`.

## Upload the Skill

1. Open Claude settings.
2. Go to Capabilities and enable Skills.
3. Upload a single zip file (one skill per zip).
4. Repeat for any additional skills.

## Tips

- The zip must contain only one `SKILL.md` at the root.
- Keep assets and references in their respective folders.
