'use client'

export default function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-jalapeno-red mb-4 font-cartoon">
            Contacto y Ubicación
          </h2>
          <p className="text-xl text-gray-700">
            Visítanos o contáctanos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6 fade-in">
            {/* Address */}
            <div className="bg-gradient-to-br from-jalapeno-yellow to-yellow-300 rounded-2xl p-6 border-4 border-white shadow-lg">
              <h3 className="text-2xl font-bold text-jalapeno-red mb-4 font-cartoon flex items-center">
                <span className="mr-2">📍</span>
                Dirección
              </h3>
              <p className="text-gray-800 text-lg">
                Calle Principal 123<br />
                Colonia Centro<br />
                Ciudad, Estado, CP 12345
              </p>
            </div>

            {/* WhatsApp Buttons */}
            <div className="space-y-4">
              <a
                href="https://wa.me/521234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-jalapeno-green text-white rounded-lg p-4 hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg border-4 border-white text-center font-bold text-lg"
              >
                <span className="mr-2">💬</span>
                WhatsApp 1: (123) 456-7890
              </a>
              <a
                href="https://wa.me/521234567891"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-jalapeno-green text-white rounded-lg p-4 hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg border-4 border-white text-center font-bold text-lg"
              >
                <span className="mr-2">💬</span>
                WhatsApp 2: (123) 456-7891
              </a>
            </div>

            {/* Email */}
            <div className="bg-jalapeno-red text-white rounded-lg p-4 border-4 border-white shadow-lg">
              <a
                href="mailto:contacto@eljalapeno.com"
                className="flex items-center justify-center font-bold text-lg hover:text-jalapeno-yellow transition-colors"
              >
                <span className="mr-2">📧</span>
                contacto@eljalapeno.com
              </a>
            </div>

            {/* Facebook */}
            <div className="bg-blue-600 text-white rounded-lg p-4 border-4 border-white shadow-lg">
              <a
                href="https://facebook.com/eljalapeno"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center font-bold text-lg hover:text-blue-200 transition-colors"
              >
                <span className="mr-2">📘</span>
                Síguenos en Facebook
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="fade-in">
            <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-lg border-4 border-white h-full min-h-[400px] flex items-center justify-center">
              <div className="text-center text-gray-600">
                <span className="text-6xl mb-4 block">🗺️</span>
                <p className="text-xl font-bold">Mapa</p>
                <p className="text-sm">(Embed de Google Maps aquí)</p>
                <p className="text-xs mt-2 text-gray-500">
                  &lt;iframe src=&quot;...&quot; /&gt;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

