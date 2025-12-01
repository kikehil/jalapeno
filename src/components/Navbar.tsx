'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-jalapeno-red shadow-lg' : 'bg-jalapeno-red/95'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-jalapeno-yellow rounded-full flex items-center justify-center border-2 border-white">
              <span className="text-jalapeno-red text-xl font-bold">🌶️</span>
            </div>
            <span className="text-white font-bold text-lg md:text-xl font-cartoon">
              El Jalapeño
            </span>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#inicio" className="text-white hover:text-jalapeno-yellow transition-colors font-semibold">
              Inicio
            </a>
            <a href="#menu" className="text-white hover:text-jalapeno-yellow transition-colors font-semibold">
              Menú
            </a>
            <a href="#eventos" className="text-white hover:text-jalapeno-yellow transition-colors font-semibold">
              Eventos
            </a>
            <a href="#contacto" className="text-white hover:text-jalapeno-yellow transition-colors font-semibold">
              Contacto
            </a>
          </div>

          {/* Order Button - Desktop */}
          <button className="hidden md:block bg-jalapeno-yellow text-jalapeno-red px-4 py-2 rounded-lg font-bold hover:bg-yellow-400 transition-colors shadow-md border-2 border-white">
            Ordenar ahora
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4 fade-in">
            <div className="flex flex-col space-y-4">
              <a 
                href="#inicio" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-jalapeno-yellow transition-colors font-semibold"
              >
                Inicio
              </a>
              <a 
                href="#menu" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-jalapeno-yellow transition-colors font-semibold"
              >
                Menú
              </a>
              <a 
                href="#eventos" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-jalapeno-yellow transition-colors font-semibold"
              >
                Eventos
              </a>
              <a 
                href="#contacto" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-jalapeno-yellow transition-colors font-semibold"
              >
                Contacto
              </a>
              <button className="bg-jalapeno-yellow text-jalapeno-red px-4 py-2 rounded-lg font-bold hover:bg-yellow-400 transition-colors shadow-md border-2 border-white w-full">
                Ordenar ahora
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

