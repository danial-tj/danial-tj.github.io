# Design resources used in the October 4 refinement

The user's [YouTube reference](https://www.youtube.com/shorts/3Y7I6nL6QJE) and [pinned comment](https://www.youtube.com/watch?v=3Y7I6nL6QJE&lc=UgxEKDCc4r_LSD6V0iJ4AaABAg) list a mixture of skills, an MCP service, a design reference collection, and a browser CLI.

- **[Taste Skill](https://www.tasteskill.dev/):** the existing `design-taste-frontend` skill was already installed. Applied its audit-first approach, hierarchy, restrained density, and preservation of the established visual identity.
- **[21st MCP](https://github.com/21st-dev/magic-mcp):** verified the connected tool works. Retrieved [8bit Timeline Horizontal by theorcdev](https://21st.dev/@theorcdev/components/8bit-timeline2), demo 13934, and adapted its numbered square checkpoints and dashed connecting track to the existing native HTML/CSS journey navigation. The React component itself was not installed. One of two daily free retrievals was used; hosted AI generation is not enabled on the connected account.
- **[Vercel Web Design Guidelines](https://github.com/vercel-labs/agent-skills/blob/main/skills/web-design-guidelines/SKILL.md):** read the skill and its [current rules](https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md). Applied keyboard/focus, reduced-motion, heading balance, touch feedback, live location announcements, and safe-area checks. Used directly for this review; no global installation claimed.
- **[Image-to-Code](https://github.com/Leonxlnx/taste-skill/blob/main/skills/image-to-code-skill/SKILL.md):** generated `hero-refinement-reference.png` before changing layout, then extracted its three-part hero, stronger body type, compact toolbar, square checkpoints, and reduced incidental labels. The image is a design reference, not a flattened replacement for interactive HTML. Existing geography artwork remains unchanged.
- **[Awesome DESIGN.md](https://github.com/VoltAgent/awesome-design-md/):** used its explicit design-document approach to consolidate this project's own decisions in `DESIGN.md`. No unrelated brand theme imported.
- **[Playwright CLI](https://github.com/microsoft/playwright-cli):** reviewed its role. This environment already supplies browser control with Playwright locators and screenshots, which was used for visual and interaction verification. The separate CLI was not installed.

## Reference extraction

The reference is a 1586 × 992 desktop hero. A roughly 60px header and centered two-line pixel headline occupy the upper sky; a two-line sans-serif introduction and one rectangular primary action complete the copy. The palette stays forest green, mint, and paper. The landscape is uninterrupted across the lower half. A shallow paper toolbar uses one local position label, five numbered checkpoints, and a motion control.

Implementation keeps those proportions responsive, retains the existing background raster and walking scene, and compresses later chapter cards so their headlines fit two lines in the open sky. Typography remains real text. Component styling is adapted to native CSS rather than adding a second application framework.
