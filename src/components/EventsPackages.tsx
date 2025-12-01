'use client'

const eventPackages = [
  { orders: 40, price: 3000 },
  { orders: 50, price: 3750 },
  { orders: 60, price: 4500 },
  { orders: 70, price: 5250 },
  { orders: 80, price: 6000 },
  { orders: 90, price: 6750 },
  { orders: 100, price: 7500 },
]

export default function EventsPackages() {
  return (
    <section id="eventos" className="py-20 bg-gradient-to-br from-jalapeno-red to-jalapeno-orange chili-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-cartoon drop-shadow-lg">
            Paquetes para Eventos
          </h2>
          <p className="text-xl text-white/90">
            Precios especiales para tus celebraciones
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-white">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-jalapeno-yellow">
                  <tr>
                    <th className="px-6 py-4 text-left text-jalapeno-red font-bold text-lg font-cartoon">
                      Órdenes
                    </th>
                    <th className="px-6 py-4 text-right text-jalapeno-red font-bold text-lg font-cartoon">
                      Precio
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {eventPackages.map((pkg, index) => (
                    <tr
                      key={pkg.orders}
                      className={`border-b border-gray-200 hover:bg-jalapeno-yellow/20 transition-colors fade-in`}
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <td className="px-6 py-4 text-gray-800 font-semibold text-lg">
                        {pkg.orders} órdenes
                      </td>
                      <td className="px-6 py-4 text-right text-jalapeno-red font-bold text-lg">
                        ${pkg.price.toLocaleString('es-MX')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center mt-8 fade-in">
            <button className="bg-jalapeno-green text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition-all transform hover:scale-105 shadow-xl border-4 border-white">
              Cotizar mi evento
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

