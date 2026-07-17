import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip)

export interface HistoryChartProps {
  history: number[]
}

export default function HistoryChart({ history }: HistoryChartProps) {
  const data = {
    labels: history.map((_, i) => `${i + 1}`),
    datasets: [
      {
        label: 'Cents',
        data: history,
        borderColor: '#c9a227',
        backgroundColor: 'rgba(201,162,39,0.2)',
        tension: 0.3,
      },
    ],
  }

  const options = {
    responsive: true,
    scales: {
      y: { min: -50, max: 50 },
    },
  }

  return (
    <div className="rounded-lg border border-brass/40 p-2">
      <h2 className="text-lg font-semibold mb-1">Tuning History</h2>
      <Line data={data} options={options} />
    </div>
  )
}
