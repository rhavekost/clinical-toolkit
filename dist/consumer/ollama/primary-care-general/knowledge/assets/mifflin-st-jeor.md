# Mifflin-St Jeor (BMR)

## Purpose
Estimate basal metabolic rate (BMR) and total daily energy expenditure (TDEE).

## Intended Population
Adults (>=18 years). Not validated for pregnancy, elite athletes, or severe illness.

## Inputs
| Name | Unit | Required | Notes |
|------|------|----------|-------|
| Weight | kg | Yes | Convert lb to kg by /2.2046 |
| Height | cm | Yes | Convert inches to cm by *2.54 |
| Age | years | Yes | Use completed years |
| Sex | male/female | Yes | Biological sex used in equation |
| Activity factor | multiplier | No | Used to estimate TDEE |

## Algorithm
### BMR
- Male: `BMR = (10 * weight_kg) + (6.25 * height_cm) - (5 * age) + 5`
- Female: `BMR = (10 * weight_kg) + (6.25 * height_cm) - (5 * age) - 161`

### TDEE
`TDEE = BMR * activity_factor`

Common activity factors:
- 1.2 sedentary
- 1.375 light activity
- 1.55 moderate activity
- 1.725 very active
- 1.9 extra active

## Output
BMR (kcal/day) and TDEE (kcal/day).

## Interpretation
Estimates are approximations. Adjust based on clinical goals, metabolic conditions, and observed weight changes.

## Limitations
- Less accurate at extremes of body composition.
- Not validated in pregnancy or critical illness.

## Example
Female, 35 years, 70 kg, 165 cm:
- BMR = (10*70) + (6.25*165) - (5*35) - 161 = 1395 kcal/day
- TDEE (moderate 1.55) = 2162 kcal/day

## References
See: [references/primary-care-sources.md](../references/primary-care-sources.md)
