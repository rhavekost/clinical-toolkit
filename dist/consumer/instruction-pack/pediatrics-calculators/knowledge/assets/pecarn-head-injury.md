# PECARN Head Injury Rule

## Purpose
Identify children at very low risk of clinically important traumatic brain injury (ciTBI) after minor head trauma.

## Intended Population
Children <18 years with GCS 14-15 after blunt head trauma within 24 hours. Separate rules for <2 years and >=2 years.

## Inputs (Age <2 years)
High-risk / intermediate criteria:
- Altered mental status
- Palpable skull fracture
- Non-frontal scalp hematoma
- Loss of consciousness >=5 seconds
- Severe mechanism of injury
- Not acting normally per parent

## Inputs (Age >=2 years)
High-risk / intermediate criteria:
- Altered mental status
- Signs of basilar skull fracture
- History of loss of consciousness
- History of vomiting
- Severe mechanism of injury
- Severe headache

## Algorithm
If **no** listed criteria are present for the appropriate age group, the child is at very low risk of ciTBI and CT is generally not indicated. If criteria are present, risk stratify per PECARN guidance (high vs intermediate risk).

## Output
Risk category (very low risk vs higher risk requiring consideration of CT or observation).

## Interpretation
Use with shared decision making and local pediatric head injury protocols.

## Limitations
- Not validated for penetrating trauma, bleeding disorders, or GCS <14.
- Requires accurate history and exam.

## Example
Age 3, GCS 15, normal mental status, no vomiting, no severe headache, no severe mechanism:
- Very low risk category

## References
See: [references/pediatrics-calculators-sources.md](../references/pediatrics-calculators-sources.md)
