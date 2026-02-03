# Perplexity (Spaces)

This guide walks through creating a Perplexity Space from a consumer bundle.

## Generate Bundles

```bash
npm run generate:consumers
```

Bundles live in `dist/consumer/perplexity/<skill-id>/`.

## Create the Space

1. Open Perplexity and create a new Space.
2. Open `dist/consumer/perplexity/<skill-id>/instructions.md`.
3. Paste the contents into the Space instructions field.
4. Upload files from `dist/consumer/perplexity/<skill-id>/knowledge/` into the Space knowledge area.
5. (Optional) Use `space.json` as metadata reference (name, description, tags).

## Tips

- Keep Spaces focused on a single skill to reduce confusion.
- Prefer small, high-signal references to improve retrieval.
