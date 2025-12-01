'use client'

import { useState } from 'react'
import { Calendar, Clock, MapPin, User, Phone, Utensils } from 'lucide-react'
import useEventosStore from '@/store/eventos'

interface EventFormProps {
  onSubmit: (eventData: any) => void
}

export default function EventForm({ onSubmit }: EventFormProps) {
  const calculatePrice = useEventosStore((state) => state.calculatePrice)
  const getPricing = useEventosStore((state) => state.getPricing)
  
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    fecha: '',
    hora: '',
    ubicacion: '',
    tipoCarne: 'mixto',
    cantidadOrdenes: 40,
  })
  
  const [showQuote, setShowQuote] = useState(false)
  const [errors, setErrors] = useState({})
  
  const pricing = getPricing()
  const precio = calculatePrice(formData.cantidadOrdenes)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'cantidadOrdenes' ? parseInt(value) : value,
    }))
    setShowQuote(false)
  }
  
  const validateForm = () => {
    const newErrors: any = {}
    
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido'
    }
    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es requerido'
    }
    if (!formData.fecha) {
      newErrors.fecha = 'La fecha es requerida'
    }
    if (!formData.hora) {
      newErrors.hora = 'La hora es requerida'
    }
    if (!formData.ubicacion.trim()) {
      newErrors.ubicacion = 'La ubicación es requerida'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const handleCalculateQuote = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      setShowQuote(true)
    }
  }
  
  const handleSubmit = () => {
    if (validateForm()) {
      onSubmit(formData)
      // Reset form
      setFormData({
        nombre: '',
        telefono: '',
        fecha: '',
        hora: '',
        ubicacion: '',
        tipoCarne: 'mixto',
        cantidadOrdenes: 40,
      })
      setShowQuote(false)
    }
  }
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-4 border-jalapeno-red">
      <h2 className="text-3xl font-bold text-jalapeno-red mb-6 font-cartoon text-center">
        Cotiza tu Taquiza para Evento
      </h2>
      
      <form onSubmit={handleCalculateQuote} className="space-y-6">
        {/* Nombre */}
        <div>
          <label className="flex items-center text-gray-700 font-semibold mb-2">
            <User className="w-5 h-5 mr-2 text-jalapeno-red" />
            Nombre Completo
          </label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-jalapeno-red text-lg ${
              errors.nombre ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Ej: Juan Pérez"
          />
          {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>}
        </div>
        
        {/* Teléfono */}
        <div>
          <label className="flex items-center text-gray-700 font-semibold mb-2">
            <Phone className="w-5 h-5 mr-2 text-jalapeno-red" />
            Teléfono
          </label>
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-jalapeno-red text-lg ${
              errors.telefono ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Ej: 555-123-4567"
          />
          {errors.telefono && <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>}
        </div>
        
        {/* Fecha y Hora */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="flex items-center text-gray-700 font-semibold mb-2">
              <Calendar className="w-5 h-5 mr-2 text-jalapeno-red" />
              Fecha del Evento
            </label>
            <input
              type="date"
              name="fecha"
              value={formData.fecha}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-jalapeno-red text-lg ${
                errors.fecha ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.fecha && <p className="text-red-500 text-sm mt-1">{errors.fecha}</p>}
          </div>
          
          <div>
            <label className="flex items-center text-gray-700 font-semibold mb-2">
              <Clock className="w-5 h-5 mr-2 text-jalapeno-red" />
              Hora
            </label>
            <input
              type="time"
              name="hora"
              value={formData.hora}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-jalapeno-red text-lg ${
                errors.hora ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.hora && <p className="text-red-500 text-sm mt-1">{errors.hora}</p>}
          </div>
        </div>
        
        {/* Ubicación */}
        <div>
          <label className="flex items-center text-gray-700 font-semibold mb-2">
            <MapPin className="w-5 h-5 mr-2 text-jalapeno-red" />
            Ubicación
          </label>
          <textarea
            name="ubicacion"
            value={formData.ubicacion}
            onChange={handleChange}
            rows={3}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-jalapeno-red text-lg ${
              errors.ubicacion ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Dirección completa del evento"
          />
          {errors.ubicacion && <p className="text-red-500 text-sm mt-1">{errors.ubicacion}</p>}
        </div>
        
        {/* Tipo de Carne */}
        <div>
          <label className="flex items-center text-gray-700 font-semibold mb-2">
            <Utensils className="w-5 h-5 mr-2 text-jalapeno-red" />
            Tipo de Carne
          </label>
          <select
            name="tipoCarne"
            value={formData.tipoCarne}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-jalapeno-red text-lg"
          >
            <option value="cecina">Cecina</option>
            <option value="pastor">Pastor</option>
            <option value="mixto">Mixto</option>
          </select>
        </div>
        
        {/* Cantidad de Órdenes */}
        <div>
          <label className="flex items-center text-gray-700 font-semibold mb-2">
            Cantidad de Órdenes: <span className="ml-2 text-jalapeno-red text-xl">{formData.cantidadOrdenes}</span>
          </label>
          <input
            type="range"
            name="cantidadOrdenes"
            min="40"
            max="100"
            step="10"
            value={formData.cantidadOrdenes}
            onChange={handleChange}
            className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-jalapeno-red"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-1">
            <span>40</span>
            <span>50</span>
            <span>60</span>
            <span>70</span>
            <span>80</span>
            <span>90</span>
            <span>100</span>
          </div>
        </div>
        
        {/* Quote Display */}
        {showQuote && (
          <div className="bg-gradient-to-br from-jalapeno-yellow to-yellow-300 rounded-lg p-6 border-4 border-jalapeno-red fade-in">
            <h3 className="text-2xl font-bold text-jalapeno-red mb-4 text-center font-cartoon">
              Cotización
            </h3>
            <div className="space-y-2 text-lg">
              <div className="flex justify-between">
                <span className="font-semibold">Cantidad de órdenes:</span>
                <span className="font-bold">{formData.cantidadOrdenes}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Tipo de carne:</span>
                <span className="font-bold capitalize">{formData.tipoCarne}</span>
              </div>
              <div className="border-t-2 border-jalapeno-red pt-2 mt-2">
                <div className="flex justify-between text-2xl">
                  <span className="font-bold">Total:</span>
                  <span className="font-bold text-jalapeno-red">${precio.toLocaleString('es-MX')}</span>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            type="submit"
            className="flex-1 bg-jalapeno-yellow text-jalapeno-red py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg border-4 border-jalapeno-red"
          >
            Calcular Cotización
          </button>
          
          {showQuote && (
            <button
              type="button"
              onClick={handleSubmit}
              className="flex-1 bg-jalapeno-green text-white py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg border-4 border-white"
            >
              Reservar mi Evento
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

