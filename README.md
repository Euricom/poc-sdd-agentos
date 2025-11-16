# AgentOS Starter Template

This template provides a minimal setup to get started with AgentOS.

## Demo

### Installing

Base Installation; install AgentOS in your user folder (`~/agent-os`)

```bash
# Install in your user folder
curl -sSL https://raw.githubusercontent.com/buildermethods/agent-os/main/scripts/base-install.sh | bash
```

Project Installation; install AgentOS in your project folder

```bash
# Run this script inside your project folder
~/agent-os/scripts/project-install.sh --profile nextjs

# Cursor, Copilot project installation
~/agent-os/scripts/project-install.sh --agent-os-commands true
```

### Edit base rules

The standards folder is where you can add your own standards for your project.

```
~/agent-os/
├── config.yml
└── profiles
    ├── default
    │   ├── agents
    │   │   ├── implementation-verifier.md
    │   │   ├── implementer.md
    │   │   └── *.md
    │   ├── commands
    │   │   ├── create-tasks.md
    │   │   ├── implement-tasks.md
    │   │   └── *.md
    │   ├── standards
    │   │   ├── backend/*.md
    │   │   ├── frontend/*.md
    │   │   ├── global/*.md
    │   │   └── testing/*.md
    │   └── workflows
    │      ├── implementation
    │      ├── planning
    │      └── specification
    └── custom
        └── standards/**/*.md
```

**Pro tip**: Be opinionated! The more specific your standards, the more consistent your agent's output.

### Using AgentOS

**Start a new product**

```prompt
/plan-product

I'm building an app where users can post their Claude Code agent files (.md files) and browse files posted by others. When browsing, users will be able to open each file, view its description, and copy its contents for reuse.

This will be a Next.js front-end only project for now. I won't be implementing any database, authentication, or backend logic yet; everything will use static or mock data for the Ul and UX flow.

Target Users:

Al developers and teams using Claude Code who want to share and discover agent files.

Key Features:

- Users can post Claude Code agent files (.md files)
- Users can browse agent files shared bv others
- Browse view shows file description and content preview
- Users can open files and copy their contents

Tech Stack:

- Front-end: Next.js
- No database or authentication at this stage (static/mock data only)
```

Once your agent has collected the basic details it needs, i

- Create - agent-os/product/ structure
  - mission (product vision): `agent-os/product/mission.md`
  - roadmap (5-phase development plan): `agent-os/product/roadmap.md`
  - tech stack: `agent-os/product/tech-stack.md`

**Important**: Review and edit the generated documentation to ensure it accurately reflects your vision and goals.

**Create a new feature**

```prompt
/shape-spec
```

Once your agent has collected the basic details it needs, i
