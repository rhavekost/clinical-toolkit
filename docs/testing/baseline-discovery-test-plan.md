# Baseline Discovery Test Plan - Claude Code

**Test Date:** 2026-02-03 (Post Phase 1, Task 1.1-1.3 completion)
**Version:** 2.0.0
**Tester:** [To be completed by user]

---

## Purpose

Test Claude Code's ability to discover clinical-toolkit skills using natural language queries after symptom-based description optimization.

**Success Criteria:** 90%+ of queries should suggest the correct skill

---

## Test Categories

### 1. Symptom-Based Queries

These queries use clinical symptoms WITHOUT mentioning tool names:

| Query | Expected Skill | Match? | Notes |
|-------|----------------|--------|-------|
| "Patient complains of low mood and fatigue" | depression-screening | ⬜ | Should trigger on "low mood, fatigue" |
| "Need to screen for anxiety symptoms" | anxiety-screening | ⬜ | Should trigger on "anxiety symptoms" |
| "Patient has suicidal thoughts" | suicide-screening | ⬜ | Should trigger on "suicidal thoughts" |
| "How do I assess alcohol use?" | substance-screening | ⬜ | Should trigger on "alcohol use" |
| "Patient reports nightmares and flashbacks" | trauma-screening | ⬜ | Should trigger on "nightmares, flashbacks" |
| "Patient has excessive worry and can't relax" | anxiety-screening | ⬜ | Should trigger on "excessive worry" |
| "Patient reports loss of interest in activities" | depression-screening | ⬜ | Should trigger on "anhedonia" concept |
| "Patient is drinking heavily every night" | substance-screening | ⬜ | Should trigger on "heavy drinking" |
| "Patient has intrusive memories of trauma" | trauma-screening | ⬜ | Should trigger on "intrusive memories" |
| "Patient mentions wanting to die" | suicide-screening | ⬜ | Should trigger on "suicidal" concept |

**Symptom-Based Score:** ___/10 (___%)

### 2. Tool-Based Queries

These queries mention specific assessment tool names:

| Query | Expected Skill | Match? | Notes |
|-------|----------------|--------|-------|
| "Help me administer a PHQ-9" | depression-screening | ⬜ | Direct tool name match |
| "I need to do a GAD-7" | anxiety-screening | ⬜ | Direct tool name match |
| "Guide me through C-SSRS" | suicide-screening | ⬜ | Direct tool name match |
| "Need to use AUDIT-C for this patient" | substance-screening | ⬜ | Direct tool name match |
| "Should I use PC-PTSD-5 or PCL-5?" | trauma-screening | ⬜ | Tool name match |
| "What's the scoring for PHQ-2?" | depression-screening | ⬜ | Tool name match |
| "Patient scored 15 on GAD-7, what now?" | anxiety-screening | ⬜ | Tool name + action |
| "Need ASQ screening" | suicide-screening | ⬜ | Direct tool name match |
| "DAST-10 administration" | substance-screening | ⬜ | Direct tool name match |

**Tool-Based Score:** ___/9 (___%)

### 3. Scenario-Based Queries

These queries describe clinical situations:

| Query | Expected Skill | Match? | Notes |
|-------|----------------|--------|-------|
| "First visit depression screening" | depression-screening | ⬜ | Screening context |
| "Patient scored high on anxiety, what now?" | anxiety-screening | ⬜ | Follow-up scenario |
| "Positive suicide screen response" | suicide-screening | ⬜ | Positive screen keyword |
| "Need to assess treatment progress for depression" | depression-screening | ⬜ | Treatment monitoring |
| "Patient PHQ-9 Item 9 was positive" | suicide-screening | ⬜ | Should trigger Item 9 → suicide |
| "Initial intake for new patient" | intake-interview | ⬜ | Workflow skill |
| "Need to write treatment goals" | treatment-planning | ⬜ | Workflow skill |
| "How do I document this session?" | documentation | ⬜ | Workflow skill |
| "Patient reports trauma exposure" | trauma-screening | ⬜ | Trauma context |
| "Concerned about patient's drinking patterns" | substance-screening | ⬜ | Substance concern |

**Scenario-Based Score:** ___/10 (___%)

---

## Cross-Reference Testing

Test that skills properly cross-reference when appropriate:

| Query | Primary Skill | Should Also Mention | Match? | Notes |
|-------|---------------|---------------------|--------|-------|
| "PHQ-9 Item 9 positive" | suicide-screening | depression-screening | ⬜ | Item 9 cross-ref |
| "High depression score, check suicide risk" | Both | Both | ⬜ | Dual concern |
| "Trauma symptoms with substance use" | Both | Both | ⬜ | Comorbid screening |

**Cross-Reference Score:** ___/3 (___%)

---

## Discovery Mechanism Testing

Test different ways users might discover skills:

| Method | Works? | Notes |
|--------|--------|-------|
| Direct invocation: `/depression-screening` | ⬜ | Should work if skill name known |
| Natural language: "screen for depression" | ⬜ | Should suggest skill |
| Symptom description: "low mood and fatigue" | ⬜ | Should suggest skill |
| Tool name: "PHQ-9" | ⬜ | Should suggest skill |
| Partial match: "suicide" | ⬜ | Should suggest suicide-screening |
| Workflow request: "intake interview" | ⬜ | Should suggest workflow skill |
| Documentation need: "write SOAP note" | ⬜ | Should suggest documentation skill |

**Discovery Methods Score:** ___/7 (___%)

---

## Overall Results

**Total Queries Tested:** 39
**Successful Matches:** ___
**Success Rate:** ___%

**Pass/Fail:** ⬜ Pass (≥90%) | ⬜ Fail (<90%)

---

## Identified Gaps

Document any queries that failed to match correctly:

1. **Query:** "_____________"
   - **Expected Skill:** ___________
   - **Actual Result:** ___________
   - **Reason for Mismatch:** ___________
   - **Suggested Fix:** ___________

2. **Query:** "_____________"
   - **Expected Skill:** ___________
   - **Actual Result:** ___________
   - **Reason for Mismatch:** ___________
   - **Suggested Fix:** ___________

3. **Query:** "_____________"
   - **Expected Skill:** ___________
   - **Actual Result:** ___________
   - **Reason for Mismatch:** ___________
   - **Suggested Fix:** ___________

---

## Recommendations

Based on test results:

### High Priority Fixes
- [ ] Fix 1: _____________
- [ ] Fix 2: _____________
- [ ] Fix 3: _____________

### Medium Priority Enhancements
- [ ] Enhancement 1: _____________
- [ ] Enhancement 2: _____________

### Low Priority Improvements
- [ ] Improvement 1: _____________
- [ ] Improvement 2: _____________

---

## Description Refinements

If gaps identified, suggest description refinements:

**Skill:** ___________
**Current Description:**
```
[Current description text]
```

**Proposed Description:**
```
[Proposed improved description]
```

**Rationale:**
[Why this change improves discovery]

---

## Next Steps

After completing this test:

1. **If pass rate ≥90%:**
   - Document success
   - Proceed to Phase 2
   - No changes needed

2. **If pass rate <90%:**
   - Implement recommended fixes
   - Update descriptions in manifest/manifest.json
   - Regenerate manifests: `npm run generate:manifests`
   - Re-test with failed queries
   - Document improvements

---

## Testing Instructions

**To perform this test:**

1. **Start fresh Claude Code session** in this project directory
2. **Ensure manifests are current:** `npm run generate:manifests`
3. **Test each query** by entering it naturally in conversation
4. **Record whether Claude suggests the correct skill** (check box)
5. **Document any unexpected results** in "Identified Gaps"
6. **Calculate success rates** for each category
7. **Make recommendations** based on findings

**Testing Tips:**
- Test queries in random order (not grouped by skill)
- Use natural phrasing, not robotic queries
- Note whether skill appears in top 2 suggestions
- Test both with and without context from previous queries
- Record partial matches (right family, wrong specific skill)

---

## Appendix: Expected Triggers

For reference, here are the key triggers in each skill description:

### depression-screening
- **Symptoms:** low mood, anhedonia, fatigue, sleep changes, appetite changes
- **Triggers:** positive PHQ-9 Item 9, suicidal ideation
- **Actions:** screening, assessing severity, tracking treatment response

### anxiety-screening
- **Symptoms:** excessive worry, restlessness, difficulty concentrating, muscle tension, panic attacks
- **Triggers:** overwhelming fear, avoidance behaviors
- **Actions:** screening, differentiating disorders, assessing treatment response

### trauma-screening
- **Symptoms:** intrusive memories, flashbacks, nightmares, avoidance, hypervigilance, emotional numbing
- **Triggers:** traumatic exposure, trauma severity
- **Actions:** screening, trauma-informed approaches

### substance-screening
- **Symptoms:** heavy drinking, cravings, loss of control, withdrawal symptoms, functional impairment
- **Triggers:** substance-related problems
- **Actions:** screening, assessing severity, determining level of care

### suicide-screening
- **Symptoms:** suicidal thoughts, self-harm urges, hopelessness, plans or intent to die
- **Triggers:** positive PHQ-9 Item 9, recent suicide attempt, psychiatric crisis
- **Actions:** screening, safety planning, risk assessment

### intake-interview
- **Triggers:** initial patient intake, comprehensive history, therapeutic rapport, safety assessment
- **Actions:** conducting intake, gathering history, assessing risk factors

### treatment-planning
- **Triggers:** treatment plans, SMART goals, level of care, measurement-based care
- **Actions:** developing plans, determining care level, tracking progress

### documentation
- **Triggers:** clinical notes, documenting sessions, insurance/authorization, HIPAA compliance
- **Actions:** writing notes, creating treatment plans

---

*Test Plan Created: 2026-02-01*
*Status: ⬜ Not Started | ⬜ In Progress | ⬜ Completed*
