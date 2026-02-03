# Multi-Platform Testing Guide

This guide provides testing procedures for validating clinical-toolkit skills across all 5 supported AI platforms.

---

## Platform Overview

| Platform | Testing Access | Manifest Source | Discovery Method |
|----------|---------------|-----------------|------------------|
| **Claude Code** | ✅ Available | `.claude-plugin/manifest.json` | Description-based semantic search |
| **GitHub Copilot** | ✅ Available | `.github/copilot/manifest.json` + SKILL.md frontmatter | Description-based matching |
| **Cursor IDE** | ⚠️ No account | `.cursor/manifest.json` + SKILL.md frontmatter | Description-based matching |
| **Gemini CLI** | ✅ Available | `.gemini/manifest.json` + SKILL.md frontmatter | Description-based matching |
| **OpenAI Codex** | ✅ Available | `.codex/manifest.json` + SKILL.md frontmatter | Description-based matching |

**Legend:**
- ✅ Available: Direct testing possible
- ⚠️ No account: Community validation required

---

## Platform-Specific Testing

### 1. Claude Code

**Setup:**
1. Ensure `.claude-plugin/manifest.json` exists in project root
2. Skills auto-loaded when Claude Code starts in this directory

**Testing Discovery:**

Use natural language queries to test skill discovery:

**Symptom-based queries:**
```
"Patient complains of low mood and fatigue"
"Need to screen for anxiety symptoms"
"Patient has suicidal thoughts"
"How do I assess alcohol use?"
"Patient reports nightmares and flashbacks"
```

**Tool-based queries:**
```
"Help me administer a PHQ-9"
"I need to do a GAD-7"
"Guide me through C-SSRS"
"Need AUDIT-C screening"
```

**Scenario-based queries:**
```
"First visit depression screening"
"Patient scored high on anxiety, what now?"
"Positive suicide screen response"
"Initial intake interview for new patient"
```

**Expected Behavior:**
- Claude should suggest the appropriate skill based on description
- Skills appear in skill selection UI
- Skill content loads when invoked

**Validation Checklist:**
- [ ] All skills appear in skill list
- [ ] Descriptions match `manifest/manifest.json`
- [ ] Symptom-based queries trigger correct skills (90%+ accuracy)
- [ ] Tool-based queries trigger correct skills
- [ ] Skill content renders correctly (no markdown errors)
- [ ] Links to assets/references work
- [ ] Flowcharts render (if implemented)

**Known Limitations:**
- Claude Code ignores SKILL.md frontmatter (uses manifest.json only)
- Tags in manifest may not be visible to user but help with discovery
- Skill invocation is suggestion-based, not automatic

---

### 2. GitHub Copilot

**Setup:**
1. Install GitHub Copilot extension in VS Code
2. Skills loaded from `.github/copilot/manifest.json` and SKILL.md frontmatter
3. May require workspace reload after changes

**Testing Discovery:**

Use Copilot chat with natural language queries:

**In VS Code Chat:**
```
@workspace I need to screen a patient for depression
@workspace How do I assess suicide risk?
@workspace Guide me through anxiety screening
```

**Expected Behavior:**
- Copilot suggests relevant skill
- Skill description appears in chat
- Skill can be invoked via chat

**Validation Checklist:**
- [ ] Skills discoverable via @workspace queries
- [ ] SKILL.md frontmatter parsed correctly
- [ ] Descriptions appear in skill listings
- [ ] SKILL.md content renders in chat
- [ ] Links resolve correctly
- [ ] No YAML parsing errors

**Testing Commands:**
```bash
# Validate manifest
cat .github/copilot/manifest.json | jq .

# Check for frontmatter errors
for skill in skills/*/SKILL.md; do
  echo "Checking $skill"
  head -n 10 "$skill"
done
```

**Known Limitations:**
- License field may cause validation issues (see [Issue #894](https://github.com/github/copilot-cli/issues/894))
- Discovery depends on workspace indexing
- Some markdown features may not render

**Troubleshooting:**
- If skills not appearing: Reload VS Code window
- If frontmatter errors: Validate YAML syntax
- If discovery fails: Check description field length (<500 chars)

---

### 3. Cursor IDE

**Setup:**
1. Skills loaded from `.cursor/manifest.json` and SKILL.md frontmatter
2. Compatible with Agent Skills specification

**Testing Discovery:**

Use Cursor chat with natural language:

```
I need help screening for depression
Guide me through suicide risk assessment
What's the best trauma screening tool?
```

**Expected Behavior:**
- Skills appear in Cursor's agent interface
- Descriptions trigger on relevant queries
- Content renders in chat

**Validation Checklist:**
- [ ] Skills appear in Cursor skill list
- [ ] SKILL.md frontmatter compatible
- [ ] Descriptions trigger appropriately
- [ ] Markdown content renders
- [ ] Asset links work
- [ ] Flowcharts display (if supported)

**Community Validation Required:**
Since we don't have direct Cursor access, we rely on community testing:
- Report issues via GitHub
- Share screenshots of skill rendering
- Test discovery with standard queries

**Known Limitations:**
- No direct testing access
- Flowchart rendering unknown
- Compatibility assumed from Agent Skills spec

---

### 4. Gemini CLI

**Setup:**
1. Install Gemini CLI
2. Skills loaded from `.gemini/manifest.json` and SKILL.md frontmatter
3. Description field is PRIMARY triggering mechanism

**Testing Discovery:**

Use Gemini CLI commands:

```bash
gemini "I need to screen a patient for depression"
gemini "How do I assess suicide risk?"
gemini "Guide me through anxiety screening with GAD-7"
```

**Expected Behavior:**
- Gemini suggests appropriate skill based on description
- Skills invoked via natural language
- Content displayed in terminal

**Validation Checklist:**
- [ ] Skills discoverable via natural language
- [ ] Description triggers correctly
- [ ] Only name/description in frontmatter (extra fields ignored)
- [ ] Content renders in terminal
- [ ] Links accessible
- [ ] No parsing errors

**Testing Commands:**
```bash
# List available skills
gemini skills list

# Validate manifest
cat .gemini/manifest.json | jq .

# Test skill invocation
gemini "Test depression screening skill"
```

**Known Limitations:**
- Extra frontmatter fields ignored (harmless)
- Terminal rendering may limit formatting
- Flowcharts may not render (text fallback needed)

**Troubleshooting:**
- If skills not found: Check `.gemini/manifest.json` exists
- If discovery fails: Ensure description is comprehensive
- If rendering issues: Check markdown syntax

---

### 5. OpenAI Codex

**Setup:**
1. Install Codex CLI or use Codex-enabled IDE
2. Skills loaded from `.codex/manifest.json` and SKILL.md frontmatter
3. Description is primary trigger

**Testing Discovery:**

Use Codex interface with queries:

```
I need to screen for depression using PHQ-9
Help me assess suicide risk with C-SSRS
Guide me through trauma screening
```

**Expected Behavior:**
- Codex identifies relevant skill from description
- Skills invoked automatically or via suggestion
- Content rendered appropriately

**Validation Checklist:**
- [ ] Skills appear in Codex skill registry
- [ ] Frontmatter parsed correctly
- [ ] Descriptions trigger on queries
- [ ] Content renders properly
- [ ] Links functional
- [ ] No YAML errors

**Testing Commands:**
```bash
# Validate manifest
cat .codex/manifest.json | jq .

# Check frontmatter
head -n 10 skills/*/SKILL.md
```

**Known Limitations:**
- Extra frontmatter fields ignored
- Name/description length limits (100/500 chars)
- Platform-specific rendering variations

**Troubleshooting:**
- If skills missing: Verify `.codex/manifest.json` exists
- If parsing fails: Validate YAML syntax
- If discovery poor: Optimize description field

---

## Universal Testing Procedures

### 1. Manifest Generation Validation

After any changes, always regenerate and validate manifests:

```bash
# Regenerate all platform manifests
npm run generate:manifests

# Validate JSON syntax
for manifest in .claude-plugin/manifest.json .github/copilot/manifest.json .cursor/manifest.json .gemini/manifest.json .codex/manifest.json; do
  echo "Validating $manifest"
  cat "$manifest" | jq . > /dev/null && echo "✅ Valid" || echo "❌ Invalid"
done

# Verify frontmatter exists in all SKILL.md files
for skill in skills/*/SKILL.md; do
  echo "Checking $skill"
  head -n 1 "$skill" | grep -q "^---$" && echo "✅ Has frontmatter" || echo "❌ Missing frontmatter"
done
```

### 1b. Consumer Chatbot Bundle Validation

If you are generating consumer chatbot bundles, validate outputs:

```bash
# Generate consumer bundles
npm run generate:consumers

# Validate consumer bundles
npm run validate:consumers
```

The consumer validator checks required files and validates JSON templates
against schema files in `docs/schemas/consumer/`, including the generic
instruction pack format.

### 2. Symptom-Based Discovery Testing

Test each skill with symptom-based queries (not tool names):

| Skill | Symptom Query | Expected Match |
|-------|---------------|----------------|
| depression-screening | "Patient has low mood and fatigue" | ✅ Should match |
| anxiety-screening | "Patient reports excessive worry" | ✅ Should match |
| trauma-screening | "Patient has flashbacks and nightmares" | ✅ Should match |
| substance-screening | "Patient reports heavy drinking" | ✅ Should match |
| suicide-screening | "Patient has suicidal thoughts" | ✅ Should match |
| intake-interview | "Need to conduct initial patient intake" | ✅ Should match |
| treatment-planning | "Need to write SMART goals" | ✅ Should match |
| documentation | "Need to write SOAP notes" | ✅ Should match |

**Success Criteria:**
- 90%+ accuracy on symptom-based queries
- Correct skill suggested within top 2 results
- No false negatives (missing appropriate skill)

### 3. Content Rendering Validation

Verify all skills render correctly:

```bash
# Check for markdown errors
for skill in skills/*/SKILL.md; do
  echo "Rendering $skill"
  # Use your preferred markdown validator or linter
done

# Verify all links are valid
for skill in skills/*/SKILL.md; do
  echo "Checking links in $skill"
  # Extract and validate links
  grep -o '\[.*\](.*\.md)' "$skill" | while read -r link; do
    file=$(echo "$link" | sed -n 's/.*(\(.*\))/\1/p')
    [[ -f "skills/$(dirname "$skill")/$file" ]] && echo "✅ $file" || echo "❌ Missing: $file"
  done
done
```

### 4. Cross-Platform Consistency Check

Ensure consistent behavior across platforms:

**Checklist:**
- [ ] Same skill descriptions across all platform manifests
- [ ] SKILL.md frontmatter matches manifest.json (for Claude Code)
- [ ] All assets/references accessible
- [ ] No platform-specific formatting issues
- [ ] Tags consistent (where applicable)

---

## Example Test Cases

### Test Case 1: Depression Screening Discovery

**Query:** "Patient complains of low mood, loss of interest, and fatigue for 2 weeks"

**Expected Results:**
- **Primary match:** depression-screening
- **Secondary match:** suicide-screening (if mentions of hopelessness)
- **Description shown:** Should mention "low mood, anhedonia, fatigue"

**Platforms to test:** All 5

### Test Case 2: Suicide Safety Assessment

**Query:** "Patient answered yes to PHQ-9 Item 9 about suicidal thoughts"

**Expected Results:**
- **Primary match:** suicide-screening
- **Description shown:** Should mention "positive PHQ-9 Item 9"
- **Cross-reference:** Should link to depression-screening

**Platforms to test:** All 5

### Test Case 3: Workflow Skill Discovery

**Query:** "I need to write treatment goals for a new patient"

**Expected Results:**
- **Primary match:** treatment-planning
- **Description shown:** Should mention "writing SMART goals"
- **Content:** Should provide SMART framework

**Platforms to test:** All 5

---

## Known Platform Differences

| Feature | Claude Code | Copilot | Cursor | Gemini CLI | Codex |
|---------|-------------|---------|--------|------------|-------|
| **Frontmatter source** | Ignored | Used | Used | Used | Used |
| **Manifest source** | Only source | Used | Used | Used | Used |
| **Tags visible** | No | Maybe | Maybe | No | No |
| **Description length** | 500 chars | 500 chars | 500 chars | 500 chars | 500 chars |
| **License field** | Optional | Optional* | Optional | Ignored | Ignored |
| **Flowcharts** | ✅ Renders | ⚠️ Unknown | ⚠️ Unknown | ❌ Terminal | ⚠️ Unknown |
| **Asset links** | ✅ Works | ✅ Works | ⚠️ Unknown | ✅ Works | ✅ Works |

*GitHub Copilot had validation issues with missing license field (Issue #894, Jan 2026)

---

## Troubleshooting Guide

### Issue: Skills not appearing

**Symptoms:**
- Platform doesn't list skills
- Skills not suggested on queries

**Diagnosis:**
1. Check manifest exists: `ls -la .claude-plugin/ .github/copilot/ .cursor/ .gemini/ .codex/`
2. Validate JSON: `cat <manifest> | jq .`
3. Check frontmatter: `head -n 10 skills/*/SKILL.md`

**Solutions:**
- Regenerate manifests: `npm run generate:manifests`
- Reload workspace/IDE
- Verify file permissions

### Issue: Poor discovery accuracy

**Symptoms:**
- Correct skill not suggested
- Wrong skill matched

**Diagnosis:**
1. Review description field
2. Check for missing symptom keywords
3. Verify tags (if platform uses them)

**Solutions:**
- Enhance description with more triggers
- Add symptom-based keywords to tags
- Test with more specific queries

### Issue: Rendering problems

**Symptoms:**
- Markdown not displaying correctly
- Links broken
- Flowcharts not showing

**Diagnosis:**
1. Validate markdown syntax
2. Check relative paths
3. Verify asset files exist

**Solutions:**
- Fix markdown syntax errors
- Update relative paths
- Add text fallbacks for flowcharts
- Test on platform directly

### Issue: Frontmatter parsing errors

**Symptoms:**
- YAML parsing errors
- Skills fail to load

**Diagnosis:**
1. Check YAML syntax
2. Verify quote consistency
3. Check for special characters

**Solutions:**
- Remove quotes from simple values
- Escape special characters
- Validate with YAML linter

---

## Continuous Testing Workflow

### After Making Changes

1. **Regenerate manifests:**
   ```bash
   npm run generate:manifests
   ```

2. **Validate syntax:**
   ```bash
   # JSON validation
   for f in .claude-plugin/manifest.json .github/copilot/manifest.json .cursor/manifest.json .gemini/manifest.json .codex/manifest.json; do
     jq . "$f" > /dev/null && echo "✅ $f" || echo "❌ $f"
   done

   # YAML frontmatter validation
   for f in skills/*/SKILL.md; do
     head -n 5 "$f"
   done
   ```

3. **Test discovery on available platforms:**
   - Claude Code: Use in current session
   - GitHub Copilot: Test in VS Code
   - Gemini CLI: Test via CLI
   - OpenAI Codex: Test via Codex interface

4. **Document results:**
   - Note any discovery issues
   - Record rendering problems
   - Update troubleshooting guide

### Before Release

1. **Complete validation:**
   - All acceptance criteria met
   - All platforms tested (where accessible)
   - No critical issues outstanding

2. **Community validation request:**
   - Post testing checklist
   - Request Cursor IDE testing
   - Gather feedback

3. **Update documentation:**
   - Document known issues
   - Update platform differences
   - Revise troubleshooting guide

---

## Testing Results Log

Create a log file to track testing results:

```markdown
## Testing Session: YYYY-MM-DD

### Platform: [Platform Name]

**Tester:** [Your Name]
**Version:** [Toolkit Version]

**Discovery Tests:**
- [ ] Symptom-based queries (all relevant skills)
- [ ] Tool-based queries (5/5 screening skills)
- [ ] Scenario-based queries (all relevant skills)

**Rendering Tests:**
- [ ] Markdown rendering
- [ ] Asset links
- [ ] Flowcharts (if applicable)

**Issues Found:**
1. [Issue description]
2. [Issue description]

**Success Rate:** X/Y tests passed (Z%)

**Notes:**
[Additional observations]
```

---

## Resources

### Official Documentation

- [Claude Code Skills](https://docs.anthropic.com/claude/docs/skills)
- [GitHub Copilot Agent Skills](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills)
- [Agent Skills Specification](https://agentskills.io/specification)
- [Gemini CLI Skills](https://geminicli.com/docs/cli/skills/)
- [OpenAI Codex Skills](https://developers.openai.com/codex/skills/)

### Tools

- **JSON Validator:** `jq` command-line tool
- **YAML Validator:** Online validators or IDE plugins
- **Markdown Linter:** `markdownlint-cli` or IDE extensions
- **Link Checker:** `markdown-link-check`

---

## Contributing Testing Results

Help improve this guide by contributing your testing results:

1. **Test on your platform**
2. **Document findings** using the template above
3. **Submit via GitHub issue or PR**
4. **Include platform version and configuration**

Especially needed:
- Cursor IDE testing results
- Flowchart rendering tests
- Edge case discovery tests
- Performance observations

---

*Last Updated: 2026-02-01*
*Maintainer: rhavekost*
