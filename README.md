# Taquería El Jalapeño - Website & POS System

Sitio web oficial y sistema POS (Point of Sale) de Taquería El Jalapeño construido con Next.js 14, React, TailwindCSS y Zustand.

## 🚀 Inicio Rápido

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Producción

```bash
npm run build
npm start
```

## 🎨 Brand Guidelines

- **Color Primario**: #C41010 (Rojo Jalapeño)
- **Color Secundario**: #FFCC00 (Amarillo)
- **Acento**: #FF5E00 (Naranja)
- **Acento Extra**: #2EA043 (Verde Jalapeño)

## 📁 Estructura del Proyecto

### Sitio Web Público
```
src/
  app/
    layout.tsx      # Layout principal
    page.tsx        # Página de inicio
  components/
    Navbar.tsx      # Barra de navegación
    Hero.tsx        # Sección hero
    FeaturedMenu.tsx # Menú destacado
    Services.tsx    # Servicios
    EventsPackages.tsx # Paquetes para eventos
    DrinksSection.tsx # Aguas frescas
    ContactSection.tsx # Contacto y ubicación
    Footer.tsx      # Pie de página
  styles/
    globals.css     # Estilos globales y utilidades
```

### Sistema POS (Mesero)
```
src/
  app/
    mesero/
      page.tsx           # Dashboard de mesas
      mesa/[id]/page.tsx # Detalle de mesa y pedido
  components/
    TableCard.tsx         # Tarjeta de mesa
    AddTableModal.tsx    # Modal para agregar mesa
    CategoryTabs.tsx     # Pestañas de categorías
    ProductCard.tsx      # Tarjeta de producto
    OrderSummary.tsx     # Resumen del pedido
  store/
    tables.js            # Store de mesas (Zustand)
    orders.js            # Store de pedidos (Zustand)
    kds.js               # Store de KDS (Zustand)
    eventos.js           # Store de eventos (Zustand)
  data/
    products.js          # Datos de productos y categorías
  app/
    eventos/
      page.tsx           # Cotizador de eventos (cliente)
    admin/
      eventos/
        page.tsx         # Administración de eventos
  components/
    EventForm.tsx        # Formulario de cotización
    EventCard.tsx        # Tarjeta de evento
    Calendar.tsx          # Componente de calendario
    KDSTicket.tsx        # Tarjeta de comanda para cocina
```

## ✨ Características

### Sitio Web Público
- ✅ Diseño completamente responsive (mobile-first)
- ✅ Animaciones suaves con fade-in
- ✅ Componentes reutilizables y modulares
- ✅ Optimizado para SEO
- ✅ Listo para integración con backend

### Sistema POS
- ✅ Dashboard de mesas con estados (Libre, Ocupada, En Cocina)
- ✅ Gestión completa de pedidos por mesa
- ✅ Categorías de productos (Tacos, Gringas, Tortas, Bebidas, etc.)
- ✅ Control de cantidades y notas por producto
- ✅ Envío de pedidos a cocina
- ✅ Cierre de cuentas
- ✅ Interfaz estilo POS con botones grandes y colores vivos
- ✅ Completamente responsive
- ✅ Animaciones suaves al agregar productos

### Sistema KDS (Kitchen Display System)
- ✅ Pantalla completa de cocina con fondo oscuro estilo industrial
- ✅ Comandas en tiempo real con cronómetro
- ✅ Estados: En preparación → Listo → Entregado
- ✅ Actualización automática cada 3 segundos
- ✅ Ordenamiento automático (pedidos más antiguos primero)
- ✅ Animación pulse para pedidos nuevos

### Módulo de Eventos (Taquizas)
- ✅ Cotizador interactivo con cálculo dinámico de precios
- ✅ Formulario completo de reserva de eventos
- ✅ Agenda administrativa con calendario
- ✅ Gestión de estados (Pendiente, Confirmado, Finalizado)
- ✅ Notas internas editables
- ✅ Filtros por fecha y estado
- ✅ Exportación PDF (placeholder)

## 🔧 Tecnologías

- Next.js 14 (App Router)
- React 18
- TailwindCSS 3
- TypeScript
- Zustand (State Management)
- Lucide React (Iconos)

## 🎯 Rutas del Sistema

### Sitio Web Público
- `/` - Página de inicio

### Sistema POS
- `/mesero` - Dashboard de mesas
- `/mesero/mesa/[id]` - Detalle de mesa y gestión de pedidos

### Sistema KDS
- `/cocina` - Pantalla de comandas para cocina

### Módulo de Eventos
- `/eventos` - Cotizador y reserva de taquizas (cliente)
- `/admin/eventos` - Administración de eventos (admin)

## 📝 Notas

### Sitio Web
- Las imágenes son placeholders y deben ser reemplazadas con fotos reales
- El mapa de Google Maps debe ser configurado con la API key correspondiente
- Los datos de contacto deben ser actualizados con información real

### Sistema POS
- Los datos se almacenan en Zustand stores (mock JSON)
- Listo para reemplazar con llamadas a API backend
- Los productos y precios están en `src/data/products.js`
- El sistema simula el envío a cocina (listo para conectar con backend real)

