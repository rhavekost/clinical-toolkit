# Corrected Sodium (Hyperglycemia)

## Purpose
Adjust measured sodium for hyperglycemia.

## Intended Population
Adults with elevated serum glucose.

## Inputs
| Name | Unit | Required | Valid Range | Notes |
|------|------|----------|-------------|-------|
| Measured sodium | mEq/L | Yes | >0 | Use same lab panel |
| Glucose | mg/dL | Yes | >0 | If in mmol/L, convert by *18 |

## Algorithm (Traditional)
`Corrected Na = Na + 1.6 * ((glucose - 100) / 100)`

## Alternative Adjustment
Some studies suggest a 2.4 mEq/L correction per 100 mg/dL, especially at higher glucose levels:

`Corrected Na = Na + 2.4 * ((glucose - 100) / 100)`

## Output
Corrected sodium in mEq/L.

## Interpretation
Use for clinical context and volume assessment. Interpret alongside measured osmolality and clinical status.

## Limitations
- Correction factor varies across studies and glucose ranges.
- Avoid over-reliance in severe hyperglycemia or hyperosmolar states.

## Example Calculation
Measured Na 128 mEq/L, glucose 500 mg/dL:
- Using 1.6 factor: 134.4 mEq/L
- Using 2.4 factor: 137.6 mEq/L

## References
See: [references/renal-metabolic-sources.md](../references/renal-metabolic-sources.md)
