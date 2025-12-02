'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRouter } from 'next/navigation';
import { FiCheckCircle, FiUser, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

export default function CheckoutPage() {
    const router = useRouter();
    const { cart, getCartTotal, clearCart } = useCart();
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [deliveryType, setDeliveryType] = useState('delivery');
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
        notes: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate order placement
        setOrderPlaced(true);
        setTimeout(() => {
            clearCart();
            router.push('/');
        }, 5000);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    if (cart.length === 0 && !orderPlaced) {
        router.push('/carrito');
        return null;
    }

    if (orderPlaced) {
        return (
            <main className="min-h-screen bg-brand-dark">
                <Navbar />
                <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="glass-dark rounded-2xl p-12 text-center"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: 'spring' }}
                            >
                                <FiCheckCircle className="text-8xl text-brand-green mx-auto mb-6" />
                            </motion.div>
                            <h2 className="text-4xl font-bold text-white mb-4 font-montserrat">
                                ¡Pedido Confirmado!
                            </h2>
                            <p className="text-xl text-gray-300 mb-6 font-inter">
                                Tu pedido ha sido recibido exitosamente
                            </p>
                            <div className="glass p-6 rounded-xl mb-6">
                                <p className="text-gray-300 mb-2">Número de orden:</p>
                                <p className="text-3xl font-bold text-brand-yellow">
                                    #{Math.floor(Math.random() * 10000)}
                                </p>
                            </div>
                            <p className="text-gray-400 font-inter">
                                Te contactaremos pronto para confirmar tu pedido.
                                <br />
                                Redirigiendo a inicio en 5 segundos...
                            </p>
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
                <div className="max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl sm:text-5xl font-bold text-white mb-8 font-montserrat"
                    >
                        Finalizar Pedido
                    </motion.h1>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Checkout Form */}
                        <div className="lg:col-span-2">
                            <motion.form
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                onSubmit={handleSubmit}
                                className="glass-dark rounded-xl p-6 space-y-6"
                            >
                                {/* Delivery Type */}
                                <div>
                                    <label className="block text-white font-semibold mb-3 font-montserrat">
                                        Tipo de Entrega
                                    </label>
                                    <div className="grid grid-cols-2 gap-4">
                                        <button
                                            type="button"
                                            onClick={() => setDeliveryType('delivery')}
                                            className={`p-4 rounded-lg font-semibold transition-all ${deliveryType === 'delivery'
                                                    ? 'bg-gradient-to-r from-brand-red to-brand-red-accent text-white'
                                                    : 'glass text-gray-300'
                                                }`}
                                        >
                                            A Domicilio
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setDeliveryType('pickup')}
                                            className={`p-4 rounded-lg font-semibold transition-all ${deliveryType === 'pickup'
                                                    ? 'bg-gradient-to-r from-brand-red to-brand-red-accent text-white'
                                                    : 'glass text-gray-300'
                                                }`}
                                        >
                                            Recoger en Local
                                        </button>
                                    </div>
                                </div>

                                {/* Customer Info */}
                                <div>
                                    <label className="block text-white font-semibold mb-2">
                                        <FiUser className="inline mr-2" />
                                        Nombre Completo *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full glass-dark px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                                        placeholder="Juan Pérez"
                                    />
                                </div>

                                <div>
                                    <label className="block text-white font-semibold mb-2">
                                        <FiPhone className="inline mr-2" />
                                        Teléfono *
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full glass-dark px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                                        placeholder="55 1234 5678"
                                    />
                                </div>

                                <div>
                                    <label className="block text-white font-semibold mb-2">
                                        <FiMail className="inline mr-2" />
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full glass-dark px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                                        placeholder="correo@ejemplo.com"
                                    />
                                </div>

                                {deliveryType === 'delivery' && (
                                    <div>
                                        <label className="block text-white font-semibold mb-2">
                                            <FiMapPin className="inline mr-2" />
                                            Dirección de Entrega *
                                        </label>
                                        <textarea
                                            name="address"
                                            value={formData.address}
                                            onChange={handleChange}
                                            required={deliveryType === 'delivery'}
                                            rows="3"
                                            className="w-full glass-dark px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                                            placeholder="Calle, número, colonia, referencias..."
                                        />
                                    </div>
                                )}

                                <div>
                                    <label className="block text-white font-semibold mb-2">
                                        Notas Adicionales
                                    </label>
                                    <textarea
                                        name="notes"
                                        value={formData.notes}
                                        onChange={handleChange}
                                        rows="3"
                                        className="w-full glass-dark px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                                        placeholder="Instrucciones especiales, alergias, etc."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn-primary w-full text-lg py-4"
                                >
                                    Realizar Pedido
                                </button>
                            </motion.form>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="glass-dark rounded-xl p-6 sticky top-24"
                            >
                                <h2 className="text-xl font-bold text-white mb-4 font-montserrat">
                                    Tu Pedido
                                </h2>

                                <div className="space-y-3 mb-6">
                                    {cart.map((item) => (
                                        <div key={item.id} className="flex justify-between text-sm">
                                            <span className="text-gray-300">
                                                {item.quantity}x {item.name}
                                            </span>
                                            <span className="text-white font-semibold">
                                                ${(item.price * item.quantity).toFixed(2)}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="border-t border-gray-700 pt-4">
                                    <div className="flex justify-between text-lg font-bold text-white mb-2">
                                        <span>Total</span>
                                        <span className="text-brand-yellow">${getCartTotal().toFixed(2)}</span>
                                    </div>
                                    <p className="text-sm text-gray-400">
                                        {deliveryType === 'delivery' ? 'Envío gratis' : 'Recoger en local'}
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
