# Vancouver Journey

An original pixel-art, scroll-driven portfolio direction for Danial Tajabadipour. A character walks through a Vancouver waterfront setting, stopping along the shoreline, lookout, harbour, and quiet corner. Projects remain available as normal HTML below the walk.

Published at [danial-tj.github.io](https://danial-tj.github.io/). This is the approved Vancouver portfolio; previous designs remain preserved in Git history and the local design archive.

## Publishing

The public source repository is [danial-tj/danial-tj.github.io](https://github.com/danial-tj/danial-tj.github.io). Push approved changes to its `main` branch to publish. The `Publish portfolio` GitHub Actions workflow runs the JavaScript checks, builds `dist`, and deploys only that directory to GitHub Pages. It can also be run manually from the repository's Actions tab. No hosting secrets, dependencies, or separate hosting account are required.

The former React portfolio is preserved at commit `5909d3db73fb8bd31b26327d01cc720d1f46c6fe`; the former deployed output remains on the `gh-pages` branch at `a246aaedb042654e38177a71e344a1aae0830eac`.

## Run

Node.js 22+; no package installation required. GSAP and ScrollTrigger are vendored locally with their license notices.

```sh
npm run dev
```

Open http://127.0.0.1:5175. `npm run check` verifies JS syntax. `npm run build` creates a standalone static `dist` folder and checks the entry-point assets. Stop the development server before using `npm run preview`, which serves `dist` on the same port.

## Edit

- `index.html`: existing profile, project content, semantic navigation, and links.
- `src/style.css`: Pixelify/Manrope typography, layout, responsive controls, and light/dark reading sections.
- `src/main.js`: native scroll integration, chapters, focus management, and Still mode.
- `src/scene.js`: deterministic pixel renderer, walking character, scenery, and trail props.
- `assets/vancouver-geography-v2.png`: current map-informed panorama. The first panorama and unused cedar are retained for comparison, but are not loaded by the site.
- `assets/danial-subtle-stubble-v6.png`: current transparent character sprite atlas with a face-only correction to Danial's facial-hair preference: a very light, narrow moustache and subtle short beard/stubble along the lower cheeks, jaw, and chin. Personalized curls and the Vancouver business casual outfit remain: charcoal casual zip jacket, white Oxford shirt, navy chinos, white On THE ROGER-style court sneakers, and a black backpack. Walking poses are retained. Prompt: `design-system/SUBTLE-STUBBLE-PROMPT.json`; outfit prompt: `design-system/VANCOUVER-CASUAL-PROMPT.json`. Earlier alternatives remain preserved as `assets/danial-vancouver-casual-v5.png`, `assets/danial-business-casual-v4.png`, `assets/danial-streetwear-v3.png`, `assets/danial-sprites-v2.png`, and `assets/explorer-sprites-v1.png`.
- `assets/`: existing project screenshots and self-hosted fonts.
- `assets/projects/project-illustrations-v1.png`: labelled concept cover for C++ Trading Bot. `assets/projects/market-indicators.jpg` is an actual live-demo screenshot. `concealed-captioning-preview.jpg` and `aeropilot-preview.jpg` show the approved local application designs; the links lead to their source repositories while public hosting is pending.
- `design-system/PROJECT-SOURCES.md`: verified descriptions and repositories for the three newer projects. The page now includes all six projects.
- `design-system/DESIGN-TOOLKIT-HANDOFF.md`: design skills, tools, references, and a reusable prompt for another UI chat.
- `design-system/MASTER.md`: intent and constraints; `ART-PROMPTS.json`: exact generated artwork prompts.

## Interaction

Scroll down to walk right; scroll up to turn and walk back. Walking frames advance with scroll distance and settle to idle after scrolling stops. Buttons jump directly to the five stops. Keyboard activation jumps instantly. The persistent Still mode collapses the long animated section. System reduced motion enables the static version automatically. Reading project content never requires the canvas.

GSAP ScrollTrigger reads progress; CSS sticky holds the view; native scrolling remains intact. The 2D canvas draws only on scroll, resize, image load, or the final idle state, with no permanent animation loop. All art and fonts are local. There is no analytics, backend, or sound. Hosting is static GitHub Pages over HTTPS.

The backdrop looks east into Burrard Inlet from west of First Narrows: North/West Vancouver and mountains on the left, Stanley Park continuously attached to the downtown peninsula on the right, with Lions Gate linking the two shores. Coastline relationships follow the City of Vancouver map; building forms, mountain detail, distances, and the foreground walking path remain stylized rather than a measured reconstruction. The character is a personalized pixel-art version of Danial with a very light, narrow moustache and subtle short beard/stubble, wearing Vancouver business casual: a charcoal casual zip jacket, white Oxford shirt, navy chinos, white court sneakers, and a black backpack. The résumé link is temporarily hidden: its existing Google Drive URL returned HTTP 401 to an anonymous request during launch checks. Restore it once public sharing is enabled.
