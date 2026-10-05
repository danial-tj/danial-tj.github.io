# The scenic route

A personal developer portfolio as a pixel-art walk along Vancouver's waterfront. The character moves with the visitor's scroll; places introduce the person and projects. This is an authored game scene, with calm readable controls.

## Preserve

- Brand the header as `D.` and `Danial`. Biography: CS & Statistics, with a concentration in Computer Science. Do not include Persian-roots wording in the public biography.
- Pixelify for display type and checkpoint numerals; Manrope for reading and controls.
- Forest ink `#153e36`, mint sky `#b9decf`, paper surfaces `#f4f4df`; charcoal, white, navy, and black for the character's outfit.
- Danial's clarified preference is Vancouver business casual with a backpack: navy pants, a white Oxford shirt, white On THE ROGER-style court sneakers, and a casual jacket. The blazer, tan chinos, and loafers in v4 were too formal. Retain the more casual direction in future outfit refinements unless he requests a change.
- Danial's facial hair should be subtle: a very light, narrow moustache with short stubble/beard along the lower cheeks, jaw, and chin. The v5 moustache was too thick. Preserve this correction and his personalized curls in future character edits.
- North Shore on the left; Stanley Park continuous with downtown on the right. Follow `design-system/GEOGRAPHY.md`. Never add foreground tree sprites.
- The original Persian museum portfolio remains a separate preserved project.

## Composition

- One two-line hero headline, a short two-line introduction, and one action in the open sky.
- Keep the landscape readable below the text. Later chapter panels are compact, at the upper left, with two-line headings and one short paragraph.
- Rectangular controls and square checkpoints; no rounded dashboard styling, glass panels, or decorative badges.
- The route toolbar has a location, five numbered stops on a dashed track, and a motion control. Distinguish current, completed, and upcoming stops without relying on colour alone.
- Mobile keeps every stop available in a single second toolbar row. Maintain at least 44px targets and keep the character above the toolbar.

## Motion and interaction

- Scroll is the input. Walking stops when scroll stops; no perpetual animation loop.
- Keep the face identical across gait frames: the renderer shares the idle head above a neck seam and aligns the animated body below. Independently generated heads flicker when reduced to the scene's pixel scale.
- The lookout's AeroPilot drone must read as a quadcopter with four rotors and a camera; the viewing telescope needs a distinct eyepiece, barrel, lens, and pedestal. Keep both recognizable at phone size.
- The protagonist uses `assets/danial-subtle-stubble-v6.png`: Danial's personalized face with short dark curls, strong brows, a very light, narrow moustache, and subtle short beard/stubble along the lower cheeks, jaw, and chin; a charcoal casual zip jacket, white Oxford shirt, navy chinos, white court sneakers, and a black backpack. Keep one scale and foot baseline across animation frames. Idle uses a standing pose; reversing scroll mirrors the sprite. Keep the label above the hair. Exact face correction prompt: `design-system/SUBTLE-STUBBLE-PROMPT.json`; outfit prompt: `design-system/VANCOUVER-CASUAL-PROMPT.json`.
- Preserve `assets/explorer-sprites-v1.png`, `assets/danial-sprites-v2.png`, `assets/danial-streetwear-v3.png`, `assets/danial-business-casual-v4.png`, and `assets/danial-vancouver-casual-v5.png` as earlier character and outfit alternatives.
- Navigation lands beside the corresponding landmark. Stop positions and scene positions share one source.
- Six projects live in the HTML collection. The three newest additions are Concealed Captioning (nwHacks 2026 team prototype), Market Indicators, and C++ Trading Bot (backtesting prototype). Ground copy in `design-system/PROJECT-SOURCES.md`. The market image is an actual app screenshot; captioning and trading covers are explicitly labelled illustrations.
- Chapter changes use a short interruptible opacity/position transition. Hide inactive links from focus immediately.
- Still mode and device reduced-motion preferences settle to an immediate static view. Projects stay readable outside the scene.

## Design references

See `design-system/REFERENCE-RESOURCES.md` for the user's video links, exact resources used, and the generated layout reference. `design-system/MASTER.md` records the original foundation.
