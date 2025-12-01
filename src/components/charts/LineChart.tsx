'use client'

import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

interface LineChartProps {
  data: Array<{
    date: string
    ventas: number
  }>
  title: string
}

export default function LineChart({ data, title }: LineChartProps) {
  const chartData = {
    labels: data.map(item => {
      const date = new Date(item.date)
      return date.toLocaleDateString('es-MX', { month: 'short', day: 'numeric' })
    }),
    datasets: [
      {
        label: 'Ventas',
        data: data.map(item => item.ventas),
        borderColor: '#C41010',
        backgroundColor: 'rgba(196, 16, 16, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: '#FFCC00',
        pointBorderColor: '#C41010',
        pointBorderWidth: 2,
      },
    ],
  }
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 18,
          weight: 'bold',
        },
        color: '#C41010',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#666',
          font: {
            size: 12,
          },
          callback: function(value: any) {
            return '$' + value.toLocaleString('es-MX')
          },
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
      x: {
        ticks: {
          color: '#666',
          font: {
            size: 11,
          },
        },
        grid: {
          display: false,
        },
      },
    },
  }
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border-4 border-jalapeno-red h-[400px]">
      <Line data={chartData} options={options} />
    </div>
  )
}

