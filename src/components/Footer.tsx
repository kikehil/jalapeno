'use client'

export default function Footer() {
  return (
    <footer className="bg-jalapeno-red text-white py-8 chili-pattern">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-jalapeno-yellow rounded-full flex items-center justify-center border-2 border-white">
                <span className="text-jalapeno-red text-xl font-bold">🌶️</span>
              </div>
              <span className="font-bold text-lg font-cartoon">El Jalapeño</span>
            </div>
            <p className="text-white/80">
              Sabor Tradicional, Caliente y Delicioso
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-cartoon">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="hover:text-jalapeno-yellow transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-jalapeno-yellow transition-colors">
                  Menú
                </a>
              </li>
              <li>
                <a href="#eventos" className="hover:text-jalapeno-yellow transition-colors">
                  Eventos
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-jalapeno-yellow transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-cartoon">Servicios</h3>
            <ul className="space-y-2 text-white/80">
              <li>Pedidos en línea</li>
              <li>Servicio para eventos</li>
              <li>Comer en el local</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-cartoon">Contacto</h3>
            <ul className="space-y-2 text-white/80">
              <li>WhatsApp disponible</li>
              <li>contacto@eljalapeno.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 text-center text-white/80">
          <p>&copy; {new Date().getFullYear()} Taquería El Jalapeño. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

