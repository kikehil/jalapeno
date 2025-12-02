# Taquería El Jalapeño - Professional Restaurant Ordering System

A modern, professional food ordering web application built with Next.js 14, TailwindCSS, and Framer Motion. Designed to match the quality of Uber Eats, DoorDash, and premium restaurant websites.

## Features

- **Full-Screen Hero Section** with professional food photography
- **Complete Ordering Flow**: Menu → Cart → Checkout
- **Events/Catering Page** with package options and quote request form
- **Responsive Design** for mobile, tablet, and desktop
- **Cart Management** with localStorage persistence
- **Professional Design** with glassmorphism effects and smooth animations
- **No emojis, cursive fonts, or childish elements** - pure professional quality

## Tech Stack

- **Next.js 14** with App Router
- **TailwindCSS** for styling
- **Framer Motion** for animations
- **React Icons** for professional iconography
- **Context API** for state management

## Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
c:\WEB\2\
├── app/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky navigation with mobile menu
│   │   ├── Hero.jsx            # Full-screen hero section
│   │   ├── QRCard.jsx          # QR code card component
│   │   ├── ProductCard.jsx     # Reusable product card
│   │   ├── FeaturedMenu.jsx    # Featured products section
│   │   └── Footer.jsx          # Footer with contact info
│   ├── context/
│   │   └── CartContext.js      # Cart state management
│   ├── menu/
│   │   └── page.js             # Menu page with filtering
│   ├── carrito/
│   │   └── page.js             # Shopping cart page
│   ├── checkout/
│   │   └── page.js             # Checkout and order form
│   ├── eventos/
│   │   └── page.js             # Events/catering page
│   ├── globals.css             # Global styles
│   ├── layout.js               # Root layout
│   └── page.js                 # Landing page
├── public/
│   └── images/                 # Professional food photography
├── package.json
├── tailwind.config.js
├── next.config.js
└── postcss.config.js
```

## Pages

### Landing Page (`/`)
- Full-screen hero with professional taco photography
- Featured menu section with 6 product cards
- Call-to-action buttons
- Floating QR code card (desktop only)

### Menu Page (`/menu`)
- Complete product catalog
- Category filtering (Todos, Tacos, Especialidades, Tortas, Bebidas)
- Add to cart functionality
- Professional grid layout

### Cart Page (`/carrito`)
- Cart items with images
- Quantity controls (+/- buttons)
- Remove item functionality
- Order total calculation
- Empty cart state

### Checkout Page (`/checkout`)
- Customer information form
- Delivery/pickup selection
- Address input (conditional)
- Form validation
- Order confirmation screen

### Events Page (`/eventos`)
- Event/catering information
- Package options (40-100+ guests)
- Quote request modal with form
- Professional presentation

## Brand Colors

- **Primary Red**: #B40000
- **Accent Red**: #D61F1F
- **Yellow**: #FFC300
- **Dark Background**: #121212
- **Green Accent**: #37A927

## Typography

- **Headings**: Montserrat (700-900 weight)
- **Body**: Inter (400-600 weight)
- **Alternative**: Poppins (400-700 weight)

## Design Features

- Glassmorphism effects on cards and navigation
- Gradient buttons with hover effects
- Smooth Framer Motion animations
- Professional food photography
- Dark theme with vibrant accents
- Responsive mobile-first design

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Taquería El Jalapeño. All rights reserved.
