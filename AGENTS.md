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

## Architecture

### Component Hierarchy
```
App.tsx
├── InstrumentSelector     # Selects alto/tenor saxophone
├── StaffNotation          # VexFlow-rendered treble clef (click to select)
├── FingeringDiagram       # SVG saxophone key visualization
├── AudioPlayer            # Tone.js synth playback
└── Tuner
    ├── TunerGauge         # Cents deviation indicator
    └── HistoryChart       # Chart.js tuning history line chart
```

### Data Flow
- `selectedNote` and `instrument` state are managed in App.tsx
- StaffNotation calls `onSelectNote` and `onPlayNote` callbacks on click
- FingeringDiagram reads fingering data from `FINGERINGS` constant
- AudioPlayer registers its play function via `registerPlay` ref for external access

## Fingering Data

`src/components/FingeringDiagram.tsx` defines:
- `KEY_LAYOUT`: Array of 8 keys (L1-L4 left hand, R1-R4 right hand) with SVG coordinates
- `FINGERINGS`: Record mapping note names (C4-C5) to arrays of pressed key IDs

## Note Frequencies

`src/components/AudioPlayer.tsx` contains `NOTE_FREQ`:
- Maps note names (C4-C5) to Tone.js pitch strings
- Used by the Tone.Synth to generate reference audio

## PWA Configuration

`vite.config.ts` configures vite-plugin-pwa with:
- `registerType: 'autoUpdate'` - Auto-updates service worker on new content
- Manifest with name "Sax Learner" and short_name "SaxLearner"
- Icons array empty (add icon files to public/ and register in manifest)

## Testing

Currently lint + typecheck via `npm run build` (runs `tsc -b`). No dedicated test framework.

## Git workflow
- Default branch is `main`; never commit or push to it directly.
- Create feature branches (`fm/<topic>`); push via the no-mistakes gate: `git push no-mistakes <branch>`.
- Do not merge PRs yourself.

## no-mistakes
Run `no-mistakes doctor` to verify the gate/daemon. The repo is already initialized. Never restart the no-mistakes daemon.
