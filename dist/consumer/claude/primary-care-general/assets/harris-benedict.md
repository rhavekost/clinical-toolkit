# Harris-Benedict (BMR)

## Purpose
Estimate basal metabolic rate (BMR) using the historical Harris-Benedict equations.

## Intended Population
Adults (>=18 years). Superseded in many settings by Mifflin-St Jeor.

## Inputs
| Name | Unit | Required | Notes |
|------|------|----------|-------|
| Weight | kg | Yes | Convert lb to kg by /2.2046 |
| Height | cm | Yes | Convert inches to cm by *2.54 |
| Age | years | Yes | Use completed years |
| Sex | male/female | Yes | Biological sex used in equation |

## Algorithm (Revised 1984)
- Male: `BMR = 88.362 + (13.397 * weight_kg) + (4.799 * height_cm) - (5.677 * age)`
- Female: `BMR = 447.593 + (9.247 * weight_kg) + (3.098 * height_cm) - (4.330 * age)`

## Output
BMR (kcal/day).

## Interpretation
Use as a historical comparator or where legacy systems require it.

## Limitations
- Less accurate than modern equations in many populations.
- Not validated in pregnancy or critical illness.

## Example
Male, 40 years, 80 kg, 180 cm:
- BMR = 88.362 + (13.397*80) + (4.799*180) - (5.677*40) = 1797 kcal/day

## References
See: [references/primary-care-sources.md](../references/primary-care-sources.md)
