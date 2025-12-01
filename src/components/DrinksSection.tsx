'use client'

const aguasFrescas = [
  'Horchata',
  'Jamaica',
  'Piña Natural',
  'Pepino con limón',
  'Melón',
  'Ciruela',
  'Jobo',
]

export default function DrinksSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-jalapeno-red mb-4 font-cartoon">
            Aguas Frescas
          </h2>
          <p className="text-xl text-gray-700">
            Refrescantes y naturales
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 border-4 border-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aguasFrescas.map((drink, index) => (
                <div
                  key={drink}
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-jalapeno-green/10 to-transparent rounded-lg hover:bg-jalapeno-green/20 transition-colors fade-in border-2 border-transparent hover:border-jalapeno-green"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">🥤</span>
                    <span className="text-lg font-semibold text-gray-800">
                      {drink}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-jalapeno-red font-bold">
                      $45 litro
                    </div>
                    <div className="text-gray-600 text-sm">
                      $30 medio
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

