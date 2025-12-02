'use client';

import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import Link from 'next/link';

const featuredProducts = [
    {
        id: 1,
        name: 'Tacos al Pastor',
        description: 'Carne de cerdo marinada con especias y piña, servida en tortilla de maíz',
        price: 15.00,
        image: '/images/tacos_pastor_product_1764637394762.png',
        category: 'tacos'
    },
    {
        id: 2,
        name: 'Cecina',
        description: 'Carne de res salada y secada al sol, asada a la perfección',
        price: 18.00,
        image: '/images/cecina_product_1764637408647.png',
        category: 'tacos'
    },
    {
        id: 3,
        name: 'Gringas',
        description: 'Tortilla de harina con queso derretido y carne al pastor',
        price: 20.00,
        image: '/images/gringas_product_1764637422986.png',
        category: 'especialidades'
    },
    {
        id: 4,
        name: 'Tortas',
        description: 'Pan telera con tu carne favorita, aguacate, frijoles y más',
        price: 25.00,
        image: '/images/tortas_product_1764637438770.png',
        category: 'tortas'
    },
    {
        id: 5,
        name: 'Carnitas',
        description: 'Cerdo cocido lentamente hasta quedar tierno y dorado',
        price: 17.00,
        image: '/images/carnitas_product_1764637453012.png',
        category: 'tacos'
    },
    {
        id: 6,
        name: 'Aguas Frescas',
        description: 'Horchata, Jamaica, Tamarindo - Refrescantes y naturales',
        price: 8.00,
        image: '/images/aguas_frescas_1764637466815.png',
        category: 'bebidas'
    },
];

export default function FeaturedMenu() {
    return (
        <section className="py-20 bg-gradient-to-b from-brand-dark to-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-montserrat">
                        Menú Destacado
                    </h2>
                    <p className="text-xl text-gray-300 font-inter">
                        Descubre nuestros platillos más populares
                    </p>
                </motion.div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {featuredProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <ProductCard product={product} />
                        </motion.div>
                    ))}
                </div>

                {/* View Full Menu Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <Link href="/menu">
                        <button className="btn-primary text-lg px-10 py-4">
                            Ver Menú Completo
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
