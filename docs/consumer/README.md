# Consumer Chatbot Support

This toolkit can generate per-skill bundles for consumer chatbots that do not
support skill libraries. These bundles are designed for manual installation in
the app UI (instructions + optional knowledge files).

## Quick Start

```bash
# Build all consumer bundles
npm run generate:consumers

# Validate outputs
npm run validate:consumers

# Optional: build Claude consumer zip files (one skill per zip)
npm run package:claudeai
```

Outputs land in `dist/consumer/`:

- `chatgpt/` - Custom GPT templates (instructions + knowledge files)
- `gemini/` - Gem templates (instructions + knowledge files)
- `perplexity/` - Space templates (instructions + knowledge files)
- `ollama/` - Modelfile templates
- `claude/` - Per-skill folders for ZIP upload
- `instruction-pack/` - Generic instruction packs
- `copilot-consumer/` - Inventory only (consumer Copilot does not support skills)

## Guides

- [Quickstart](quickstart.md)
- [FAQ](faq.md)
- [Why Use This Toolkit](why.md)
- [ChatGPT (Custom GPTs)](chatgpt.md)
- [Gemini (Gems)](gemini.md)
- [Perplexity (Spaces)](perplexity.md)
- [Claude Consumer](claude.md)
- [Ollama](ollama.md)
- [Generic Instruction Packs](instruction-pack.md)

## How To Use Bundles

### ChatGPT (Custom GPTs)
1. Create a new Custom GPT.
2. Paste `instructions.md` into the GPT instructions.
3. Upload files in `knowledge/` as GPT knowledge.
4. Use `gpt.json` as metadata reference.

### Gemini (Gems)
1. Create a new Gem.
2. Paste `instructions.md` into Gem instructions.
3. Upload `knowledge/` files if your plan supports it.
4. Use `gem.json` as metadata reference.

### Perplexity (Spaces)
1. Create a new Space.
2. Paste `instructions.md` into Space instructions.
3. Upload `knowledge/` files into the Space.
4. Use `space.json` as metadata reference.

### Claude Consumer (Web / Desktop / Mobile)
1. Zip a single skill folder from `dist/consumer/claude/<skill-id>/`.
2. Upload the zip in Claude Settings -> Capabilities -> Skills.
3. Repeat for any additional skills.

### Ollama (Local)
1. Review the `Modelfile` in `dist/consumer/ollama/<skill-id>/`.
2. Build a model: `ollama create <model-name> -f Modelfile`.
3. Use the model in your Ollama client.

### Generic Instruction Packs
For platforms without a skills system:
1. Copy `instructions.md` into the platform's system/custom instructions.
2. Upload `knowledge/` files if supported.
3. Use `pack.json` to map metadata into the platform UI.

## Notes

- `instruction-pack/` is intentionally generic and portable.
- `copilot-consumer/` is informational only.
- If you update skills, re-run `npm run generate:consumers`.
