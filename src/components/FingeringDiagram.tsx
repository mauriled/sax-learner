export interface FingeringDiagramProps {
  selectedNote: string
}

const KEY_LAYOUT = [
  { id: 'L1', x: 40, y: 60, label: 'L1' },
  { id: 'L2', x: 80, y: 60, label: 'L2' },
  { id: 'L3', x: 120, y: 60, label: 'L3' },
  { id: 'L4', x: 160, y: 60, label: 'L4' },
  { id: 'R1', x: 40, y: 110, label: 'R1' },
  { id: 'R2', x: 80, y: 110, label: 'R2' },
  { id: 'R3', x: 120, y: 110, label: 'R3' },
  { id: 'R4', x: 160, y: 110, label: 'R4' },
]

const FINGERINGS: Record<string, string[]> = {
  C4: ['L1', 'L2', 'L3'],
  D4: ['L1', 'L2', 'L3', 'L4'],
  E4: ['L1', 'L2', 'L3', 'R1'],
  F4: ['L1', 'L2', 'L3'],
  G4: ['L1', 'L2'],
  A4: ['L1', 'L2', 'L3', 'R1', 'R2'],
  B4: ['L1', 'L2', 'L3', 'R1', 'R2', 'R3'],
  C5: ['L1', 'L2', 'L3', 'R1', 'R2', 'R3', 'R4'],
}

export default function FingeringDiagram({ selectedNote }: FingeringDiagramProps) {
  const pressed = FINGERINGS[selectedNote] ?? []

  return (
    <div className="rounded-lg border border-brass/40 p-2">
      <h2 className="text-lg font-semibold mb-1">Fingering Diagram</h2>
      <svg viewBox="0 0 220 160" className="mx-auto" width="220" height="160">
        <rect x="10" y="20" width="200" height="120" rx="20" fill="#2e303a" />
        {KEY_LAYOUT.map((k) => {
          const isPressed = pressed.includes(k.id)
          return (
            <g key={k.id}>
              <circle
                cx={k.x}
                cy={k.y}
                r="16"
                fill={isPressed ? '#c9a227' : '#6b6375'}
                stroke="#08060d"
                strokeWidth="2"
              />
              <text x={k.x} y={k.y + 4} textAnchor="middle" fontSize="11" fill="#fff">
                {k.label}
              </text>
            </g>
          )
        })}
      </svg>
      <p className="text-sm text-center mt-1">
        Keys for {selectedNote}: {pressed.join(', ') || '—'}
      </p>
    </div>
  )
}
