'use client'

const menuItems = [
  {
    id: 1,
    title: 'Tacos',
    image: '🌮',
    description: 'Tacos al pastor, cecina y más'
  },
  {
    id: 2,
    title: 'Gringas',
    image: '🌯',
    description: 'Deliciosas gringas con queso'
  },
  {
    id: 3,
    title: 'Tortas',
    image: '🥪',
    description: 'Tortas tradicionales'
  },
  {
    id: 4,
    title: 'Aguas Frescas',
    image: '🥤',
    description: 'Refrescantes aguas naturales'
  },
  {
    id: 5,
    title: 'Carnitas',
    image: '🍖',
    description: 'Carnitas estilo Michoacán'
  },
]

export default function FeaturedMenu() {
  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-jalapeno-red mb-4 font-cartoon">
            Menú Destacado
          </h2>
          <p className="text-xl text-gray-700">
            Nuestros platillos más populares
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {menuItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-4 border-white fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="h-48 bg-gradient-to-br from-jalapeno-red to-jalapeno-orange flex items-center justify-center">
                <span className="text-6xl">{item.image}</span>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-jalapeno-red mb-2 font-cartoon">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {item.description}
                </p>
                <button className="w-full bg-jalapeno-yellow text-jalapeno-red py-2 rounded-lg font-bold hover:bg-yellow-400 transition-colors border-2 border-jalapeno-red">
                  Ver más
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

