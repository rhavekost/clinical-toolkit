# Corrected Calcium

## Purpose
Adjust total serum calcium for hypoalbuminemia.

## Intended Population
Adults with low albumin when ionized calcium is not available.

## Inputs
| Name | Unit | Required | Valid Range | Notes |
|------|------|----------|-------------|-------|
| Measured total calcium | mg/dL | Yes | >0 | Use same lab assay |
| Albumin | g/dL | Yes | >0 | Typical reference ~3.5 to 5.0 |

## Algorithm
`Corrected Ca = measured Ca + 0.8 * (4.0 - albumin)`

## Output
Corrected total calcium in mg/dL.

## Interpretation
Use as a screening adjustment only. Ionized calcium is preferred when available.

## Limitations
- Less accurate in critical illness, CKD, or abnormal protein states.
- Do not substitute for ionized calcium when clinical decisions are high risk.

## Example Calculation
Measured Ca 8.0 mg/dL, albumin 2.5 g/dL:
- Corrected Ca = 9.2 mg/dL

## References
See: [references/renal-metabolic-sources.md](../references/renal-metabolic-sources.md)
