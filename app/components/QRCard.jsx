'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function QRCard() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 z-10"
        >
            <div className="glass p-6 rounded-2xl shadow-2xl max-w-xs">
                <div className="bg-white p-4 rounded-xl mb-4">
                    <div className="w-48 h-48 bg-gray-200 flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 200 200"
                            className="w-full h-full"
                        >
                            <rect width="200" height="200" fill="white" />
                            <g fill="black">
                                {/* QR Code pattern simulation */}
                                <rect x="10" y="10" width="50" height="50" />
                                <rect x="140" y="10" width="50" height="50" />
                                <rect x="10" y="140" width="50" height="50" />
                                <rect x="20" y="20" width="30" height="30" fill="white" />
                                <rect x="150" y="20" width="30" height="30" fill="white" />
                                <rect x="20" y="150" width="30" height="30" fill="white" />
                                <rect x="25" y="25" width="20" height="20" />
                                <rect x="155" y="25" width="20" height="20" />
                                <rect x="25" y="155" width="20" height="20" />
                                {/* Random QR pattern */}
                                <rect x="70" y="10" width="10" height="10" />
                                <rect x="90" y="10" width="10" height="10" />
                                <rect x="110" y="10" width="10" height="10" />
                                <rect x="70" y="30" width="10" height="10" />
                                <rect x="90" y="30" width="10" height="10" />
                                <rect x="70" y="50" width="10" height="10" />
                                <rect x="110" y="50" width="10" height="10" />
                                <rect x="10" y="70" width="10" height="10" />
                                <rect x="30" y="70" width="10" height="10" />
                                <rect x="50" y="70" width="10" height="10" />
                                <rect x="70" y="70" width="10" height="10" />
                                <rect x="90" y="70" width="10" height="10" />
                                <rect x="110" y="70" width="10" height="10" />
                                <rect x="130" y="70" width="10" height="10" />
                                <rect x="150" y="70" width="10" height="10" />
                                <rect x="170" y="70" width="10" height="10" />
                            </g>
                        </svg>
                    </div>
                </div>
                <div className="text-center">
                    <h3 className="text-white font-bold text-lg mb-2 font-montserrat">
                        Escanea para ordenar
                    </h3>
                    <p className="text-gray-300 text-sm">
                        Acceso rápido al menú digital
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
