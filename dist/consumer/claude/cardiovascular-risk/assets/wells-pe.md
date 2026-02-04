# Wells Score (PE)

## Purpose
Estimate pretest probability of pulmonary embolism (PE).

## Intended Population
Adults with suspected pulmonary embolism.

## Inputs
| Criterion | Points | Notes |
|-----------|--------|-------|
| Clinical signs of DVT | 3 | Leg swelling and pain with palpation of deep veins |
| PE most likely diagnosis | 3 | No alternative diagnosis more likely |
| Heart rate >100 bpm | 1.5 | - |
| Immobilization >=3 days or surgery in previous 4 weeks | 1.5 | - |
| Previous DVT or PE | 1.5 | - |
| Hemoptysis | 1 | - |
| Malignancy | 1 | Treatment ongoing, within 6 months, or palliative |

## Algorithm
Sum points across criteria. Score range: 0 to 12.5.

## Output
Wells PE total score.

## Interpretation (Two-Level)
- <=4: PE unlikely
- >4: PE likely

## Limitations
- Use with D-dimer and imaging per local protocols.
- Requires clinical judgment for alternative diagnosis.

## Example Calculation
Heart rate 110, recent surgery, hemoptysis, no DVT signs, PE most likely:
- Score = 1.5 + 1.5 + 1 + 3 = 7 (PE likely)

## References
See: [references/cardiovascular-risk-sources.md](../references/cardiovascular-risk-sources.md)
