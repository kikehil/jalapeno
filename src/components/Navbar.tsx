'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChefHat, ShoppingBag, Calendar, LayoutDashboard } from 'lucide-react'

const navLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Menú', href: '#menu' },
  { name: 'Eventos', href: '/eventos' },
  { name: 'Nosotros', href: '#about' },
  { name: 'Contacto', href: '#contact' },
]

const moduleLinks = [
  { name: 'Mesero', href: '/mesero', icon: ShoppingBag },
  { name: 'Cocina', href: '/cocina', icon: ChefHat },
  { name: 'Admin', href: '/admin/dashboard', icon: LayoutDashboard },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-dark-900/95 backdrop-blur-xl border-b border-white/10 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-brand-700 rounded-xl 
                          flex items-center justify-center transform group-hover:scale-110 
                          transition-transform duration-300 shadow-lg shadow-brand-500/20">
              <span className="text-white font-display font-bold text-xl">J</span>
            </div>
            <span className="font-display text-xl font-semibold text-white">
              El Jalapeño
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm text-white/70 hover:text-white 
                         transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 
                               bg-gradient-to-r from-brand-500 to-gold 
                               group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Module dropdown */}
            <div className="relative group">
              <button className="btn-glass text-sm">
                Módulos
              </button>
              <div className="absolute right-0 top-full pt-2 opacity-0 invisible 
                            group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="bg-dark-700 border border-white/10 rounded-xl p-2 min-w-[180px] shadow-2xl">
                  {moduleLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="flex items-center space-x-3 px-4 py-3 rounded-lg
                               text-white/70 hover:text-white hover:bg-white/5 
                               transition-all duration-200"
                    >
                      <link.icon className="w-4 h-4" />
                      <span className="text-sm">{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            <Link href="#order" className="btn-primary text-sm">
              Ordenar Ahora
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-dark-800/95 backdrop-blur-xl border-t border-white/10 px-4 py-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-white/70 hover:text-white 
                       hover:bg-white/5 rounded-lg transition-all"
            >
              {link.name}
            </Link>
          ))}
          
          <div className="pt-4 border-t border-white/10 mt-4">
            <p className="px-4 py-2 text-xs text-white/40 uppercase tracking-wider">Módulos</p>
            {moduleLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-3 px-4 py-3 text-white/70 
                         hover:text-white hover:bg-white/5 rounded-lg transition-all"
              >
                <link.icon className="w-4 h-4" />
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
          
          <div className="pt-4">
            <Link 
              href="#order" 
              onClick={() => setIsOpen(false)}
              className="block w-full btn-primary text-center"
            >
              Ordenar Ahora
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
