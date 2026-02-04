# CURB-65 Score

## Purpose
Assess pneumonia severity and short-term mortality risk.

## Intended Population
Adults with community-acquired pneumonia.

## Inputs
| Criterion | Points | Notes |
|-----------|--------|-------|
| Confusion | 1 | New disorientation to person, place, or time |
| Urea | 1 | BUN >20 mg/dL (7 mmol/L) |
| Respiratory rate | 1 | >=30/min |
| Blood pressure | 1 | SBP <90 mmHg or DBP <=60 mmHg |
| Age | 1 | >=65 years |

## Algorithm
Sum points across criteria. Score range: 0 to 5.

## Output
CURB-65 total score.

## Interpretation
Higher scores indicate higher mortality risk. Use local guidelines to determine disposition and treatment setting.

## Limitations
- Designed for adult CAP; not validated in children.
- Does not replace clinical judgment or other severity markers.

## Example Calculation
Age 72, BUN 24 mg/dL, RR 28, SBP 118, no confusion:
- Age 1 + Urea 1 = 2

## References
See: [references/cardiovascular-risk-sources.md](../references/cardiovascular-risk-sources.md)
