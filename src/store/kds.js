import { create } from 'zustand'
import useOrdersStore from './orders'
import useTablesStore from './tables'

const useKDSStore = create((set, get) => ({
  // Get all orders sent to kitchen (enviado: true)
  getKitchenOrders: () => {
    const orders = useOrdersStore.getState().orders
    const tables = useTablesStore.getState().tables
    
    return orders
      .filter(order => order.enviado)
      .map(order => {
        const table = tables.find(t => t.id === order.mesaId)
        return {
          ...order,
          nombreMesa: table?.nombreMesa || `Mesa ${order.mesaId}`,
          estado: order.estado || 'en_preparacion',
          tiempoInicio: order.tiempoInicio || order.fecha,
        }
      })
      .sort((a, b) => {
        // Sort by state priority: en_preparacion > listo > entregado
        const statePriority = {
          'en_preparacion': 1,
          'listo': 2,
          'entregado': 3,
        }
        const priorityA = statePriority[a.estado] || 99
        const priorityB = statePriority[b.estado] || 99
        
        if (priorityA !== priorityB) {
          return priorityA - priorityB
        }
        
        // If same state, sort by time (oldest first)
        return new Date(a.tiempoInicio) - new Date(b.tiempoInicio)
      })
  },
  
  // Mark order as ready
  markAsReady: (orderId) => {
    const orders = useOrdersStore.getState().orders
    const updatedOrders = orders.map(order =>
      order.id === orderId
        ? { ...order, estado: 'listo', tiempoListo: new Date().toISOString() }
        : order
    )
    useOrdersStore.setState({ orders: updatedOrders })
  },
  
  // Mark order as delivered
  markAsDelivered: (orderId) => {
    const orders = useOrdersStore.getState().orders
    const updatedOrders = orders.map(order =>
      order.id === orderId
        ? { ...order, estado: 'entregado', tiempoEntregado: new Date().toISOString() }
        : order
    )
    useOrdersStore.setState({ orders: updatedOrders })
  },
  
  // Initialize order state when sent to kitchen
  initializeOrderState: (orderId) => {
    const orders = useOrdersStore.getState().orders
    const updatedOrders = orders.map(order =>
      order.id === orderId && !order.estado
        ? { ...order, estado: 'en_preparacion', tiempoInicio: order.fecha }
        : order
    )
    useOrdersStore.setState({ orders: updatedOrders })
  },
}))

export default useKDSStore

