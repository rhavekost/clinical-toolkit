# Pediatric Weight-Based Dosing (Historical Rules)

## Purpose
Provide historical pediatric dosing estimation rules. These are less accurate than modern weight-based dosing and should be used only as references.

## Intended Population
Children when standard mg/kg dosing is not available. Use clinical judgment and modern references whenever possible.

## Inputs
| Name | Unit | Required | Notes |
|------|------|----------|-------|
| Adult dose | mg | Yes | Standard adult dose |
| Weight | kg or lb | Yes | Convert lb to kg if needed |
| Age | years or months | Yes | Used for age-based rules |

## Algorithms

### Clark's Rule
`Child dose = Adult dose * (weight lb / 150)`

### Young's Rule
`Child dose = Adult dose * (age / (age + 12))`

### Fried's Rule (Infants)
`Child dose = Adult dose * (age in months / 150)`

### BSA Method (Preferred when BSA available)
`Child dose = Adult dose * (BSA_child / 1.73)`

## Output
Estimated pediatric dose in mg.

## Interpretation
Use modern pediatric dosing references whenever possible. These rules are historical and may be inaccurate.

## Limitations
- Not validated for modern therapeutics.
- BSA method requires accurate height and weight.

## Example
Adult dose 500 mg, child weight 30 lb:
- Clark's rule dose = 500 * (30/150) = 100 mg

## References
See: [references/pediatrics-calculators-sources.md](../references/pediatrics-calculators-sources.md)
