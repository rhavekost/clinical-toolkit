# Ollama (Local)

Use the Modelfile output to create a local model per skill.

## Generate Bundles

```bash
npm run generate:consumers
```

Bundles live in `dist/consumer/ollama/<skill-id>/`.

## Build a Model

1. Review `dist/consumer/ollama/<skill-id>/Modelfile`.
2. (Optional) Edit the base model or parameters.
3. Run:
   ```bash
   ollama create <model-name> -f Modelfile
   ```
4. Use the new model in your Ollama client.

## Tips

- Pick a base model with strong instruction-following.
- If you need multiple skills, create multiple models.
