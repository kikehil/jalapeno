import { create } from 'zustand'

const useTablesStore = create((set) => ({
  tables: [
    { id: 1, nombreMesa: 'Mesa 1', estado: 'libre', pedidoActual: [] },
    { id: 2, nombreMesa: 'Mesa 2', estado: 'libre', pedidoActual: [] },
    { id: 3, nombreMesa: 'Mesa 3', estado: 'libre', pedidoActual: [] },
    { id: 4, nombreMesa: 'Mesa 4', estado: 'libre', pedidoActual: [] },
  ],
  
  addTable: (nombreMesa) => set((state) => ({
    tables: [
      ...state.tables,
      {
        id: Date.now(),
        nombreMesa,
        estado: 'libre',
        pedidoActual: [],
      },
    ],
  })),
  
  updateTableState: (tableId, nuevoEstado) => set((state) => ({
    tables: state.tables.map((table) =>
      table.id === tableId
        ? { ...table, estado: nuevoEstado }
        : table
    ),
  })),
  
  addProductToTable: (tableId, product, cantidad = 1, notas = '') => set((state) => {
    const table = state.tables.find((t) => t.id === tableId)
    if (!table) return state
    
    const existingProductIndex = table.pedidoActual.findIndex(
      (item) => item.id === product.id && item.notas === notas
    )
    
    let newPedidoActual
    if (existingProductIndex >= 0) {
      newPedidoActual = table.pedidoActual.map((item, index) =>
        index === existingProductIndex
          ? { ...item, cantidad: item.cantidad + cantidad }
          : item
      )
    } else {
      newPedidoActual = [
        ...table.pedidoActual,
        {
          id: product.id,
          nombre: product.nombre,
          precio: product.precio,
          cantidad,
          notas,
        },
      ]
    }
    
    return {
      tables: state.tables.map((t) =>
        t.id === tableId
          ? { ...t, pedidoActual: newPedidoActual, estado: 'ocupada' }
          : t
      ),
    }
  }),
  
  updateProductQuantity: (tableId, productId, notas, delta) => set((state) => {
    const table = state.tables.find((t) => t.id === tableId)
    if (!table) return state
    
    const newPedidoActual = table.pedidoActual
      .map((item) => {
        if (item.id === productId && item.notas === notas) {
          const newCantidad = item.cantidad + delta
          return newCantidad > 0 ? { ...item, cantidad: newCantidad } : null
        }
        return item
      })
      .filter(Boolean)
    
    return {
      tables: state.tables.map((t) =>
        t.id === tableId
          ? { ...t, pedidoActual: newPedidoActual }
          : t
      ),
    }
  }),
  
  removeProductFromTable: (tableId, productId, notas) => set((state) => {
    const table = state.tables.find((t) => t.id === tableId)
    if (!table) return state
    
    const newPedidoActual = table.pedidoActual.filter(
      (item) => !(item.id === productId && item.notas === notas)
    )
    
    return {
      tables: state.tables.map((t) =>
        t.id === tableId
          ? { ...t, pedidoActual: newPedidoActual }
          : t
      ),
    }
  }),
  
  updateProductNotes: (tableId, productId, oldNotas, newNotas) => set((state) => {
    const table = state.tables.find((t) => t.id === tableId)
    if (!table) return state
    
    const newPedidoActual = table.pedidoActual.map((item) =>
      item.id === productId && item.notas === oldNotas
        ? { ...item, notas: newNotas }
        : item
    )
    
    return {
      tables: state.tables.map((t) =>
        t.id === tableId
          ? { ...t, pedidoActual: newPedidoActual }
          : t
      ),
    }
  }),
  
  sendOrderToKitchen: (tableId) => set((state) => ({
    tables: state.tables.map((table) =>
      table.id === tableId
        ? { ...table, estado: 'pedido_enviado' }
        : table
    ),
  })),
  
  closeTable: (tableId) => set((state) => ({
    tables: state.tables.map((table) =>
      table.id === tableId
        ? { ...table, estado: 'libre', pedidoActual: [] }
        : table
    ),
  })),
  
  getTableById: (tableId) => {
    return useTablesStore.getState().tables.find((t) => t.id === tableId)
  },
}))

export default useTablesStore

