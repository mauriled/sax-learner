import { useEffect, useRef } from 'react'
import * as Tone from 'tone'

export interface AudioPlayerProps {
  selectedNote: string
}

const NOTE_FREQ: Record<string, string> = {
  C4: 'C4',
  D4: 'D4',
  E4: 'E4',
  F4: 'F4',
  G4: 'G4',
}

export default function AudioPlayer({ selectedNote }: AudioPlayerProps) {
  const synthRef = useRef<Tone.Synth | null>(null)

  useEffect(() => {
    const synth = new Tone.Synth().toDestination()
    synthRef.current = synth
    return () => {
      synth.dispose()
    }
  }, [])

  const play = async () => {
    await Tone.start()
    const note = NOTE_FREQ[selectedNote]
    if (note && synthRef.current) {
      synthRef.current.triggerAttackRelease(note, '8n')
    }
  }

  return (
    <div className="rounded-lg border border-brass/40 p-2">
      <h2 className="text-lg font-semibold mb-1">Audio Player</h2>
      <button
        type="button"
        onClick={play}
        className="px-4 py-2 rounded bg-brass text-black font-medium"
      >
        Play {selectedNote}
      </button>
    </div>
  )
}
