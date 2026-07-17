import { useState } from 'react'
import StaffNotation from './components/StaffNotation'
import FingeringDiagram from './components/FingeringDiagram'
import AudioPlayer from './components/AudioPlayer'
import Tuner from './components/Tuner'
import InstrumentSelector from './components/InstrumentSelector'
import './App.css'

function App() {
  const [selectedNote, setSelectedNote] = useState('C4')
  const [instrument, setInstrument] = useState<'alto' | 'tenor'>('alto')

  return (
    <div className="p-4 max-w-4xl mx-auto space-y-4">
      <header className="text-center">
        <h1 className="text-3xl font-bold text-brass">Sax Learner</h1>
        <p className="text-sm">Practice notes, fingerings, and tuning</p>
      </header>

      <InstrumentSelector instrument={instrument} onChange={setInstrument} />

      <StaffNotation selectedNote={selectedNote} onSelectNote={setSelectedNote} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FingeringDiagram selectedNote={selectedNote} />
        <AudioPlayer selectedNote={selectedNote} />
      </div>

      <Tuner cents={0} history={[12, -5, 3, -8, 0, 4]} />
    </div>
  )
}

export default App
