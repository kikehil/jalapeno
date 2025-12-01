import { create } from 'zustand'

const useOrdersStore = create((set) => ({
  orders: [],
  
  createOrder: (mesaId, productos, orderId = null) => {
    const id = orderId || Date.now()
    set((state) => ({
      orders: [
        ...state.orders,
        {
          id,
          mesaId,
          productos,
          enviado: false,
          fecha: new Date().toISOString(),
        },
      ],
    }))
    return id
  },
  
  markOrderAsSent: (orderId) => set((state) => ({
    orders: state.orders.map((order) =>
      order.id === orderId
        ? { 
            ...order, 
            enviado: true,
            estado: order.estado || 'en_preparacion',
            tiempoInicio: order.tiempoInicio || order.fecha,
          }
        : order
    ),
  })),
  
  getOrdersByTable: (mesaId) => {
    return useOrdersStore.getState().orders.filter((o) => o.mesaId === mesaId)
  },
}))

export default useOrdersStore

