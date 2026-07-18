# Sax Learner

An interactive web application for learning saxophone fingerings, reading sheet music, and practicing pitch tuning.

## Features

- **Staff Notation** - Visual treble clef notation with clickable notes rendered using VexFlow. Select any note to see its fingering and hear its pitch.
- **Fingering Diagram** - Interactive saxophone fingering chart showing which keys to press for each note. Works with alto and tenor saxophone layouts.
- **Tuner** - Visual pitch tuning indicator with a gauge showing cents deviation and a history chart tracking your tuning accuracy over time.
- **Audio Player** - Built-in synthesizer using Tone.js to play reference pitches for each note.

## Quick Start

```bash
npm install          # Install dependencies
npm run dev          # Start dev server at http://localhost:5173
npm run build        # Build for production (includes PWA service worker)
npm run lint         # Run oxlint
```

## Available Controls

### Selecting Notes
- Click any note on the staff notation to select it
- The selected note will be highlighted in brass color (#c9a227)

### Playing Audio
- Click the "Play {note}" button in the Audio Player panel to hear a reference pitch
- Or click directly on a note in the staff notation to hear it automatically

### Switching Instruments
- Use the instrument selector to toggle between alto and tenor saxophone
- The fingering diagram updates to show the appropriate key layout

### Using the Tuner
- The tuner gauge shows pitch accuracy in cents
- Left of center = flat, right = sharp, center = in tune
- The history chart displays recent tuning measurements

## Practice Workflow

1. Select a note on the staff or use the instrument selector
2. Observe the correct fingering in the diagram
3. Play the reference audio to hear the target pitch
4. Use the tuner to check and adjust your playing accuracy