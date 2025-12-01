'use client'

const services = [
  {
    id: 1,
    title: 'Pedidos en línea',
    icon: '📱',
    description: 'Ordena desde tu celular y recoge en el local o pide a domicilio'
  },
  {
    id: 2,
    title: 'Servicio para eventos',
    icon: '🎉',
    description: 'Llevamos el sabor de El Jalapeño a tus fiestas y celebraciones'
  },
  {
    id: 3,
    title: 'Comer en el local (QR en mesa)',
    icon: '🍽️',
    description: 'Escanea el código QR en tu mesa para ordenar directamente'
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-jalapeno-red mb-4 font-cartoon">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-700">
            Formas de disfrutar nuestros tacos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-gradient-to-br from-jalapeno-yellow to-yellow-300 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-4 border-white fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-6xl mb-4 text-center">{service.icon}</div>
              <h3 className="text-2xl font-bold text-jalapeno-red mb-4 text-center font-cartoon">
                {service.title}
              </h3>
              <p className="text-gray-700 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

