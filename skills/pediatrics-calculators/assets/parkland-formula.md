# Parkland Formula (Burn Resuscitation)

## Purpose
Estimate initial fluid resuscitation volume after burn injury.

## Intended Population
Burn patients with >10% total body surface area (TBSA) involvement. Use clinical judgment and adjust for inhalation injury and comorbidities.

## Inputs
| Name | Unit | Required | Notes |
|------|------|----------|-------|
| Weight | kg | Yes | Actual body weight |
| %TBSA burned | % | Yes | Use rule of nines or Lund-Browder chart |
| Age group | pediatric/adult | Yes | Pediatric formula may differ |

## Algorithm
### Standard Parkland (Adults)
`Total volume (24h) = 4 mL * weight_kg * %TBSA`
- Give 50% in first 8 hours from time of burn.
- Give remaining 50% over next 16 hours.

### Pediatric modification (common)
`Total volume (24h) = 3 mL * weight_kg * %TBSA + maintenance fluids`

## Output
Total 24-hour fluid volume and first 8-hour volume.

## Interpretation
Adjust based on urine output, hemodynamics, and ongoing losses. Use burn center protocols when available.

## Limitations
- Formula provides initial estimate only.
- Over-resuscitation risks are significant.

## Example
Adult, 70 kg, 20% TBSA:
- Total = 4 * 70 * 20 = 5600 mL in 24 hours
- First 8 hours: 2800 mL
- Next 16 hours: 2800 mL

## References
See: [references/pediatrics-calculators-sources.md](../references/pediatrics-calculators-sources.md)
