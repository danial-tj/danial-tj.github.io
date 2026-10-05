# Reusable design toolkit

This is the toolkit used for the Vancouver Journey portfolio, prepared for another personal-project UI chat on the same Windows host. It combines installed local skills, a connected MCP service, built-in tools, and external references. They are not all separately installed plugins.

Checked against the local skill files, available tool metadata, and this project's records on October 4, 2026. No new installation is required to reuse the local skills. Confirm that the destination chat exposes the MCP and built-in tools before relying on them.

## Installed local skills used here

| Skill | What we used it for | Exact local source |
| --- | --- | --- |
| **design-taste-frontend / Taste** | Audit the existing design, establish a clear visual direction, improve hierarchy and density, and preserve the portfolio's identity. Intended for portfolios, landing pages, and related redesigns. | [SKILL.md](C:/Users/Danial/.codex/skills/design-taste-frontend/SKILL.md) · [Taste website](https://www.tasteskill.dev/) |
| **ui-ux-pro-max** | Search typography, palette, layout, accessibility, responsive, and motion guidance. Its suggestions were evaluated against the brief; the project retained Pixelify/Manrope and a quieter palette. | [SKILL.md](C:/Users/Danial/.codex/skills/ui-ux-pro-max/SKILL.md) |
| **animate** | Design and implement purposeful scroll-based motion, including stopping, reversing, and reduced-motion behavior. | [SKILL.md](C:/Users/Danial/.codex/skills/animate/SKILL.md) |

These skill files are reusable instructions and reference material, not application dependencies. Read the relevant skill before applying it to the new project.

## Connected service and built-in tools used here

| Tool | Status and actual usage |
| --- | --- |
| **21st.dev MCP** | Connected; current tool metadata exposes `mcp__21st__search`, `get_inspiration`, `get_component`, and `get_usage`. We retrieved [8bit Timeline Horizontal by theorcdev](https://21st.dev/@theorcdev/components/8bit-timeline2), demo **13934**, and adapted its numbered square checkpoints and dashed track. We did not install its React component. Use search for references that suit the new project; check `get_usage` before retrieving component code. Historical quota and hosted-AI entitlement in this project's older notes are not a current account check. The video's related repository is [21st Magic MCP](https://github.com/21st-dev/magic-mcp); this is a reference link, not a claim that its package was installed locally. |
| **Built-in ImageGen + imagegen skill** | Used to generate the landscape, layout reference, and personalized character atlases. Tool: `image_gen.imagegen` / `image_gen__imagegen`. Local instructions: [imagegen SKILL.md](C:/Users/Danial/.codex/skills/.system/imagegen/SKILL.md). Use for raster artwork and visual references when the brief benefits from them. |
| **Codex browser control** | Used the available `mcp__cua_repl` browser tools for the local preview, Playwright locators, screenshots, responsive checks, and interactions. Follow the browser tool's current documentation. The separate [Playwright CLI](https://github.com/microsoft/playwright-cli) was reviewed but not installed. |

## External resources applied without global installation

| Resource | What was used |
| --- | --- |
| **Vercel Web Design Guidelines** | Keyboard and focus behavior, reduced motion, heading balance, touch feedback, live announcements, and safe areas. [Skill source](https://github.com/vercel-labs/agent-skills/blob/main/skills/web-design-guidelines/SKILL.md) · [rules](https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md). Read the current source when applying it again. |
| **Image-to-Code** | Generate a visual reference, extract its composition, and implement it as responsive, interactive HTML/CSS. [Skill source](https://github.com/Leonxlnx/taste-skill/blob/main/skills/image-to-code-skill/SKILL.md). Used as a workflow reference; no separate local installation was claimed. |
| **Awesome DESIGN.md** | Record a project's visual decisions and constraints in its own `DESIGN.md`. [Reference collection](https://github.com/VoltAgent/awesome-design-md/). We used the documentation approach rather than importing another brand's theme. |

## Other installed motion skills, available when relevant

Their local files exist, but the project records do not establish that all of them were applied. Do not describe this entire list as tools already used here.

- [emil-design-eng](C:/Users/Danial/.codex/skills/emil-design-eng/SKILL.md): component polish and design-engineering details.
- [apple-design](C:/Users/Danial/.codex/skills/apple-design/SKILL.md): physical, interruptible motion, gestures, springs, and Apple-style design principles.
- [review-animations](C:/Users/Danial/.codex/skills/review-animations/SKILL.md): critique existing motion code when explicitly requested.
- [improve-animations](C:/Users/Danial/.codex/skills/improve-animations/SKILL.md): audit a codebase and produce an implementation plan; read-only on source.
- [find-animation-opportunities](C:/Users/Danial/.codex/skills/find-animation-opportunities/SKILL.md): propose useful missing motion; read-only on source.
- [animation-vocabulary](C:/Users/Danial/.codex/skills/animation-vocabulary/SKILL.md): identify the name of an effect, rather than implement it.

GSAP and ScrollTrigger are runtime libraries used in this portfolio, not Codex plugins. The new project should keep or choose its own implementation stack according to its needs.

## Ready-to-paste instruction for the new chat

> Use the design toolkit from my Vancouver portfolio to improve this project's UI. Start by reading `C:/Users/Danial/Documents/ChatGPT/personal website/vancouver-journey/design-system/DESIGN-TOOLKIT-HANDOFF.md`. Use the installed `design-taste-frontend` skill when this is a portfolio or landing-page redesign, `ui-ux-pro-max` for the UI/UX decisions, and `animate` for motion that serves a clear purpose. Inspect this project's existing UI and infer an appropriate direction from its own audience and brief; do not copy the Vancouver pixel-art style automatically. Use the connected 21st.dev MCP for suitable component references, and built-in ImageGen plus the Image-to-Code workflow when visual assets or a layout reference would help. Apply the current Vercel Web Design Guidelines and record the resulting decisions in this project's `DESIGN.md`. Keep the existing technology stack where practical, implement the changes, and verify the actual desktop/mobile UI and keyboard/reduced-motion behavior in the browser. Reuse available skills and tools; check their availability before proposing installations.

## Project evidence

- [REFERENCE-RESOURCES.md](<C:/Users/Danial/Documents/ChatGPT/personal website/vancouver-journey/design-system/REFERENCE-RESOURCES.md>): the linked video's resources and how each was applied.
- [MASTER.md](<C:/Users/Danial/Documents/ChatGPT/personal website/vancouver-journey/design-system/MASTER.md>): initial design decisions, UI/UX search outcome, and motion architecture. Some visual details were superseded by later edits.
- [Current DESIGN.md](<C:/Users/Danial/Documents/ChatGPT/personal website/vancouver-journey/DESIGN.md>): the portfolio's current visual constraints and preferences.
- [VALIDATION.md](<C:/Users/Danial/Documents/ChatGPT/personal website/vancouver-journey/VALIDATION.md>): recorded implementation and verification history.
