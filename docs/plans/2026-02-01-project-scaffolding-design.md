# Project Scaffolding Design

**Date:** 2026-02-01
**Status:** Approved
**Purpose:** Bootstrap the clinical-toolkit project with complete structure

## Overview

This design documents the initial scaffolding for the clinical-toolkit project - a Claude skill framework for clinical mental health screening, assessment interpretation, and documentation support.

## Design Decisions

### 1. Skill Granularity: Domain-Based Organization

**Decision:** Group assessments by clinical domain rather than individual instruments.

**Rationale:**
- Balances discoverability with maintainability
- Keeps related assessments together (PHQ-2/PHQ-9, GAD-2/GAD-7)
- Allows LLM to match both generic requests ("screen for depression") and specific ones ("administer PHQ-9")
- Avoids having 10+ individual skills or one massive monolithic skill

**Result:** 8 total skills:
- 5 screening skills by domain: depression, anxiety, trauma, substance, suicide
- 3 workflow skills: intake-interview, treatment-planning, documentation

### 2. Project Structure

```
clinical-toolkit/
├── .claude-plugin/
│   └── manifest.json                 # Plugin metadata & skill registry
├── skills/
│   ├── depression-screening/
│   │   └── SKILL.md                  # PHQ-9, PHQ-2
│   ├── anxiety-screening/
│   │   └── SKILL.md                  # GAD-7, GAD-2
│   ├── trauma-screening/
│   │   └── SKILL.md                  # PC-PTSD-5, PCL-5
│   ├── substance-screening/
│   │   └── SKILL.md                  # AUDIT-C, DAST-10
│   ├── suicide-screening/
│   │   └── SKILL.md                  # C-SSRS, ASQ
│   ├── intake-interview/
│   │   └── SKILL.md                  # HEADSS, Biopsychosocial, Safety
│   ├── treatment-planning/
│   │   └── SKILL.md                  # SMART goals, Level of care
│   └── documentation/
│       └── SKILL.md                  # SOAP, Progress notes
├── docs/
│   ├── plans/                        # Design documents
│   └── clinical-references.md        # Shared cutoff tables, scoring guides
├── .gitignore
├── LICENSE                           # MIT
├── README.md                         # User & developer guide
└── 00 - Overview.md                  # Planning document (kept as reference)
```

**Key additions:**
- `docs/` directory for shared clinical reference materials
- `docs/plans/` for design documentation
- Standard open source files (.gitignore, LICENSE)

### 3. Manifest Structure

Standard metadata approach:
- Name, version, description, author, license, repository
- Skill descriptions include both domain AND specific instrument names
- Enables both "I need anxiety screening" and "I need to use GAD-7" to match correctly

### 4. README Content - Balanced Approach

**User-focused sections:**
- Overview with clinical support tool disclaimer
- Available skills table
- Quick start / usage examples
- Safety & disclaimers (prominent)
- Clinical resources and links

**Developer-focused sections:**
- Project structure explanation
- Adding new assessments guide
- Skill template documentation
- Contributing guidelines
- License & attribution

**Rationale:** Project serves both end users and potential contributors; keeping both in one README while project is small.

### 5. Skill File Template

Standardized structure for all SKILL.md files:

```markdown
# [Skill Name]

## Description
## Available Assessments
## Usage
## Administration & Scoring
## Clinical Interpretation
## Safety Protocols
## Limitations & Considerations
## References
```

**Special considerations:**
- Safety Protocols section is CRITICAL for suicide-screening
- PHQ-9 (in depression-screening) also needs safety guidance for Item 9
- All skills clearly state they're support tools, not diagnostic tools

### 6. Initial Stub Content

For scaffolding phase, each SKILL.md includes:

**Complete structure:** All template sections with headers

**Populated tables:** Assessment lists with basic metadata (items, purpose, cutoffs) from the overview document

**Clear placeholders:**
```markdown
*[Full instrument items, scoring algorithm, and interpretation to be added]*
```

**Safety emphasis:** Even stubs include bolded safety warnings where applicable:
```markdown
**⚠️ CRITICAL: Any positive response to suicidal ideation items requires immediate clinical follow-up**
```

**Rationale:** Provides complete roadmap while clearly marking incomplete sections; emphasizes safety from the start.

## Implementation Checklist

- [ ] Create directory structure
- [ ] Write .claude-plugin/manifest.json
- [ ] Write all 8 skill stub files
- [ ] Write docs/clinical-references.md (placeholder)
- [ ] Write README.md
- [ ] Write .gitignore
- [ ] Write LICENSE (MIT)
- [ ] Commit scaffolding to git

## Success Criteria

Scaffolding is complete when:
1. All directories and files exist per the structure above
2. Manifest correctly registers all 8 skills
3. Each SKILL.md has complete template structure with assessment tables
4. README explains both usage and contributing
5. Safety warnings are present in relevant skill stubs
6. All files committed to git

## Next Phase

After scaffolding, systematically implement each screening skill:
1. Depression-screening (PHQ-9, PHQ-2)
2. Anxiety-screening (GAD-7, GAD-2)
3. Trauma-screening (PC-PTSD-5, PCL-5)
4. Substance-screening (AUDIT-C, DAST-10)
5. Suicide-screening (C-SSRS, ASQ)

Then workflow skills (intake, treatment planning, documentation).

---

*Design approved: 2026-02-01*
