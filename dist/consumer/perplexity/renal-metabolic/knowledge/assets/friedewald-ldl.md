# Friedewald LDL

## Purpose
Estimate LDL cholesterol from standard lipid panel values.

## Intended Population
Adults with fasting or non-fasting lipid panels when triglycerides are not markedly elevated.

## Inputs
| Name | Unit | Required | Valid Range | Notes |
|------|------|----------|-------------|-------|
| Total cholesterol (TC) | mg/dL | Yes | >0 | - |
| HDL cholesterol | mg/dL | Yes | >0 | - |
| Triglycerides (TG) | mg/dL | Yes | >0 | Invalid if TG > 400 mg/dL |

## Algorithm
`LDL = TC - HDL - (TG / 5)`

## Output
Estimated LDL-C in mg/dL.

## Interpretation
Use standard lipid guidelines and risk assessment frameworks. If TG > 400 mg/dL, use a direct LDL assay or an alternative method.

## Limitations
- Inaccurate at high TG or very low LDL.
- May underestimate LDL in certain dyslipidemias.

## Example Calculation
TC 200, HDL 50, TG 150:
- LDL = 120 mg/dL

## References
See: [references/renal-metabolic-sources.md](../references/renal-metabolic-sources.md)
