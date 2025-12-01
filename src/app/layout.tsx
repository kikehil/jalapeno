import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Taquería El Jalapeño - Sabor Tradicional, Caliente y Delicioso',
  description: 'Taquería El Jalapeño - Los mejores tacos al pastor, cecina, gringas y más. Pedidos en línea y servicio para eventos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}

