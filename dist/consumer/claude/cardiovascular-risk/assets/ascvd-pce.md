# ASCVD Pooled Cohort Equations (PCE)

## Purpose
Estimate 10-year atherosclerotic cardiovascular disease (ASCVD) risk for primary prevention.

## Intended Population
Adults ages 40 to 79 without established ASCVD. Derived for non-Hispanic White and African American populations. Use caution in other populations.

## Inputs
| Name | Unit | Required | Valid Range | Notes |
|------|------|----------|-------------|-------|
| Age | years | Yes | 40 to 79 | Use completed years |
| Sex | male/female | Yes | - | Biological sex used in equation |
| Race | White or African American | Yes | - | Use closest population with caution |
| Total cholesterol | mg/dL | Yes | >0 | - |
| HDL cholesterol | mg/dL | Yes | >0 | - |
| Systolic BP | mmHg | Yes | >0 | - |
| BP treatment | yes/no | Yes | - | Use treated vs untreated coefficients |
| Current smoker | yes/no | Yes | - | Current cigarette use |
| Diabetes | yes/no | Yes | - | Clinician-diagnosed diabetes |

## Algorithm
1. Compute natural logs for age, total cholesterol, HDL, and SBP.
2. Sum coefficients for the selected sex and race group.
3. Apply the risk equation:

`Risk = 1 - S0 ^ exp(sum - mean)`

Where S0 is baseline survival and mean is the mean coefficient sum for that group.

## Coefficients (10-year ASCVD)

### White Women
| Term | Coefficient |
|------|-------------|
| ln(age) | -29.799 |
| ln(age)^2 | 4.884 |
| ln(TC) | 13.540 |
| ln(age) * ln(TC) | -3.114 |
| ln(HDL) | -13.578 |
| ln(age) * ln(HDL) | 3.149 |
| ln(SBP) treated | 2.019 |
| ln(SBP) untreated | 1.957 |
| Smoker | 7.574 |
| ln(age) * Smoker | -1.665 |
| Diabetes | 0.661 |
| Mean coefficient sum | -29.18 |
| Baseline survival (S0) | 0.9665 |

### African American Women
| Term | Coefficient |
|------|-------------|
| ln(age) | 17.114 |
| ln(TC) | 0.940 |
| ln(HDL) | -18.920 |
| ln(age) * ln(HDL) | 4.475 |
| ln(SBP) treated | 29.291 |
| ln(age) * ln(SBP) treated | -6.432 |
| ln(SBP) untreated | 27.820 |
| ln(age) * ln(SBP) untreated | -6.087 |
| Smoker | 0.691 |
| Diabetes | 0.874 |
| Mean coefficient sum | 86.61 |
| Baseline survival (S0) | 0.9533 |

### White Men
| Term | Coefficient |
|------|-------------|
| ln(age) | 12.344 |
| ln(TC) | 11.853 |
| ln(age) * ln(TC) | -2.664 |
| ln(HDL) | -7.990 |
| ln(age) * ln(HDL) | 1.769 |
| ln(SBP) treated | 1.797 |
| ln(SBP) untreated | 1.764 |
| Smoker | 7.837 |
| ln(age) * Smoker | -1.795 |
| Diabetes | 0.658 |
| Mean coefficient sum | 61.18 |
| Baseline survival (S0) | 0.9144 |

### African American Men
| Term | Coefficient |
|------|-------------|
| ln(age) | 2.469 |
| ln(TC) | 0.302 |
| ln(HDL) | -0.307 |
| ln(SBP) treated | 1.916 |
| ln(SBP) untreated | 1.809 |
| Smoker | 0.549 |
| Diabetes | 0.645 |
| Mean coefficient sum | 19.54 |
| Baseline survival (S0) | 0.8954 |

## Output
10-year ASCVD risk percentage.

## Interpretation
Use guideline thresholds for risk categories and shared decision making. Risk estimates may under- or over-estimate in certain populations.

## Limitations
- Not validated for patients with established ASCVD.
- Requires accurate lipid values and blood pressure status.
- Use caution in populations not represented in derivation cohorts.

## Example Calculation
White male, age 55, TC 213, HDL 50, SBP 120 untreated, nonsmoker, no diabetes:
- 10-year ASCVD risk = 5.4% (rounded)

## References
See: [references/cardiovascular-risk-sources.md](../references/cardiovascular-risk-sources.md)
