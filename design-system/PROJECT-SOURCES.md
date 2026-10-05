# Portfolio project sources

Facts reviewed on **2026-10-04** against public GitHub README files, repository file lists, package manifests, and the implementation links below. These notes support portfolio copy; they do not claim the projects were executed or tested during this review.

## Concealed Captioning

- **Display name:** Concealed Captioning, supplied by Danial. The repository retains the default `Create Next App` metadata rather than this product name.
- **Repository:** https://github.com/justintyang17/nwHacks2026
- **Status:** nwHacks 2026 hackathon prototype.
- **Suggested description:** A video-editing prototype combining automated identity blurring, timed captions, and captioned-video export.
- **Supported tags:** Next.js, TypeScript, Python, Whisper, OpenCV, FFmpeg. The package manifest also includes React and Material UI.
- **Visual:** `assets/projects/project-illustrations-v1.png`, top portion. Conceptual artwork generated with built-in ImageGen and explicitly labelled as an illustration; it is not a screenshot of the application.

Evidence:

- [Editor workflow](https://github.com/justintyang17/nwHacks2026/blob/main/my-app/app/edit/page.tsx): video preview, blur action, subtitle generation, transcript display, WebVTT preview, and edited-clip export.
- [Blurring implementation](https://github.com/justintyang17/nwHacks2026/blob/main/my-app/scripts/blur_faces.py): YOLO person detections and OpenCV blur over an approximate upper-body/head region.
- [Whisper transcription](https://github.com/justintyang17/nwHacks2026/blob/main/my-app/scripts/transcribe_whisper.py): timed transcription segments and an explicit English translation mode.
- [Subtitle export](https://github.com/justintyang17/nwHacks2026/blob/main/my-app/app/api/burn-subtitles/route.ts): creates SRT captions and calls FFmpeg to burn them into the video.
- [Package manifest](https://github.com/justintyang17/nwHacks2026/blob/main/my-app/package.json): Next.js 16.1.3, React 19, TypeScript, Material UI, and FFmpeg-related dependencies.

Copy limits: the language selector offers five languages, but the inspected Whisper implementation does not establish full translation into all five. Do not claim five-language translation, guaranteed anonymity, face-detection accuracy, or production readiness. No application screenshots or demo media were found in the repository tree; its public assets are starter SVGs and a favicon. No live deployment was verified during this research.

## Market Indicators

- **Repository:** https://github.com/Teejay021/market-indicators
- **Live demo:** https://market-indicators.vercel.app
- **Status:** Live web application; the demo was opened and captured separately in the browser.
- **Suggested description:** A cryptocurrency dashboard with search, 30-day candlestick charts, and server-side caching.
- **Supported tags:** Next.js, TypeScript, Tailwind CSS, lightweight-charts, CoinGecko API.
- **Visual:** `assets/projects/market-indicators.jpg`, an actual screenshot captured from the live demo's Bitcoin 30-day chart. This image is not generated artwork.

Evidence:

- [README](https://github.com/Teejay021/market-indicators/blob/main/README.md): cryptocurrency search, top market-cap coins, 30-day OHLC detail views, caching, and request limiting.
- [Home page](https://github.com/Teejay021/market-indicators/blob/main/app/page.tsx): market-cap coin cards, search, loading/error states, and links to detail views.
- [Package manifest](https://github.com/Teejay021/market-indicators/blob/main/package.json): Next.js 16.0.1, TypeScript, Tailwind CSS, and lightweight-charts.

Copy limits: the README says Next.js 15 while the current manifest specifies 16.0.1; use the unversioned Next.js tag in portfolio copy. Do not repeat the README's illustrative performance or API-usage figures as measured project results. No committed application screenshots were found; the portfolio screenshot comes from the live application.

## C++ Trading Bot

- **Repository:** https://github.com/Teejay021/trading-bot-cpp
- **Status:** Educational backtesting prototype.
- **Suggested description:** A modular C++ research project for testing SMA, EMA, and RSI strategies against historical data, with CSV/API inputs and configurable position sizing.
- **Supported tags:** C++17, CMake, Backtesting.
- **Visual:** `assets/projects/project-illustrations-v1.png`, bottom portion. Conceptual artwork generated with built-in ImageGen and explicitly labelled as an illustration; it is not a screenshot, performance report, or evidence of trading results.

Evidence:

- [README](https://github.com/Teejay021/trading-bot-cpp/blob/main/README.md): educational scope, CSV/API data inputs, strategy framework, and report-generation features. Machine-learning signal generation is listed as a future enhancement.
- [Build configuration](https://github.com/Teejay021/trading-bot-cpp/blob/main/CMakeLists.txt): C++17, CMake, and component/integration test targets.
- [Strategy calculations](https://github.com/Teejay021/trading-bot-cpp/blob/main/src/strategy/strategy.cpp): SMA, EMA, and RSI calculations.
- [Backtester](https://github.com/Teejay021/trading-bot-cpp/blob/main/src/backtester/backtester.cpp): historical simulation, strategy signals, risk-driven position closure, and partially implemented statistics.
- [Risk manager](https://github.com/Teejay021/trading-bot-cpp/blob/main/src/risk/risk_manager.cpp): configurable position sizing and stop-loss/take-profit conditions, alongside simplified accounting and unfinished risk checks.

Copy limits: do not describe the project as production-ready, a live execution system, AI-driven, or a validated profitable strategy. Per-trade P&L is assigned zero in the inspected backtester, portfolio value is simplified to cash, and the daily-loss check returns true without implementing its limit. Avoid claims of comprehensive analytics, verified realistic cost accounting, implemented daily-loss protection, or measured trading returns. No screenshots, generated reports, or live demo were found in the repository tree.
