import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'El Jalapeño | Auténtica Cocina Mexicana',
  description: 'Descubre el sabor auténtico de México. Tacos al pastor, cecina premium, y experiencias gastronómicas únicas. Ordena en línea o reserva tu mesa.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-body bg-dark-900 text-white antialiased">
        {children}
      </body>
    </html>
  )
}
