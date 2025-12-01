'use client'

import { useState } from 'react'
import { CheckCircle, PartyPopper } from 'lucide-react'
import useEventosStore from '@/store/eventos'
import EventForm from '@/components/EventForm'

export default function EventosPage() {
  const createEvent = useEventosStore((state) => state.createEvent)
  const [showSuccess, setShowSuccess] = useState(false)
  
  const handleSubmit = (eventData: any) => {
    const eventId = createEvent(eventData)
    setShowSuccess(true)
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false)
    }, 5000)
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8 fade-in">
          <div className="flex justify-center mb-4">
            <div className="bg-jalapeno-red rounded-full p-4 border-4 border-white shadow-lg">
              <PartyPopper className="w-12 h-12 text-jalapeno-yellow" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-jalapeno-red mb-4 font-cartoon">
            Taquizas para Eventos
          </h1>
          <p className="text-xl text-gray-700">
            Llevamos el sabor de El Jalapeño a tu celebración
          </p>
        </div>
        
        {/* Success Message */}
        {showSuccess && (
          <div className="bg-jalapeno-green text-white rounded-xl p-6 mb-6 border-4 border-white shadow-lg fade-in flex items-center space-x-4">
            <CheckCircle className="w-8 h-8 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold">¡Evento Reservado Exitosamente!</h3>
              <p className="text-sm opacity-90">
                Nos pondremos en contacto contigo pronto para confirmar los detalles.
              </p>
            </div>
          </div>
        )}
        
        {/* Form */}
        <EventForm onSubmit={handleSubmit} />
        
        {/* Pricing Info */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6 border-4 border-jalapeno-yellow">
          <h3 className="text-2xl font-bold text-jalapeno-red mb-4 font-cartoon text-center">
            Precios por Cantidad
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[40, 50, 60, 70, 80, 90, 100].map((cantidad) => {
              const precio = cantidad === 40 ? 3000 :
                           cantidad === 50 ? 3750 :
                           cantidad === 60 ? 4500 :
                           cantidad === 70 ? 5250 :
                           cantidad === 80 ? 6000 :
                           cantidad === 90 ? 6750 :
                           cantidad === 100 ? 7500 : 0
              return (
                <div
                  key={cantidad}
                  className="bg-gradient-to-br from-jalapeno-yellow to-yellow-300 rounded-lg p-4 text-center border-2 border-jalapeno-red"
                >
                  <div className="text-2xl font-bold text-jalapeno-red">{cantidad}</div>
                  <div className="text-sm text-gray-700 mt-1">órdenes</div>
                  <div className="text-lg font-bold text-jalapeno-red mt-2">
                    ${precio.toLocaleString('es-MX')}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

