# Holliday-Segar Maintenance Fluids (4-2-1 Rule)

## Purpose
Estimate maintenance fluid requirements in children.

## Intended Population
Pediatric patients requiring maintenance IV fluids. Use clinical judgment and adjust for comorbidities.

## Inputs
| Name | Unit | Required | Notes |
|------|------|----------|-------|
| Weight | kg | Yes | Use actual body weight |

## Algorithm
### Hourly rate (mL/hr)
- First 10 kg: 4 mL/kg/hr
- Second 10 kg: 2 mL/kg/hr
- Each kg above 20 kg: 1 mL/kg/hr

### Daily rate (mL/day)
- 100 mL/kg for first 10 kg
- 50 mL/kg for second 10 kg
- 20 mL/kg for each kg >20 kg

## Output
Estimated maintenance fluid rate per hour and per day.

## Interpretation
Adjust for clinical status (cardiac, renal, pulmonary disease, post-op, SIADH risk). Use isotonic fluids per modern guidelines when appropriate.

## Limitations
- Does not account for ongoing losses or fluid restrictions.
- Not appropriate for neonates without adjustment.

## Example
Weight 25 kg:
- First 10 kg: 40 mL/hr
- Second 10 kg: 20 mL/hr
- Remaining 5 kg: 5 mL/hr
- Total = 65 mL/hr

## References
See: [references/pediatrics-calculators-sources.md](../references/pediatrics-calculators-sources.md)
