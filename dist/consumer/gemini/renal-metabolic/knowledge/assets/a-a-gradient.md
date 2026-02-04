# A-a Gradient

## Purpose
Estimate the alveolar-arterial oxygen gradient to evaluate oxygenation and V/Q mismatch.

## Intended Population
Adults undergoing ABG evaluation; interpret with age and clinical context.

## Inputs
| Name | Unit | Required | Valid Range | Notes |
|------|------|----------|-------------|-------|
| FiO2 | fraction | Yes | 0.21 to 1.0 | 0.21 for room air |
| Barometric pressure (Patm) | mmHg | Yes | >0 | 760 mmHg at sea level |
| Water vapor pressure (PH2O) | mmHg | Yes | 47 | Use 47 at 37 C |
| PaCO2 | mmHg | Yes | >0 | From ABG |
| PaO2 | mmHg | Yes | >0 | From ABG |
| Respiratory quotient (RQ) | - | No | 0.8 | Default 0.8 |

## Algorithm
1. Alveolar oxygen:

`PAO2 = FiO2 * (Patm - PH2O) - (PaCO2 / RQ)`

2. A-a gradient:

`A-a = PAO2 - PaO2`

## Output
A-a gradient in mmHg.

## Interpretation
Normal A-a gradient increases with age. Use age-adjusted expectations and clinical context.

## Limitations
- Requires accurate FiO2 and ABG.
- Altitude and RQ assumptions affect results.

## Example Calculation
Room air: FiO2 0.21, Patm 760, PH2O 47, PaCO2 40, PaO2 80, RQ 0.8:
- PAO2 = 99.7 mmHg
- A-a = 19.7 mmHg

## References
See: [references/renal-metabolic-sources.md](../references/renal-metabolic-sources.md)
