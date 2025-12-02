'use client'

import Link from 'next/link'
import { Utensils, Truck, PartyPopper, Clock, Shield, Heart } from 'lucide-react'

const services = [
  {
    icon: Utensils,
    title: 'Comer en Sitio',
    description: 'Disfruta la experiencia completa en nuestro acogedor restaurante con servicio de primera.',
    link: '/mesero',
    color: 'from-brand-500 to-brand-700',
  },
  {
    icon: Truck,
    title: 'Para Llevar',
    description: 'Ordena y recoge tu pedido listo para disfrutar donde prefieras.',
    link: '/mesero',
    color: 'from-gold to-brand-500',
  },
  {
    icon: PartyPopper,
    title: 'Eventos & Taquizas',
    description: 'Llevamos el sabor de El Jalapeño a tu celebración con paquetes desde 40 personas.',
    link: '/eventos',
    color: 'from-green-500 to-green-700',
  },
]

const features = [
  { icon: Clock, text: 'Servicio Rápido' },
  { icon: Shield, text: 'Ingredientes Frescos' },
  { icon: Heart, text: 'Hecho con Amor' },
]

export default function Services() {
  return (
    <section id="about" className="section-padding bg-dark-900 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block text-gold text-sm font-medium tracking-wider uppercase">
            Nuestros Servicios
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            ¿Cómo deseas <span className="gradient-text">disfrutar?</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Múltiples formas de experimentar nuestra cocina, adaptadas a tu estilo de vida.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.link}
              className="group relative card-glass p-8 text-center hover:scale-105 
                       transition-all duration-500 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 
                            group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className={`relative inline-flex items-center justify-center w-16 h-16 
                            bg-gradient-to-br ${service.color} rounded-2xl mb-6
                            transform group-hover:scale-110 group-hover:rotate-3 
                            transition-all duration-500 shadow-lg`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="font-display text-2xl font-semibold text-white mb-3 
                           group-hover:text-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Arrow indicator */}
              <div className="mt-6 inline-flex items-center text-gold text-sm font-medium 
                            opacity-0 group-hover:opacity-100 transition-all duration-300
                            transform translate-y-2 group-hover:translate-y-0">
                <span>Explorar</span>
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" 
                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Features Strip */}
        <div className="flex flex-wrap justify-center gap-8 py-8 border-y border-white/10">
          {features.map((feature) => (
            <div key={feature.text} className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center">
                <feature.icon className="w-5 h-5 text-gold" />
              </div>
              <span className="text-white/70 font-medium">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
