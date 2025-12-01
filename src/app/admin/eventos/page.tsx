'use client'

import { useState, useMemo } from 'react'
import { Calendar as CalendarIcon, Filter } from 'lucide-react'
import useEventosStore from '@/store/eventos'
import EventCard from '@/components/EventCard'
import Calendar from '@/components/Calendar'

interface Evento {
  id: number
  nombre: string
  telefono: string
  fecha: string
  hora: string
  ubicacion: string
  tipoCarne: string
  cantidadOrdenes: number
  estado: 'pendiente' | 'confirmado' | 'finalizado'
  notasInternas: string
  fechaCreacion: string
}

export default function AdminEventosPage() {
  const eventos = useEventosStore((state) => state.eventos) as Evento[]
  const updateEvent = useEventosStore((state) => state.updateEvent)
  const deleteEvent = useEventosStore((state) => state.deleteEvent)
  
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [filterStatus, setFilterStatus] = useState<string>('todos')
  
  // Group events by date for calendar
  const eventsByDate = useMemo(() => {
    const grouped: Record<string, number> = {}
    eventos.forEach((event: Evento) => {
      const date = new Date(event.fecha)
      const dateKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
      grouped[dateKey] = (grouped[dateKey] || 0) + 1
    })
    return grouped
  }, [eventos])
  
  // Filter events
  const filteredEvents = useMemo(() => {
    let filtered = eventos
    
    // Filter by status
    if (filterStatus !== 'todos') {
      filtered = filtered.filter((event: Evento) => event.estado === filterStatus)
    }
    
    // Filter by date if selected
    if (selectedDate) {
      const selectedDateStr = selectedDate.toDateString()
      filtered = filtered.filter((event: Evento) => {
        const eventDate = new Date(event.fecha).toDateString()
        return eventDate === selectedDateStr
      })
    }
    
    // Sort by date (newest first)
    return filtered.sort((a: Evento, b: Evento) => {
      const dateA = new Date(a.fecha).getTime()
      const dateB = new Date(b.fecha).getTime()
      return dateB - dateA
    })
  }, [eventos, filterStatus, selectedDate])
  
  const handleExportPDF = (eventId: number) => {
    // Placeholder for PDF export
    alert(`Exportar PDF del evento #${eventId}\n(Función por implementar)`)
  }
  
  const pendienteCount = eventos.filter((e: Evento) => e.estado === 'pendiente').length
  const confirmadoCount = eventos.filter((e: Evento) => e.estado === 'confirmado').length
  const finalizadoCount = eventos.filter((e: Evento) => e.estado === 'finalizado').length
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border-4 border-jalapeno-red">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="bg-jalapeno-red rounded-full p-3 border-4 border-white">
                <CalendarIcon className="w-8 h-8 text-jalapeno-yellow" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-jalapeno-red font-cartoon">
                  Administración de Eventos
                </h1>
                <p className="text-gray-600">Gestiona las reservas de taquizas</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl p-4 shadow-lg border-4 border-jalapeno-yellow text-center">
            <div className="text-3xl font-bold text-jalapeno-red">{eventos.length}</div>
            <div className="text-sm text-gray-600">Total Eventos</div>
          </div>
          <div className="bg-jalapeno-yellow rounded-xl p-4 shadow-lg border-4 border-white text-center">
            <div className="text-3xl font-bold text-jalapeno-red">{pendienteCount}</div>
            <div className="text-sm font-semibold">Pendientes</div>
          </div>
          <div className="bg-jalapeno-green rounded-xl p-4 shadow-lg border-4 border-white text-center">
            <div className="text-3xl font-bold text-white">{confirmadoCount}</div>
            <div className="text-sm font-semibold">Confirmados</div>
          </div>
          <div className="bg-gray-500 rounded-xl p-4 shadow-lg border-4 border-white text-center">
            <div className="text-3xl font-bold text-white">{finalizadoCount}</div>
            <div className="text-sm font-semibold">Finalizados</div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calendar Sidebar */}
          <div className="lg:col-span-1">
            <Calendar
              selectedDate={selectedDate}
              onDateSelect={setSelectedDate}
              eventsByDate={eventsByDate}
            />
            
            {/* Filters */}
            <div className="bg-white rounded-xl shadow-lg p-6 mt-6 border-4 border-jalapeno-yellow">
              <div className="flex items-center space-x-2 mb-4">
                <Filter className="w-5 h-5 text-jalapeno-red" />
                <h3 className="text-xl font-bold text-jalapeno-red font-cartoon">Filtros</h3>
              </div>
              
              <div className="space-y-3">
                <button
                  onClick={() => {
                    setSelectedDate(null)
                    setFilterStatus('todos')
                  }}
                  className="w-full bg-gray-200 text-gray-800 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  Limpiar Filtros
                </button>
                
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-jalapeno-red font-semibold"
                >
                  <option value="todos">Todos los Estados</option>
                  <option value="pendiente">Pendiente</option>
                  <option value="confirmado">Confirmado</option>
                  <option value="finalizado">Finalizado</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Events List */}
          <div className="lg:col-span-2">
            {filteredEvents.length === 0 ? (
              <div className="bg-white rounded-xl shadow-lg p-12 text-center border-4 border-jalapeno-yellow">
                <CalendarIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-xl text-gray-600 mb-2">No hay eventos</p>
                <p className="text-gray-500">
                  {selectedDate || filterStatus !== 'todos'
                    ? 'Intenta cambiar los filtros'
                    : 'Los eventos aparecerán aquí cuando se reserven'}
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredEvents.map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    onUpdate={updateEvent}
                    onDelete={deleteEvent}
                    onExportPDF={handleExportPDF}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

