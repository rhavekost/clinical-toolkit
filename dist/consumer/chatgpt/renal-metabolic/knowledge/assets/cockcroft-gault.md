# Cockcroft-Gault (Creatinine Clearance)

## Purpose
Estimate creatinine clearance (CrCl) for drug dosing adjustments.

## Intended Population
Adults (>=18 years) with stable creatinine. Not validated for acute kidney injury.

## Inputs
| Name | Unit | Required | Valid Range | Notes |
|------|------|----------|-------------|-------|
| Age | years | Yes | >=18 | Use completed years |
| Weight | kg | Yes | >0 | Actual vs ideal vs adjusted weight depends on local policy |
| Serum creatinine | mg/dL | Yes | >0 | Standardized assay |
| Sex | male/female | Yes | - | Female factor used |

## Algorithm
`CrCl = ((140 - age) * weight_kg) / (72 * SCr)`

If female, multiply by 0.85.

## Output
Estimated creatinine clearance in mL/min.

## Interpretation
Use for medication dosing where FDA labeling or local policy specifies Cockcroft-Gault.

## Limitations
- Overestimates GFR in low muscle mass.
- Choice of weight (actual/ideal/adjusted) changes results.
- Not validated in unstable renal function.

## Example Calculation
Male, age 65, weight 70 kg, SCr 1.2 mg/dL:
- CrCl = 60.8 mL/min (rounded)

Female, same inputs:
- CrCl = 51.6 mL/min (rounded)

## References
See: [references/renal-metabolic-sources.md](../references/renal-metabolic-sources.md)
