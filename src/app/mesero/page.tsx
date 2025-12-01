'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Plus } from 'lucide-react'
import useTablesStore from '@/store/tables'
import TableCard from '@/components/TableCard'
import AddTableModal from '@/components/AddTableModal'

interface Table {
  id: number
  nombreMesa: string
  estado: 'libre' | 'ocupada' | 'pedido_enviado'
  pedidoActual: Array<{
    id: number
    nombre: string
    cantidad: number
    precio: number
    notas: string
  }>
}

export default function MeseroDashboard() {
  const router = useRouter()
  const tables = useTablesStore((state) => state.tables) as Table[]
  const addTable = useTablesStore((state) => state.addTable)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  
  const handleAddTable = (nombreMesa: string) => {
    addTable(nombreMesa)
  }
  
  const libreCount = tables.filter((t: Table) => t.estado === 'libre').length
  const ocupadaCount = tables.filter((t: Table) => t.estado === 'ocupada').length
  const enviadoCount = tables.filter((t: Table) => t.estado === 'pedido_enviado').length
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border-4 border-jalapeno-red">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-jalapeno-red mb-2 font-cartoon">
                Sistema POS - Taquería El Jalapeño
              </h1>
              <p className="text-gray-600">Gestión de Mesas y Pedidos</p>
            </div>
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="mt-4 md:mt-0 bg-jalapeno-green text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition-all transform hover:scale-105 flex items-center space-x-2 shadow-lg border-4 border-white"
            >
              <Plus className="w-5 h-5" />
              <span>Agregar Mesa</span>
            </button>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-jalapeno-green text-white rounded-xl p-4 shadow-lg border-4 border-white">
            <div className="text-3xl font-bold">{libreCount}</div>
            <div className="text-sm opacity-90">Mesas Libres</div>
          </div>
          <div className="bg-jalapeno-yellow text-jalapeno-red rounded-xl p-4 shadow-lg border-4 border-white">
            <div className="text-3xl font-bold">{ocupadaCount}</div>
            <div className="text-sm opacity-90">Mesas Ocupadas</div>
          </div>
          <div className="bg-jalapeno-orange text-white rounded-xl p-4 shadow-lg border-4 border-white">
            <div className="text-3xl font-bold">{enviadoCount}</div>
            <div className="text-sm opacity-90">En Cocina</div>
          </div>
        </div>
        
        {/* Tables Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {tables.map((table) => (
            <TableCard key={table.id} table={table} />
          ))}
        </div>
        
        {tables.length === 0 && (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center border-4 border-jalapeno-yellow">
            <p className="text-gray-500 text-xl mb-4">No hay mesas registradas</p>
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="bg-jalapeno-green text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors"
            >
              Agregar Primera Mesa
            </button>
          </div>
        )}
      </div>
      
      <AddTableModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddTable}
      />
    </div>
  )
}

