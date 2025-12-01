'use client'

import { Plus } from 'lucide-react'
import { useState } from 'react'

interface ProductCardProps {
  product: {
    id: number
    nombre: string
    precio: number
    icon: string
  }
  onAdd: (product: any, cantidad: number, notas: string) => void
}

export default function ProductCard({ product, onAdd }: ProductCardProps) {
  const [showNotesModal, setShowNotesModal] = useState(false)
  const [cantidad, setCantidad] = useState(1)
  const [notas, setNotas] = useState('')
  
  const handleAddClick = () => {
    setShowNotesModal(true)
  }
  
  const handleConfirmAdd = () => {
    onAdd(product, cantidad, notas)
    setShowNotesModal(false)
    setCantidad(1)
    setNotas('')
  }
  
  return (
    <>
      <div
        onClick={handleAddClick}
        className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer border-4 border-jalapeno-yellow p-4 flex flex-col items-center justify-between min-h-[180px]"
      >
        <div className="text-5xl mb-2">{product.icon}</div>
        <div className="text-center flex-1">
          <h3 className="font-bold text-jalapeno-red text-lg mb-1">{product.nombre}</h3>
          <p className="text-gray-600 font-semibold">${product.precio.toLocaleString('es-MX')}</p>
        </div>
        <button className="mt-2 bg-jalapeno-green text-white px-4 py-2 rounded-lg font-bold hover:bg-green-600 transition-colors flex items-center space-x-2 w-full justify-center">
          <Plus className="w-5 h-5" />
          <span>Agregar</span>
        </button>
      </div>
      
      {/* Notes Modal */}
      {showNotesModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full border-4 border-jalapeno-green">
            <div className="bg-jalapeno-green text-white p-4 flex items-center justify-between rounded-t-lg">
              <h3 className="text-xl font-bold">{product.nombre}</h3>
              <button
                onClick={() => {
                  setShowNotesModal(false)
                  setCantidad(1)
                  setNotas('')
                }}
                className="hover:bg-white/20 rounded-full p-1 transition-colors"
              >
                <span className="text-2xl">×</span>
              </button>
            </div>
            
            <div className="p-6">
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Cantidad</label>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setCantidad(Math.max(1, cantidad - 1))}
                    className="bg-jalapeno-red text-white w-10 h-10 rounded-lg font-bold hover:bg-red-700 transition-colors"
                  >
                    −
                  </button>
                  <span className="text-2xl font-bold text-jalapeno-red w-12 text-center">
                    {cantidad}
                  </span>
                  <button
                    onClick={() => setCantidad(cantidad + 1)}
                    className="bg-jalapeno-green text-white w-10 h-10 rounded-lg font-bold hover:bg-green-600 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Notas (opcional)
                </label>
                <textarea
                  value={notas}
                  onChange={(e) => setNotas(e.target.value)}
                  placeholder="Ej: Sin cebolla, bien cocido..."
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-jalapeno-green focus:outline-none"
                  rows={3}
                />
              </div>
              
              <div className="mb-4 p-3 bg-gray-100 rounded-lg">
                <div className="flex justify-between">
                  <span className="font-semibold">Total:</span>
                  <span className="font-bold text-jalapeno-red text-lg">
                    ${(product.precio * cantidad).toLocaleString('es-MX')}
                  </span>
                </div>
              </div>
              
              <button
                onClick={handleConfirmAdd}
                className="w-full bg-jalapeno-green text-white py-3 rounded-lg font-bold hover:bg-green-600 transition-colors"
              >
                Agregar al Pedido
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

