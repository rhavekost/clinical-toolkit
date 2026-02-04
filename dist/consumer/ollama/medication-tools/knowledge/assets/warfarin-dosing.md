# Warfarin Dosing Adjustment (INR-Based)

## Purpose
Support INR-based weekly warfarin dose adjustments using published protocols.

## Intended Population
Adults on stable warfarin therapy. Use local anticoagulation protocols and consider interacting medications and diet.

## Inputs
| Name | Unit | Required | Notes |
|------|------|----------|-------|
| Target INR range | - | Yes | Common targets: 2.0 to 3.0 or 2.5 to 3.5 |
| Current INR | - | Yes | Most recent validated INR |
| Total weekly dose | mg/week | Yes | Sum of all daily doses |

## Algorithm (Example Framework)
1. Determine how far INR is from target range.
2. Adjust total weekly dose by a percentage (commonly 5% to 20%) based on protocol.
3. Recheck INR per protocol and clinical context.

Example adjustment concept (do not treat as a prescriptive protocol):
- INR slightly below target: increase total weekly dose by 5% to 10%
- INR markedly below target: increase by 10% to 20%
- INR slightly above target: decrease total weekly dose by 5% to 10%
- INR markedly above target: decrease by 10% to 20% or hold doses per protocol

## Output
Suggested percent adjustment and new total weekly dose.

## Interpretation
Use local anticoagulation protocols for exact thresholds and actions. Always evaluate bleeding risk and drug interactions.

## Limitations
- Not validated for initiation dosing or unstable INRs without protocol oversight.
- Drug interactions and diet changes can significantly alter INR.

## Example Calculation
Target INR 2.0 to 3.0. Current INR 1.7. Total weekly dose 35 mg.
- Increase weekly dose by 10% (example framework)
- New weekly dose = 38.5 mg/week

## References
See: [references/medication-tools-sources.md](../references/medication-tools-sources.md)
