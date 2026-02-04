# HAS-BLED Score

## Purpose
Estimate major bleeding risk in patients with atrial fibrillation receiving anticoagulation.

## Intended Population
Adults with atrial fibrillation. Use to identify modifiable bleeding risk factors.

## Inputs
| Criterion | Points | Notes |
|-----------|--------|-------|
| Hypertension | 1 | Systolic BP >160 mmHg |
| Abnormal renal function | 1 | Dialysis, transplant, or creatinine >=2.26 mg/dL (200 umol/L) |
| Abnormal liver function | 1 | Cirrhosis or bilirubin >2x with AST/ALT/AP >3x |
| Stroke history | 1 | Prior ischemic or hemorrhagic stroke |
| Bleeding history or predisposition | 1 | Prior major bleeding or anemia |
| Labile INR | 1 | TTR <60% or unstable INRs |
| Elderly | 1 | Age >65 years |
| Drugs | 1 | Antiplatelets or NSAIDs |
| Alcohol | 1 | >=8 drinks/week or excessive use |

## Algorithm
Sum points across criteria. Abnormal renal and abnormal liver count separately. Drugs and alcohol count separately. Score range: 0 to 9.

## Output
HAS-BLED total score.

## Interpretation
Higher scores indicate higher bleeding risk. Use to address modifiable risk factors and guide monitoring intensity, not to withhold therapy by itself.

## Limitations
- Applies to AF populations studied; interpret with clinical context.
- Risk scores do not replace individualized assessment.

## Example Calculation
Male, age 72, hypertension, prior stroke, on NSAIDs, no renal or liver disease:
- Hypertension = 1
- Stroke history = 1
- Elderly = 1
- Drugs (NSAIDs) = 1
- Total score = 4

## References
See: [references/cardiovascular-risk-sources.md](../references/cardiovascular-risk-sources.md)
