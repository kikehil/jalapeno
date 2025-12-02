'use client'

import Link from 'next/link'
import { Instagram, Facebook, Mail, Phone, ChefHat, ShoppingBag, LayoutDashboard } from 'lucide-react'

const footerLinks = {
  menu: [
    { name: 'Tacos al Pastor', href: '#menu' },
    { name: 'Tacos de Cecina', href: '#menu' },
    { name: 'Gringas', href: '#menu' },
    { name: 'Bebidas', href: '#menu' },
  ],
  services: [
    { name: 'Comer en Sitio', href: '/mesero' },
    { name: 'Para Llevar', href: '/mesero' },
    { name: 'Eventos', href: '/eventos' },
    { name: 'Catering', href: '/eventos' },
  ],
  modules: [
    { name: 'Sistema Mesero', href: '/mesero', icon: ShoppingBag },
    { name: 'Cocina (KDS)', href: '/cocina', icon: ChefHat },
    { name: 'Dashboard Admin', href: '/admin/dashboard', icon: LayoutDashboard },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-white/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-500 to-brand-700 rounded-xl 
                            flex items-center justify-center shadow-lg shadow-brand-500/20">
                <span className="text-white font-display font-bold text-2xl">J</span>
              </div>
              <div>
                <span className="font-display text-xl font-semibold text-white block">
                  El Jalapeño
                </span>
                <span className="text-white/50 text-xs">Auténtica Cocina Mexicana</span>
              </div>
            </Link>
            
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              Más de 15 años llevando el sabor auténtico de México a tu mesa. 
              Tradición, calidad y pasión en cada taco.
            </p>

            {/* Social */}
            <div className="flex items-center space-x-3">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center
                                   hover:bg-brand-500 transition-colors group">
                <Instagram className="w-5 h-5 text-white/70 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center
                                   hover:bg-brand-500 transition-colors group">
                <Facebook className="w-5 h-5 text-white/70 group-hover:text-white" />
              </a>
              <a href="mailto:hola@eljalapeno.mx" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center
                                   hover:bg-brand-500 transition-colors group">
                <Mail className="w-5 h-5 text-white/70 group-hover:text-white" />
              </a>
              <a href="tel:+525512345678" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center
                                   hover:bg-brand-500 transition-colors group">
                <Phone className="w-5 h-5 text-white/70 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Menu Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Menú</h4>
            <ul className="space-y-3">
              {footerLinks.menu.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/50 hover:text-gold text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/50 hover:text-gold text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Module Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Sistema POS</h4>
            <ul className="space-y-3">
              {footerLinks.modules.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="flex items-center space-x-2 text-white/50 hover:text-gold text-sm transition-colors"
                  >
                    <link.icon className="w-4 h-4" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} El Jalapeño. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="#" className="text-white/40 hover:text-white/70 transition-colors">
                Términos
              </Link>
              <Link href="#" className="text-white/40 hover:text-white/70 transition-colors">
                Privacidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
