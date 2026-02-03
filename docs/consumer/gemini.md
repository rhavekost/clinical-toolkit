# Gemini (Gems)

This guide walks through creating a Gemini Gem from a consumer bundle.

## Generate Bundles

```bash
npm run generate:consumers
```

Bundles live in `dist/consumer/gemini/<skill-id>/`.

## Create the Gem

1. Open Gemini and create a new Gem.
2. Open `dist/consumer/gemini/<skill-id>/instructions.md`.
3. Paste the contents into the Gem instructions field.
4. Upload files from `dist/consumer/gemini/<skill-id>/knowledge/` if your plan supports attachments.
5. (Optional) Use `gem.json` as metadata reference (name, description, tags).

## Tips

- Keep each Gem narrowly scoped to one skill.
- If attachments are limited, prefer core assets over references.
