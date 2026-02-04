# Winters Formula

## Purpose
Estimate expected respiratory compensation (pCO2) in metabolic acidosis.

## Intended Population
Patients with metabolic acidosis and stable respiratory status.

## Inputs
| Name | Unit | Required | Valid Range | Notes |
|------|------|----------|-------------|-------|
| Bicarbonate (HCO3) | mEq/L | Yes | >0 | Use serum HCO3 |

## Algorithm
`Expected pCO2 = (1.5 * HCO3) + 8 (plus/minus 2)`

## Output
Expected pCO2 in mmHg (with expected range).

## Interpretation
Compare measured pCO2 to expected range:
- Within range: appropriate compensation
- Higher: concurrent respiratory acidosis
- Lower: concurrent respiratory alkalosis

## Limitations
- Not validated in mixed or unstable respiratory disorders.
- Use clinical context and full ABG interpretation.

## Example Calculation
HCO3 12 mEq/L:
- Expected pCO2 = 26 mmHg (range 24 to 28)

## References
See: [references/renal-metabolic-sources.md](../references/renal-metabolic-sources.md)
