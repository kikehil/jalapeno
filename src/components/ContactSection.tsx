'use client'

import { MapPin, Phone, Clock, Mail, Instagram, Facebook } from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Ubicación',
    lines: ['Av. Principal #123', 'Col. Centro, CDMX'],
  },
  {
    icon: Phone,
    title: 'Teléfono',
    lines: ['(55) 1234-5678', 'WhatsApp disponible'],
  },
  {
    icon: Clock,
    title: 'Horario',
    lines: ['Lun - Dom: 12:00 - 23:00', 'Eventos: Previa cita'],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['hola@eljalapeno.mx', 'eventos@eljalapeno.mx'],
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-dark-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] 
                    bg-brand-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block text-gold text-sm font-medium tracking-wider uppercase">
                Contáctanos
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
                Ven a <span className="gradient-text">Visitarnos</span>
              </h2>
              <p className="text-white/60 text-lg">
                Estamos listos para recibirte y darte la mejor experiencia gastronómica. 
                ¿Tienes dudas? ¡Escríbenos!
              </p>
            </div>

            {/* Contact Info Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item) => (
                <div key={item.title} className="card-glass p-6 group hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-500 to-brand-700 
                                  rounded-xl flex items-center justify-center flex-shrink-0
                                  group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                      {item.lines.map((line) => (
                        <p key={line} className="text-white/50 text-sm">{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-4">
              <span className="text-white/50 text-sm">Síguenos:</span>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center
                                   hover:bg-white/10 transition-colors">
                <Instagram className="w-5 h-5 text-white/70" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center
                                   hover:bg-white/10 transition-colors">
                <Facebook className="w-5 h-5 text-white/70" />
              </a>
            </div>
          </div>

          {/* Right: Map */}
          <div className="relative">
            <div className="card-glass p-2 h-full min-h-[400px] overflow-hidden">
              {/* Placeholder for map - in production would use Google Maps embed */}
              <div className="w-full h-full bg-dark-700 rounded-xl flex items-center justify-center relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=2000&auto=format&fit=crop"
                  alt="Mapa ubicación"
                  className="absolute inset-0 w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent" />
                
                {/* Location Pin */}
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-500 to-brand-700 rounded-full 
                                flex items-center justify-center mx-auto mb-4 shadow-lg shadow-brand-500/25
                                animate-pulse-glow">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">El Jalapeño</h3>
                  <p className="text-white/60 text-sm">Av. Principal #123, Centro</p>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 mt-4 text-gold hover:text-gold-light 
                             transition-colors text-sm font-medium"
                  >
                    <span>Abrir en Google Maps</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
