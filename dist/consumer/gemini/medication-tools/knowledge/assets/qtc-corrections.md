# QTc Correction Formulas

## Purpose
Correct the QT interval for heart rate to assess QT prolongation risk.

## Intended Population
Adults with ECG data. Use caution in pediatric populations and when HR is extreme.

## Inputs
| Name | Unit | Required | Notes |
|------|------|----------|-------|
| QT | seconds | Yes | Convert from ms to seconds if needed |
| Heart rate | bpm | Yes | Use resting HR |
| RR interval | seconds | Yes | RR = 60 / HR |

## Algorithm
Use one of the following formulas (QT and RR in seconds unless noted):

- Bazett: `QTc = QT / sqrt(RR)`
- Fridericia: `QTc = QT / RR^(1/3)`
- Framingham: `QTc = QT + 0.154 * (1 - RR)`
- Hodges: `QTc = QT + 0.00175 * (HR - 60)`
- Rautaharju: `QTc = QT * (120 + HR) / 180`

## Output
Corrected QT interval in seconds (convert to ms by *1000 if needed).

## Interpretation
Bazett can overcorrect at high HR and undercorrect at low HR. Many guidelines prefer Fridericia or Framingham for clinical trials.

## Limitations
- Accuracy varies at extreme heart rates.
- Use the same formula consistently for longitudinal tracking.

## Example Calculation
QT 0.40 s, HR 80 bpm (RR 0.75 s):
- Bazett: 0.462 s (462 ms)
- Fridericia: 0.440 s (440 ms)
- Framingham: 0.439 s (439 ms)
- Hodges: 0.435 s (435 ms)
- Rautaharju: 0.444 s (444 ms)

## References
See: [references/medication-tools-sources.md](../references/medication-tools-sources.md)
