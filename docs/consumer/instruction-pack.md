# Generic Instruction Packs

Instruction packs are a neutral format for platforms that accept instructions
and optional file uploads but do not support native skills.

## Generate Bundles

```bash
npm run generate:consumers
```

Bundles live in `dist/consumer/instruction-pack/<skill-id>/`.

## Use a Pack

1. Open `instructions.md` and paste it into your platform's system or custom instructions.
2. Upload files from `knowledge/` if the platform supports file attachments.
3. Use `pack.json` as metadata reference (name, description, tags).

## Tips

- Keep one pack per assistant to avoid prompt collisions.
- If you need to merge packs, stitch instructions with clear section headers.
