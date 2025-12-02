'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const allProducts = [
    // Tacos
    {
        id: 1,
        name: 'Tacos al Pastor',
        description: 'Carne de cerdo marinada con especias y piña, servida en tortilla de maíz',
        price: 15.00,
        image: '/images/tacos_pastor_product_1764637394762.png',
        category: 'Tacos'
    },
    {
        id: 2,
        name: 'Cecina',
        description: 'Carne de res salada y secada al sol, asada a la perfección',
        price: 18.00,
        image: '/images/cecina_product_1764637408647.png',
        category: 'Tacos'
    },
    {
        id: 5,
        name: 'Carnitas',
        description: 'Cerdo cocido lentamente hasta quedar tierno y dorado',
        price: 17.00,
        image: '/images/carnitas_product_1764637453012.png',
        category: 'Tacos'
    },
    {
        id: 7,
        name: 'Tacos de Tripa',
        description: 'Tripa de res dorada y crujiente con cilantro y cebolla',
        price: 16.00,
        image: '/images/tacos_pastor_product_1764637394762.png',
        category: 'Tacos'
    },
    {
        id: 8,
        name: 'Tacos de Suadero',
        description: 'Carne suave y jugosa con un toque de limón',
        price: 15.00,
        image: '/images/carnitas_product_1764637453012.png',
        category: 'Tacos'
    },

    // Especialidades
    {
        id: 3,
        name: 'Gringas',
        description: 'Tortilla de harina con queso derretido y carne al pastor',
        price: 20.00,
        image: '/images/gringas_product_1764637422986.png',
        category: 'Especialidades'
    },
    {
        id: 9,
        name: 'Quesadillas',
        description: 'Tortilla de maíz rellena de queso y tu ingrediente favorito',
        price: 18.00,
        image: '/images/gringas_product_1764637422986.png',
        category: 'Especialidades'
    },
    {
        id: 10,
        name: 'Alambres',
        description: 'Carne, pimientos, cebolla y queso fundido',
        price: 25.00,
        image: '/images/carnitas_product_1764637453012.png',
        category: 'Especialidades'
    },

    // Tortas
    {
        id: 4,
        name: 'Tortas',
        description: 'Pan telera con tu carne favorita, aguacate, frijoles y más',
        price: 25.00,
        image: '/images/tortas_product_1764637438770.png',
        category: 'Tortas'
    },
    {
        id: 11,
        name: 'Torta Cubana',
        description: 'La reina de las tortas con jamón, salchicha, milanesa y más',
        price: 30.00,
        image: '/images/tortas_product_1764637438770.png',
        category: 'Tortas'
    },

    // Bebidas
    {
        id: 6,
        name: 'Aguas Frescas',
        description: 'Horchata, Jamaica, Tamarindo - Refrescantes y naturales',
        price: 8.00,
        image: '/images/aguas_frescas_1764637466815.png',
        category: 'Bebidas'
    },
    {
        id: 12,
        name: 'Refrescos',
        description: 'Coca-Cola, Sprite, Fanta - Bebidas embotelladas',
        price: 6.00,
        image: '/images/aguas_frescas_1764637466815.png',
        category: 'Bebidas'
    },
];

export default function MenuPage() {
    const categories = ['Todos', 'Tacos', 'Especialidades', 'Tortas', 'Bebidas'];
    const [selectedCategory, setSelectedCategory] = React.useState('Todos');

    const filteredProducts = selectedCategory === 'Todos'
        ? allProducts
        : allProducts.filter(p => p.category === selectedCategory);

    return (
        <main className="min-h-screen bg-brand-dark">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 font-montserrat">
                            Nuestro Menú
                        </h1>
                        <p className="text-xl text-gray-300 font-inter">
                            Descubre todos nuestros deliciosos platillos
                        </p>
                    </motion.div>

                    {/* Category Filter */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-4 mb-12"
                    >
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${selectedCategory === category
                                        ? 'bg-gradient-to-r from-brand-red to-brand-red-accent text-white shadow-lg'
                                        : 'glass-dark text-gray-300 hover:text-white'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </motion.div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProducts.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <ProductCard product={product} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
