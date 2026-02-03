# ChatGPT (Custom GPTs)

This guide walks through creating a Custom GPT from a consumer bundle.

## Generate Bundles

```bash
npm run generate:consumers
```

Bundles live in `dist/consumer/chatgpt/<skill-id>/`.

## Create the Custom GPT

1. Open ChatGPT and create a new Custom GPT.
2. Open `dist/consumer/chatgpt/<skill-id>/instructions.md`.
3. Paste the contents into the GPT Instructions field.
4. Upload files from `dist/consumer/chatgpt/<skill-id>/knowledge/` into the GPT Knowledge section.
5. (Optional) Use `gpt.json` as metadata reference (name, description, tags).

## Tips

- Keep a single GPT focused on one skill for clearer outputs.
- If knowledge files are large, prioritize the most critical references first.
