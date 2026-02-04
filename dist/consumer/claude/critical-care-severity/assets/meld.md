# MELD Score (Model for End-Stage Liver Disease)

## Purpose
Estimate severity of chronic liver disease and support transplant prioritization.

## Intended Population
Adults with chronic liver disease. Not intended for acute liver failure.

## Inputs
| Name | Unit | Required | Notes |
|------|------|----------|-------|
| Bilirubin | mg/dL | Yes | Total bilirubin |
| INR | - | Yes | International normalized ratio |
| Creatinine | mg/dL | Yes | Serum creatinine |

## Algorithm (Original MELD)
`MELD = 3.78 * ln(bilirubin) + 11.2 * ln(INR) + 9.57 * ln(creatinine) + 6.43`

Implementation details may vary by transplant system. Some systems apply value floors, caps, or dialysis adjustments. Follow local transplant policies and calculators.

## Output
MELD score (typically rounded to nearest integer).

## Interpretation
Higher scores indicate greater disease severity and higher short-term mortality risk. Use local transplant policies and guidelines.

## Limitations
- Not validated for acute liver failure or pediatric populations.
- Updated MELD-Na equations are used in many transplant systems.

## Example
Bilirubin 2.0, INR 1.8, creatinine 1.2:
- MELD = 3.78*ln(2.0) + 11.2*ln(1.8) + 9.57*ln(1.2) + 6.43
- MELD ~= 17 (rounded)

## References
See: [references/critical-care-sources.md](../references/critical-care-sources.md)
