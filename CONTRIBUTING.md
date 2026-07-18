# Contributing

## Git Workflow

- Default branch is `main`; never commit or push to it directly.
- Create feature branches with the prefix `fm/<topic>` (e.g., `fm/add-new-feature`).
- Push via the no-mistakes gate: `git push no-mistakes <branch>`.
- Do not merge PRs yourself; create the PR and let CI complete.

## Code Style

This project uses [oxlint](https://oxc.rs) for linting. Run `npm run lint` to check your code.

Key style conventions:
- Functional components with TypeScript interfaces for props
- Tailwind CSS classes for styling (v3 with PostCSS)
- React 19 with hooks for state management

## Testing Approach

Currently, testing is handled via:
- **Type checking**: Run automatically via `npm run build` (which executes `tsc -b`)
- **Linting**: Run via `npm run lint` (uses oxlint)
- No dedicated test framework is configured

Before submitting changes:
1. Run `npm run lint` to ensure no lint errors
2. Run `npm run build` to verify TypeScript compiles successfully

## Project Structure

```
src/
├── components/
│   ├── App.tsx            # Main app with shared state
│   ├── StaffNotation.tsx  # VexFlow staff rendering
│   ├── FingeringDiagram.tsx # SVG key diagram
│   ├── AudioPlayer.tsx    # Tone.js synthesizer
│   ├── Tuner.tsx          # Tuner container
│   ├── TunerGauge.tsx     # Visual tuning indicator
│   ├── HistoryChart.tsx   # Chart.js tuning history
│   └── InstrumentSelector.tsx # Alto/tenor toggle
└── main.tsx             # React entry point
```