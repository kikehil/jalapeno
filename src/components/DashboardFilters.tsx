'use client'

import { Calendar, Filter } from 'lucide-react'

interface DashboardFiltersProps {
  fechaInicio: string
  fechaFin: string
  tipoPedido: string
  onFechaInicioChange: (fecha: string) => void
  onFechaFinChange: (fecha: string) => void
  onTipoPedidoChange: (tipo: string) => void
}

export default function DashboardFilters({
  fechaInicio,
  fechaFin,
  tipoPedido,
  onFechaInicioChange,
  onFechaFinChange,
  onTipoPedidoChange,
}: DashboardFiltersProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border-4 border-jalapeno-red mb-6">
      <div className="flex items-center space-x-2 mb-4">
        <Filter className="w-6 h-6 text-jalapeno-red" />
        <h3 className="text-xl font-bold text-jalapeno-red font-cartoon">Filtros</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="flex items-center text-gray-700 font-semibold mb-2">
            <Calendar className="w-4 h-4 mr-2 text-jalapeno-red" />
            Fecha Inicio
          </label>
          <input
            type="date"
            value={fechaInicio}
            onChange={(e) => onFechaInicioChange(e.target.value)}
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-jalapeno-red"
          />
        </div>
        
        <div>
          <label className="flex items-center text-gray-700 font-semibold mb-2">
            <Calendar className="w-4 h-4 mr-2 text-jalapeno-red" />
            Fecha Fin
          </label>
          <input
            type="date"
            value={fechaFin}
            onChange={(e) => onFechaFinChange(e.target.value)}
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-jalapeno-red"
          />
        </div>
        
        <div>
          <label className="flex items-center text-gray-700 font-semibold mb-2">
            Tipo de Pedido
          </label>
          <select
            value={tipoPedido}
            onChange={(e) => onTipoPedidoChange(e.target.value)}
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-jalapeno-red font-semibold"
          >
            <option value="todos">Todos</option>
            <option value="online">Online</option>
            <option value="local">Local</option>
            <option value="evento">Eventos</option>
          </select>
        </div>
      </div>
    </div>
  )
}

