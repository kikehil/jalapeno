import './globals.css';
import { CartProvider } from './context/CartContext';

export const metadata = {
    title: 'Taquería El Jalapeño - Sabor Real, Tradición y Pasión',
    description: 'Ordena los mejores tacos al pastor, cecina, gringas y más. Servicio a domicilio y eventos.',
    keywords: 'tacos, taquería, comida mexicana, tacos al pastor, cecina, gringas, tortas',
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body>
                <CartProvider>
                    {children}
                </CartProvider>
            </body>
        </html>
    );
}
