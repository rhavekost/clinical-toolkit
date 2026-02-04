# Naegele's Rule (Estimated Due Date)

## Purpose
Estimate expected delivery date (EDD) from last menstrual period (LMP).

## Intended Population
Pregnant individuals with a known LMP and regular 28-day cycles.

## Inputs
| Name | Unit | Required | Notes |
|------|------|----------|-------|
| LMP date | date | Yes | First day of last menstrual period |
| Cycle length | days | No | Standard formula assumes 28-day cycle |

## Algorithm
`EDD = LMP + 1 year - 3 months + 7 days`

For non-28 day cycles, adjust by adding or subtracting the cycle length difference from 28 days.

## Output
Estimated due date.

## Interpretation
This is an estimate; first-trimester ultrasound is more accurate for dating.

## Limitations
- Assumes regular 28-day cycles with ovulation at day 14.
- Less accurate than first-trimester ultrasound dating.

## Example
LMP: March 10, 2026
- EDD = December 17, 2026

## References
See: [references/primary-care-sources.md](../references/primary-care-sources.md)
