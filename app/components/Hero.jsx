'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import QRCard from './QRCard';

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: 'url(/images/hero_tacos_pastor_1764637380139.png)',
                    }}
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/80" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 font-montserrat leading-tight"
                        >
                            Taquería El Jalapeño
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-2xl sm:text-3xl text-brand-yellow font-semibold mb-4 font-montserrat"
                        >
                            Sabor Real, Tradición y Pasión por el Taco
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-lg sm:text-xl text-gray-300 mb-10 font-inter"
                        >
                            Haz tu pedido ahora o disfruta en el local.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Link href="/menu">
                                <button className="btn-primary text-lg px-8 py-4 w-full sm:w-auto">
                                    Pedir en línea
                                </button>
                            </Link>
                            <Link href="/menu">
                                <button className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto">
                                    Ver menú digital
                                </button>
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* QR Card - Desktop Only */}
                <QRCard />
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
                >
                    <div className="w-1 h-3 bg-white/50 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
