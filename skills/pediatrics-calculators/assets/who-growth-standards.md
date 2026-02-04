# WHO Growth Standards (2006)

## Purpose
Provide growth standards for children from birth to 24 months.

## Intended Population
Infants and toddlers 0 to 24 months.

## Inputs
| Name | Unit | Required | Notes |
|------|------|----------|-------|
| Age | months | Yes | Use completed months |
| Sex | male/female | Yes | Charts are sex-specific |
| Measurement | - | Yes | Length-for-age, weight-for-age, weight-for-length, head circumference |

## Algorithm
Use WHO percentile tables for lookup, or LMS parameters if available.

When using LMS parameters, apply:
- If L != 0: `z = ((x / M) ^ L - 1) / (L * S)`
- If L == 0: `z = ln(x / M) / S`

Percentile is derived from the standard normal CDF of `z`.

## Data Files
Local data tables live in `skills/pediatrics-calculators/assets/data/who/`.
Fetch them with:

```bash
node scripts/fetch-growth-chart-data.js
```

## Output
Percentile and z-score for the selected measurement.

## Interpretation
Use clinical context and serial measurements. Standards are based on optimally nourished breastfed infants.

## Limitations
- Not intended for children >24 months.
- Accurate length measurement is critical.

## Example
Age 6 months, male, weight-for-length percentile calculated using WHO tables.

## References
See: [references/pediatrics-calculators-sources.md](../references/pediatrics-calculators-sources.md)
