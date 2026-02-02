# Installation Guide

Comprehensive installation instructions for all supported AI platforms.

---

## Quick Install Commands

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
# Using skillport (recommended)
uv tool install skillport
skillport add rhavekost/clinical-toolkit

# Or manual clone
git clone https://github.com/rhavekost/clinical-toolkit.git .cursor/skills/clinical-toolkit
```

**Gemini CLI:**
```bash
# Enable Agent Skills first: gemini → /settings → Enable "Agent Skills"
gemini extensions install https://github.com/rhavekost/clinical-toolkit
```

---

## Team Project Setup

### Claude Code

Add to `.claude/settings.json`:

```json
{
  "enabledPlugins": [
    "github:rhavekost/clinical-toolkit"
  ]
}
```

**Benefits:**
- All team members get the same skills automatically
- Version controlled with your project
- Easy to update by modifying the settings file

**Setup steps:**
1. Create or edit `.claude/settings.json` in your project root
2. Add the plugin to the `enabledPlugins` array
3. Commit the settings file to version control
4. Team members will automatically load the plugin when working on the project

### GitHub Copilot

Add skills to your project's `.github/skills/` directory:

```bash
npx skills add rhavekost/clinical-toolkit
# Commit .github/skills/ directory to share with team
git add .github/skills/
git commit -m "Add clinical-toolkit skills"
git push
```

**Benefits:**
- Skills are project-specific
- Shared via version control
- Automatically loaded when team members open the project

**Setup steps:**
1. Run `npx skills add rhavekost/clinical-toolkit` in project root
2. Commit the `.github/skills/` directory
3. Team members pull the changes
4. Copilot automatically detects and loads the skills

### Cursor IDE

Commit `.cursor/skills/` directory to your project:

```bash
# Clone skills into project
git clone https://github.com/rhavekost/clinical-toolkit.git .cursor/skills/clinical-toolkit

# Or use skillport
skillport add rhavekost/clinical-toolkit

# Commit to share with team
git add .cursor/skills/clinical-toolkit
git commit -m "Add clinical-toolkit skills"
git push
```

**Benefits:**
- Skills available to all project contributors
- Version controlled alongside code
- Workspace-specific configuration

**Setup steps:**
1. Add skills to `.cursor/skills/` directory
2. Commit the directory to version control
3. Team members pull and have skills automatically available

### Gemini CLI

**Workspace-specific installation:**

Skills stored in `.gemini/skills/` (committed to version control):

```bash
# In project directory
gemini extensions install https://github.com/rhavekost/clinical-toolkit

# Commit to share with team
git add .gemini/skills/
git commit -m "Add clinical-toolkit skills"
```

**User-specific installation:**

Skills stored in `~/.gemini/skills/` (personal, not shared):

```bash
gemini extensions install https://github.com/rhavekost/clinical-toolkit
```

---

## Manual Installation

Manual installation gives you more control and is useful for:
- Development and testing
- Custom configurations
- Environments without direct GitHub access
- Contributing to the project

### Clone and Symlink (Recommended for Development)

Symlinking allows you to make changes to the cloned repository and have them immediately reflected in your AI assistant.

```bash
# Clone the repository
git clone https://github.com/rhavekost/clinical-toolkit.git
cd clinical-toolkit

# Create symlink for your platform
# Claude Code
ln -s "$(pwd)" ~/.claude/plugins/clinical-toolkit

# GitHub Copilot
ln -s "$(pwd)" ~/.copilot/skills/clinical-toolkit

# Cursor IDE
ln -s "$(pwd)" ~/.cursor/skills/clinical-toolkit

# Gemini CLI
ln -s "$(pwd)" ~/.gemini/skills/clinical-toolkit
```

**Advantages:**
- Make changes to the cloned repo and they're immediately available
- Easy to contribute back to the project
- Can switch between branches
- Easy to update with `git pull`

**To update:**
```bash
cd clinical-toolkit
git pull
```

### Copy Installation

Copying creates a standalone installation independent of the cloned repository.

```bash
# Clone the repository
git clone https://github.com/rhavekost/clinical-toolkit.git

# Copy to your platform's directory
# Claude Code
cp -r clinical-toolkit ~/.claude/plugins/clinical-toolkit

# GitHub Copilot
cp -r clinical-toolkit ~/.copilot/skills/clinical-toolkit

# Cursor IDE
cp -r clinical-toolkit ~/.cursor/skills/clinical-toolkit

# Gemini CLI
cp -r clinical-toolkit ~/.gemini/skills/clinical-toolkit
```

**Advantages:**
- Standalone installation
- Won't be affected by changes in the source repository
- Simpler mental model (no symlinks)

**To update:**
```bash
# Remove old installation
rm -rf ~/.claude/plugins/clinical-toolkit  # or appropriate path

# Re-clone and copy
git clone https://github.com/rhavekost/clinical-toolkit.git
cp -r clinical-toolkit ~/.claude/plugins/clinical-toolkit
```

---

## Platform-Specific Storage Locations

### Claude Code

- **User-level:** `~/.claude/plugins/`
- **Project-level:** Project root (enabled via `.claude/settings.json`)

### GitHub Copilot

- **User-level:** `~/.copilot/skills/`
- **Project-level:** `.github/skills/` (recommended)
- **Legacy:** `.claude/skills/` (backward compatibility)

### Cursor IDE

- **User-level:** `~/.cursor/skills/`
- **Project-level:** `.cursor/skills/` (workspace-specific)

### Gemini CLI

- **User-level:** `~/.gemini/skills/`
- **Project-level:** `.gemini/skills/` (workspace-specific)

---

## Verification

After installation, verify the skills are loaded:

**Claude Code:**
```bash
# List available skills
/skills

# Try invoking a skill
/depression-screening
```

**GitHub Copilot:**
```bash
# In your IDE, agent skills should appear in Copilot's interface
# Or use CLI: npx skills list
```

**Cursor:**
```bash
# Skills appear in Cursor's composer
# Check .cursor/skills/ directory exists
```

**Gemini CLI:**
```bash
# In a Gemini session
/skills
# Should list clinical-toolkit skills
```

---

## Troubleshooting

### Skills Not Appearing

**Claude Code:**
- Check `~/.claude/plugins/` directory exists
- Verify symlink is correct: `ls -la ~/.claude/plugins/`
- Restart Claude Code

**GitHub Copilot:**
- Verify `.github/skills/` directory exists in project
- Check user-level skills: `ls -la ~/.copilot/skills/`
- Reload VS Code window

**Cursor:**
- Verify `.cursor/skills/` directory in project or `~/.cursor/skills/`
- Check Cursor settings for skills enabled
- Restart Cursor

**Gemini CLI:**
- Verify Agent Skills are enabled in settings
- Check `/skills` command output
- Verify installation directory: `ls -la ~/.gemini/skills/`

### Permission Issues

If you encounter permission errors:

```bash
# Make sure directories are owned by your user
sudo chown -R $USER:$USER ~/.claude/plugins/
sudo chown -R $USER:$USER ~/.copilot/skills/
sudo chown -R $USER:$USER ~/.cursor/skills/
sudo chown -R $USER:$USER ~/.gemini/skills/
```

### Symlink Issues

If symlinks don't work (e.g., on Windows):

- Use copy installation instead
- Or use platform-specific quick install commands
- Check if symbolic links are enabled on Windows

---

## Updating

### Quick Install Method

Simply re-run the installation command:

```bash
# Claude Code
/plugin install github:rhavekost/clinical-toolkit

# GitHub Copilot
npx skills add rhavekost/clinical-toolkit

# Cursor (with skillport)
skillport update rhavekost/clinical-toolkit

# Gemini CLI
gemini extensions update https://github.com/rhavekost/clinical-toolkit
```

### Symlinked Installation

```bash
cd clinical-toolkit
git pull origin main
```

### Copied Installation

```bash
# Remove old version
rm -rf ~/.claude/plugins/clinical-toolkit

# Re-install
git clone https://github.com/rhavekost/clinical-toolkit.git
cp -r clinical-toolkit ~/.claude/plugins/clinical-toolkit
```

---

## Uninstalling

### Claude Code

```bash
# Quick install
/plugin uninstall clinical-toolkit

# Manual
rm -rf ~/.claude/plugins/clinical-toolkit
```

### GitHub Copilot

```bash
npx skills remove rhavekost/clinical-toolkit
# Or manually remove from .github/skills/
```

### Cursor

```bash
# With skillport
skillport remove rhavekost/clinical-toolkit

# Manual
rm -rf ~/.cursor/skills/clinical-toolkit
# Or remove from project: rm -rf .cursor/skills/clinical-toolkit
```

### Gemini CLI

```bash
gemini extensions uninstall clinical-toolkit
# Or manually remove from ~/.gemini/skills/ or .gemini/skills/
```

---

## Need Help?

- **Documentation Issues:** [GitHub Issues](https://github.com/rhavekost/clinical-toolkit/issues)
- **Platform-Specific Help:**
  - [Claude Code Documentation](https://docs.anthropic.com/claude/docs/claude-code)
  - [GitHub Copilot Agent Skills](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills)
  - [Cursor Documentation](https://cursor.com/docs)
  - [Gemini CLI Documentation](https://geminicli.com/docs/)

---

*For quick reference, see [README.md](../README.md)*
