export const categories = [
  { id: 'tacos', name: 'Tacos', icon: '🌮' },
  { id: 'gringas', name: 'Gringas', icon: '🌯' },
  { id: 'tortas', name: 'Tortas', icon: '🥪' },
  { id: 'bebidas', name: 'Bebidas', icon: '🥤' },
  { id: 'carnitas', name: 'Carnitas', icon: '🍖' },
  { id: 'extras', name: 'Extras', icon: '🌶️' },
]

export const products = [
  // Tacos
  { id: 1, nombre: 'Taco al Pastor', categoria: 'tacos', precio: 18, icon: '🌮' },
  { id: 2, nombre: 'Taco de Cecina', categoria: 'tacos', precio: 20, icon: '🌮' },
  { id: 3, nombre: 'Taco de Suadero', categoria: 'tacos', precio: 18, icon: '🌮' },
  { id: 4, nombre: 'Taco de Bistec', categoria: 'tacos', precio: 20, icon: '🌮' },
  { id: 5, nombre: 'Taco de Chorizo', categoria: 'tacos', precio: 18, icon: '🌮' },
  { id: 6, nombre: 'Taco de Pollo', categoria: 'tacos', precio: 18, icon: '🌮' },
  
  // Gringas
  { id: 7, nombre: 'Gringa al Pastor', categoria: 'gringas', precio: 45, icon: '🌯' },
  { id: 8, nombre: 'Gringa de Cecina', categoria: 'gringas', precio: 50, icon: '🌯' },
  { id: 9, nombre: 'Gringa de Suadero', categoria: 'gringas', precio: 45, icon: '🌯' },
  { id: 10, nombre: 'Gringa Mixta', categoria: 'gringas', precio: 55, icon: '🌯' },
  
  // Tortas
  { id: 11, nombre: 'Torta al Pastor', categoria: 'tortas', precio: 65, icon: '🥪' },
  { id: 12, nombre: 'Torta de Cecina', categoria: 'tortas', precio: 70, icon: '🥪' },
  { id: 13, nombre: 'Torta de Suadero', categoria: 'tortas', precio: 65, icon: '🥪' },
  { id: 14, nombre: 'Torta Mixta', categoria: 'tortas', precio: 75, icon: '🥪' },
  
  // Bebidas
  { id: 15, nombre: 'Agua de Horchata', categoria: 'bebidas', precio: 30, icon: '🥤' },
  { id: 16, nombre: 'Agua de Jamaica', categoria: 'bebidas', precio: 30, icon: '🥤' },
  { id: 17, nombre: 'Agua de Piña', categoria: 'bebidas', precio: 30, icon: '🥤' },
  { id: 18, nombre: 'Agua de Pepino', categoria: 'bebidas', precio: 30, icon: '🥤' },
  { id: 19, nombre: 'Coca Cola', categoria: 'bebidas', precio: 25, icon: '🥤' },
  { id: 20, nombre: 'Refresco', categoria: 'bebidas', precio: 25, icon: '🥤' },
  
  // Carnitas
  { id: 21, nombre: 'Carnitas (100g)', categoria: 'carnitas', precio: 80, icon: '🍖' },
  { id: 22, nombre: 'Carnitas (200g)', categoria: 'carnitas', precio: 150, icon: '🍖' },
  { id: 23, nombre: 'Carnitas (500g)', categoria: 'carnitas', precio: 350, icon: '🍖' },
  
  // Extras
  { id: 24, nombre: 'Queso Extra', categoria: 'extras', precio: 15, icon: '🧀' },
  { id: 25, nombre: 'Cebolla Extra', categoria: 'extras', precio: 5, icon: '🧅' },
  { id: 26, nombre: 'Cilantro Extra', categoria: 'extras', precio: 5, icon: '🌿' },
  { id: 27, nombre: 'Salsa Extra', categoria: 'extras', precio: 5, icon: '🌶️' },
]

export const getProductsByCategory = (categoryId) => {
  return products.filter(p => p.categoria === categoryId)
}

export const getProductById = (id) => {
  return products.find(p => p.id === id)
}

