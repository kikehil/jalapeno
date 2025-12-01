'use client'

import { useState, useEffect } from 'react'
import { CheckCircle, Clock, Package } from 'lucide-react'

interface KDSTicketProps {
  order: {
    id: number
    mesaId: number
    nombreMesa: string
    productos: Array<{
      id: number
      nombre: string
      cantidad: number
      precio: number
      notas: string
    }>
    estado: 'en_preparacion' | 'listo' | 'entregado'
    tiempoInicio: string
    fecha: string
  }
  onMarkReady: (orderId: number) => void
  onMarkDelivered: (orderId: number) => void
  isNew?: boolean
}

export default function KDSTicket({ order, onMarkReady, onMarkDelivered, isNew = false }: KDSTicketProps) {
  const [elapsedTime, setElapsedTime] = useState('00:00')
  
  useEffect(() => {
    const updateTimer = () => {
      const startTime = new Date(order.tiempoInicio || order.fecha)
      const now = new Date()
      const diff = Math.floor((now.getTime() - startTime.getTime()) / 1000) // seconds
      
      const minutes = Math.floor(diff / 60)
      const seconds = diff % 60
      
      setElapsedTime(`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`)
    }
    
    updateTimer()
    const interval = setInterval(updateTimer, 1000)
    
    return () => clearInterval(interval)
  }, [order.tiempoInicio, order.fecha])
  
  const getEstadoColor = () => {
    switch (order.estado) {
      case 'en_preparacion':
        return 'bg-jalapeno-yellow border-jalapeno-yellow'
      case 'listo':
        return 'bg-jalapeno-green border-jalapeno-green'
      case 'entregado':
        return 'bg-gray-500 border-gray-500'
      default:
        return 'bg-jalapeno-yellow border-jalapeno-yellow'
    }
  }
  
  const getEstadoIcon = () => {
    switch (order.estado) {
      case 'en_preparacion':
        return <Clock className="w-8 h-8" />
      case 'listo':
        return <CheckCircle className="w-8 h-8" />
      case 'entregado':
        return <Package className="w-8 h-8" />
      default:
        return <Clock className="w-8 h-8" />
    }
  }
  
  const getEstadoText = () => {
    switch (order.estado) {
      case 'en_preparacion':
        return 'EN PREPARACIÓN'
      case 'listo':
        return 'LISTO'
      case 'entregado':
        return 'ENTREGADO'
      default:
        return 'EN PREPARACIÓN'
    }
  }
  
  const totalItems = order.productos.reduce((sum, item) => sum + item.cantidad, 0)
  
  return (
    <div
      className={`bg-white rounded-xl shadow-2xl border-4 ${getEstadoColor()} p-6 min-h-[400px] flex flex-col transition-all duration-300 ${
        isNew ? 'animate-pulse' : ''
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-4 border-b-4 border-gray-300">
        <div>
          <h2 className="text-4xl font-bold text-jalapeno-red font-cartoon">
            {order.nombreMesa}
          </h2>
          <p className="text-xl text-gray-600">Orden #{order.id}</p>
        </div>
        <div className="text-right">
          <div className="flex items-center space-x-2 mb-2">
            {getEstadoIcon()}
            <span className={`text-2xl font-bold ${getEstadoColor().includes('yellow') ? 'text-jalapeno-red' : 'text-white'}`}>
              {getEstadoText()}
            </span>
          </div>
          <div className="text-3xl font-bold text-jalapeno-red">
            {elapsedTime}
          </div>
        </div>
      </div>
      
      {/* Products List */}
      <div className="flex-1 space-y-3 mb-4 overflow-y-auto">
        {order.productos.map((producto, index) => (
          <div
            key={`${producto.id}-${producto.notas}-${index}`}
            className="bg-gray-100 rounded-lg p-4 border-2 border-gray-300"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <div className="flex items-center space-x-3">
                  <span className="bg-jalapeno-red text-white text-xl font-bold px-3 py-1 rounded-lg">
                    {producto.cantidad}x
                  </span>
                  <h3 className="text-2xl font-bold text-jalapeno-red">
                    {producto.nombre}
                  </h3>
                </div>
              </div>
            </div>
            {producto.notas && (
              <div className="mt-2 pl-2 border-l-4 border-jalapeno-orange">
                <p className="text-lg text-gray-700 italic">
                  📝 {producto.notas}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Footer */}
      <div className="border-t-4 border-gray-300 pt-4">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-bold text-gray-700">
            Total de artículos: {totalItems}
          </span>
        </div>
        
        {/* Action Buttons */}
        <div className="flex space-x-3">
          {order.estado === 'en_preparacion' && (
            <button
              onClick={() => onMarkReady(order.id)}
              className="flex-1 bg-jalapeno-green text-white py-4 rounded-lg font-bold text-xl hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg border-4 border-white"
            >
              <CheckCircle className="w-6 h-6 inline-block mr-2" />
              MARCAR COMO LISTO
            </button>
          )}
          
          {order.estado === 'listo' && (
            <button
              onClick={() => onMarkDelivered(order.id)}
              className="flex-1 bg-gray-500 text-white py-4 rounded-lg font-bold text-xl hover:bg-gray-600 transition-all transform hover:scale-105 shadow-lg border-4 border-white"
            >
              <Package className="w-6 h-6 inline-block mr-2" />
              MARCAR COMO ENTREGADO
            </button>
          )}
          
          {order.estado === 'entregado' && (
            <div className="flex-1 bg-gray-400 text-white py-4 rounded-lg font-bold text-xl text-center border-4 border-white">
              ✓ ENTREGADO
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

