'use client';

import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { FiTrash2, FiPlus, FiMinus, FiShoppingBag } from 'react-icons/fi';

export default function CarritoPage() {
    const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

    if (cart.length === 0) {
        return (
            <main className="min-h-screen bg-brand-dark">
                <Navbar />
                <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="glass-dark rounded-2xl p-12"
                        >
                            <FiShoppingBag className="text-6xl text-gray-500 mx-auto mb-6" />
                            <h2 className="text-3xl font-bold text-white mb-4 font-montserrat">
                                Tu carrito está vacío
                            </h2>
                            <p className="text-gray-400 mb-8 font-inter">
                                Agrega algunos productos deliciosos a tu pedido
                            </p>
                            <Link href="/menu">
                                <button className="btn-primary">
                                    Ver Menú
                                </button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
                <Footer />
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-brand-dark">
            <Navbar />

            <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl sm:text-5xl font-bold text-white mb-8 font-montserrat"
                    >
                        Mi Pedido
                    </motion.h1>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-4">
                            {cart.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="glass-dark rounded-xl p-4 flex gap-4"
                                >
                                    {/* Product Image */}
                                    <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Product Info */}
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-white mb-1 font-montserrat">
                                            {item.name}
                                        </h3>
                                        <p className="text-brand-yellow font-semibold">
                                            ${item.price.toFixed(2)}
                                        </p>
                                    </div>

                                    {/* Quantity Controls */}
                                    <div className="flex flex-col items-end justify-between">
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-red-500 hover:text-red-400 transition-colors"
                                        >
                                            <FiTrash2 size={20} />
                                        </button>

                                        <div className="flex items-center gap-2 glass px-3 py-1 rounded-lg">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="text-white hover:text-brand-yellow transition-colors"
                                            >
                                                <FiMinus />
                                            </button>
                                            <span className="text-white font-semibold w-8 text-center">
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="text-white hover:text-brand-yellow transition-colors"
                                            >
                                                <FiPlus />
                                            </button>
                                        </div>

                                        <p className="text-white font-bold">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="glass-dark rounded-xl p-6 sticky top-24"
                            >
                                <h2 className="text-2xl font-bold text-white mb-6 font-montserrat">
                                    Resumen del Pedido
                                </h2>

                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between text-gray-300">
                                        <span>Subtotal</span>
                                        <span>${getCartTotal().toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-300">
                                        <span>Envío</span>
                                        <span className="text-brand-green">Gratis</span>
                                    </div>
                                    <div className="border-t border-gray-700 pt-4">
                                        <div className="flex justify-between text-xl font-bold text-white">
                                            <span>Total</span>
                                            <span className="text-brand-yellow">${getCartTotal().toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>

                                <Link href="/checkout">
                                    <button className="btn-primary w-full text-lg py-4">
                                        Confirmar Pedido
                                    </button>
                                </Link>

                                <Link href="/menu">
                                    <button className="w-full mt-4 text-brand-yellow hover:text-white transition-colors font-semibold">
                                        Seguir comprando
                                    </button>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
