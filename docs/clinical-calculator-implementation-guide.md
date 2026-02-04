# Clinical Calculator Implementation Guide (Green Tools Only)

**Scope:** This guide covers only tools that are explicitly green lit in the licensing research. It excludes any restricted, permission required, or pending tools.

**Goal:** Add public domain or freely usable clinical calculators to the toolkit in a consistent, safe, and well cited manner.

## One-Time Setup

1. Establish shared conventions and safety language.
2. Define standard file structure for calculator skills.
3. Define quality gates and review checklist.

This guide assumes the shared conventions live in `docs/calculator-conventions.md`.

## Standard File Structure

Use this structure for every new calculator skill group:

```
skills/<skill-id>/
  SKILL.md
  assets/
    <tool-id>.md
  references/
    <topic>.md
```

## Content Templates

### SKILL.md Template (Calculator Group)

```markdown
---
name: "<skill-id>"
description: "Use when calculating <domain> clinical scores, decision rules, or risk estimates."
---

# <Skill Name>

## Description
<Short scope and clinical intent.>

## Quick Reference

| Tool | Use |
|------|-----|
| <Tool> | <One line purpose> |

## Interactive Mode (Lightweight)

1. Confirm clinical context and intended tool.
2. Collect required inputs with units and time windows.
3. Validate inputs and resolve missing data.
4. Calculate and present results with interpretation.
5. Provide safety caveats and next step guidance.

## Calculators

- [<Tool Name>](assets/<tool-id>.md)

## Safety and Limitations
- Support tool only, not diagnostic.
- Use clinical judgment and local policies.

## References
See: [references/<topic>.md](references/<topic>.md)
```

### assets/<tool-id>.md Template

```markdown
# <Tool Name>

## Purpose
<What it assesses and when to use it.>

## Intended Population
<Age, setting, exclusions.>

## Inputs
| Name | Unit | Required | Valid Range | Notes |
|------|------|----------|-------------|-------|

## Algorithm
<Exact formula or scoring rules.>

## Output
<Score or risk percent plus range.>

## Interpretation
<Categories and recommended actions. Avoid prescriptive language.>

## Limitations
<Known pitfalls, exclusions, or invalid ranges.>

## Example Calculation
<Input values and computed output.>

## References
See: [references/<topic>.md](../references/<topic>.md)
```

### references/<topic>.md Template

```markdown
# <Topic References>

## Licensing Note
<Public domain or freely available statement with source.>

## Core Sources
- <Derivation study with DOI or PMID>
- <Key validation study>
- <Guideline or endorsement>

## Notes
<Population limits, version details, known controversies.>
```

## Research Workflow (Per Tool)

1. Capture exact formula and variable definitions from the derivation study.
2. Identify at least one key validation study.
3. Identify current guideline endorsements or standard of care usage.
4. Verify licensing status and record the source.
5. Document population limits, exclusions, and known pitfalls.
6. Collect 2 to 3 example calculations with expected outputs.

## Writing Workflow (Per Tool)

1. Create an asset file with formula, inputs, outputs, and examples.
2. Create a references file with citations and licensing notes.
3. Update the SKILL.md index to link to the new asset.
4. Add an interactive prompt flow and safety caveats.
5. Add quick reference tables to `docs/clinical-references.md` when needed.

## Skill Grouping and Tool Map (Green Only)

| Skill Group | Tool Assets |
| --- | --- |
| cardiovascular-risk | ascvd-pce, cha2ds2-vasc, has-bled, framingham-risk, heart-score, curb-65, wells-dvt, wells-pe |
| critical-care-severity | gcs, meld, sofa, qsofa, nihss, apache-iv |
| renal-metabolic | ckd-epi-2021-creatinine, ckd-epi-2021-cystatin-c, cockcroft-gault, corrected-calcium, corrected-sodium, anion-gap, winters-formula, a-a-gradient, friedewald-ldl, bmi |
| emergency-decision-rules | ottawa-ankle, ottawa-knee, canadian-cspine, perc-rule |
| geriatrics-tools | stopp-start-v3, 4at-delirium, mini-cog |
| pediatrics-calculators | pecarn-head-injury, cdc-growth-charts, who-growth-standards, pediatric-weight-based-dosing, holliday-segar, parkland-formula |
| medication-tools | steroid-conversion, qtc-corrections, opioid-equianalgesic, warfarin-dosing |
| primary-care-general | mifflin-st-jeor, harris-benedict, centor-score, mcisaac-score, naegele-rule |

Note: `opioid-mme-calculator` already exists and should be cross linked from the medication tools skill rather than duplicated.

## Execution Order

1. Renal and metabolic quick wins.
2. Cardiovascular risk tools.
3. Emergency decision rules.
4. Medication tools.
5. Geriatrics tools.
6. Pediatrics calculators.
7. Critical care severity tools.
8. Primary care general tools.

## Quality Gates (Per Tool)

1. Formula matches the primary source.
2. Inputs and units are validated.
3. Interpretation thresholds are cited.
4. At least two sources are cited.
5. Example calculation is verified.
6. Licensing note is included.
7. Safety caveats are present.
8. No proprietary text is copied.

## Manifest and Docs Integration (Per Skill)

1. Add skill to `manifest/manifest.json` with tags and description.
2. Update `README.md` skill list.
3. Update `docs/clinical-references.md` if quick reference tables are added.
4. Run `npm run generate:manifests`.

## Progress Tracking (Green Only)

- [x] cardiovascular-risk
- [x] renal-metabolic
- [x] emergency-decision-rules
- [x] geriatrics-tools
- [x] pediatrics-calculators
- [x] medication-tools
- [x] critical-care-severity
- [x] primary-care-general
