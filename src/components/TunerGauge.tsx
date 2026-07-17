export interface TunerGaugeProps {
  cents: number
}

export default function TunerGauge({ cents }: TunerGaugeProps) {
  const clamped = Math.max(-50, Math.min(50, cents))
  const position = 50 + (clamped / 50) * 50

  return (
    <div className="rounded-lg border border-brass/40 p-2">
      <h2 className="text-lg font-semibold mb-1">Tuner</h2>
      <div className="relative h-8 bg-gray-700 rounded">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white" />
        <div
          className="absolute top-0 bottom-0 w-2 bg-brass rounded"
          style={{ left: `calc(${position}% - 4px)` }}
        />
      </div>
      <p className="text-sm text-center mt-1">{cents.toFixed(1)} cents</p>
    </div>
  )
}
