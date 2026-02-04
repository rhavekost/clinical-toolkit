# CKD-EPI 2021 (Creatinine)

## Purpose
Estimate glomerular filtration rate (eGFR) using serum creatinine without a race variable.

## Intended Population
Adults (>=18 years). Not validated for pregnancy, acute kidney injury, or extremes of body habitus.

## Inputs
| Name | Unit | Required | Valid Range | Notes |
|------|------|----------|-------------|-------|
| Serum creatinine | mg/dL | Yes | >0 | If in umol/L, convert by /88.4 |
| Age | years | Yes | >=18 | Use completed years |
| Sex | male/female | Yes | - | Biological sex used in equation |

## Algorithm
Let:
- k = 0.7 (female), 0.9 (male)
- alpha = -0.241 (female), -0.302 (male)

Equation (mL/min/1.73 m^2):

`eGFR = 142 * min(SCr/k, 1)^alpha * max(SCr/k, 1)^-1.200 * 0.9938^Age * (1.012 if female)`

## Output
eGFR in mL/min/1.73 m^2.

## Interpretation
Use standard CKD staging with clinical context and confirmatory testing when appropriate. Do not diagnose CKD from a single value.

## Limitations
- Less accurate in acute kidney injury.
- Cautions in extremes of muscle mass and diet.
- Requires standardized creatinine assay.

## Example Calculation
Female, age 55, SCr 1.0 mg/dL:
- eGFR = 66.5 mL/min/1.73 m^2 (rounded)

## References
See: [references/renal-metabolic-sources.md](../references/renal-metabolic-sources.md)
