# Assets and References Structure Design

**Date:** 2026-02-01
**Status:** Approved
**Purpose:** Define the organizational structure for assessment assets and clinical references

## Overview

This design establishes how clinical assessments and reference materials are organized within each skill. The structure mirrors successful patterns from the author-toolkit while optimizing for LLM efficiency and clinical workflow.

## Design Decisions

### 1. Assets and References Subdirectories

**Decision:** Skills use `assets/` and `references/` subdirectories to organize content.

**Structure:**
```
skills/{skill-name}/
├── SKILL.md
├── assets/              # Clinical instruments and templates
└── references/          # Interpretation and decision guidance
```

**Rationale:**
- Separates concrete tools (assessments) from conceptual guidance (interpretation)
- Makes content modular and reusable
- Mirrors proven patterns from author-toolkit
- Enables flexible application (not all skills need both subdirectories)

**Flexibility:** Use assets/references only when beneficial. Screening skills clearly benefit from this structure. Workflow skills (documentation, treatment-planning) may keep content in SKILL.md if simpler.

### 2. Asset Organization: One File Per Assessment

**Decision:** Each assessment is a single markdown file containing items, scoring, and documentation.

**Structure:**
```
assets/
├── phq-9.md
├── phq-2.md
├── gad-7.md
└── gad-2.md
```

**Each file contains:**
```markdown
# [Assessment Name]

## Overview
[Items, time, purpose, population]

## Items
[Questionnaire with response options]

## Scoring
[Algorithm and calculation]

## Documentation Template
[Results format]
```

**Rationale:**
- **LLM efficiency:** Clinical workflow is always sequential (administer → score → document). Three separate files = three tool calls with noticeable latency.
- **Complete context:** Reading one file provides everything needed for the complete workflow
- **File size:** Assessment files are small (~1-2KB). No benefit to splitting.
- **Simplicity:** Easier to navigate than nested subdirectories

**Rejected approach:** Originally considered `assets/phq-9/items.md`, `assets/phq-9/scoring.md`, `assets/phq-9/documentation.md`. Too many tool calls for no practical benefit.

### 3. References Organization: Topic-Based

**Decision:** References organized by clinical topic, not by individual assessment.

**Structure:**
```
references/
├── severity-levels.md              # Cutoffs for all domain assessments
├── screening-comparison.md         # Decision tree for which assessment to use
├── item-9-safety-protocol.md       # Specific safety procedures
└── clinical-decision-trees.md      # Treatment recommendations by score
```

**Rationale:**
- **Reduces duplication:** Depression severity levels are standardized - one authoritative file instead of duplicating across PHQ-9, PHQ-2
- **Natural groupings:** Topics like "when to use PHQ-9 vs PHQ-2" are inherently cross-cutting
- **Easier maintenance:** Update clinical guidelines once, applies everywhere
- **Prevents drift:** No risk of inconsistency between assessment-specific files

**Example - severity-levels.md contains:**
- Standard severity definitions (minimal/mild/moderate/moderately severe/severe)
- Cutoffs for all assessments in domain (PHQ-9: 0-4, 5-9, etc.; PHQ-2: 0-2, ≥3)
- Clinical meaning of each level
- Treatment recommendations by severity

### 4. Shared vs Skill-Specific References

**Decision:** Shared/reusable content goes in `docs/references/`, truly unique content stays in `skills/*/references/`.

**docs/references/ contains:**
- Crisis protocols (used by suicide-screening, depression Item 9, trauma-screening)
- Referral guidelines (universal across all skills)
- Documentation standards (SOAP format, clinical note requirements)
- Legal/ethical guidelines (HIPAA, informed consent)

**skills/*/references/ contains:**
- Domain-specific content that's truly unique to that skill
- In practice, this may be rare - most clinical guidance is reusable

**Rationale:**
- Single source of truth for universal guidance
- Reduces duplication and maintenance burden
- Makes shared resources discoverable
- Skills can reference docs/references/ files via relative paths

### 5. SKILL.md Structure: Embedded Essentials

**Decision:** SKILL.md contains essential quick reference data with delegation to detailed files.

**Structure:**
```markdown
# [Skill Name]

## Description
[What this skill does]

## Available Assessments
| Assessment | Items | Purpose | Cutoff | Next Steps |
|------------|-------|---------|--------|------------|
[Quick comparison table]

## Quick Reference: [Domain] Severity
| Score | Severity | Action |
|-------|----------|--------|
[Cutoff table for immediate lookup]

## Workflow
1. Step-by-step process
2. References to assets/ and references/ files
3. Safety warnings prominently displayed

## Safety Protocols
⚠️ Critical safety procedures

## Limitations
[Clinical judgment disclaimers]
```

**Rationale:**
- **Fewer tool calls:** Quick reference tables available immediately when skill loads
- **Better triage:** LLM can make informed decisions about what detailed files to read
- **Faster common tasks:** Check cutoff scores without file reads
- **Clear workflow:** Step-by-step guidance with file references
- **Safety emphasis:** Critical warnings visible in main skill file

**Benefits over thin orchestrator:**
- Thin orchestrator (SKILL.md just lists files to read) requires blind file reading
- Embedded essentials let LLM see overview and make smart decisions
- Common tasks (checking severity, choosing assessment) don't require file reads

### 6. File Naming Conventions

**Standards:**
- Lowercase with hyphens: `phq-9.md`, `severity-levels.md`
- Preserve clinical abbreviations: `pc-ptsd-5.md`, `audit-c.md`
- Descriptive names: `screening-comparison.md`, not `comparison.md`
- Consistent across all skills

### 7. Assessment Template

**Standard structure for all asset files:**

```markdown
# [Assessment Full Name] ([ABBREVIATION])

## Overview
- **Items:** [number]
- **Time:** [administration time]
- **Purpose:** [what it measures]
- **Population:** [who it's for]

## Items
[Exact questionnaire with response options]
[Administration instructions]

## Scoring
**Algorithm:**
[Step-by-step calculation]

**Interpretation:**
[Quick cutoff reference]
[Link to references/severity-levels.md for detailed interpretation]

## Documentation Template
**Patient:** [Name/ID]
**Date:** [Date]
**Assessment:** [Name]
**Scores:** [Results]
**Interpretation:** [Severity level]
**Recommendations:** [Next steps]
```

**Consistency requirements:**
- All assessments follow this template
- Safety warnings use ⚠️ emoji and bold text
- Links to references/ files use relative paths
- Documentation templates use consistent field names

## Complete Example: Depression Screening

```
skills/depression-screening/
├── SKILL.md                            # Orchestration with embedded quick reference
├── assets/
│   ├── phq-9.md                        # Complete PHQ-9 (items + scoring + docs)
│   └── phq-2.md                        # Complete PHQ-2
└── references/
    ├── severity-levels.md              # All depression severity cutoffs
    ├── screening-comparison.md         # PHQ-9 vs PHQ-2 decision tree
    ├── item-9-safety-protocol.md       # Suicidality item response
    └── clinical-decision-trees.md      # Treatment recommendations

docs/references/
├── crisis-protocols.md                 # Universal crisis response
├── referral-guidelines.md              # Cross-domain referrals
└── documentation-standards.md          # SOAP notes, etc.
```

## Changes from Original Scaffolding Design

**Original design (2026-02-01-project-scaffolding-design.md):**
- All content in SKILL.md files
- Shared clinical references in single `docs/clinical-references.md`

**New design:**
- Content modularized into assets/ and references/
- SKILL.md contains embedded essentials + workflow orchestration
- Shared references organized as `docs/references/` directory with topic-based files
- One file per assessment optimized for LLM efficiency

**Rationale for changes:**
- Better organization and discoverability
- Optimized for LLM tool call efficiency
- Easier maintenance (topic-based references prevent duplication)
- Mirrors successful author-toolkit patterns

## Implementation Checklist

**For each screening skill:**
- [ ] Create `assets/` subdirectory
- [ ] Create `references/` subdirectory
- [ ] Write assessment files (phq-9.md, phq-2.md, etc.) using template
- [ ] Write topic-based reference files (severity-levels.md, etc.)
- [ ] Update SKILL.md to embedded essentials format
- [ ] Add quick reference tables to SKILL.md
- [ ] Verify all file paths and links work

**Shared infrastructure:**
- [ ] Create `docs/references/` directory
- [ ] Write crisis-protocols.md
- [ ] Write referral-guidelines.md
- [ ] Write documentation-standards.md
- [ ] Write legal-ethical-guidelines.md

**Validation:**
- [ ] Test that skills can reference docs/references/ files
- [ ] Verify all internal links work
- [ ] Confirm quick reference tables in SKILL.md are accurate
- [ ] Check that safety warnings are prominently displayed

## Success Criteria

This structure is successful when:
1. LLM can administer assessments efficiently (minimal tool calls)
2. Quick reference data immediately available in SKILL.md
3. Detailed content modularized and discoverable
4. No duplication between skills (shared content in docs/references/)
5. Topic-based references prevent inconsistency
6. New assessments can be added using consistent template
7. Safety protocols prominently displayed and accessible

## Migration Path

**Current state:** Scaffolding complete per original design (all content in SKILL.md stubs)

**Migration approach:**
1. Start with depression-screening (most complex domain)
2. Create assets/ and references/ structure
3. Populate with actual clinical content
4. Validate structure works well
5. Apply pattern to remaining screening skills
6. Create docs/references/ shared content
7. Update workflow skills if beneficial (flexible approach)

**Order of implementation:**
1. Depression-screening (PHQ-9, PHQ-2)
2. Anxiety-screening (GAD-7, GAD-2)
3. Suicide-screening (C-SSRS, ASQ) - critical safety protocols
4. Trauma-screening (PC-PTSD-5, PCL-5)
5. Substance-screening (AUDIT-C, DAST-10)

---

*Design approved: 2026-02-01*
