'use client'

import { LucideIcon } from 'lucide-react'

interface MetricCardProps {
  title: string
  value: string | number
  icon: LucideIcon
  color: 'red' | 'yellow' | 'green' | 'orange'
  trend?: {
    value: number
    isPositive: boolean
  }
}

export default function MetricCard({ title, value, icon: Icon, color, trend }: MetricCardProps) {
  const colorClasses = {
    red: 'bg-jalapeno-red text-white border-jalapeno-red',
    yellow: 'bg-jalapeno-yellow text-jalapeno-red border-jalapeno-yellow',
    green: 'bg-jalapeno-green text-white border-jalapeno-green',
    orange: 'bg-jalapeno-orange text-white border-jalapeno-orange',
  }
  
  const iconBgClasses = {
    red: 'bg-white/20',
    yellow: 'bg-jalapeno-red/20',
    green: 'bg-white/20',
    orange: 'bg-white/20',
  }
  
  return (
    <div className={`rounded-xl shadow-lg p-6 border-4 ${colorClasses[color]} transition-all hover:shadow-xl transform hover:scale-105`}>
      <div className="flex items-center justify-between mb-4">
        <div className={`${iconBgClasses[color]} rounded-lg p-3`}>
          <Icon className="w-8 h-8" />
        </div>
        {trend && (
          <div className={`text-sm font-semibold ${trend.isPositive ? 'text-green-200' : 'text-red-200'}`}>
            {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
          </div>
        )}
      </div>
      <h3 className="text-lg font-semibold opacity-90 mb-2">{title}</h3>
      <p className="text-3xl md:text-4xl font-bold">
        {typeof value === 'number' ? value.toLocaleString('es-MX') : value}
      </p>
    </div>
  )
}

