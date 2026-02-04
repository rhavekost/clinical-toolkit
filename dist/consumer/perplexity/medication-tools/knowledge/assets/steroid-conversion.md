# Corticosteroid Conversion (Approximate Equivalencies)

## Purpose
Estimate equivalent anti-inflammatory doses across common corticosteroids.

## Intended Population
Adults requiring conversion between systemic corticosteroids. Use caution in pediatrics and endocrine disorders.

## Inputs
| Name | Unit | Required | Notes |
|------|------|----------|-------|
| Source steroid | mg | Yes | Identify the specific agent |
| Target steroid | mg | Yes | Use equivalent dose table |

## Algorithm
Use the standard equivalency table to convert between agents.

## Common Equivalencies (Approximate)
| Steroid | Equivalent Dose (mg) |
|---------|-----------------------|
| Hydrocortisone | 20 |
| Prednisone | 5 |
| Prednisolone | 5 |
| Methylprednisolone | 4 |
| Triamcinolone | 4 |
| Dexamethasone | 0.75 |
| Betamethasone | 0.75 |

## Output
Estimated equivalent dose in mg.

## Interpretation
These equivalencies are approximate. Clinical response, mineralocorticoid potency, and duration of action must be considered.

## Limitations
- Variability in potency tables across sources.
- Conversions do not account for duration of action or mineralocorticoid activity.

## Example Calculation
Hydrocortisone 40 mg daily:
- Prednisone equivalent = 10 mg daily (20 mg HC = 5 mg prednisone)

## References
See: [references/medication-tools-sources.md](../references/medication-tools-sources.md)
