# Clinical Toolkit

**Version:** 1.0.0
**Status:** ✅ Production Ready - All Core Features Implemented
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
| **depression-screening** | PHQ-9, PHQ-2 | Assessing depression severity, tracking treatment response | ✅ Implemented |
| **anxiety-screening** | GAD-7, GAD-2 | Screening for anxiety disorders, measuring anxiety severity | ✅ Implemented |
| **trauma-screening** | PC-PTSD-5, PCL-5 | PTSD screening, trauma symptom assessment | ✅ Implemented |
| **substance-screening** | AUDIT-C, DAST-10 | Alcohol/drug use screening, identifying problematic use | ✅ Implemented |
| **suicide-screening** | C-SSRS, ASQ | Suicide risk assessment, safety planning | ✅ Implemented |

### Clinical Workflow Skills

| Skill | Frameworks | Use When | Status |
|-------|------------|----------|--------|
| **intake-interview** | HEADSS, Biopsychosocial, Safety Assessment | Conducting comprehensive intake evaluations | ✅ Implemented |
| **treatment-planning** | SMART Goals, Level of Care, Measurement-Based Care | Developing treatment plans, determining care level | ✅ Implemented |
| **documentation** | SOAP Notes, Progress Notes, Treatment Plans | Writing clinical documentation | ✅ Implemented |

---

## Installation

### Quick Install

**Claude Code:**
```bash
/plugin install github:rhavekost/clinical-toolkit
```

**GitHub Copilot:**
```bash
npx skills add rhavekost/clinical-toolkit
```

**Cursor IDE:**
```bash
skillport add rhavekost/clinical-toolkit
```

**Gemini CLI:**
```bash
gemini extensions install https://github.com/rhavekost/clinical-toolkit
```

For detailed installation instructions, team setup, and manual installation options, see [Installation Guide](docs/Installation.md).

---

## Releases

### Latest Release

**[📥 Download Latest Release](https://github.com/rhavekost/clinical-toolkit/releases/latest)**

#### For Claude.ai (Web & iOS)

Download **individual skill .zip files** from the release assets. Claude.ai requires exactly one SKILL.md per upload.

**Installation:**
1. Download the skills you need (e.g., `depression-screening.zip`, `anxiety-screening.zip`)
2. Go to [Claude.ai](https://claude.ai) → Settings → Capabilities
3. Enable the **Skills** toggle
4. Click **Upload skill** and select a .zip file
5. Repeat for each skill you want to use

**Available individual skills:**
- `depression-screening.zip` - PHQ-9 and PHQ-2 assessments
- `anxiety-screening.zip` - GAD-7 and GAD-2 assessments
- `trauma-screening.zip` - PCL-5 and PC-PTSD-5 assessments
- `substance-screening.zip` - AUDIT-C and DAST-10 assessments
- `suicide-screening.zip` - ASQ and C-SSRS protocols
- `intake-interview.zip` - HEADSS and biopsychosocial templates
- `treatment-planning.zip` - SMART goals and ASAM/LOCUS criteria
- `documentation.zip` - SOAP and DAP note templates

#### For Claude Code (CLI)

Download `clinical-toolkit-complete.zip` for multi-skill plugin support:

```bash
# Download and install complete package
claude install-plugin clinical-toolkit-complete.zip
```

### Creating Releases

For maintainers and contributors, releases are managed through GitHub Actions:

- **Manual trigger** - On-demand releases when ready
- **Automated packaging** - All skills bundled into single ZIP
- **Semantic versioning** - Clear version numbering (1.0.0, 1.1.0, etc.)
- **Auto-generated changelog** - From commit history

**For detailed release process**, see [Release Process Documentation](docs/RELEASE_PROCESS.md).

---

## Quick Start

### Using Skills

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

**Shared Clinical References** (docs/references/):
- [Crisis Protocols](docs/references/crisis-protocols.md) - Universal crisis response procedures
- [Referral Guidelines](docs/references/referral-guidelines.md) - Cross-domain referral guidance
- [Documentation Standards](docs/references/documentation-standards.md) - Clinical documentation best practices
- [Legal & Ethical Guidelines](docs/references/legal-ethical-guidelines.md) - HIPAA, informed consent, professional standards

**Project Documentation:**
- [Clinical References](docs/clinical-references.md) - Scoring tables and interpretation guidelines

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
│   └── manifest.json              # Generated: Claude Code manifest
├── .github/copilot/
│   └── manifest.json              # Generated: GitHub Copilot manifest
├── .cursor/
│   └── manifest.json              # Generated: Cursor IDE manifest
├── .gemini/
│   └── manifest.json              # Generated: Gemini CLI manifest
├── .codex/
│   └── manifest.json              # Generated: OpenAI Codex manifest
├── manifest/
│   ├── manifest.json              # ⭐ Master manifest (edit this)
│   ├── templates/                 # Platform-specific templates
│   ├── overrides/                 # Platform-specific customizations
│   └── README.md                  # Manifest system documentation
├── scripts/
│   └── generate-manifests.js      # Manifest generation script
├── skills/                        # Skill implementations
│   ├── depression-screening/
│   │   ├── SKILL.md              # Quick reference + embedded essentials
│   │   ├── assets/               # Complete assessment files (PHQ-9, PHQ-2)
│   │   └── references/           # Topic-based guidance (severity, decision trees)
│   ├── anxiety-screening/         # (Same structure: assets + references)
│   ├── trauma-screening/          # (Same structure: assets + references)
│   ├── substance-screening/       # (Same structure: assets + references)
│   ├── suicide-screening/         # (Same structure: assets + references)
│   ├── intake-interview/
│   ├── treatment-planning/
│   └── documentation/
├── docs/
│   ├── references/                # Shared clinical references
│   │   ├── crisis-protocols.md
│   │   ├── referral-guidelines.md
│   │   ├── documentation-standards.md
│   │   └── legal-ethical-guidelines.md
│   └── clinical-references.md     # Shared reference materials
├── package.json                   # NPM scripts for manifest generation
└── README.md
```

### Skill File Structure

**Screening Skills** (depression, anxiety, trauma, substance, suicide) use a modular structure:

- **SKILL.md**: Embedded essentials with quick reference tables, delegates to detailed files
- **assets/**: Complete assessment files (full items, scoring, documentation templates)
- **references/**: Topic-based references (severity levels, screening comparison, clinical decision trees)

**Workflow Skills** (intake-interview, treatment-planning, documentation) use single SKILL.md files for straightforward procedural guidance.

Each `SKILL.md` includes:

```markdown
# [Skill Name]
## Description
## Quick Reference: Assessment Selection (screening skills)
## Usage
## Quick Reference: Severity Levels (screening skills)
## Assessment Administration
## Clinical Decision-Making
## Safety Protocols
## Documentation
## Limitations & Considerations
## Additional Resources (links to assets/ and references/)
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
3. **Register in master manifest:**
   Edit `manifest/manifest.json`:
   ```json
   {
     "skills": [
       {
         "id": "skill-name",
         "path": "skills/skill-name/SKILL.md",
         "name": "Skill Display Name",
         "description": "Brief description including specific tool names",
         "category": "screening",
         "tags": ["tag1", "tag2"]
       }
     ]
   }
   ```
4. **Generate platform manifests:**
   ```bash
   npm run generate:manifests
   ```
5. **Include both generic and specific terms** in description for discoverability
6. **Document in clinical-references.md** if applicable
7. **Commit all changes** (including generated manifests)

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

### Multi-Platform Manifest System

This project uses an automated manifest generation system to support multiple AI platforms from a single source of truth.

**Supported Platforms:**
- ✅ Claude Code (`.claude-plugin/`)
- ✅ GitHub Copilot (`.github/copilot/`)
- ✅ Cursor IDE (`.cursor/`)
- ✅ Gemini CLI (`.gemini/`)
- ✅ OpenAI Codex (`.codex/`)

**How it works:**
1. **Single source:** Edit `manifest/manifest.json` only
2. **Generate all:** Run `npm run generate:manifests`
3. **Automatic sync:** All platform manifests are updated

**Common commands:**
```bash
# Generate all platform manifests
npm run generate:manifests

# Preview without writing files
npm run generate:manifests:dry-run

# Generate for specific platform
npm run generate:claude
npm run generate:copilot
npm run generate:cursor
```

**Benefits:**
- ✅ DRY principle - edit once, deploy everywhere
- ✅ Platform-specific overrides when needed (`manifest/overrides/`)
- ✅ Generated files committed for immediate use
- ✅ CI/CD validation ensures manifests stay in sync

**For detailed documentation**, see [manifest/README.md](manifest/README.md)

### Testing & Validation

Before marking a skill as complete:
- [ ] All instrument items included and accurate
- [ ] Scoring algorithms verified against source materials
- [ ] Interpretation guidelines cite evidence base
- [ ] Safety protocols comprehensive and prominent
- [ ] Limitations clearly stated
- [ ] Citations complete and accurate
- [ ] Language professional and non-stigmatizing
- [ ] Manifests regenerated: `npm run generate:manifests`
- [ ] Multi-platform testing completed (see [Multi-Platform Testing Guide](docs/testing-multi-platform.md))

---

## Development Roadmap

### Phase 1: Core Screening ✅ COMPLETE
- [x] Project scaffolding complete
- [x] Implement depression-screening (PHQ-9, PHQ-2)
- [x] Implement anxiety-screening (GAD-7, GAD-2)
- [x] Create shared docs/references/ infrastructure

### Phase 2: Expanded Assessment ✅ COMPLETE
- [x] Implement trauma-screening (PC-PTSD-5, PCL-5)
- [x] Implement substance-screening (AUDIT-C, DAST-10)
- [x] Implement suicide-screening (C-SSRS, ASQ)
- [x] Establish modular assets/references structure

### Phase 3: Clinical Workflows ✅ COMPLETE
- [x] Implement intake-interview frameworks (HEADSS, Biopsychosocial)
- [x] Implement treatment-planning tools (SMART goals, ASAM/LOCUS)
- [x] Implement documentation templates (SOAP, DAP notes)

### Phase 4: Distribution & Release Management ✅ COMPLETE
- [x] Multi-platform manifest system (Claude, Copilot, Cursor, Gemini, Codex)
- [x] Automated release workflow with GitHub Actions
- [x] Complete packaging for Claude.ai distribution
- [x] Comprehensive documentation

### Future Enhancements (Optional)
- [ ] Populate clinical-references.md with detailed guidance
- [ ] Add culturally-adapted instrument versions
- [ ] Additional validated screening tools
- [ ] Integration with measurement-based care platforms
- [ ] Multi-language support

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
*Version 1.0.0 - Production Ready*
