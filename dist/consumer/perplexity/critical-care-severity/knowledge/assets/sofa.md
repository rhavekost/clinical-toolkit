# SOFA Score (Sequential Organ Failure Assessment)

## Purpose
Assess organ dysfunction severity in critically ill patients.

## Intended Population
ICU or hospitalized adults with suspected or confirmed organ dysfunction (e.g., sepsis).

## Inputs
Six organ systems scored 0 to 4 (worst values in prior 24 hours):

### Respiratory (PaO2/FiO2)
- 0: >=400
- 1: <400
- 2: <300
- 3: <200 with respiratory support
- 4: <100 with respiratory support

### Coagulation (Platelets x10^3/uL)
- 0: >=150
- 1: <150
- 2: <100
- 3: <50
- 4: <20

### Liver (Bilirubin mg/dL)
- 0: <1.2
- 1: 1.2 to 1.9
- 2: 2.0 to 5.9
- 3: 6.0 to 11.9
- 4: >=12.0

### Cardiovascular (MAP or vasopressors)
- 0: MAP >=70 mmHg
- 1: MAP <70
- 2: Dopamine <=5 or dobutamine (any dose)
- 3: Dopamine >5 or epinephrine <=0.1 or norepinephrine <=0.1
- 4: Dopamine >15 or epinephrine >0.1 or norepinephrine >0.1

### CNS (GCS)
- 0: 15
- 1: 13 to 14
- 2: 10 to 12
- 3: 6 to 9
- 4: <6

### Renal (Creatinine mg/dL or urine output)
- 0: <1.2
- 1: 1.2 to 1.9
- 2: 2.0 to 3.4
- 3: 3.5 to 4.9 or urine output <500 mL/day
- 4: >=5.0 or urine output <200 mL/day

## Algorithm
Sum points across the six systems. Total range: 0 to 24.

## Output
SOFA total score.

## Interpretation
Higher scores indicate greater organ dysfunction and higher mortality risk. Use with clinical context and sepsis protocols.

## Limitations
- Requires accurate, recent lab and physiologic data.
- Vasopressor dosing depends on local units and timing.

## Example
Resp 2 + Coag 1 + Liver 0 + CV 1 + CNS 2 + Renal 1 = 7

## References
See: [references/critical-care-sources.md](../references/critical-care-sources.md)
