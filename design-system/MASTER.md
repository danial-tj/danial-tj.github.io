# Vancouver Journey

A separate original direction for Danial's portfolio. Preserve the Persian museum at `C:/Users/Danial/Documents/Codex/2026-09-20/do-y/outputs/portfolio`.

Design read: an exploratory developer portfolio with a quiet 16-bit adventure-game language and a geographically coherent Vancouver waterfront backdrop. Scenic artwork, warm character, legible HTML content.

Latest correction: no added foreground tree sprites. View east/east-southeast from offshore west of First Narrows. North Shore communities and mountains occupy the left/north shore. Stanley Park and downtown occupy one continuous right/south peninsula; no channel separates park and downtown. Lions Gate spans First Narrows between the North Shore and Prospect Point, with its southern approach entering Stanley Park. The second stop is The shoreline, not a forest. See GEOGRAPHY.md for map references. Geographic relationships matter; do not return to the original arbitrary landmark collage.

Design variance 8, motion intensity 8, visual density 3. Motion purpose: spatial continuity and storytelling for a first visit. The character walks only when scroll position changes. No wheel interception, autoplay music, cursor replacement, or inert decorative controls.

UI/UX search matched pixel-game typography (Press Start 2P / VT323), but its brutalist/neon palette and route-transition advice did not fit this brief. Use the quieter Pixelify / Manrope pairing, evergreen ink, pale mint sky, sandstone ground, warm orange coat. Sharp corners and small offset shadows relate the UI to the pixel world. Normal copy remains Manrope for reading.

GSAP ScrollTrigger reads native document progress. CSS sticky holds the stage; canvas paints a low-resolution deterministic scene. No continuous React rerenders, no permanent RAF loop. Five journey stops; every project also appears in normal HTML. System reduced motion and user Still mode skip the long walk.

Desktop: 1440 x 900 target composition. Mobile: retain journey at 390px, compact two-row trail controls. Copy panels remain readable, essential information is outside the animation. Dark system preference changes the reading sections; the game scene retains its authored daytime light.

Sources: existing portfolio content and screenshots; generated Vancouver panorama; locally vendored existing GSAP 3.15.0 and ScrollTrigger; Google Fonts Pixelify Sans (OFL) and existing self-hosted Manrope. The October 4 refinement adapts the numbered-checkpoint design from 21st's 8bit Timeline Horizontal; see REFERENCE-RESOURCES.md and ../DESIGN.md for the updated layout and sources.
