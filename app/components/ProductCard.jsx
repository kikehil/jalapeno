'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useCart } from '../context/CartContext';
import { FiShoppingCart } from 'react-icons/fi';

export default function ProductCard({ product, showAddToCart = true }) {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="glass-dark rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
        >
            {/* Product Image */}
            <div className="relative h-56 w-full overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                />
            </div>

            {/* Product Info */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 font-montserrat">
                    {product.name}
                </h3>

                {product.description && (
                    <p className="text-gray-300 text-sm mb-4 font-inter line-clamp-2">
                        {product.description}
                    </p>
                )}

                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-brand-yellow font-montserrat">
                        ${product.price.toFixed(2)}
                    </span>

                    {showAddToCart && (
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleAddToCart}
                            className="bg-gradient-to-r from-brand-red to-brand-red-accent text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg transition-all duration-200"
                        >
                            <FiShoppingCart />
                            Agregar
                        </motion.button>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
