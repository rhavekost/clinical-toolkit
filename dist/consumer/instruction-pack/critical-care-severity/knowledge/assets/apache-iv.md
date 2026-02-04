# APACHE IV

## Purpose
Estimate ICU severity and predict hospital mortality and length of stay using physiologic data from the first ICU day.

## Intended Population
Adult ICU patients. Not validated for pediatric or specialized populations outside the derivation cohorts.

## Inputs (Overview)
APACHE IV requires a large set of variables collected within the first 24 hours of ICU admission, including:
- Acute physiology variables (vital signs, labs, neurologic status)
- Age and chronic health conditions
- ICU admission source and diagnostic category
- Mechanical ventilation status

## Algorithm (Overview)
APACHE IV uses multivariable regression models derived from a large ICU cohort. Calculation requires the full coefficient tables from the original publication.

## Coefficients and Data Files
This toolkit does not bundle APACHE IV coefficient tables. Store approved coefficients in:
- `skills/critical-care-severity/assets/data/apache-iv/`

Follow the schema in:
- [assets/apache-iv-coefficients-schema.md](apache-iv-coefficients-schema.md)

## Output
Predicted hospital mortality and ICU length of stay estimates.

## Interpretation
Use for population-level risk adjustment and benchmarking. Not intended for individual prognostication without clinical context.

## Limitations
- Complex data requirements; manual calculation is impractical.
- Requires validated coefficient tables and definitions.

## References
See: [references/critical-care-sources.md](../references/critical-care-sources.md)
