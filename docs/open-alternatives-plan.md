# Open-Licensing Alternatives + Expansion Plan

**Purpose:** Replace restricted instruments with explicitly open-licensed alternatives and add legally safe, high‑value clinical tools.

**Guiding rules**
- Only include instruments with explicit permission to reproduce and distribute in open-source repositories.
- If licensing is unclear, do not include the instrument text or scoring tables.
- Original tools must be labeled as **non‑validated** and **not diagnostic**.

---

## Phase A — Open‑Licensed Replacements

### 1. Sleep Assessment (Replace ISI)
**Tool:** Consensus Sleep Diary (CSD)
**Why:** Explicitly free for not‑for‑profit use with citation (no alteration).
**Deliverables:**
- `skills/sleep-diary/`
  - `SKILL.md` (administration + interpretation guidance)
  - `assets/consensus-sleep-diary.md` (verbatim diary template)
  - `references/interpretation.md` (sleep patterns, red flags, follow‑up steps)
- Add to `manifest/manifest.json`
- Update `README.md` skill table + roadmap
- Add citations in `docs/clinical-references.md`

### 2. Motivation / Readiness (Keep + Expand)
**Tool:** URICA + other TTM measures from UMBC HABITS Lab
**Why:** Public domain, free to use; aligned with readiness-to-change workflows.
**Deliverables:**
- Update `skills/motivation-assessment/`
  - Add `references/ttm-measures.md` with additional optional measures
  - Clarify URICA usage and stage matching
- Update `docs/clinical-references.md`

### 3. Ultra‑Brief Screening (Keep)
**Tool:** PHQ‑4 (PHQ‑2 + GAD‑2)
**Why:** Explicit permission to reproduce without license.
**Deliverables:**
- Keep as‑is; ensure citations in `docs/clinical-references.md`

---

## Phase B — New Open, Original (Non‑Validated) Tools

> These are **original templates** and must be labeled as *non‑validated* and *not diagnostic*. They are meant to standardize clinical thinking, not to replace validated instruments.

### 4. Bipolar Risk Interview Guide (Non‑Validated)
**Purpose:** Structured interview prompts for mood elevation history and safety.
**Deliverables:**
- `skills/bipolar-risk-interview/`
  - `SKILL.md` (clear non‑validated disclaimer)
  - `assets/interview-guide.md` (prompt list)
  - `references/safety-notes.md`

### 5. Functional Impairment Interview (Non‑Validated)
**Purpose:** Domain‑based functional assessment (work/social/home) without SDS/WHODAS.
**Deliverables:**
- `skills/functional-impairment-interview/`
  - `SKILL.md`
  - `assets/domain-checklist.md`
  - `references/goal-tracking.md`

### 6. Eating Disorder Risk Checklist (Non‑Validated)
**Purpose:** Flags for disordered eating + medical risk cues; not a validated screener.
**Deliverables:**
- `skills/eating-risk-checklist/`
  - `SKILL.md`
  - `assets/red-flags.md`
  - `references/medical-risk.md`

### 7. Cognitive Concerns Intake (Non‑Validated)
**Purpose:** Structured history for memory/cognitive complaints without Mini‑Cog/MoCA.
**Deliverables:**
- `skills/cognitive-concerns-intake/`
  - `SKILL.md`
  - `assets/history-template.md`
  - `references/referral-guidance.md`

---

## Phase C — Workflow‑First Clinical Value (No Licensing Risk)

### 8. Cross‑Tool Pathways
- Update `docs/clinical-references.md` with:
  - Depression pathway (PHQ‑4 → PHQ‑9 → safety workflow)
  - Sleep pathway (CSD → PHQ‑9/GAD‑7)
  - Adolescent intake (PHQ‑4 → HEADSS)

### 9. Outcome Tracking Expansion
- Extend `docs/templates/outcome-tracking.md`:
  - Sleep diary adherence + trends
  - Functional goal tracking

---

## Phase D — Documentation, QA, and Release

### 10. Compliance & Attribution
- Add/maintain explicit citations for open‑licensed instruments in `docs/clinical-references.md`.
- Add “no license required” statements where provided by sources.

### 11. Manifest + Packaging
- Add/remove skills in `manifest/manifest.json`.
- Run `npm run generate:manifests` and `npm run generate:codex`.

### 12. QA Checklist
- Non‑validated tools clearly labeled
- No restricted instrument text present
- References and disclaimers complete

---

## Suggested Execution Order

1. Add Consensus Sleep Diary skill (Phase A.1)
2. Expand Motivation/TTM measures (Phase A.2)
3. Create non‑validated interview/checklist tools (Phase B)
4. Update workflows + outcome tracking templates (Phase C)
5. Manifests, QA, release (Phase D)
