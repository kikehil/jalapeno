'use client'

import { useRouter } from 'next/navigation'
import { Table, Clock, CheckCircle } from 'lucide-react'

interface TableCardProps {
  table: {
    id: number
    nombreMesa: string
    estado: 'libre' | 'ocupada' | 'pedido_enviado'
    pedidoActual: Array<{
      id: number
      nombre: string
      cantidad: number
      precio: number
      notas: string
    }>
  }
}

export default function TableCard({ table }: TableCardProps) {
  const router = useRouter()
  
  const getEstadoColor = () => {
    switch (table.estado) {
      case 'libre':
        return 'bg-jalapeno-green'
      case 'ocupada':
        return 'bg-jalapeno-yellow'
      case 'pedido_enviado':
        return 'bg-jalapeno-orange'
      default:
        return 'bg-gray-400'
    }
  }
  
  const getEstadoIcon = () => {
    switch (table.estado) {
      case 'libre':
        return <Table className="w-6 h-6" />
      case 'ocupada':
        return <Clock className="w-6 h-6" />
      case 'pedido_enviado':
        return <CheckCircle className="w-6 h-6" />
      default:
        return <Table className="w-6 h-6" />
    }
  }
  
  const getEstadoText = () => {
    switch (table.estado) {
      case 'libre':
        return 'Libre'
      case 'ocupada':
        return 'Ocupada'
      case 'pedido_enviado':
        return 'En Cocina'
      default:
        return 'Desconocido'
    }
  }
  
  const totalItems = table.pedidoActual.reduce((sum, item) => sum + item.cantidad, 0)
  const totalAmount = table.pedidoActual.reduce(
    (sum, item) => sum + item.precio * item.cantidad,
    0
  )
  
  return (
    <div
      onClick={() => router.push(`/mesero/mesa/${table.id}`)}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer border-4 border-white overflow-hidden"
    >
      {/* Header */}
      <div className={`${getEstadoColor()} text-white p-4 flex items-center justify-between`}>
        <div className="flex items-center space-x-3">
          {getEstadoIcon()}
          <h3 className="text-xl font-bold">{table.nombreMesa}</h3>
        </div>
        <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
          {getEstadoText()}
        </span>
      </div>
      
      {/* Content */}
      <div className="p-4">
        {table.pedidoActual.length > 0 ? (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Artículos:</span>
              <span className="font-bold text-jalapeno-red">{totalItems}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Total:</span>
              <span className="font-bold text-jalapeno-red text-lg">
                ${totalAmount.toLocaleString('es-MX')}
              </span>
            </div>
          </div>
        ) : (
          <p className="text-gray-500 text-center py-2">Sin pedidos</p>
        )}
      </div>
    </div>
  )
}

