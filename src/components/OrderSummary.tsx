'use client'

import { Trash2, Edit2, Send, X, CheckCircle } from 'lucide-react'
import { useState } from 'react'

interface OrderItem {
  id: number
  nombre: string
  cantidad: number
  precio: number
  notas: string
}

interface OrderSummaryProps {
  items: OrderItem[]
  onUpdateQuantity: (productId: number, notas: string, delta: number) => void
  onRemoveItem: (productId: number, notas: string) => void
  onUpdateNotes: (productId: number, oldNotas: string, newNotas: string) => void
  onSendToKitchen: () => void
  onCloseTable: () => void
  tableEstado: string
}

export default function OrderSummary({
  items,
  onUpdateQuantity,
  onRemoveItem,
  onUpdateNotes,
  onSendToKitchen,
  onCloseTable,
  tableEstado,
}: OrderSummaryProps) {
  const [editingNotes, setEditingNotes] = useState<{ productId: number; notas: string } | null>(null)
  const [newNotes, setNewNotes] = useState('')
  
  const total = items.reduce((sum, item) => sum + item.precio * item.cantidad, 0)
  
  const handleEditNotes = (productId: number, currentNotas: string) => {
    setEditingNotes({ productId, notas: currentNotas })
    setNewNotes(currentNotas)
  }
  
  const handleSaveNotes = () => {
    if (editingNotes) {
      onUpdateNotes(editingNotes.productId, editingNotes.notas, newNotes)
      setEditingNotes(null)
      setNewNotes('')
    }
  }
  
  return (
    <div className="bg-white rounded-xl shadow-lg border-4 border-jalapeno-red p-6 h-full flex flex-col">
      <h2 className="text-2xl font-bold text-jalapeno-red mb-4 font-cartoon">
        Resumen del Pedido
      </h2>
      
      <div className="flex-1 overflow-y-auto mb-4 space-y-3">
        {items.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No hay productos en el pedido</p>
        ) : (
          items.map((item, index) => (
            <div
              key={`${item.id}-${item.notas}-${index}`}
              className="bg-gray-50 rounded-lg p-4 border-2 border-gray-200 hover:border-jalapeno-yellow transition-colors"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <h3 className="font-bold text-jalapeno-red">{item.nombre}</h3>
                  <p className="text-sm text-gray-600">${item.precio.toLocaleString('es-MX')} c/u</p>
                </div>
                <button
                  onClick={() => onRemoveItem(item.id, item.notas)}
                  className="text-red-500 hover:text-red-700 transition-colors ml-2"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.notas, -1)}
                    className="bg-jalapeno-red text-white w-8 h-8 rounded-lg font-bold hover:bg-red-700 transition-colors"
                  >
                    −
                  </button>
                  <span className="font-bold text-lg w-8 text-center">{item.cantidad}</span>
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.notas, 1)}
                    className="bg-jalapeno-green text-white w-8 h-8 rounded-lg font-bold hover:bg-green-600 transition-colors"
                  >
                    +
                  </button>
                </div>
                <span className="font-bold text-jalapeno-red">
                  ${(item.precio * item.cantidad).toLocaleString('es-MX')}
                </span>
              </div>
              
              {editingNotes?.productId === item.id && editingNotes?.notas === item.notas ? (
                <div className="flex items-center space-x-2 mt-2">
                  <input
                    type="text"
                    value={newNotes}
                    onChange={(e) => setNewNotes(e.target.value)}
                    className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm"
                    placeholder="Notas..."
                    autoFocus
                  />
                  <button
                    onClick={handleSaveNotes}
                    className="bg-jalapeno-green text-white px-3 py-1 rounded text-sm font-bold hover:bg-green-600"
                  >
                    <CheckCircle className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      setEditingNotes(null)
                      setNewNotes('')
                    }}
                    className="bg-gray-300 text-gray-800 px-3 py-1 rounded text-sm font-bold hover:bg-gray-400"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm text-gray-600 flex-1">
                    {item.notas || 'Sin notas'}
                  </span>
                  <button
                    onClick={() => handleEditNotes(item.id, item.notas)}
                    className="text-jalapeno-red hover:text-red-700 transition-colors"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
      
      <div className="border-t-2 border-gray-300 pt-4 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">Total:</span>
          <span className="text-2xl font-bold text-jalapeno-red">
            ${total.toLocaleString('es-MX')}
          </span>
        </div>
        
        <div className="flex flex-col space-y-2">
          {tableEstado !== 'pedido_enviado' && items.length > 0 && (
            <button
              onClick={onSendToKitchen}
              className="w-full bg-jalapeno-orange text-white py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg border-4 border-white"
            >
              <Send className="w-6 h-6" />
              <span>Enviar a Cocina</span>
            </button>
          )}
          
          {tableEstado === 'pedido_enviado' && (
            <div className="bg-jalapeno-green text-white py-3 rounded-lg text-center font-bold">
              ✓ Pedido Enviado a Cocina
            </div>
          )}
          
          {tableEstado !== 'libre' && (
            <button
              onClick={onCloseTable}
              className="w-full bg-gray-500 text-white py-3 rounded-lg font-bold hover:bg-gray-600 transition-colors"
            >
              Cerrar Cuenta
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

