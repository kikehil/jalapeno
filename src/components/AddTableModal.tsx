'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

interface AddTableModalProps {
  isOpen: boolean
  onClose: () => void
  onAdd: (nombreMesa: string) => void
}

export default function AddTableModal({ isOpen, onClose, onAdd }: AddTableModalProps) {
  const [nombreMesa, setNombreMesa] = useState('')
  
  if (!isOpen) return null
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (nombreMesa.trim()) {
      onAdd(nombreMesa.trim())
      setNombreMesa('')
      onClose()
    }
  }
  
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full border-4 border-jalapeno-red">
        <div className="bg-jalapeno-red text-white p-4 flex items-center justify-between rounded-t-lg">
          <h2 className="text-xl font-bold">Agregar Nueva Mesa</h2>
          <button
            onClick={onClose}
            className="hover:bg-white/20 rounded-full p-1 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6">
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Nombre de la Mesa
            </label>
            <input
              type="text"
              value={nombreMesa}
              onChange={(e) => setNombreMesa(e.target.value)}
              placeholder="Ej: Mesa 5"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-jalapeno-red focus:outline-none text-lg"
              autoFocus
            />
          </div>
          
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-300 text-gray-800 py-3 rounded-lg font-bold hover:bg-gray-400 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 bg-jalapeno-green text-white py-3 rounded-lg font-bold hover:bg-green-600 transition-colors"
            >
              Agregar Mesa
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

