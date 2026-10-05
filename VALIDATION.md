# Prototype checks · October 4, 2026

- `npm run check`: pass (application and build/server JavaScript syntax).
- Existing portfolio's installed Oxlint against `src` and `scripts`: exit 0.
- `npm run build`: pass. Static output in `dist`; HTML entry-point files verified by the build script.
- Final browser preview serves `dist` at http://127.0.0.1:5175/ . This is local, not published.
- Desktop checked at 1440 × 900: entrance, forest, lookout, harbour progression, quiet-corner chapter, readable copy, all route buttons, and visible keyboard focus.
- Phone checked at 390 × 844 (375px page width with the browser scrollbar). No horizontal overflow. Reduced heading sizes prevent the introduction from wrapping into three lines. Trail controls use two rows, and the walking character stays above them.
- Project deep link from Cosmic Zoom's journey stop focuses `#cosmic-zoom`; all three real project screenshots loaded. Hidden scene chapters are inert and excluded from the accessibility tree.
- Still mode tested: long journey collapses to exactly the 900px viewport, returns to the introduction, and removes trail controls. Resume restores the journey. Preference persists locally. Default walk restored after checks.
- Current browser warning/error log: empty.
- System reduced-motion support is implemented, but OS media-preference emulation was not available in this browser API. The shared static path was checked through Still mode.
- Generated artwork and all runtime fonts/scripts are self-hosted. Art assets plus original project screenshots and fonts total about 5.5 MB before HTTP compression. Physical-device FPS, Lighthouse, and Core Web Vitals were not measured; no performance score is claimed.
- Original Persian museum source was not modified. Screenshots here are independent review captures, not replacements for the original files.

Review captures: `preview-captures/desktop.jpg` and `preview-captures/mobile.jpg`.

## Geography revision · October 4, 2026

- Removed the separately composited foreground cedars and their loading/drawing code. The second stop is now the shoreline.
- Replaced the panorama with `assets/vancouver-geography-v2.png`, using a west-of-First-Narrows view: North Shore on the left; Stanley Park and downtown on the same peninsula to the right. Primary map references and illustration limits are recorded in `design-system/GEOGRAPHY.md`.
- `npm run check` and `npm run build`: pass after the revision.
- Browser checked at the entrance, harbour, and shoreline stops; no warning/error logs. Revised scene and shoreline chapter also checked at 390 × 844, with the character clear of the route controls.
- Updated review capture: `preview-captures/geography-v2.jpg`.

## Reference-resource refinement · October 4, 2026

- Applied Taste, the connected 21st MCP's 8-bit timeline pattern, Image-to-Code, and Vercel's current interface guidelines. Full provenance and resource status: `design-system/REFERENCE-RESOURCES.md`.
- Added numbered checkpoints with completed-stop marks, compact chapter typography, clearer hero copy, 180ms interruptible chapter transitions, and shared route/landmark positions.
- Syntax and build passed, including the new `src/journey-stops.js` module.
- Agent render-path validation checked 45 forward/reverse stop arrivals across five viewport sizes. This is a geometry check, not a browser rendering benchmark.
- Browser verified the desktop entrance/lookout, the harbour at 390 × 844, and the harbour at 844 × 390. At the short landscape size the HUD bottom is 380px in a 390px viewport, with one active chapter and no horizontal overflow.
- Still mode collapses the journey to one viewport with only the introduction active; Resume restores the controls. Console warning/error log empty. Device reduced-motion code is retained; OS preference emulation was not performed.
- Review captures: `preview-captures/refined-desktop.jpg` and `preview-captures/refined-mobile.jpg`. The original geography raster is unchanged.

## Explorer character · October 4, 2026

- Replaced the rectangle avatar with `assets/explorer-sprites-v1.png`: transparent pixel-art atlas, idle pose, four walking phases, and mirrored left movement. Uniform scale and row-specific boot baselines prevent frame-size jitter.
- `npm run check` and `npm run build`: pass. RGBA dimensions verified as 1536 × 1024; sprite bounds fit their cells.
- Mocked Canvas/Image checks passed unloaded/error/malformed atlas fallback, all walking frame selections, fixed foot baseline, reverse flipping, stop-to-idle, load-triggered label update, and cleanup. These checks did not alter the raster.
- Browser checked desktop idle, reverse-facing walk, phone label/foot clearance, and Still mode. Console warning/error log empty. Final capture: `preview-captures/explorer-character.jpg`.
- No autonomous animation loop added. Background artwork and geography unchanged.

## Personalized character · October 4, 2026

- Personalized the existing atlas from the user-supplied photo with built-in ImageGen. Active file is `assets/danial-sprites-v2.png`; v1 remains preserved. The original photo is not a runtime asset.
- Verified RGBA 1536 × 1024, transparent corners, eight contained cells, retained idle/walk poses, and measured foot baselines of 487/480 per row. Updated canvas baseline values accordingly.
- Syntax/build pass. Browser verified desktop idle and mobile forward/reverse walking; label, ground, and toolbar clearance retained. Console warning/error log empty.
- Final capture: `preview-captures/danial-character.jpg`. Exact edit prompt: `design-system/DANIAL-CHARACTER-PROMPT.json`.

## Streetwear outfit · October 4, 2026

- Outfit-only ImageGen edit saved as `assets/danial-streetwear-v3.png`; previous personalized atlas preserved. Face, hair, pose layout, and movement code retained.
- RGBA 1536 × 1024, transparent corners, all eight sprites contained in their cells. Foot bounds remain compatible with existing 487/480 row anchors.
- Syntax/build pass; browser verified idle and walking at the lookout with no clipping or console warning/errors. Capture: `preview-captures/streetwear-v3.jpg`. Prompt: `design-system/STREETWEAR-PROMPT.json`.

## Business casual and backpack · October 4, 2026

- Applied the user's business-casual-with-backpack preference to `assets/danial-business-casual-v4.png`; personalized face, hair, and eight-pose layout retained. v1–v3 remain preserved.
- Verified RGBA 1536 × 1024, transparent corners, contained frames. Adjusted uniform scale to 84/464 and foot baselines to 490/481 to retain character height and ground contact.
- Syntax/build pass. Browser verified idle and walking at the lookout with the backpack visible and no clipping. Capture: `preview-captures/business-casual-v4.jpg`. Prompt: `design-system/BUSINESS-CASUAL-PROMPT.json`.

## Vancouver casual outfit · October 4, 2026

- Applied the clarified outfit: navy chinos, white Oxford, white court sneakers, charcoal casual zip jacket, black backpack. Built-in ImageGen edit saved as `assets/danial-vancouver-casual-v5.png`; earlier variants preserved.
- Verified RGBA 1536 × 1024, transparent corners and contained frames. Uniform scale 84/467 with row foot baselines 491/483 keeps the character grounded.
- Syntax/build pass. Browser verified idle at the seawall and walking at the lookout, with the shoes and backpack visible and no clipping. Console warning/error log empty.
- Capture: `preview-captures/vancouver-casual-v5.jpg`. Exact prompt: `design-system/VANCOUVER-CASUAL-PROMPT.json`.

## Subtle facial hair · October 4, 2026

- Built-in ImageGen facial-hair refinement saved as `assets/danial-subtle-stubble-v6.png`: much lighter, narrower moustache and subtle short beard stubble along the lower cheeks, jaw, and chin. Prior variants retained.
- RGBA 1536 × 1024 with transparent corners and all eight sprites contained. Row foot bounds remain 491/483, compatible with the existing renderer.
- Syntax/build pass. Refreshed desktop preview verified the updated face in the scene; console warning/error log empty.
- Capture: `preview-captures/subtle-stubble-v6.jpg`. Exact prompt: `design-system/SUBTLE-STUBBLE-PROMPT.json`.

## Stable face and lookout props · October 4, 2026

- Fixed facial-feature flicker caused by independently generated heads and nearest-neighbor downsampling. The renderer draws the canonical idle head above local y=-63, with aligned animated bodies below it. The v6 raster is unchanged.
- Read-only nearest-neighbor simulation confirms identical head pixels across five active poses and a connected neck seam. Ten mocked render cases verify idle/walking, both directions, consistent head sampling, contiguous clipping, four distinct gait frames, integer placement, and image-failure fallback.
- Reworked the existing canvas telescope and drone: stepped barrel with lens/eyepiece and pedestal; four rotor pods with arms, camera, and landing skids. Retained checkpoint positions and scroll-only drone bob.
- Syntax/build pass. Browser verified forward/reverse walking, idle/Still mode, and checkpoint-three props on desktop and at 390 × 844. No browser warning/errors. OS reduced-motion emulation was not repeated.
- Capture: `preview-captures/stable-face-lookout.jpg`.

## Profile and expanded project collection · October 4, 2026

- Updated the header to `D.` and `Danial`; removed Persian-roots copy from the public page. Shoreline/about copy now states CS & Statistics with a concentration in Computer Science.
- Added Concealed Captioning, Market Indicators, and C++ Trading Bot using verified repository/source details, preserving all three existing projects. The dashboard has a working live-demo link and actual screenshot. The two concept covers are explicitly labelled project illustrations.
- Syntax/build pass. Content checks confirm six unique project entries, valid local asset paths, capitalized branding, and corrected biography with no remaining Persian-roots wording in HTML.
- Browser checked the three new projects, revised header and about text, desktop two-column project pair, and single-column 390 × 844 layout with no horizontal overflow. Market screenshot uses contain sizing to preserve the full chart. Browser warning/error log empty.
- Review capture: `preview-captures/expanded-projects.jpg`. Sources: `design-system/PROJECT-SOURCES.md`. New-chat toolkit: `design-system/DESIGN-TOOLKIT-HANDOFF.md`. Built-in ImageGen cover prompt: `design-system/PROJECT-COVERS-PROMPT.json`.

## Approved application previews — October 4, 2026

- Replaced outdated AeroPilot and Mood Checker images and Captioning's concept illustration with the approved real application previews. The mood snapshot contains only synthetic journal entries.
- Corrected AeroPilot to a two-wheel ground rover and the React/Three.js/Python/WebSocket implementation. Existing source links remain until public demos are deployed.
- Syntax and static build passed. Browser verified the new image assets load and the project cards remain readable on desktop and at 390x844, with no horizontal overflow at the mobile breakpoint. Existing animation and portfolio layout are unchanged.
