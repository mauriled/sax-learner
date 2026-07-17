export interface InstrumentSelectorProps {
  instrument: 'alto' | 'tenor'
  onChange: (instrument: 'alto' | 'tenor') => void
}

export default function InstrumentSelector({ instrument, onChange }: InstrumentSelectorProps) {
  return (
    <div className="rounded-lg border border-brass/40 p-2">
      <h2 className="text-lg font-semibold mb-1">Instrument</h2>
      <div className="flex gap-2 justify-center">
        {(['alto', 'tenor'] as const).map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={`px-4 py-2 rounded font-medium capitalize ${
              instrument === opt ? 'bg-brass text-black' : 'bg-gray-700 text-white'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  )
}
