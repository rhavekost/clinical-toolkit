# CDC Growth Charts (2000)

## Purpose
Provide growth percentiles for US children and adolescents ages 2 to 20 years.

## Intended Population
Children and adolescents 2 to 20 years (US reference charts).

## Inputs
| Name | Unit | Required | Notes |
|------|------|----------|-------|
| Age | months or years | Yes | Use completed months for accuracy |
| Sex | male/female | Yes | Charts are sex-specific |
| Measurement | - | Yes | Stature, weight, BMI, or head circumference (age-specific) |

## Algorithm
Use LMS parameters from CDC z-score tables to compute z-scores and percentiles.

LMS z-score formula:
- If L != 0: `z = ((x / M) ^ L - 1) / (L * S)`
- If L == 0: `z = ln(x / M) / S`

Percentile is derived from the standard normal CDF of `z`.

## Data Files
Local data tables live in `skills/pediatrics-calculators/assets/data/cdc/`.
Fetch them with:

```bash
node scripts/fetch-growth-chart-data.js
```

## Output
Percentile and z-score for the selected measurement.

## Interpretation
Use clinical context, growth velocity, and serial measurements. Percentiles are descriptive, not diagnostic.

## Limitations
- Reference data based on US population 1963-1994.
- Not intended for children <2 years (use WHO standards).

## Example
Age 10 years, female, BMI percentile is calculated using the BMI-for-age chart.

## References
See: [references/pediatrics-calculators-sources.md](../references/pediatrics-calculators-sources.md)
