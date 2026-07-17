import { useEffect, useRef } from 'react'
import { Renderer, Stave, StaveNote, Formatter } from 'vexflow'

export interface StaffNotationProps {
  selectedNote: string
  onSelectNote: (note: string) => void
  onPlayNote?: (note: string) => void
}

const NOTES = ['C4', 'D4', 'E4', 'F4', 'G4']

export default function StaffNotation({ selectedNote, onSelectNote, onPlayNote }: StaffNotationProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    container.innerHTML = ''
    const renderer = new Renderer(container, Renderer.Backends.SVG)
    renderer.resize(600, 160)
    const context = renderer.getContext()

    const stave = new Stave(10, 20, 560)
    stave.addClef('treble').setContext(context).draw()

    const staveNotes = NOTES.map(
      (n) => new StaveNote({ keys: [n.toLowerCase()], duration: 'q' }),
    )
    Formatter.FormatAndDraw(context, stave, staveNotes)

    const svg = container.querySelector('svg')
    if (svg) {
      svg.querySelectorAll('g').forEach((g, i) => {
        const note = NOTES[i]
        if (!note) return
        g.setAttribute('style', 'cursor: pointer;')
        g.addEventListener('click', () => {
          onSelectNote(note)
          onPlayNote?.(note)
        })
        if (note === selectedNote) {
          g.setAttribute('fill', '#c9a227')
        }
      })
    }
  }, [selectedNote, onSelectNote, onPlayNote])

  return (
    <div className="rounded-lg border border-brass/40 p-2">
      <h2 className="text-lg font-semibold mb-1">Staff Notation</h2>
      <div ref={containerRef} className="flex justify-center" />
    </div>
  )
}
