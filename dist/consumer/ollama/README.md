# Ollama Bundles

Each folder contains a Modelfile template.

Manual setup:
1. Review Modelfile and adjust base model if needed.
2. Run: ollama create <model-name> -f Modelfile
3. Use the created model in your Ollama client.

Default base model: llama3.1
Override with --ollama-model or OLLAMA_BASE_MODEL.
