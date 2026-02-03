# Consumer Chatbots FAQ

## How many skills can I install?
It depends on the platform. Most consumer apps don’t support skill libraries, so install one skill per custom assistant. Use the generic instruction packs if you need to port to another platform quickly.

## Why are there separate bundles per platform?
Consumer chatbots use different configuration flows. The generator adapts the same skill to each platform’s requirements.

## Do I need to upload assets and references?
If the platform supports knowledge files, upload them. If not, the instructions are still usable, but you may lose some detail.

## What is the generic instruction pack?
A portable format for platforms without a native skills system. It includes instructions plus optional knowledge files.

## Are these clinically validated tools?
The instruments included are public domain or freely available and are commonly used in clinical settings. This toolkit is a support tool and does not replace professional judgment.

## Does this work in consumer Copilot?
Consumer Copilot does not currently support third‑party skill packages. The generator only emits an inventory for reference.

## Can I combine multiple skills into one assistant?
You can, but it may reduce clarity. We recommend one skill per assistant for best results.

## How do I update bundles after changes?
Run:
```bash
npm run generate:consumers
npm run validate:consumers
```
Then re-upload the updated instructions and knowledge.

## Is this HIPAA compliant?
This toolkit does not store data and is not a compliance product. You are responsible for using it within your scope of practice and applicable regulations.
