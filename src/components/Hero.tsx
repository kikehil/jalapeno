'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, MapPin, Clock, Star, QrCode, Utensils, Users } from 'lucide-react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=2080&auto=format&fit=crop"
          alt="Delicious Mexican Tacos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/90 to-dark-900/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-dark-900/50" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-brand-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-32 md:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className={`inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md 
                          border border-white/20 rounded-full px-4 py-2 text-sm
                          transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-white/80">Abierto ahora • Ordena en línea</span>
            </div>

            {/* Headline */}
            <div className={`space-y-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Sabor </span>
                <span className="gradient-text">Auténtico</span>
                <br />
                <span className="text-white">de México</span>
              </h1>
              <p className="text-lg md:text-xl text-white/60 max-w-lg leading-relaxed">
                Descubre la experiencia culinaria que ha conquistado paladares por generaciones. 
                Tacos al pastor, cecina premium y mucho más.
              </p>
            </div>

            {/* CTAs */}
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Link href="/mesero" className="btn-primary flex items-center justify-center space-x-2 group">
                <Utensils className="w-5 h-5" />
                <span>Ordenar Ahora</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/eventos" className="btn-secondary flex items-center justify-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Reservar Evento</span>
              </Link>
            </div>

            {/* Stats */}
            <div className={`flex flex-wrap gap-8 pt-8 border-t border-white/10 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="space-y-1">
                <div className="flex items-center space-x-1 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-white/50">+500 reseñas</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-white">15+</p>
                <p className="text-sm text-white/50">Años de tradición</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-white">50k+</p>
                <p className="text-sm text-white/50">Clientes felices</p>
              </div>
            </div>
          </div>

          {/* QR Code Card */}
          <div className={`hidden lg:block transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Floating card */}
              <div className="card-glass p-8 max-w-sm ml-auto glow-gold">
                <div className="text-center space-y-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 
                                bg-gradient-to-br from-brand-500 to-brand-700 rounded-2xl mb-2">
                    <QrCode className="w-8 h-8 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white mb-2">
                      Menú Digital
                    </h3>
                    <p className="text-white/60 text-sm">
                      Escanea el código QR para ver nuestro menú completo desde tu mesa
                    </p>
                  </div>

                  {/* QR Code placeholder - in real app would be actual QR */}
                  <div className="bg-white p-4 rounded-xl inline-block">
                    <div className="w-40 h-40 bg-dark-900 rounded-lg flex items-center justify-center">
                      <div className="grid grid-cols-5 gap-1 p-2">
                        {[...Array(25)].map((_, i) => (
                          <div 
                            key={i} 
                            className={`w-5 h-5 rounded-sm ${
                              Math.random() > 0.4 ? 'bg-dark-900' : 'bg-white'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <Link 
                    href="#menu" 
                    className="inline-flex items-center text-gold hover:text-gold-light 
                             transition-colors text-sm font-medium"
                  >
                    Ver menú completo
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>

              {/* Floating info cards */}
              <div className="absolute -left-16 top-1/4 card-glass p-4 animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Horario</p>
                    <p className="text-white/50 text-xs">12:00 - 23:00</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-8 bottom-1/4 card-glass p-4 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-brand-500/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-brand-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Ubicación</p>
                    <p className="text-white/50 text-xs">Centro, CDMX</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2">
        <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
