# Consumer Chatbots Quickstart

Get a single skill running in any supported consumer chatbot in under 10 minutes.

## 1) Generate Bundles

```bash
npm run generate:consumers
```

Outputs are in `dist/consumer/`.

## 2) Pick a Platform

### ChatGPT (Custom GPTs)
1. Open `dist/consumer/chatgpt/<skill-id>/instructions.md`.
2. Paste into GPT Instructions.
3. Upload files in `knowledge/`.

### Gemini (Gems)
1. Open `dist/consumer/gemini/<skill-id>/instructions.md`.
2. Paste into Gem instructions.
3. Upload `knowledge/` if supported.

### Perplexity (Spaces)
1. Open `dist/consumer/perplexity/<skill-id>/instructions.md`.
2. Paste into Space instructions.
3. Upload `knowledge/` files.

### Claude Consumer
1. Zip `dist/consumer/claude/<skill-id>/`.
2. Upload zip in Claude Settings -> Capabilities -> Skills.

### Ollama
1. Open `dist/consumer/ollama/<skill-id>/Modelfile`.
2. Run: `ollama create <model-name> -f Modelfile`.

### Generic Instruction Pack
1. Copy `instructions.md` into your platform instructions.
2. Upload `knowledge/` if supported.

## 3) Validate

```bash
npm run validate:consumers
```

You are ready to use the skill.
