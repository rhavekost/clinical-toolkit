# STOPP/START v3

## Purpose
Identify potentially inappropriate medications (STOPP) and potentially omitted beneficial therapies (START) in older adults.

## Intended Population
Older adults (typically >=65 years) undergoing medication review.

## Inputs
| Name | Required | Notes |
|------|----------|-------|
| Current medication list | Yes | Include dose, frequency, indication |
| Active diagnoses and conditions | Yes | Include comorbidities and functional status |
| Relevant labs and vitals | Yes | Renal function, BP, electrolytes, etc. |
| Allergies and prior adverse reactions | Yes | - |

## Tool Structure
STOPP/START v3 is a **criteria list**, not a numeric score. It contains:
- **STOPP criteria** for potentially inappropriate medications.
- **START criteria** for potentially indicated treatments that are missing.

The v3 update includes **190 criteria total** (133 STOPP + 57 START) across multiple organ-system sections.

## Full Criteria List
See: [assets/stopp-start-v3-criteria.md](stopp-start-v3-criteria.md)

## How to Apply
1. Review the full STOPP list and flag any medications that meet criteria.
2. Review the full START list and flag any omissions that meet criteria.
3. Prioritize findings based on risk, severity, patient goals, and shared decision making.
4. Document each flagged criterion with supporting clinical data.

## Output
- List of STOPP flags (potentially inappropriate medications)
- List of START flags (potentially indicated omissions)

## Interpretation
Use findings to guide deprescribing, substitution, or initiation of therapy, considering patient preferences and clinical context.

## Limitations
- Not a substitute for individualized clinical judgment.
- Requires accurate medication and problem lists.
- Some criteria may not apply in palliative or end-of-life care.

## Licensing Note
STOPP/START v3 is published under **CC BY 4.0**, permitting reuse with attribution.

## References
See: [references/geriatrics-tools-sources.md](../references/geriatrics-tools-sources.md)
