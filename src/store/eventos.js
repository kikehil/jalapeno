import { create } from 'zustand'

const pricing = {
  40: 3000,
  50: 3750,
  60: 4500,
  70: 5250,
  80: 6000,
  90: 6750,
  100: 7500,
}

const useEventosStore = create((set) => ({
  eventos: [],
  
  // Create new event
  createEvent: (eventData) => {
    const newEvent = {
      id: Date.now(),
      ...eventData,
      estado: 'pendiente',
      fechaCreacion: new Date().toISOString(),
      notasInternas: '',
    }
    set((state) => ({
      eventos: [...state.eventos, newEvent],
    }))
    return newEvent.id
  },
  
  // Update event
  updateEvent: (eventId, updates) => set((state) => ({
    eventos: state.eventos.map((event) =>
      event.id === eventId ? { ...event, ...updates } : event
    ),
  })),
  
  // Delete event
  deleteEvent: (eventId) => set((state) => ({
    eventos: state.eventos.filter((event) => event.id !== eventId),
  })),
  
  // Get events by date
  getEventsByDate: (date) => {
    const eventos = useEventosStore.getState().eventos
    const targetDate = new Date(date).toDateString()
    return eventos.filter((event) => {
      const eventDate = new Date(event.fecha).toDateString()
      return eventDate === targetDate
    })
  },
  
  // Get events by status
  getEventsByStatus: (status) => {
    return useEventosStore.getState().eventos.filter((event) => event.estado === status)
  },
  
  // Calculate price
  calculatePrice: (cantidad) => {
    return pricing[cantidad] || 0
  },
  
  // Get pricing list
  getPricing: () => pricing,
}))

export default useEventosStore

