'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Flame, Star, Clock } from 'lucide-react'

const categories = [
  { id: 'popular', name: 'Populares' },
  { id: 'tacos', name: 'Tacos' },
  { id: 'especialidades', name: 'Especialidades' },
  { id: 'bebidas', name: 'Bebidas' },
]

const menuItems = [
  {
    id: 1,
    name: 'Tacos al Pastor',
    description: 'Carne de cerdo marinada, piña, cebolla y cilantro',
    price: 25,
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=600&auto=format&fit=crop',
    category: 'popular',
    isPopular: true,
    rating: 4.9,
    prepTime: '10 min',
  },
  {
    id: 2,
    name: 'Tacos de Cecina',
    description: 'Cecina premium de Yecapixtla, salsa verde, queso',
    price: 35,
    image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?q=80&w=600&auto=format&fit=crop',
    category: 'popular',
    isPopular: true,
    rating: 4.8,
    prepTime: '12 min',
  },
  {
    id: 3,
    name: 'Gringas Especiales',
    description: 'Tortilla de harina, queso fundido, pastor y piña',
    price: 45,
    image: 'https://images.unsplash.com/photo-1628191011227-522c7c3f0af9?q=80&w=600&auto=format&fit=crop',
    category: 'especialidades',
    isNew: true,
    rating: 4.7,
    prepTime: '15 min',
  },
  {
    id: 4,
    name: 'Volcanes',
    description: 'Tortilla crujiente, carne, queso gratinado y salsa',
    price: 40,
    image: 'https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?q=80&w=600&auto=format&fit=crop',
    category: 'especialidades',
    rating: 4.6,
    prepTime: '12 min',
  },
  {
    id: 5,
    name: 'Quesadillas',
    description: 'Tortilla de maíz, queso Oaxaca, guisado a elegir',
    price: 30,
    image: 'https://images.unsplash.com/photo-1618040996337-56904b7850b9?q=80&w=600&auto=format&fit=crop',
    category: 'tacos',
    rating: 4.5,
    prepTime: '8 min',
  },
  {
    id: 6,
    name: 'Agua de Horchata',
    description: 'Bebida tradicional de arroz con canela',
    price: 25,
    image: 'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?q=80&w=600&auto=format&fit=crop',
    category: 'bebidas',
    rating: 4.9,
    prepTime: '2 min',
  },
]

export default function FeaturedMenu() {
  const [activeCategory, setActiveCategory] = useState('popular')

  const filteredItems = menuItems.filter(
    item => activeCategory === 'popular' 
      ? item.isPopular || item.category === 'popular'
      : item.category === activeCategory
  )

  return (
    <section id="menu" className="section-padding bg-dark-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block text-gold text-sm font-medium tracking-wider uppercase">
            Nuestro Menú
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Sabores que <span className="gradient-text">Enamoran</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Cada platillo es preparado con ingredientes frescos y recetas tradicionales 
            que han pasado de generación en generación.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-lg shadow-brand-500/25'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group card-glass overflow-hidden hover:scale-[1.02] transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 
                           transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent" />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {item.isPopular && (
                    <span className="flex items-center space-x-1 bg-brand-500 text-white 
                                   px-3 py-1 rounded-full text-xs font-medium">
                      <Flame className="w-3 h-3" />
                      <span>Popular</span>
                    </span>
                  )}
                  {item.isNew && (
                    <span className="bg-gold text-dark-900 px-3 py-1 rounded-full text-xs font-medium">
                      Nuevo
                    </span>
                  )}
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 flex items-center space-x-1 
                              bg-dark-900/80 backdrop-blur-sm px-2 py-1 rounded-full">
                  <Star className="w-3 h-3 text-gold fill-current" />
                  <span className="text-white text-xs font-medium">{item.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white 
                                 group-hover:text-gold transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-white/50 text-sm mt-1">{item.description}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center space-x-2 text-white/50 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{item.prepTime}</span>
                  </div>
                  <p className="text-2xl font-bold text-gold">${item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center mt-12">
          <Link 
            href="/mesero" 
            className="inline-flex items-center space-x-2 btn-secondary"
          >
            <span>Ver Menú Completo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
