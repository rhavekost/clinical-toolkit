# CKD-EPI 2021 (Creatinine + Cystatin C)

## Purpose
Estimate eGFR using the combined creatinine and cystatin C equation, which improves accuracy over either marker alone.

## Intended Population
Adults (>=18 years). Not validated for pregnancy or acute kidney injury.

## Inputs
| Name | Unit | Required | Valid Range | Notes |
|------|------|----------|-------------|-------|
| Serum creatinine | mg/dL | Yes | >0 | If in umol/L, convert by /88.4 |
| Cystatin C | mg/L | Yes | >0 | Use standardized assay |
| Age | years | Yes | >=18 | Use completed years |
| Sex | male/female | Yes | - | Biological sex used in equation |

## Algorithm (Combined Equation)
Let:
- k = 0.7 (female), 0.9 (male)
- alpha = -0.219 (female), -0.144 (male)

`eGFR = 135 * min(SCr/k, 1)^alpha * max(SCr/k, 1)^-0.544 * min(Scys/0.8, 1)^-0.323 * max(Scys/0.8, 1)^-0.778 * 0.9961^Age * (0.963 if female)`

## Optional: Cystatin C Only Equation
If creatinine is unavailable, the cystatin C equation may be used:

`eGFR = 133 * min(Scys/0.8, 1)^-0.499 * max(Scys/0.8, 1)^-1.328 * 0.996^Age * (0.932 if female)`

## Output
eGFR in mL/min/1.73 m^2.

## Interpretation
Use standard CKD staging with clinical context and confirmatory testing when appropriate.

## Limitations
- Less accurate in acute kidney injury.
- Cystatin C affected by inflammation, thyroid disease, and steroid use.

## Example Calculation (Combined)
Male, age 50, SCr 1.0 mg/dL, Scys 1.0 mg/L:
- eGFR = 88.1 mL/min/1.73 m^2 (rounded)

## References
See: [references/renal-metabolic-sources.md](../references/renal-metabolic-sources.md)
