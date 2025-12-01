'use client'

import { Calendar, Clock, MapPin, User, Phone, Utensils, Edit2, Trash2, FileText } from 'lucide-react'
import { useState } from 'react'

interface EventCardProps {
  event: {
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
  onUpdate: (eventId: number, updates: any) => void
  onDelete: (eventId: number) => void
  onExportPDF?: (eventId: number) => void
}

export default function EventCard({ event, onUpdate, onDelete, onExportPDF }: EventCardProps) {
  const [isEditingNotes, setIsEditingNotes] = useState(false)
  const [notes, setNotes] = useState(event.notasInternas)
  
  const getEstadoColor = () => {
    switch (event.estado) {
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
  
  const getEstadoText = () => {
    switch (event.estado) {
      case 'pendiente':
        return 'Pendiente'
      case 'confirmado':
        return 'Confirmado'
      case 'finalizado':
        return 'Finalizado'
      default:
        return 'Desconocido'
    }
  }
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('es-MX', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }
  
  const handleStatusChange = (newStatus: string) => {
    onUpdate(event.id, { estado: newStatus })
  }
  
  const handleSaveNotes = () => {
    onUpdate(event.id, { notasInternas: notes })
    setIsEditingNotes(false)
  }
  
  const precio = event.cantidadOrdenes === 40 ? 3000 :
                 event.cantidadOrdenes === 50 ? 3750 :
                 event.cantidadOrdenes === 60 ? 4500 :
                 event.cantidadOrdenes === 70 ? 5250 :
                 event.cantidadOrdenes === 80 ? 6000 :
                 event.cantidadOrdenes === 90 ? 6750 :
                 event.cantidadOrdenes === 100 ? 7500 : 0
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border-4 border-jalapeno-red hover:shadow-xl transition-all">
      {/* Header */}
      <div className="flex items-start justify-between mb-4 pb-4 border-b-2 border-gray-200">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <h3 className="text-2xl font-bold text-jalapeno-red font-cartoon">
              {event.nombre}
            </h3>
            <span className={`px-3 py-1 rounded-full text-sm font-bold ${getEstadoColor()}`}>
              {getEstadoText()}
            </span>
          </div>
          <p className="text-gray-600 flex items-center">
            <Phone className="w-4 h-4 mr-2" />
            {event.telefono}
          </p>
        </div>
        {onExportPDF && (
          <button
            onClick={() => onExportPDF(event.id)}
            className="bg-gray-500 text-white p-2 rounded-lg hover:bg-gray-600 transition-colors"
            title="Exportar PDF"
          >
            <FileText className="w-5 h-5" />
          </button>
        )}
      </div>
      
      {/* Event Details */}
      <div className="space-y-3 mb-4">
        <div className="flex items-center text-gray-700">
          <Calendar className="w-5 h-5 mr-3 text-jalapeno-red" />
          <span className="font-semibold">{formatDate(event.fecha)}</span>
        </div>
        <div className="flex items-center text-gray-700">
          <Clock className="w-5 h-5 mr-3 text-jalapeno-red" />
          <span className="font-semibold">{event.hora}</span>
        </div>
        <div className="flex items-start text-gray-700">
          <MapPin className="w-5 h-5 mr-3 text-jalapeno-red mt-1" />
          <span className="font-semibold">{event.ubicacion}</span>
        </div>
        <div className="flex items-center text-gray-700">
          <Utensils className="w-5 h-5 mr-3 text-jalapeno-red" />
          <span className="font-semibold capitalize">{event.tipoCarne}</span>
          <span className="ml-2">• {event.cantidadOrdenes} órdenes</span>
        </div>
      </div>
      
      {/* Price */}
      <div className="bg-jalapeno-yellow rounded-lg p-3 mb-4 border-2 border-jalapeno-red">
        <div className="flex justify-between items-center">
          <span className="font-bold text-jalapeno-red">Total:</span>
          <span className="text-2xl font-bold text-jalapeno-red">
            ${precio.toLocaleString('es-MX')}
          </span>
        </div>
      </div>
      
      {/* Internal Notes */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <label className="text-gray-700 font-semibold">Notas Internas:</label>
          {!isEditingNotes && (
            <button
              onClick={() => setIsEditingNotes(true)}
              className="text-jalapeno-red hover:text-red-700 transition-colors"
            >
              <Edit2 className="w-4 h-4" />
            </button>
          )}
        </div>
        {isEditingNotes ? (
          <div className="space-y-2">
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-jalapeno-red"
              placeholder="Agregar notas internas..."
            />
            <div className="flex space-x-2">
              <button
                onClick={handleSaveNotes}
                className="bg-jalapeno-green text-white px-4 py-2 rounded-lg font-bold hover:bg-green-600 transition-colors"
              >
                Guardar
              </button>
              <button
                onClick={() => {
                  setNotes(event.notasInternas)
                  setIsEditingNotes(false)
                }}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg font-bold hover:bg-gray-400 transition-colors"
              >
                Cancelar
              </button>
            </div>
          </div>
        ) : (
          <p className="text-gray-600 bg-gray-100 rounded-lg p-3 min-h-[60px]">
            {event.notasInternas || 'Sin notas'}
          </p>
        )}
      </div>
      
      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-2">
        <select
          value={event.estado}
          onChange={(e) => handleStatusChange(e.target.value)}
          className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-jalapeno-red font-semibold"
        >
          <option value="pendiente">Pendiente</option>
          <option value="confirmado">Confirmado</option>
          <option value="finalizado">Finalizado</option>
        </select>
        <button
          onClick={() => {
            if (confirm('¿Estás seguro de eliminar este evento?')) {
              onDelete(event.id)
            }
          }}
          className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-red-600 transition-colors flex items-center justify-center"
        >
          <Trash2 className="w-4 h-4 mr-2" />
          Eliminar
        </button>
      </div>
    </div>
  )
}

