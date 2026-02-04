# Anion Gap

## Purpose
Evaluate metabolic acidosis and identify unmeasured anions.

## Intended Population
Adults with metabolic acidosis or unexplained electrolyte disturbances.

## Inputs
| Name | Unit | Required | Valid Range | Notes |
|------|------|----------|-------------|-------|
| Sodium (Na) | mEq/L | Yes | >0 | Use same lab panel |
| Chloride (Cl) | mEq/L | Yes | >0 | - |
| Bicarbonate (HCO3) | mEq/L | Yes | >0 | Use serum CO2 if equivalent |
| Albumin (optional) | g/dL | No | >0 | For albumin correction |

## Algorithm
Standard anion gap:

`AG = Na - (Cl + HCO3)`

Albumin-corrected anion gap (if albumin provided):

`Corrected AG = AG + 2.5 * (4.0 - albumin)`

## Output
Anion gap in mEq/L.

## Interpretation
Reference ranges vary by lab and analyzer. Use local reference ranges and clinical context.

## Limitations
- Albumin correction is approximate.
- May be affected by lab methodology and unmeasured ions.

## Example Calculation
Na 140, Cl 103, HCO3 24:
- AG = 13 mEq/L

## References
See: [references/renal-metabolic-sources.md](../references/renal-metabolic-sources.md)
