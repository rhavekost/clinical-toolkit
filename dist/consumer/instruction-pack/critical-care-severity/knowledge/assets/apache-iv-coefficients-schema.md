# APACHE IV Coefficients Schema

## Purpose
Define the expected structure for APACHE IV coefficient tables and variable mappings used to calculate predicted mortality and ICU length of stay. This toolkit does not ship coefficients; supply them from the original source material under its terms.

## Recommended File Format
Store coefficients in JSON for easy parsing and versioning.

## Required Sections
### Metadata
Include enough metadata to trace provenance and applicability:
- Model name and version
- Full citation for the source publication
- Release or publication date
- Population description and exclusions
- License or usage terms

### Variable Dictionary
Define every variable referenced by the model:
- `id`: stable identifier used by coefficients
- `label`: human-readable name
- `type`: continuous or categorical
- `unit`: measurement unit (if applicable)
- `validRange`: accepted numeric range (if applicable)
- `missingHandling`: default strategy for missing data
- `categories`: for categorical variables, map category labels to encoded values

### Model Coefficients
For each target model (mortality, ICU length of stay), include:
- Intercept term
- Coefficient entries with `variableId`, `value`, `transform` (e.g., linear, log, spline), `category` (for categorical terms), and `condition` (optional, for interaction terms)

## Validation Checklist
- Reproduce at least one worked example from the publication or validation dataset.
- Confirm units and variable ranges match the original definitions.
- Document any adaptations or exclusions.

## References
See: [references/critical-care-sources.md](../references/critical-care-sources.md)
