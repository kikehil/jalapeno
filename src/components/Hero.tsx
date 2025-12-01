'use client'

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 pb-10 chili-pattern bg-jalapeno-red">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Text Content */}
          <div className="text-center md:text-left fade-in">
            {/* Logo */}
            <div className="flex justify-center md:justify-start mb-6">
              <div className="w-20 h-20 bg-jalapeno-yellow rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                <span className="text-jalapeno-red text-4xl">🌶️</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-cartoon drop-shadow-lg">
              Taquería El Jalapeño
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 font-semibold">
              Sabor Tradicional, Caliente y Delicioso
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-jalapeno-yellow text-jalapeno-red px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-xl border-4 border-white">
                Pedir en línea
              </button>
              <button className="bg-jalapeno-green text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition-all transform hover:scale-105 shadow-xl border-4 border-white">
                Reservar evento
              </button>
            </div>
          </div>

          {/* Right: Image */}
          <div className="fade-in">
            <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
              <div className="w-full h-96 bg-gradient-to-br from-jalapeno-orange to-jalapeno-red flex items-center justify-center">
                <div className="text-center text-white">
                  <span className="text-6xl mb-4 block">🌮</span>
                  <p className="text-xl font-bold">Tacos al Pastor</p>
                  <p className="text-sm opacity-90">Foto placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

