# Project agent memory

This file is the project's committed home for project-intrinsic agent knowledge: build, test, release, architecture, and sharp-edge notes that should travel with the code.

- Add durable project-specific notes here as they are discovered through real work.

## Maintaining this file

Keep this file for knowledge useful to almost every future agent session in this project.
Do not repeat what the codebase already shows; point to the authoritative file or command instead.
Prefer rewriting or pruning existing entries over appending new ones.
When updating this file, preserve this bar for all agents and keep entries concise.

## Stack
React 19 + TypeScript + Vite 8. Tailwind **v3** (classic `tailwind.config.js` + PostCSS/`autoprefixer`).
Key libraries: `vexflow` (staff notation), `tone` (audio synth), `chart.js` + `react-chartjs-2` (tuner charts), `vite-plugin-pwa` (PWA).

## Setup & build
```bash
npm install          # install deps
npm run dev          # start dev server (http://localhost:5173)
npm run build        # tsc -b && vite build (also emits PWA service worker)
npm run lint         # oxlint
```
Index of components: `src/components/` (StaffNotation, FingeringDiagram, AudioPlayer, Tuner/TunerGauge/HistoryChart, InstrumentSelector). Shared UI state (selected note, instrument) lives in `src/App.tsx`.

## Git workflow
- Default branch is `main`; never commit or push to it directly.
- Create feature branches (`fm/<topic>`); push via the no-mistakes gate: `git push no-mistakes <branch>`.
- Do not merge PRs yourself.

## no-mistakes
Run `no-mistakes doctor` to verify the gate/daemon. The repo is already initialized. Never restart the no-mistakes daemon.
