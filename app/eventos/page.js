'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FiX, FiUsers, FiCalendar, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

export default function EventosPage() {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        eventDate: '',
        guestCount: '',
        location: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const packages = [
        {
            title: 'Paquete Básico',
            guests: '40-60 personas',
            price: 'Desde $2,500',
            includes: [
                'Tacos al pastor o cecina',
                'Salsas y guarniciones',
                'Tortillas recién hechas',
                'Servicio de taquero',
            ],
        },
        {
            title: 'Paquete Premium',
            guests: '60-80 personas',
            price: 'Desde $4,000',
            includes: [
                '3 tipos de carne a elegir',
                'Gringas y quesadillas',
                'Salsas premium y guarniciones',
                'Aguas frescas',
                'Servicio de taquero',
            ],
        },
        {
            title: 'Paquete Deluxe',
            guests: '80-100+ personas',
            price: 'Desde $6,000',
            includes: [
                'Variedad completa de carnes',
                'Gringas, quesadillas y alambres',
                'Salsas gourmet y guarniciones',
                'Bebidas ilimitadas',
                'Postres mexicanos',
                '2 taqueros profesionales',
            ],
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setShowModal(false);
            setSubmitted(false);
            setFormData({
                name: '',
                phone: '',
                email: '',
                eventDate: '',
                guestCount: '',
                location: '',
                message: '',
            });
        }, 3000);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <main className="min-h-screen bg-brand-dark">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div
                        className="w-full h-full bg-cover bg-center opacity-30"
                        style={{
                            backgroundImage: 'url(/images/hero_tacos_pastor_1764637380139.png)',
                        }}
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl sm:text-6xl font-bold text-white mb-6 font-montserrat"
                    >
                        Eventos y Taquizas
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-300 mb-8 font-inter max-w-3xl mx-auto"
                    >
                        Haz de tu evento algo inolvidable con nuestro servicio de taquizas profesional.
                        Perfecto para bodas, cumpleaños, eventos corporativos y más.
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        onClick={() => setShowModal(true)}
                        className="btn-primary text-lg px-10 py-4"
                    >
                        Cotizar mi Evento
                    </motion.button>
                </div>
            </section>

            {/* Packages Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-white text-center mb-12 font-montserrat"
                    >
                        Nuestros Paquetes
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {packages.map((pkg, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="glass-dark rounded-2xl p-8 hover:shadow-2xl transition-all duration-300"
                            >
                                <h3 className="text-2xl font-bold text-white mb-2 font-montserrat">
                                    {pkg.title}
                                </h3>
                                <p className="text-brand-yellow text-lg mb-2">{pkg.guests}</p>
                                <p className="text-3xl font-bold text-brand-yellow mb-6">
                                    {pkg.price}
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {pkg.includes.map((item, i) => (
                                        <li key={i} className="text-gray-300 flex items-start">
                                            <span className="text-brand-green mr-2">✓</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={() => setShowModal(true)}
                                    className="btn-secondary w-full"
                                >
                                    Solicitar Cotización
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: FiUsers, title: 'Servicio Profesional', desc: 'Taqueros expertos' },
                            { icon: FiCalendar, title: 'Flexibilidad', desc: 'Adaptamos a tu horario' },
                            { icon: '🌮', title: 'Calidad Premium', desc: 'Ingredientes frescos' },
                            { icon: '💯', title: 'Garantía', desc: 'Satisfacción 100%' },
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-5xl mb-4">
                                    {typeof feature.icon === 'string' ? (
                                        feature.icon
                                    ) : (
                                        <feature.icon className="mx-auto text-brand-yellow" />
                                    )}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 font-montserrat">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quote Modal */}
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                        onClick={() => setShowModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="glass-dark rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-3xl font-bold text-white font-montserrat">
                                    {submitted ? '¡Solicitud Enviada!' : 'Cotizar Evento'}
                                </h2>
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    <FiX size={28} />
                                </button>
                            </div>

                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-center py-8"
                                >
                                    <div className="text-6xl text-brand-green mb-4">✓</div>
                                    <p className="text-xl text-white mb-2">
                                        Gracias por tu solicitud
                                    </p>
                                    <p className="text-gray-400">
                                        Nos pondremos en contacto contigo pronto
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-white font-semibold mb-2">
                                            <FiUsers className="inline mr-2" />
                                            Nombre Completo *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full glass px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                                className="w-full glass px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow"
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
                                                className="w-full glass px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-white font-semibold mb-2">
                                                <FiCalendar className="inline mr-2" />
                                                Fecha del Evento *
                                            </label>
                                            <input
                                                type="date"
                                                name="eventDate"
                                                value={formData.eventDate}
                                                onChange={handleChange}
                                                required
                                                className="w-full glass px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-white font-semibold mb-2">
                                                <FiUsers className="inline mr-2" />
                                                Número de Invitados *
                                            </label>
                                            <input
                                                type="number"
                                                name="guestCount"
                                                value={formData.guestCount}
                                                onChange={handleChange}
                                                required
                                                className="w-full glass px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-white font-semibold mb-2">
                                            <FiMapPin className="inline mr-2" />
                                            Ubicación del Evento *
                                        </label>
                                        <input
                                            type="text"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleChange}
                                            required
                                            className="w-full glass px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-white font-semibold mb-2">
                                            Detalles Adicionales
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="4"
                                            className="w-full glass px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                                            placeholder="Cuéntanos más sobre tu evento..."
                                        />
                                    </div>

                                    <button type="submit" className="btn-primary w-full text-lg py-4">
                                        Enviar Solicitud
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </main>
    );
}
