# Taquería El Jalapeño 🌶️

Sistema de gestión para restaurante con módulos de meseros, cocina (KDS), administración y eventos.

## Tech Stack

- **Framework:** Next.js 14
- **Estilos:** Tailwind CSS
- **Estado:** Zustand
- **Gráficos:** Chart.js + react-chartjs-2
- **UI Icons:** Lucide React

## Desarrollo Local

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start
```

## 🚀 Despliegue en Railway

### Paso 1: Preparar el Proyecto

1. Abre tu terminal en la carpeta del proyecto
2. Ejecuta `npm install` para generar el `package-lock.json`
3. Sube tu código a un repositorio de GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/jala.git
git push -u origin main
```

### Paso 2: Crear Proyecto en Railway

1. Ve a [railway.app](https://railway.app) e inicia sesión con GitHub
2. Click en **"New Project"**
3. Selecciona **"Deploy from GitHub repo"**
4. Autoriza Railway para acceder a tu repositorio
5. Selecciona el repositorio `jala`

### Paso 3: Configuración Automática

Railway detectará automáticamente que es un proyecto Next.js y configurará:
- **Build Command:** `npm run build`
- **Start Command:** `npm start`
- **Puerto:** Automático (Railway asigna la variable `PORT`)

### Paso 4: Generar Dominio

1. En tu proyecto de Railway, ve a **Settings**
2. Click en **"Generate Domain"** para obtener una URL pública
3. Tu sitio estará disponible en `https://tu-proyecto.up.railway.app`

## 📁 Estructura del Proyecto

```
src/
├── app/                 # Páginas de Next.js (App Router)
│   ├── page.tsx         # Landing page
│   ├── mesero/          # Módulo meseros
│   ├── cocina/          # Kitchen Display System
│   ├── admin/           # Panel de administración
│   └── eventos/         # Gestión de eventos
├── components/          # Componentes reutilizables
├── data/               # Datos estáticos
├── store/              # Estado global (Zustand)
└── styles/             # Estilos globales
```

## Variables de Entorno (Opcional)

Si necesitas variables de entorno, agrégalas en Railway:
1. Ve a tu proyecto → **Variables**
2. Añade las variables necesarias

## Troubleshooting

### Error de Build
Si el build falla, asegúrate de tener el `package-lock.json` en tu repositorio.

### Puerto incorrecto
Next.js en Railway usa automáticamente el puerto de la variable `PORT`. No necesitas configurar nada.

---

Desarrollado con ❤️ y 🌶️
