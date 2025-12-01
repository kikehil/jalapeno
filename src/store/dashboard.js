import { create } from 'zustand'

// Generate dummy data
const generateDummyData = () => {
  const today = new Date()
  const last30Days = []
  
  for (let i = 29; i >= 0; i--) {
    const date = new Date(today)
    date.setDate(date.getDate() - i)
    last30Days.push({
      date: date.toISOString().split('T')[0],
      ventas: Math.floor(Math.random() * 5000) + 2000,
      pedidos: Math.floor(Math.random() * 50) + 20,
    })
  }
  
  return last30Days
}

const productos = [
  { id: 1, nombre: 'Taco al Pastor', vendidos: 450, categoria: 'tacos' },
  { id: 2, nombre: 'Taco de Cecina', vendidos: 380, categoria: 'tacos' },
  { id: 3, nombre: 'Gringa al Pastor', vendidos: 320, categoria: 'gringas' },
  { id: 4, nombre: 'Torta al Pastor', vendidos: 280, categoria: 'tortas' },
  { id: 5, nombre: 'Agua de Horchata', vendidos: 250, categoria: 'bebidas' },
  { id: 6, nombre: 'Gringa Mixta', vendidos: 220, categoria: 'gringas' },
  { id: 7, nombre: 'Taco de Suadero', vendidos: 200, categoria: 'tacos' },
  { id: 8, nombre: 'Torta Mixta', vendidos: 180, categoria: 'tortas' },
  { id: 9, nombre: 'Agua de Jamaica', vendidos: 170, categoria: 'bebidas' },
  { id: 10, nombre: 'Carnitas (100g)', vendidos: 150, categoria: 'carnitas' },
]

const generateRecentOrders = () => {
  const orders = []
  const mesas = ['Mesa 1', 'Mesa 2', 'Mesa 3', 'Mesa 4', 'Mesa 5']
  const tipos = ['local', 'online', 'evento']
  
  for (let i = 0; i < 10; i++) {
    const fecha = new Date()
    fecha.setMinutes(fecha.getMinutes() - Math.random() * 120)
    
    orders.push({
      id: Date.now() + i,
      mesa: mesas[Math.floor(Math.random() * mesas.length)],
      total: Math.floor(Math.random() * 500) + 100,
      tipo: tipos[Math.floor(Math.random() * tipos.length)],
      fecha: fecha.toISOString(),
      productos: Math.floor(Math.random() * 5) + 1,
    })
  }
  
  return orders.sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
}

const generateRecentEvents = () => {
  const events = []
  const estados = ['pendiente', 'confirmado', 'finalizado']
  
  for (let i = 0; i < 5; i++) {
    const fecha = new Date()
    fecha.setDate(fecha.getDate() + Math.floor(Math.random() * 30))
    
    events.push({
      id: Date.now() + i,
      nombre: `Evento ${i + 1}`,
      fecha: fecha.toISOString(),
      cantidadOrdenes: [40, 50, 60, 70, 80, 90, 100][Math.floor(Math.random() * 7)],
      estado: estados[Math.floor(Math.random() * estados.length)],
      total: [3000, 3750, 4500, 5250, 6000, 6750, 7500][Math.floor(Math.random() * 7)],
    })
  }
  
  return events.sort((a, b) => new Date(a.fecha) - new Date(b.fecha))
}

const useDashboardStore = create((set) => ({
  // Main metrics
  ventasDelDia: 0,
  pedidosActivos: 0,
  totalDelMes: 0,
  eventosProximos: 0,
  
  // Chart data
  ventasPorDia: generateDummyData(),
  productosMasVendidos: productos,
  
  // Distribution data
  distribucionVentas: {
    online: 35,
    local: 50,
    eventos: 15,
  },
  
  // Tables
  ultimosPedidos: generateRecentOrders(),
  ultimosEventos: generateRecentEvents(),
  
  // Filters
  fechaInicio: new Date(new Date().setDate(new Date().getDate() - 30)).toISOString().split('T')[0],
  fechaFin: new Date().toISOString().split('T')[0],
  tipoPedido: 'todos',
  
  // Update metrics
  updateMetrics: () => {
    const ventasPorDia = useDashboardStore.getState().ventasPorDia
    const hoy = new Date().toISOString().split('T')[0]
    const ventasHoy = ventasPorDia.find(d => d.date === hoy)?.ventas || 0
    
    const mesActual = new Date().getMonth()
    const añoActual = new Date().getFullYear()
    const totalMes = ventasPorDia
      .filter(d => {
        const fecha = new Date(d.date)
        return fecha.getMonth() === mesActual && fecha.getFullYear() === añoActual
      })
      .reduce((sum, d) => sum + d.ventas, 0)
    
    const eventosProximos = useDashboardStore.getState().ultimosEventos
      .filter(e => {
        const fechaEvento = new Date(e.fecha)
        return fechaEvento >= new Date() && e.estado !== 'finalizado'
      }).length
    
    set({
      ventasDelDia: ventasHoy,
      pedidosActivos: Math.floor(Math.random() * 10) + 5,
      totalDelMes: totalMes,
      eventosProximos,
    })
  },
  
  // Update filters
  setFechaInicio: (fecha) => set({ fechaInicio: fecha }),
  setFechaFin: (fecha) => set({ fechaFin: fecha }),
  setTipoPedido: (tipo) => set({ tipoPedido: tipo }),
  
  // Get filtered data
  getFilteredVentas: () => {
    const { ventasPorDia, fechaInicio, fechaFin } = useDashboardStore.getState()
    return ventasPorDia.filter(d => {
      return d.date >= fechaInicio && d.date <= fechaFin
    })
  },
  
  getFilteredPedidos: () => {
    const { ultimosPedidos, tipoPedido } = useDashboardStore.getState()
    if (tipoPedido === 'todos') return ultimosPedidos
    return ultimosPedidos.filter(p => p.tipo === tipoPedido)
  },
  
  // Initialize
  init: () => {
    useDashboardStore.getState().updateMetrics()
  },
}))

export default useDashboardStore

