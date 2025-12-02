'use client'

import Link from 'next/link'
import { Check, ArrowRight, Users, Sparkles } from 'lucide-react'

const packages = [
  {
    name: 'Básico',
    persons: 40,
    price: 3000,
    features: [
      '40 órdenes de tacos',
      'Trompo de pastor',
      'Tortillas hechas a mano',
      'Salsas y guarniciones',
      '2 horas de servicio',
    ],
    popular: false,
  },
  {
    name: 'Premium',
    persons: 70,
    price: 5250,
    features: [
      '70 órdenes de tacos',
      'Trompo de pastor + Cecina',
      'Tortillas hechas a mano',
      'Barra de salsas completa',
      'Aguas frescas incluidas',
      '3 horas de servicio',
      'Montaje y desmontaje',
    ],
    popular: true,
  },
  {
    name: 'Elite',
    persons: 100,
    price: 7500,
    features: [
      '100 órdenes de tacos',
      'Menú completo de carnes',
      'Tortillas artesanales',
      'Barra de salsas premium',
      'Aguas y refrescos',
      '4 horas de servicio',
      'Personal de servicio',
      'Decoración temática',
    ],
    popular: false,
  },
]

export default function EventsPackages() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2070&auto=format&fit=crop"
          alt="Mexican feast"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dark-900/95" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-flex items-center space-x-2 text-gold text-sm font-medium tracking-wider uppercase">
            <Sparkles className="w-4 h-4" />
            <span>Eventos Especiales</span>
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Taquizas para tu <span className="gradient-text">Celebración</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Bodas, cumpleaños, eventos corporativos. Llevamos la fiesta de sabor a donde tú estés.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative card-glass p-8 ${
                pkg.popular ? 'border-gold/50 scale-105 lg:scale-110' : ''
              }`}
            >
              {/* Popular badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-gold to-gold-light text-dark-900 
                                 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Más Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  {pkg.name}
                </h3>
                <div className="flex items-center justify-center space-x-2 text-white/50 text-sm mb-4">
                  <Users className="w-4 h-4" />
                  <span>{pkg.persons} personas</span>
                </div>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold gradient-text">${pkg.price.toLocaleString()}</span>
                  <span className="text-white/50 ml-2">MXN</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-gold" />
                    </div>
                    <span className="text-white/70 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/eventos"
                className={`w-full flex items-center justify-center space-x-2 py-4 rounded-full 
                          font-semibold transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-gold to-gold-light text-dark-900 hover:shadow-lg hover:shadow-gold/25'
                    : 'border-2 border-white/20 text-white hover:bg-white/5'
                }`}
              >
                <span>Cotizar Evento</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* Custom events note */}
        <div className="text-center mt-12">
          <p className="text-white/50 text-sm">
            ¿Necesitas algo diferente? 
            <Link href="/eventos" className="text-gold hover:text-gold-light ml-1 underline">
              Contáctanos para un paquete personalizado
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
