# Framingham Risk Score (General CVD, 10-Year)

## Purpose
Estimate 10-year risk of general cardiovascular disease (CVD).

## Intended Population
Adults without known CVD. Derived from the Framingham Heart Study cohort.

## Inputs
| Name | Unit | Required | Notes |
|------|------|----------|-------|
| Age | years | Yes | Use completed years |
| Total cholesterol | mg/dL | Yes | - |
| HDL cholesterol | mg/dL | Yes | - |
| Systolic BP | mmHg | Yes | - |
| BP treatment | yes/no | Yes | Use treated vs untreated coefficients |
| Smoking | yes/no | Yes | Current smoker |
| Diabetes | yes/no | Yes | Clinician-diagnosed diabetes |
| Sex | male/female | Yes | Biological sex used in equation |

## Algorithm
1. Compute natural logs for age, total cholesterol, HDL, and SBP.
2. Sum coefficients for the selected sex.
3. Apply the risk equation:

`Risk = 1 - S0 ^ exp(sum - mean)`

## Coefficients (Primary Model)

### Men
| Term | Coefficient |
|------|-------------|
| ln(age) | 3.06117 |
| ln(TC) | 1.12370 |
| ln(HDL) | -0.93263 |
| ln(SBP) untreated | 1.93303 |
| ln(SBP) treated | 1.99881 |
| Smoker | 0.65451 |
| Diabetes | 0.57367 |
| Mean coefficient sum | 23.9802 |
| Baseline survival (S0) | 0.88936 |

### Women
| Term | Coefficient |
|------|-------------|
| ln(age) | 2.32888 |
| ln(TC) | 1.20904 |
| ln(HDL) | -0.70833 |
| ln(SBP) untreated | 2.76157 |
| ln(SBP) treated | 2.82263 |
| Smoker | 0.52873 |
| Diabetes | 0.69154 |
| Mean coefficient sum | 26.1931 |
| Baseline survival (S0) | 0.95012 |

## Output
10-year general CVD risk percentage.

## Interpretation
Use local guidelines for risk thresholds. This model is older and may differ from contemporary risk tools such as ASCVD PCE.

## Limitations
- Derived from a single cohort and may misestimate risk in other populations.
- Not intended for patients with established CVD.

## Example Calculation
Male, age 55, TC 213, HDL 50, SBP 120 untreated, nonsmoker, no diabetes:
- 10-year CVD risk = 10.2% (rounded)

## References
See: [references/cardiovascular-risk-sources.md](../references/cardiovascular-risk-sources.md)
