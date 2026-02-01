# Clinical Toolkit

**Version:** 0.1.0
**Status:** 🚧 In Development - Scaffolding Phase
**License:** MIT

A Claude skill framework for clinical mental health screening, assessment interpretation, and documentation support.

---

## ⚠️ Important Disclaimers

**This is a clinical support tool, NOT a replacement for professional judgment:**
- Does not diagnose mental health conditions
- Does not replace comprehensive clinical assessment
- Requires interpretation by licensed mental health professionals
- All interventions must be guided by clinical judgment and applicable laws/regulations
- Users are responsible for adhering to their scope of practice and professional standards

**For crisis situations:**
- 988 Suicide & Crisis Lifeline: Call or text 988
- Crisis Text Line: Text HOME to 741741
- Emergency Services: 911

---

## Overview

The Clinical Toolkit provides structured frameworks for common clinical tasks in mental health practice:

- **Screening & Assessment:** Validated instruments for depression, anxiety, trauma, substance use, and suicide risk
- **Clinical Workflows:** Intake interview guides, treatment planning frameworks, documentation templates
- **Evidence-Based:** All instruments are validated, public domain tools with established psychometric properties
- **Measurement-Based Care:** Support for systematic outcome tracking and treatment adjustment

---

## Available Skills

### Screening & Assessment Skills

| Skill | Instruments | Use When | Status |
|-------|-------------|----------|--------|
| **depression-screening** | PHQ-9, PHQ-2 | Assessing depression severity, tracking treatment response | 🚧 Stub |
| **anxiety-screening** | GAD-7, GAD-2 | Screening for anxiety disorders, measuring anxiety severity | 🚧 Stub |
| **trauma-screening** | PC-PTSD-5, PCL-5 | PTSD screening, trauma symptom assessment | 🚧 Stub |
| **substance-screening** | AUDIT-C, DAST-10 | Alcohol/drug use screening, identifying problematic use | 🚧 Stub |
| **suicide-screening** | C-SSRS, ASQ | Suicide risk assessment, safety planning | 🚧 Stub |

### Clinical Workflow Skills

| Skill | Frameworks | Use When | Status |
|-------|------------|----------|--------|
| **intake-interview** | HEADSS, Biopsychosocial, Safety Assessment | Conducting comprehensive intake evaluations | 🚧 Stub |
| **treatment-planning** | SMART Goals, Level of Care, Measurement-Based Care | Developing treatment plans, determining care level | 🚧 Stub |
| **documentation** | SOAP Notes, Progress Notes, Treatment Plans | Writing clinical documentation | 🚧 Stub |

---

## Quick Start

### Using Skills with Claude

Skills can be invoked in multiple ways:

**1. Direct skill invocation:**
```
/depression-screening
```

**2. Natural language requests:**
```
"Help me screen this patient for depression"
"I need to administer a PHQ-9"
"Can you guide me through a suicide risk assessment?"
```

**3. Task-specific requests:**
```
"Score this GAD-7 for me: [scores]"
"Help me write SMART goals for this patient"
"Create a SOAP note from this session"
```

### Example Workflow

1. **Initial Screening:**
   ```
   "I need to screen a new patient for depression and anxiety"
   → Uses depression-screening and anxiety-screening skills
   ```

2. **Risk Assessment:**
   ```
   "The PHQ-9 Item 9 was positive - help me assess suicide risk"
   → Uses suicide-screening skill with C-SSRS or ASQ
   ```

3. **Treatment Planning:**
   ```
   "Based on these assessment results, help me create a treatment plan"
   → Uses treatment-planning skill for goals and level of care
   ```

4. **Documentation:**
   ```
   "Help me write a SOAP note for this intake session"
   → Uses documentation skill
   ```

---

## Safety Protocols

### Critical Safety Features

**Suicide Risk Screening:**
- ANY positive response to suicidal ideation items requires immediate clinical follow-up
- Skills include escalation pathways and crisis resources
- Safety protocols embedded in relevant skills

**Mandatory Reporting:**
- Skills remind clinicians of mandatory reporting obligations
- Documentation guidance for reportable concerns

**Scope of Practice:**
- All skills emphasize the need for licensed professional judgment
- Tools support but do not replace clinical assessment

### When to Seek Immediate Help

- Active suicidal ideation with plan and intent
- Homicidal ideation with identified target
- Acute psychosis with safety concerns
- Severe substance intoxication or withdrawal
- Child/elder abuse concerns

**Always err on the side of safety and seek consultation when uncertain.**

---

## Clinical Resources

### Instrument Sources

All instruments included are public domain or freely available:

- **PHQ-9/PHQ-2 & GAD-7/GAD-2:** https://www.phqscreeners.com
- **PC-PTSD-5 & PCL-5:** https://www.ptsd.va.gov
- **C-SSRS:** https://cssrs.columbia.edu
- **ASQ:** https://www.nimh.nih.gov/asq

### Reference Materials

- [Clinical References](docs/clinical-references.md) - Scoring tables and interpretation guidelines
- [Project Overview](00%20-%20Overview.md) - Detailed project background and research notes

### Professional Organizations

- American Psychological Association (APA)
- National Association of Social Workers (NASW)
- American Counseling Association (ACA)
- Substance Abuse and Mental Health Services Administration (SAMHSA)
- National Institute of Mental Health (NIMH)

---

## For Developers

### Project Structure

```
clinical-toolkit/
├── .claude-plugin/
│   └── manifest.json          # Skill registry
├── skills/                    # Skill implementations
│   ├── depression-screening/
│   ├── anxiety-screening/
│   ├── trauma-screening/
│   ├── substance-screening/
│   ├── suicide-screening/
│   ├── intake-interview/
│   ├── treatment-planning/
│   └── documentation/
├── docs/
│   ├── plans/                 # Design documents
│   └── clinical-references.md # Shared reference materials
└── README.md
```

### Skill File Structure

Each `SKILL.md` follows a standardized template:

```markdown
# [Skill Name]
## Description
## Available Assessments/Frameworks
## Usage
## Administration & Scoring
## Clinical Interpretation
## Safety Protocols
## Limitations & Considerations
## References
```

### Adding New Assessments

To add a new assessment to an existing skill:

1. **Verify it's public domain or freely available**
2. **Add to the appropriate skill's "Available Assessments" table**
3. **Include full instrument items with proper attribution**
4. **Add scoring algorithm and interpretation guidelines**
5. **Include safety protocols if applicable**
6. **Cite validation studies and sources**
7. **Update** [clinical-references.md](docs/clinical-references.md)

### Creating New Skills

1. **Create skill directory:** `skills/[skill-name]/`
2. **Create SKILL.md** using the standard template
3. **Register in manifest.json:**
   ```json
   {
     "name": "skill-name",
     "path": "skills/skill-name/SKILL.md",
     "description": "Brief description including specific tool names"
   }
   ```
4. **Include both generic and specific terms** in description for discoverability
5. **Document in clinical-references.md** if applicable

### Contributing Guidelines

**We welcome contributions that:**
- Add new validated, public domain assessment instruments
- Improve existing skill content with evidence-based information
- Enhance safety protocols and clinical guidance
- Fix errors or clarify instructions
- Add culturally-adapted versions of instruments

**Before contributing:**
- Ensure instruments are public domain or freely available
- Include proper citations and attributions
- Follow existing skill template structure
- Emphasize safety protocols where applicable
- Maintain non-judgmental, professional language
- Include evidence base (validation studies, clinical guidelines)

**Not accepted:**
- Proprietary or copyrighted instruments
- Unvalidated or experimental tools
- Content that could be harmful if misapplied
- Medical advice or prescriptive clinical decisions

### Testing & Validation

Before marking a skill as complete:
- [ ] All instrument items included and accurate
- [ ] Scoring algorithms verified against source materials
- [ ] Interpretation guidelines cite evidence base
- [ ] Safety protocols comprehensive and prominent
- [ ] Limitations clearly stated
- [ ] Citations complete and accurate
- [ ] Language professional and non-stigmatizing

---

## Development Roadmap

### Phase 1: Core Screening (Current Priority)
- [x] Project scaffolding complete
- [ ] Implement depression-screening (PHQ-9, PHQ-2)
- [ ] Implement anxiety-screening (GAD-7, GAD-2)
- [ ] Populate clinical-references.md with core instruments

### Phase 2: Expanded Assessment
- [ ] Implement trauma-screening (PC-PTSD-5, PCL-5)
- [ ] Implement substance-screening (AUDIT-C, DAST-10)
- [ ] Implement suicide-screening (C-SSRS, ASQ)

### Phase 3: Clinical Workflows
- [ ] Implement intake-interview frameworks
- [ ] Implement treatment-planning tools
- [ ] Implement documentation templates

### Future Considerations
- Culturally-adapted instrument versions
- Additional validated screening tools
- Integration with measurement-based care platforms
- Multi-language support

---

## License & Attribution

### Code License
**MIT License** - See LICENSE file for details

### Clinical Instruments
All included instruments are public domain or freely available for clinical use:

- **PHQ-9, PHQ-2, GAD-7, GAD-2:** Public domain, no copyright restrictions
- **PC-PTSD-5, PCL-5:** Public domain (VA National Center for PTSD)
- **C-SSRS:** Free with attribution (Columbia University)
- **ASQ:** Public domain (NIMH)
- **AUDIT-C:** Freely available (WHO adaptation)
- **DAST-10:** Freely available for clinical use

Proper attribution is maintained for all instruments per their respective requirements.

---

## Support & Feedback

**Issues & Questions:**
- GitHub Issues: [github.com/rhavekost/clinical-toolkit/issues](https://github.com/rhavekost/clinical-toolkit/issues)

**Professional Consultation:**
- This toolkit does not provide clinical consultation
- Seek supervision from licensed professionals for clinical questions
- Contact professional organizations for scope of practice guidance

---

## Acknowledgments

This project builds on the foundational work of researchers and clinicians who developed and validated these instruments, making them freely available to improve mental health care.

Special recognition to:
- Drs. Robert L. Spitzer, Janet B.W. Williams, and Kurt Kroenke (PHQ/GAD instruments)
- VA National Center for PTSD (trauma screening instruments)
- Columbia Lighthouse Project (C-SSRS)
- National Institute of Mental Health (ASQ)
- All researchers who conducted validation studies

---

**For questions about using these skills, see the individual skill documentation.**
**For clinical emergencies, call 988 or 911.**

---

*Last Updated: 2026-02-01*
