'use client'

import { useState, useEffect } from 'react'
import { ChefHat } from 'lucide-react'
import useKDSStore from '@/store/kds'
import useOrdersStore from '@/store/orders'
import KDSTicket from '@/components/KDSTicket'

interface OrderItem {
  productoId: number
  nombre: string
  cantidad: number
  notas: string
  precio: number
}

interface Order {
  id: number
  mesaId: number
  items: OrderItem[]
  enviado: boolean
  estado?: 'en_preparacion' | 'listo' | 'entregado'
  createdAt: string
}

export default function CocinaPage() {
  const [kitchenOrders, setKitchenOrders] = useState<Order[]>([])
  const [previousOrderIds, setPreviousOrderIds] = useState<Set<number>>(new Set())
  const [newOrderIds, setNewOrderIds] = useState<Set<number>>(new Set())
  
  const getKitchenOrders = useKDSStore((state) => state.getKitchenOrders)
  const markAsReady = useKDSStore((state) => state.markAsReady)
  const markAsDelivered = useKDSStore((state) => state.markAsDelivered)
  const initializeOrderState = useKDSStore((state) => state.initializeOrderState)
  const orders = useOrdersStore((state) => state.orders)
  
  // Update orders every 3 seconds (polling simulation)
  useEffect(() => {
    const updateOrders = () => {
      // Initialize states for newly sent orders
      (orders as Order[]).forEach((order: Order) => {
        if (order.enviado && !order.estado) {
          initializeOrderState(order.id)
        }
      })
      
      const currentOrders = getKitchenOrders() as Order[]
      
      // Detect new orders
      const currentIds = new Set(currentOrders.map((o: Order) => o.id))
      const newIds = new Set(
        Array.from(currentIds).filter((id: number) => !previousOrderIds.has(id))
      )
      
      if (newIds.size > 0) {
        setNewOrderIds(newIds)
        // Clear new order animation after 3 seconds
        setTimeout(() => {
          setNewOrderIds(new Set())
        }, 3000)
      }
      
      setPreviousOrderIds(currentIds)
      setKitchenOrders(currentOrders)
    }
    
    updateOrders()
    const interval = setInterval(updateOrders, 3000)
    
    return () => clearInterval(interval)
  }, [orders, getKitchenOrders, initializeOrderState, previousOrderIds])
  
  const handleMarkReady = (orderId: number) => {
    markAsReady(orderId)
    // Force update
    const updatedOrders = getKitchenOrders()
    setKitchenOrders(updatedOrders)
  }
  
  const handleMarkDelivered = (orderId: number) => {
    markAsDelivered(orderId)
    // Force update
    const updatedOrders = getKitchenOrders()
    setKitchenOrders(updatedOrders)
  }
  
  const enPreparacionCount = kitchenOrders.filter((o: Order) => o.estado === 'en_preparacion').length
  const listoCount = kitchenOrders.filter((o: Order) => o.estado === 'listo').length
  const entregadoCount = kitchenOrders.filter((o: Order) => o.estado === 'entregado').length
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-jalapeno-red via-red-900 to-black p-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="bg-black/50 rounded-xl shadow-2xl p-6 mb-6 border-4 border-jalapeno-yellow backdrop-blur-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="bg-jalapeno-yellow rounded-full p-4 border-4 border-white">
                <ChefHat className="w-12 h-12 text-jalapeno-red" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white font-cartoon">
                  COCINA - EL JALAPEÑO
                </h1>
                <p className="text-xl text-jalapeno-yellow">Sistema de Comandas</p>
              </div>
            </div>
            
            {/* Stats */}
            <div className="flex space-x-4">
              <div className="bg-jalapeno-yellow text-jalapeno-red rounded-lg p-3 text-center border-4 border-white min-w-[100px]">
                <div className="text-3xl font-bold">{enPreparacionCount}</div>
                <div className="text-sm font-semibold">En Prep.</div>
              </div>
              <div className="bg-jalapeno-green text-white rounded-lg p-3 text-center border-4 border-white min-w-[100px]">
                <div className="text-3xl font-bold">{listoCount}</div>
                <div className="text-sm font-semibold">Listos</div>
              </div>
              <div className="bg-gray-500 text-white rounded-lg p-3 text-center border-4 border-white min-w-[100px]">
                <div className="text-3xl font-bold">{entregadoCount}</div>
                <div className="text-sm font-semibold">Entregados</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Orders Grid */}
        {kitchenOrders.length === 0 ? (
          <div className="bg-black/50 rounded-xl shadow-2xl p-12 text-center border-4 border-jalapeno-yellow backdrop-blur-sm">
            <ChefHat className="w-24 h-24 text-jalapeno-yellow mx-auto mb-4 opacity-50" />
            <p className="text-3xl text-white font-bold mb-2">No hay pedidos pendientes</p>
            <p className="text-xl text-jalapeno-yellow">Esperando nuevas comandas...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {kitchenOrders.map((order: Order) => (
              <KDSTicket
                key={order.id}
                order={order}
                onMarkReady={handleMarkReady}
                onMarkDelivered={handleMarkDelivered}
                isNew={newOrderIds.has(order.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

