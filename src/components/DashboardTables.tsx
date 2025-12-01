'use client'

import { Clock, Calendar, Package } from 'lucide-react'

interface DashboardTablesProps {
  ultimosPedidos: Array<{
    id: number
    mesa: string
    total: number
    tipo: string
    fecha: string
    productos: number
  }>
  ultimosEventos: Array<{
    id: number
    nombre: string
    fecha: string
    cantidadOrdenes: number
    estado: string
    total: number
  }>
  productosVendidos: Array<{
    id: number
    nombre: string
    vendidos: number
  }>
}

export default function DashboardTables({ ultimosPedidos, ultimosEventos, productosVendidos }: DashboardTablesProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleString('es-MX', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }
  
  const getTipoColor = (tipo: string) => {
    switch (tipo) {
      case 'online':
        return 'bg-jalapeno-red text-white'
      case 'local':
        return 'bg-jalapeno-yellow text-jalapeno-red'
      case 'evento':
        return 'bg-jalapeno-green text-white'
      default:
        return 'bg-gray-400 text-white'
    }
  }
  
  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case 'pendiente':
        return 'bg-jalapeno-yellow text-jalapeno-red'
      case 'confirmado':
        return 'bg-jalapeno-green text-white'
      case 'finalizado':
        return 'bg-gray-500 text-white'
      default:
        return 'bg-gray-400 text-white'
    }
  }
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Últimos Pedidos */}
      <div className="bg-white rounded-xl shadow-lg p-6 border-4 border-jalapeno-red">
        <div className="flex items-center space-x-2 mb-4">
          <Clock className="w-6 h-6 text-jalapeno-red" />
          <h3 className="text-xl font-bold text-jalapeno-red font-cartoon">Últimos Pedidos</h3>
        </div>
        <div className="space-y-3 max-h-[400px] overflow-y-auto">
          {ultimosPedidos.map((pedido) => (
            <div key={pedido.id} className="border-2 border-gray-200 rounded-lg p-3 hover:border-jalapeno-yellow transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-jalapeno-red">{pedido.mesa}</span>
                <span className={`px-2 py-1 rounded text-xs font-bold ${getTipoColor(pedido.tipo)}`}>
                  {pedido.tipo}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>{pedido.productos} productos</span>
                <span className="font-bold text-jalapeno-red">${pedido.total.toLocaleString('es-MX')}</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">{formatDate(pedido.fecha)}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Últimos Eventos */}
      <div className="bg-white rounded-xl shadow-lg p-6 border-4 border-jalapeno-yellow">
        <div className="flex items-center space-x-2 mb-4">
          <Calendar className="w-6 h-6 text-jalapeno-red" />
          <h3 className="text-xl font-bold text-jalapeno-red font-cartoon">Próximos Eventos</h3>
        </div>
        <div className="space-y-3 max-h-[400px] overflow-y-auto">
          {ultimosEventos.map((evento) => (
            <div key={evento.id} className="border-2 border-gray-200 rounded-lg p-3 hover:border-jalapeno-green transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-jalapeno-red">{evento.nombre}</span>
                <span className={`px-2 py-1 rounded text-xs font-bold ${getEstadoColor(evento.estado)}`}>
                  {evento.estado}
                </span>
              </div>
              <div className="text-sm text-gray-600 mb-1">
                {evento.cantidadOrdenes} órdenes
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  {new Date(evento.fecha).toLocaleDateString('es-MX', {
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
                <span className="font-bold text-jalapeno-red">${evento.total.toLocaleString('es-MX')}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Productos Vendidos */}
      <div className="bg-white rounded-xl shadow-lg p-6 border-4 border-jalapeno-green">
        <div className="flex items-center space-x-2 mb-4">
          <Package className="w-6 h-6 text-jalapeno-red" />
          <h3 className="text-xl font-bold text-jalapeno-red font-cartoon">Top Productos</h3>
        </div>
        <div className="space-y-3 max-h-[400px] overflow-y-auto">
          {productosVendidos.slice(0, 10).map((producto, index) => (
            <div key={producto.id} className="flex items-center justify-between border-2 border-gray-200 rounded-lg p-3 hover:border-jalapeno-red transition-colors">
              <div className="flex items-center space-x-3">
                <span className="bg-jalapeno-red text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </span>
                <span className="font-semibold text-gray-800">{producto.nombre}</span>
              </div>
              <span className="font-bold text-jalapeno-red">{producto.vendidos}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

