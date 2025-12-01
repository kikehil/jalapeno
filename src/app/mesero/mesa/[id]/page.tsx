'use client'

import { useParams, useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { useState, useEffect } from 'react'
import useTablesStore from '@/store/tables'
import useOrdersStore from '@/store/orders'
import useKDSStore from '@/store/kds'
import { categories, getProductsByCategory, getProductById } from '@/data/products'
import CategoryTabs from '@/components/CategoryTabs'
import ProductCard from '@/components/ProductCard'
import OrderSummary from '@/components/OrderSummary'

interface Table {
  id: number
  nombreMesa: string
  estado: 'libre' | 'ocupada' | 'pedido_enviado'
  pedidoActual: Array<{
    productoId: number
    nombre: string
    cantidad: number
    precio: number
    notas: string
  }>
}

interface Product {
  id: number
  nombre: string
  precio: number
  categoria: string
  imagen?: string
}

export default function MesaDetailPage() {
  const params = useParams()
  const router = useRouter()
  const tableId = Number(params.id)
  
  const table = useTablesStore((state) =>
    (state.tables as Table[]).find((t: Table) => t.id === tableId)
  )
  
  const [
    addProductToTable,
    updateProductQuantity,
    removeProductFromTable,
    updateProductNotes,
    sendOrderToKitchen,
    closeTable,
  ] = useTablesStore((state) => [
    state.addProductToTable,
    state.updateProductQuantity,
    state.removeProductFromTable,
    state.updateProductNotes,
    state.sendOrderToKitchen,
    state.closeTable,
  ])
  
  const createOrder = useOrdersStore((state) => state.createOrder)
  const markOrderAsSent = useOrdersStore((state) => state.markOrderAsSent)
  const initializeOrderState = useKDSStore((state) => state.initializeOrderState)
  
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id || 'tacos')
  
  useEffect(() => {
    if (!table) {
      router.push('/mesero')
    }
  }, [table, router])
  
  if (!table) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Cargando...</p>
      </div>
    )
  }
  
  const products = getProductsByCategory(activeCategory)
  
  const handleAddProduct = (product: Product, cantidad: number, notas: string) => {
    addProductToTable(tableId, product, cantidad, notas)
  }
  
  const handleUpdateQuantity = (productId: number, notas: string, delta: number) => {
    updateProductQuantity(tableId, productId, notas, delta)
  }
  
  const handleRemoveItem = (productId: number, notas: string) => {
    removeProductFromTable(tableId, productId, notas)
  }
  
  const handleUpdateNotes = (productId: number, oldNotas: string, newNotas: string) => {
    updateProductNotes(tableId, productId, oldNotas, newNotas)
  }
  
  const handleSendToKitchen = () => {
    if (table.pedidoActual.length === 0) {
      alert('No hay productos en el pedido')
      return
    }
    
    // Generate order ID
    const orderId = Date.now()
    
    // Create order in orders store
    createOrder(tableId, table.pedidoActual, orderId)
    
    // Mark order as sent
    markOrderAsSent(orderId)
    
    // Initialize order state for KDS
    initializeOrderState(orderId)
    
    // Update table state
    sendOrderToKitchen(tableId)
    
    // Simulate sending to kitchen
    alert('✓ Pedido enviado a cocina exitosamente!')
  }
  
  const handleCloseTable = () => {
    if (confirm('¿Estás seguro de cerrar esta cuenta? Se eliminará el pedido actual.')) {
      closeTable(tableId)
      router.push('/mesero')
    }
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-4 border-4 border-jalapeno-red flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => router.push('/mesero')}
              className="bg-jalapeno-red text-white p-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-jalapeno-red font-cartoon">
                {table.nombreMesa}
              </h1>
              <p className="text-gray-600">
                Estado: <span className="font-bold">{table.estado}</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Products Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6 border-4 border-jalapeno-yellow">
              <CategoryTabs
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAdd={handleAddProduct}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <OrderSummary
              items={table.pedidoActual}
              onUpdateQuantity={handleUpdateQuantity}
              onRemoveItem={handleRemoveItem}
              onUpdateNotes={handleUpdateNotes}
              onSendToKitchen={handleSendToKitchen}
              onCloseTable={handleCloseTable}
              tableEstado={table.estado}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

