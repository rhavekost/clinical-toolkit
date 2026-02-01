# Assets/References Structure Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Implement the assets/references structure for clinical-toolkit as defined in the approved design document.

**Architecture:** Create modular assets/ and references/ subdirectories within screening skills, populate with clinical content, establish shared docs/references/ for universal guidance, and update SKILL.md files to embedded essentials format.

**Tech Stack:** Markdown documentation, file system organization

**Design Reference:** `docs/plans/2026-02-01-assets-references-structure-design.md`

---

## Task 1: Create Shared References Infrastructure

**Files:**
- Create: `docs/references/crisis-protocols.md`
- Create: `docs/references/referral-guidelines.md`
- Create: `docs/references/documentation-standards.md`
- Create: `docs/references/legal-ethical-guidelines.md`

**Step 1: Create docs/references/ directory**

Run: `mkdir -p /Users/rhavekost/Projects/rhavekost/clinical-toolkit/docs/references`

**Step 2: Write crisis-protocols.md**

Create file with universal crisis response procedures that apply across suicide-screening, depression-screening (Item 9), and trauma-screening.

Content structure:
- Immediate response protocols
- Safety assessment procedures
- Documentation requirements
- Crisis resources (988, Crisis Text Line, 911)
- Escalation pathways

**Step 3: Write referral-guidelines.md**

Create file with cross-domain referral guidance.

Content structure:
- When to refer for specialty care
- Levels of care (outpatient, IOP, PHP, inpatient)
- Referral documentation requirements
- Common referral resources

**Step 4: Write documentation-standards.md**

Create file with clinical documentation standards.

Content structure:
- SOAP note format
- Progress note requirements
- Assessment documentation
- Treatment plan documentation

**Step 5: Write legal-ethical-guidelines.md**

Create file with HIPAA, informed consent, and professional standards.

Content structure:
- HIPAA compliance essentials
- Informed consent requirements
- Mandatory reporting obligations
- Professional boundaries

**Step 6: Commit shared infrastructure**

```bash
git add docs/references/
git commit -m "feat: add shared clinical reference infrastructure

Creates universal guidance files for crisis protocols, referrals,
documentation standards, and legal/ethical guidelines.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 2: Implement Depression-Screening Structure

**Files:**
- Create: `skills/depression-screening/assets/phq-9.md`
- Create: `skills/depression-screening/assets/phq-2.md`
- Create: `skills/depression-screening/references/severity-levels.md`
- Create: `skills/depression-screening/references/screening-comparison.md`
- Create: `skills/depression-screening/references/item-9-safety-protocol.md`
- Create: `skills/depression-screening/references/clinical-decision-trees.md`
- Modify: `skills/depression-screening/SKILL.md`

**Step 1: Create assets directory**

Run: `mkdir -p /Users/rhavekost/Projects/rhavekost/clinical-toolkit/skills/depression-screening/assets`

**Step 2: Create references directory**

Run: `mkdir -p /Users/rhavekost/Projects/rhavekost/clinical-toolkit/skills/depression-screening/references`

**Step 3: Write phq-9.md**

Create complete PHQ-9 assessment file following the template:

```markdown
# Patient Health Questionnaire-9 (PHQ-9)

## Overview
- **Items:** 9
- **Time:** 2-3 minutes
- **Purpose:** Assess depression severity aligned with DSM criteria
- **Population:** Adults (18+), validated in primary care and mental health settings

## Items

Over the last 2 weeks, how often have you been bothered by any of the following problems?

**Response Scale:**
0 = Not at all
1 = Several days
2 = More than half the days
3 = Nearly every day

1. Little interest or pleasure in doing things
2. Feeling down, depressed, or hopeless
3. Trouble falling or staying asleep, or sleeping too much
4. Feeling tired or having little energy
5. Poor appetite or overeating
6. Feeling bad about yourself — or that you are a failure or have let yourself or your family down
7. Trouble concentrating on things, such as reading the newspaper or watching television
8. Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual
9. Thoughts that you would be better off dead or of hurting yourself in some way

**⚠️ CRITICAL: Item 9 screens for suicidal ideation. ANY score > 0 requires immediate clinical follow-up. See references/item-9-safety-protocol.md and docs/references/crisis-protocols.md**

## Scoring

**Algorithm:**
1. Sum responses to all 9 items
2. Total score range: 0-27
3. Higher scores indicate greater depression severity

**Interpretation:**
- 0-4: Minimal depression
- 5-9: Mild depression
- 10-14: Moderate depression
- 15-19: Moderately severe depression
- 20-27: Severe depression

For detailed clinical interpretation and treatment recommendations, see `references/severity-levels.md` and `references/clinical-decision-trees.md`

**Clinical Significance:**
- Cutoff ≥10: 88% sensitivity and 88% specificity for major depression
- 5-point change: Indicates treatment response
- 10-point change: Clinically significant improvement

## Documentation Template

**Assessment:** PHQ-9 (Patient Health Questionnaire-9)
**Date:** [Date administered]
**Patient:** [Name/ID]

**Item Responses:**
1. Little interest or pleasure: [0-3]
2. Feeling down, depressed, hopeless: [0-3]
3. Sleep problems: [0-3]
4. Fatigue: [0-3]
5. Appetite changes: [0-3]
6. Negative self-perception: [0-3]
7. Concentration problems: [0-3]
8. Psychomotor changes: [0-3]
9. Suicidal ideation: [0-3] **⚠️ If > 0, document safety assessment**

**Total Score:** [0-27]
**Severity:** [Minimal/Mild/Moderate/Moderately Severe/Severe]

**Clinical Interpretation:**
[Brief interpretation based on score and item pattern]

**Safety Assessment:**
[Required if Item 9 > 0: Document safety plan, risk level, interventions]

**Recommendations:**
[Treatment recommendations based on severity - see references/clinical-decision-trees.md]

**Follow-up:**
[Recommended timing for reassessment]
```

**Step 4: Write phq-2.md**

Create complete PHQ-2 assessment file:

```markdown
# Patient Health Questionnaire-2 (PHQ-2)

## Overview
- **Items:** 2
- **Time:** < 1 minute
- **Purpose:** Brief depression screening (first 2 items of PHQ-9)
- **Population:** Adults (18+), useful for time-limited settings

## Items

Over the last 2 weeks, how often have you been bothered by any of the following problems?

**Response Scale:**
0 = Not at all
1 = Several days
2 = More than half the days
3 = Nearly every day

1. Little interest or pleasure in doing things
2. Feeling down, depressed, or hopeless

## Scoring

**Algorithm:**
1. Sum responses to both items
2. Total score range: 0-6

**Interpretation:**
- 0-2: Negative screen
- ≥3: Positive screen - administer full PHQ-9 for comprehensive assessment

For detailed guidance on when to use PHQ-2 vs PHQ-9, see `references/screening-comparison.md`

**Clinical Significance:**
- High sensitivity for detecting depression
- Positive screen (≥3) warrants full PHQ-9
- Used for initial screening in busy clinical settings

## Documentation Template

**Assessment:** PHQ-2 (Patient Health Questionnaire-2)
**Date:** [Date administered]
**Patient:** [Name/ID]

**Item Responses:**
1. Little interest or pleasure: [0-3]
2. Feeling down, depressed, hopeless: [0-3]

**Total Score:** [0-6]
**Result:** [Negative screen (0-2) / Positive screen (≥3)]

**Recommendations:**
- If score ≥3: Administer full PHQ-9 for comprehensive assessment
- If score 0-2: Monitor, reassess as indicated

**Follow-up:**
[Recommended timing for rescreening]
```

**Step 5: Write severity-levels.md**

Create reference file with all depression severity interpretations:

```markdown
# Depression Severity Levels

This reference provides detailed interpretation of depression severity across PHQ-9 and PHQ-2 screening tools.

## PHQ-9 Severity Levels

### Minimal Depression (0-4)
**Clinical Meaning:** No or minimal depression symptoms. Within normal range.

**Typical Presentation:**
- Rare or absent depressive symptoms
- Minimal functional impairment
- No treatment typically indicated

**Recommended Actions:**
- Monitor during routine care
- Provide psychoeducation about depression
- Reassess if symptoms change

### Mild Depression (5-9)
**Clinical Meaning:** Mild depression symptoms with minimal functional impairment.

**Typical Presentation:**
- Some depressive symptoms present
- Mild impact on daily functioning
- Patient often continues normal activities with effort

**Recommended Actions:**
- Watchful waiting with close follow-up
- Behavioral activation and self-care strategies
- Consider brief counseling or support
- Reassess in 2-4 weeks

### Moderate Depression (10-14)
**Clinical Meaning:** Moderate depression symptoms with noticeable functional impairment. Meets threshold for major depression diagnosis (88% sensitivity/specificity at cutoff of 10).

**Typical Presentation:**
- Clear depressive symptoms
- Functional impairment in work, social, or personal domains
- Patient struggles with daily activities

**Recommended Actions:**
- Active treatment plan required
- Consider psychotherapy and/or medication
- Regular monitoring (every 2-4 weeks)
- Assess safety and support systems

### Moderately Severe Depression (15-19)
**Clinical Meaning:** Moderately severe depression with significant functional impairment.

**Typical Presentation:**
- Pervasive depressive symptoms
- Significant impairment in multiple life domains
- May have difficulty completing routine tasks

**Recommended Actions:**
- Active treatment strongly recommended
- Combination therapy (medication + psychotherapy) often indicated
- Close monitoring (weekly or biweekly)
- Safety assessment at each contact
- Consider referral for specialty mental health care

### Severe Depression (20-27)
**Clinical Meaning:** Severe depression with marked functional impairment. High risk for complications.

**Typical Presentation:**
- Severe, pervasive symptoms
- Marked impairment in all life domains
- May include psychotic features
- High suicide risk

**Recommended Actions:**
- Immediate treatment required
- Specialty mental health referral
- Close monitoring (at least weekly)
- Thorough safety assessment
- Consider higher level of care (IOP, PHP, inpatient) if:
  - Suicidal ideation present
  - Psychotic features
  - Inability to care for self
  - Inadequate outpatient response

## PHQ-2 Interpretation

### Negative Screen (0-2)
**Meaning:** Low probability of depression.

**Actions:**
- Routine monitoring during regular care
- Reassess if clinical presentation changes
- No PHQ-9 needed unless clinical concern

### Positive Screen (≥3)
**Meaning:** Elevated depression symptoms warrant further assessment.

**Actions:**
- Administer full PHQ-9
- Do not diagnose based on PHQ-2 alone
- PHQ-2 is a screener, not diagnostic tool

## Treatment Response Monitoring

### Minimal Response (< 5-point decrease)
- Reassess treatment plan
- Consider treatment intensification
- Rule out barriers to treatment adherence

### Partial Response (5-9 point decrease)
- Continue current treatment
- Monitor progress closely
- Consider augmentation if plateaued

### Good Response (≥10-point decrease)
- Clinically significant improvement
- Continue current treatment
- Plan for maintenance and relapse prevention

## Special Considerations

### Item 9 Suicidal Ideation
Regardless of total score, any positive response (>0) on Item 9 requires immediate safety assessment. See `item-9-safety-protocol.md` and `../../docs/references/crisis-protocols.md`

### Cultural Factors
- Somatic symptoms (items 3, 4, 5, 8) may be more prominent in some cultural groups
- Expression of mood symptoms varies across cultures
- Use culturally validated versions when available

### Medical Comorbidity
- Physical illness can elevate somatic symptom scores
- Chronic pain, sleep disorders, and fatigue can inflate scores
- Interpret in context of medical conditions

## References

Kroenke K, Spitzer RL, Williams JB. The PHQ-9: validity of a brief depression severity measure. J Gen Intern Med. 2001;16(9):606-613.
```

**Step 6: Write screening-comparison.md**

**Step 7: Write item-9-safety-protocol.md**

**Step 8: Write clinical-decision-trees.md**

**Step 9: Update SKILL.md to embedded essentials format**

Update existing SKILL.md with quick reference tables and workflow delegation to assets/references files.

**Step 10: Verify all file links work**

Test that:
- SKILL.md references to assets/ work
- SKILL.md references to references/ work
- References to docs/references/ work

**Step 11: Commit depression-screening implementation**

```bash
git add skills/depression-screening/
git commit -m "feat: implement assets/references structure for depression-screening

- Add PHQ-9 and PHQ-2 complete assessment files
- Create topic-based references (severity, comparison, safety, decision trees)
- Update SKILL.md to embedded essentials format
- Add workflow delegation to modular files

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 3: Implement Anxiety-Screening Structure

**Files:**
- Create: `skills/anxiety-screening/assets/gad-7.md`
- Create: `skills/anxiety-screening/assets/gad-2.md`
- Create: `skills/anxiety-screening/references/severity-levels.md`
- Create: `skills/anxiety-screening/references/screening-comparison.md`
- Create: `skills/anxiety-screening/references/clinical-decision-trees.md`
- Modify: `skills/anxiety-screening/SKILL.md`

**Step 1: Create assets and references directories**

Run: `mkdir -p /Users/rhavekost/Projects/rhavekost/clinical-toolkit/skills/anxiety-screening/{assets,references}`

**Step 2: Write gad-7.md**

Follow assessment template structure. Include 7 anxiety items, scoring algorithm (0-21 range), severity levels (minimal 0-4, mild 5-9, moderate 10-14, severe 15-21).

**Step 3: Write gad-2.md**

First 2 items of GAD-7, cutoff ≥3 triggers full GAD-7.

**Step 4: Write severity-levels.md**

Anxiety severity interpretations for GAD-7 and GAD-2.

**Step 5: Write screening-comparison.md**

When to use GAD-2 vs GAD-7.

**Step 6: Write clinical-decision-trees.md**

Treatment recommendations by anxiety severity.

**Step 7: Update SKILL.md**

Embedded essentials format with quick reference tables.

**Step 8: Commit anxiety-screening implementation**

```bash
git add skills/anxiety-screening/
git commit -m "feat: implement assets/references structure for anxiety-screening

- Add GAD-7 and GAD-2 complete assessment files
- Create topic-based references for anxiety screening
- Update SKILL.md to embedded essentials format

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 4: Implement Suicide-Screening Structure

**Files:**
- Create: `skills/suicide-screening/assets/c-ssrs.md`
- Create: `skills/suicide-screening/assets/asq.md`
- Create: `skills/suicide-screening/references/risk-levels.md`
- Create: `skills/suicide-screening/references/screening-comparison.md`
- Create: `skills/suicide-screening/references/safety-planning.md`
- Create: `skills/suicide-screening/references/risk-assessment-protocol.md`
- Modify: `skills/suicide-screening/SKILL.md`

**Step 1: Create assets and references directories**

Run: `mkdir -p /Users/rhavekost/Projects/rhavekost/clinical-toolkit/skills/suicide-screening/{assets,references}`

**Step 2: Write c-ssrs.md**

Columbia-Suicide Severity Rating Scale. Include all items, scoring, risk categorization.

**Step 3: Write asq.md**

Ask Suicide-Screening Questions (brief 4-item screener).

**Step 4: Write risk-levels.md**

Suicide risk categorization (low, moderate, high, imminent).

**Step 5: Write screening-comparison.md**

When to use ASQ vs C-SSRS.

**Step 6: Write safety-planning.md**

Safety plan template and procedures.

**Step 7: Write risk-assessment-protocol.md**

Comprehensive risk assessment protocol. Heavy cross-references to docs/references/crisis-protocols.md.

**Step 8: Update SKILL.md**

Embedded essentials with prominent safety warnings.

**Step 9: Commit suicide-screening implementation**

```bash
git add skills/suicide-screening/
git commit -m "feat: implement assets/references structure for suicide-screening

- Add C-SSRS and ASQ complete assessment files
- Create critical safety references (risk levels, safety planning, protocols)
- Update SKILL.md with prominent safety warnings
- Cross-reference docs/references/crisis-protocols.md

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 5: Implement Trauma-Screening Structure

**Files:**
- Create: `skills/trauma-screening/assets/pc-ptsd-5.md`
- Create: `skills/trauma-screening/assets/pcl-5.md`
- Create: `skills/trauma-screening/references/severity-levels.md`
- Create: `skills/trauma-screening/references/screening-comparison.md`
- Create: `skills/trauma-screening/references/clinical-decision-trees.md`
- Create: `skills/trauma-screening/references/trauma-informed-approach.md`
- Modify: `skills/trauma-screening/SKILL.md`

**Step 1: Create assets and references directories**

Run: `mkdir -p /Users/rhavekost/Projects/rhavekost/clinical-toolkit/skills/trauma-screening/{assets,references}`

**Step 2: Write pc-ptsd-5.md**

Primary Care PTSD Screen (5 items, binary yes/no, cutoff ≥3).

**Step 3: Write pcl-5.md**

PTSD Checklist for DSM-5 (20 items, 0-80 score range).

**Step 4: Write severity-levels.md**

PTSD severity interpretations for both tools.

**Step 5: Write screening-comparison.md**

When to use PC-PTSD-5 vs PCL-5.

**Step 6: Write clinical-decision-trees.md**

Treatment recommendations and referral pathways.

**Step 7: Write trauma-informed-approach.md**

Trauma-informed interview and screening techniques.

**Step 8: Update SKILL.md**

Embedded essentials format.

**Step 9: Commit trauma-screening implementation**

```bash
git add skills/trauma-screening/
git commit -m "feat: implement assets/references structure for trauma-screening

- Add PC-PTSD-5 and PCL-5 complete assessment files
- Create trauma-specific references including trauma-informed approach
- Update SKILL.md to embedded essentials format

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 6: Implement Substance-Screening Structure

**Files:**
- Create: `skills/substance-screening/assets/audit-c.md`
- Create: `skills/substance-screening/assets/dast-10.md`
- Create: `skills/substance-screening/references/severity-levels.md`
- Create: `skills/substance-screening/references/screening-comparison.md`
- Create: `skills/substance-screening/references/clinical-decision-trees.md`
- Modify: `skills/substance-screening/SKILL.md`

**Step 1: Create assets and references directories**

Run: `mkdir -p /Users/rhavekost/Projects/rhavekost/clinical-toolkit/skills/substance-screening/{assets,references}`

**Step 2: Write audit-c.md**

Alcohol Use Disorders Identification Test - Concise (3 items, alcohol screening).

**Step 3: Write dast-10.md**

Drug Abuse Screening Test (10 items, drug use screening).

**Step 4: Write severity-levels.md**

Substance use severity interpretations.

**Step 5: Write screening-comparison.md**

When to use AUDIT-C vs DAST-10, full AUDIT considerations.

**Step 6: Write clinical-decision-trees.md**

Treatment recommendations and referral criteria.

**Step 7: Update SKILL.md**

Embedded essentials format.

**Step 8: Commit substance-screening implementation**

```bash
git add skills/substance-screening/
git commit -m "feat: implement assets/references structure for substance-screening

- Add AUDIT-C and DAST-10 complete assessment files
- Create substance use screening references
- Update SKILL.md to embedded essentials format

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 7: Evaluate Workflow Skills Structure

**Files:**
- Read: `skills/intake-interview/SKILL.md`
- Read: `skills/treatment-planning/SKILL.md`
- Read: `skills/documentation/SKILL.md`

**Step 1: Review intake-interview content**

Read current SKILL.md to determine if assets/references structure would be beneficial.

**Step 2: Review treatment-planning content**

Read current SKILL.md to determine if assets/references structure would be beneficial.

**Step 3: Review documentation content**

Read current SKILL.md to determine if assets/references structure would be beneficial.

**Step 4: Document decision**

For each workflow skill, decide:
- Keep as single SKILL.md (content is straightforward)
- Add assets/ for templates if beneficial
- Add references/ for detailed guidance if beneficial

Document decision in commit message or as comment in SKILL.md.

**Step 5: Implement structure if beneficial**

Only create subdirectories if they add value (per design flexibility principle).

**Step 6: Commit workflow skills updates**

```bash
git add skills/{intake-interview,treatment-planning,documentation}/
git commit -m "chore: evaluate and update workflow skills structure

[Document whether assets/references added or kept as single SKILL.md]

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 8: Final Validation

**Step 1: Verify all internal links**

Check that:
- SKILL.md → assets/ links work
- SKILL.md → references/ links work
- references/ → docs/references/ links work
- Relative paths are correct

**Step 2: Verify safety warnings prominent**

Confirm:
- PHQ-9 Item 9 warnings visible in SKILL.md and assets/phq-9.md
- Suicide-screening has prominent safety warnings
- Crisis protocol references are clear

**Step 3: Verify quick reference tables accurate**

Check:
- Depression severity cutoffs match across SKILL.md and references/
- Anxiety severity cutoffs consistent
- All assessment comparison tables accurate

**Step 4: Test file accessibility**

Verify that skills can successfully reference:
- Their own assets/ and references/
- Shared docs/references/ files

**Step 5: Update README if needed**

Check if README.md needs updates to reflect new structure.

**Step 6: Final commit**

```bash
git add .
git commit -m "chore: final validation and cleanup of assets/references structure

All screening skills now use modular structure:
- 5 screening skills with assets/ and references/
- Shared docs/references/ for universal guidance
- All internal links verified
- Safety warnings prominently displayed

Implementation complete per design document.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Success Criteria

Implementation is successful when:

1. ✅ All 5 screening skills have assets/ and references/ subdirectories
2. ✅ Each assessment exists as complete single file (items + scoring + documentation)
3. ✅ Topic-based references organized consistently across skills
4. ✅ docs/references/ contains 4 shared reference files
5. ✅ All SKILL.md files use embedded essentials format
6. ✅ Quick reference tables accurate and immediately available
7. ✅ Safety warnings prominently displayed in relevant skills
8. ✅ All internal links functional
9. ✅ Workflow skills evaluated for structure (flexible approach)
10. ✅ All changes committed with clear messages

## Notes

- This plan implements structure only, with placeholder clinical content
- Full clinical content population is separate phase
- Priority: Depression-screening first (most complex), then remaining in order
- Workflow skills evaluated last (flexible approach)
- Frequent commits after each skill completion
