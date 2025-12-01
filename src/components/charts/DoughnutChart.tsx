'use client'

import { Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

interface DoughnutChartProps {
  data: {
    online: number
    local: number
    eventos: number
  }
  title: string
}

export default function DoughnutChart({ data, title }: DoughnutChartProps) {
  const chartData = {
    labels: ['Online', 'Local', 'Eventos'],
    datasets: [
      {
        data: [data.online, data.local, data.eventos],
        backgroundColor: [
          '#C41010',
          '#FFCC00',
          '#2EA043',
        ],
        borderColor: [
          '#A00D0D',
          '#E6B800',
          '#258A38',
        ],
        borderWidth: 3,
      },
    ],
  }
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          padding: 15,
          font: {
            size: 14,
            weight: 'bold',
          },
          color: '#333',
        },
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 18,
          weight: 'bold',
        },
        color: '#C41010',
        padding: {
          bottom: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            const label = context.label || ''
            const value = context.parsed || 0
            const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0)
            const percentage = ((value / total) * 100).toFixed(1)
            return `${label}: ${percentage}%`
          },
        },
      },
    },
  }
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border-4 border-jalapeno-green h-[400px]">
      <Doughnut data={chartData} options={options} />
    </div>
  )
}

