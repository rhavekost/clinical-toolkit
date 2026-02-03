# Generic Instruction Packs

Each folder is a portable instruction pack that can be used in chatbots
that accept instructions and optional knowledge files but lack a native
skills API.

Contents per pack:
- pack.json (metadata)
- instructions.md (core system instructions)
- knowledge/ (assets + references, when available)

How to use:
1. Copy instructions.md into your chatbot system or custom instructions.
2. Upload knowledge/ files if the platform supports file attachments.
3. Use pack.json to map metadata into the platform UI.
