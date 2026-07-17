import TunerGauge from './TunerGauge'
import HistoryChart from './HistoryChart'

export interface TunerProps {
  cents?: number
  history?: number[]
}

export default function Tuner({ cents = 0, history = [] }: TunerProps) {
  return (
    <div className="space-y-2">
      <TunerGauge cents={cents} />
      <HistoryChart history={history} />
    </div>
  )
}
