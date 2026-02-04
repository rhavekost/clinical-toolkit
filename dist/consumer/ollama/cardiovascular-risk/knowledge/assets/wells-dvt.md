# Wells Score (DVT)

## Purpose
Estimate pretest probability of deep vein thrombosis (DVT).

## Intended Population
Adults with suspected lower extremity DVT.

## Inputs
| Criterion | Points | Notes |
|-----------|--------|-------|
| Active cancer | 1 | Treatment ongoing, within 6 months, or palliative |
| Paralysis, paresis, or recent immobilization of lower limb | 1 | - |
| Bedridden >=3 days or major surgery in past 12 weeks | 1 | Requires general or regional anesthesia |
| Localized tenderness along deep venous system | 1 | - |
| Entire leg swollen | 1 | - |
| Calf swelling >=3 cm | 1 | Measured 10 cm below tibial tuberosity |
| Pitting edema in symptomatic leg | 1 | - |
| Collateral superficial veins (non-varicose) | 1 | - |
| Alternative diagnosis at least as likely as DVT | -2 | - |

## Algorithm
Sum points across criteria. Score range: -2 to 8.

## Output
Wells DVT total score.

## Interpretation (Two-Level)
- <=1: DVT unlikely
- >=2: DVT likely

## Limitations
- Use with D-dimer and imaging per local protocols.
- Requires clinical judgment for alternative diagnosis.

## Example Calculation
Active cancer, entire leg swollen, calf swelling >=3 cm, no alternative diagnosis:
- Score = 1 + 1 + 1 = 3 (DVT likely)

## References
See: [references/cardiovascular-risk-sources.md](../references/cardiovascular-risk-sources.md)
