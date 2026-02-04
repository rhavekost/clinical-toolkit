# Opioid Equianalgesic Conversion

## Purpose
Estimate equivalent opioid doses when converting between agents. Use for planning and documentation only.

## Intended Population
Adults on stable opioid therapy. Use caution with pediatrics, frail older adults, and opioid-naive patients.

## Inputs
| Name | Unit | Required | Notes |
|------|------|----------|-------|
| Current opioid | mg/day | Yes | Total daily dose |
| Target opioid | mg/day | Yes | Use equivalency table |
| Route | PO or IV | Yes | Conversion differs by route |

## Algorithm
1. Convert current opioid to oral morphine equivalents (OME).
2. Convert OME to the target opioid using the equianalgesic ratio.
3. Reduce the calculated target dose for incomplete cross-tolerance (commonly 25% to 50%).

## Common Equianalgesic Ratios (Approximate)
Oral daily doses equivalent to morphine 30 mg PO:

| Opioid | Approximate Equivalent Dose |
|--------|------------------------------|
| Morphine PO | 30 mg |
| Morphine IV | 10 mg |
| Oxycodone PO | 20 mg |
| Hydromorphone PO | 7.5 mg |
| Hydromorphone IV | 1.5 mg |
| Hydrocodone PO | 30 mg |
| Codeine PO | 200 mg |

## Output
Estimated target opioid dose in mg/day (before and after cross-tolerance reduction).

## Interpretation
These conversions are approximate and vary across sources. Apply conservative dosing and monitor closely.

## Limitations
- Methadone and fentanyl conversions are nonlinear and require specialist protocols.
- Equianalgesic tables are not interchangeable across sources.

## Example Calculation
Patient on morphine 30 mg PO daily converting to hydromorphone PO:
- Equianalgesic dose = 7.5 mg PO daily
- After 50% cross-tolerance reduction: 3.75 mg PO daily

## References
See: [references/medication-tools-sources.md](../references/medication-tools-sources.md)
