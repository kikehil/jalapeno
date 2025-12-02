'use client';

import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import { FaWhatsapp, FaFacebook } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-black border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4 font-montserrat">
                            Taquería El Jalapeño
                        </h3>
                        <p className="text-gray-400 font-inter">
                            Sabor auténtico mexicano desde 1995. Tradición y calidad en cada bocado.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4 font-montserrat">
                            Contacto
                        </h3>
                        <div className="space-y-3">
                            <a
                                href="tel:+525512345678"
                                className="flex items-center gap-2 text-gray-400 hover:text-brand-yellow transition-colors"
                            >
                                <FiPhone className="text-brand-red" />
                                <span>+52 55 1234 5678</span>
                            </a>
                            <a
                                href="mailto:info@eljalapeno.com"
                                className="flex items-center gap-2 text-gray-400 hover:text-brand-yellow transition-colors"
                            >
                                <FiMail className="text-brand-red" />
                                <span>info@eljalapeno.com</span>
                            </a>
                            <div className="flex items-center gap-2 text-gray-400">
                                <FiMapPin className="text-brand-red" />
                                <span>Av. Reforma 123, CDMX</span>
                            </div>
                        </div>
                    </div>

                    {/* Hours */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4 font-montserrat">
                            Horarios
                        </h3>
                        <div className="space-y-2 text-gray-400">
                            <div className="flex items-center gap-2">
                                <FiClock className="text-brand-red" />
                                <span className="font-semibold">Lun - Vie:</span>
                            </div>
                            <p className="ml-6">10:00 AM - 10:00 PM</p>
                            <div className="flex items-center gap-2 mt-3">
                                <FiClock className="text-brand-red" />
                                <span className="font-semibold">Sáb - Dom:</span>
                            </div>
                            <p className="ml-6">9:00 AM - 11:00 PM</p>
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4 font-montserrat">
                            Síguenos
                        </h3>
                        <div className="flex gap-4">
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                href="https://wa.me/525512345678"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center hover:shadow-lg transition-all"
                            >
                                <FaWhatsapp className="text-white text-2xl" />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:shadow-lg transition-all"
                            >
                                <FaFacebook className="text-white text-2xl" />
                            </motion.a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                    <p className="text-gray-500 font-inter">
                        &copy; {new Date().getFullYear()} Taquería El Jalapeño. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
