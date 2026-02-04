# HEART Score

## Purpose
Risk stratify chest pain patients for short-term major adverse cardiac events (MACE).

## Intended Population
Adults presenting with chest pain or possible acute coronary syndrome.

## Inputs
Each category scores 0, 1, or 2 points.

| Category | 0 Points | 1 Point | 2 Points |
|----------|----------|---------|----------|
| History | Slightly suspicious | Moderately suspicious | Highly suspicious |
| ECG | Normal | Nonspecific repolarization changes | Significant ST depression |
| Age | <45 years | 45 to 64 years | >=65 years |
| Risk factors | None | 1 to 2 risk factors | >=3 risk factors or known atherosclerotic disease |
| Troponin | <= normal limit | 1 to 3x normal limit | >3x normal limit |

Common risk factors: hypertension, hyperlipidemia, diabetes, smoking, obesity, or family history of CAD.

## Algorithm
Sum points across all categories. Score range: 0 to 10.

## Output
HEART total score.

## Interpretation
- 0 to 3: low risk
- 4 to 6: intermediate risk
- 7 to 10: high risk

## Limitations
- Requires clinical judgment for history and ECG categories.
- Troponin interpretation depends on assay and reference ranges.

## Example Calculation
Age 58, moderately suspicious history, nonspecific ECG changes, 2 risk factors, troponin normal:
- History 1 + ECG 1 + Age 1 + Risk factors 1 + Troponin 0 = 4 (intermediate risk)

## References
See: [references/cardiovascular-risk-sources.md](../references/cardiovascular-risk-sources.md)
