# Clinical Toolkit - Overview

**Status:** 🚧 Planning  
**Repository:** TBD (github.com/rhavekost/clinical-toolkit)

## Vision

A Claude skill framework for clinical mental health screening, assessment interpretation, and documentation support. Designed as a clinical support tool (not a replacement for licensed professional judgment).

## Proposed Structure

```
clinical-toolkit/
├── .claude-plugin/
│   └── manifest.json
├── skills/
│   ├── screening-assessments/
│   │   └── SKILL.md
│   ├── intake-interview/
│   │   └── SKILL.md
│   ├── treatment-planning/
│   │   └── SKILL.md
│   └── documentation/
│       └── SKILL.md
└── README.md
```

## Planned Skills

### 1. Screening Assessments (Priority: HIGH)

Validated, public domain screening instruments with scoring and interpretation guidance.

#### Depression & Mood
| Assessment | Items | Purpose | Cutoffs |
|------------|-------|---------|---------|
| **PHQ-9** | 9 | Depression severity | 5/10/15/20 (mild/moderate/mod-severe/severe) |
| **PHQ-2** | 2 | Depression screening | ≥3 triggers full PHQ-9 |

#### Anxiety
| Assessment | Items | Purpose | Cutoffs |
|------------|-------|---------|---------|
| **GAD-7** | 7 | Anxiety severity | 5/10/15 (mild/moderate/severe) |
| **GAD-2** | 2 | Anxiety screening | ≥3 triggers full GAD-7 |

#### Trauma
| Assessment | Items | Purpose | Cutoffs |
|------------|-------|---------|---------|
| **PC-PTSD-5** | 5 | PTSD screening | 3-4 (consider gender differences) |
| **PCL-5** | 20 | PTSD severity | 31-33 for probable PTSD |

#### Substance Use
| Assessment | Items | Purpose | Notes |
|------------|-------|---------|-------|
| **AUDIT-C** | 3 | Alcohol use | Cutoffs vary by gender |
| **DAST-10** | 10 | Drug use | 1-2 low, 3-5 moderate, 6-8 substantial, 9-10 severe |

#### Suicide Risk
| Assessment | Items | Purpose | Notes |
|------------|-------|---------|-------|
| **C-SSRS Screener** | 6 | Suicide risk | Columbia Protocol - ideation severity + behavior |
| **ASQ** | 4-5 | Suicide screening | NIMH tool, yes/no format |

### 2. Intake Interview Helper (Priority: MEDIUM)

Structured interview guides and frameworks:
- **HEADSS Assessment** - Adolescent psychosocial screening
- **Biopsychosocial Template** - Comprehensive intake structure
- **Safety Assessment Protocol** - Suicide/homicide risk evaluation workflow

### 3. Treatment Planning (Priority: MEDIUM)

- **SMART Goals Framework** - Behavioral health goal setting
- **Level of Care Guidance** - Matching symptoms to appropriate treatment level
- **Measurement-Based Care** - Using assessments to track progress

### 4. Clinical Documentation (Priority: LOW)

- **SOAP Note Structure** - Standard clinical note format
- **Progress Note Templates** - Session documentation
- **Treatment Plan Format** - Goals, objectives, interventions

## Persona Approach

Following the author-toolkit pattern, personas could include:
- **Screener** - Administers instruments, calculates scores
- **Interpreter** - Explains clinical significance, suggests next steps
- **Documenter** - Helps write findings into clinical notes
- **Treatment Planner** - Connects findings to care planning

## Important Considerations

### Safety Protocols
Any tool involving suicide assessment (C-SSRS, ASQ, PHQ-9 Item 9) must include:
- Clear escalation pathways
- "Any positive response requires follow-up" guidance
- Crisis resource information
- Never replace clinical judgment warnings

### Scope Limitations
The skill should clearly state:
- Support tool, not diagnostic tool
- Does not replace licensed professional assessment
- Interpretation requires clinical context
- Cultural considerations in assessment

### Copyright & Licensing
All included instruments are public domain or freely available:
- PHQ-9/PHQ-2: No copyright, free to use
- GAD-7/GAD-2: No copyright, free to use
- PC-PTSD-5/PCL-5: VA National Center for PTSD, public domain
- C-SSRS: Columbia University, free with attribution
- ASQ: NIMH, public domain

## Development Roadmap

### Phase 1: Core Screening
- [ ] Create repository structure
- [ ] Develop PHQ-9 skill with full scoring/interpretation
- [ ] Add GAD-7 with scoring/interpretation
- [ ] Create references file for cutoff tables

### Phase 2: Expanded Assessments
- [ ] Add trauma screens (PC-PTSD-5, PCL-5)
- [ ] Add substance use screens (AUDIT-C, DAST-10)
- [ ] Add suicide risk tools (C-SSRS, ASQ)

### Phase 3: Clinical Workflow
- [ ] Intake interview guides
- [ ] Treatment planning templates
- [ ] Documentation helpers

## Research Notes

### PHQ-9 Key Facts
- 88% sensitivity and 88% specificity for major depression at cutoff of 10
- Item 9 screens for suicidal ideation - ANY positive requires follow-up
- 5-point change indicates treatment response
- 10-point change indicates clinically significant improvement
- Cronbach's α = 0.89 (excellent internal consistency)

### GAD-7 Key Facts
- Cutoff of 8 optimizes sensitivity (92%) and specificity (76%)
- Also screens reasonably well for panic, social anxiety, and PTSD
- Same developers as PHQ-9 (Spitzer, Kroenke, Williams)

### PCL-5 Key Facts
- 20 items mapping to DSM-5 PTSD criteria
- 4 subscales: Re-experiencing, Avoidance, Negative cognitions/mood, Arousal
- 10-12 point change = clinically significant improvement
- Score <28 may indicate return to healthy population range

## Related Links

- [[../00 - Project Index|AI Skills Development Index]]
- [[../Author Toolkit/00 - Overview|Author Toolkit]] (for structural reference)

---
*Created: 2026-02-01*  
*Last Updated: 2026-02-01*
