# Body Mass Index (BMI)

## Purpose
Classify weight status using weight and height.

## Intended Population
Adults (>=18 years). Use pediatric growth charts for children and adolescents.

## Inputs
| Name | Unit | Required | Valid Range | Notes |
|------|------|----------|-------------|-------|
| Weight | kg | Yes | >0 | Convert lb to kg by /2.2046 |
| Height | m | Yes | >0 | Convert inches to m by *0.0254 |

## Algorithm
`BMI = weight_kg / (height_m^2)`

## Output
BMI in kg/m^2.

## Interpretation (Adults)
- <18.5: Underweight
- 18.5 to 24.9: Normal weight
- 25.0 to 29.9: Overweight
- >=30.0: Obesity (Class I, II, III)

## Limitations
- Does not directly measure body fat.
- Less accurate in very muscular individuals, older adults, and pregnancy.

## Example Calculation
Weight 80 kg, height 1.75 m:
- BMI = 26.1 kg/m^2

## References
See: [references/renal-metabolic-sources.md](../references/renal-metabolic-sources.md)
