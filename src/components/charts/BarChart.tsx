'use client'

import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

interface BarChartProps {
  data: Array<{
    nombre: string
    vendidos: number
  }>
  title: string
}

export default function BarChart({ data, title }: BarChartProps) {
  const chartData = {
    labels: data.map(item => item.nombre),
    datasets: [
      {
        label: 'Vendidos',
        data: data.map(item => item.vendidos),
        backgroundColor: '#FFCC00',
        borderColor: '#C41010',
        borderWidth: 2,
        borderRadius: 8,
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
          weight: 'bold' as const,
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
    <div className="bg-white rounded-xl shadow-lg p-6 border-4 border-jalapeno-yellow h-[400px]">
      <Bar data={chartData} options={options} />
    </div>
  )
}

