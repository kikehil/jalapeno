'use client'

import { useEffect } from 'react'
import { TrendingUp, ShoppingCart, DollarSign, Calendar } from 'lucide-react'
import useDashboardStore from '@/store/dashboard'
import MetricCard from '@/components/cards/MetricCard'
import BarChart from '@/components/charts/BarChart'
import LineChart from '@/components/charts/LineChart'
import DoughnutChart from '@/components/charts/DoughnutChart'
import DashboardFilters from '@/components/DashboardFilters'
import DashboardTables from '@/components/DashboardTables'

export default function DashboardPage() {
  const {
    ventasDelDia,
    pedidosActivos,
    totalDelMes,
    eventosProximos,
    ventasPorDia,
    productosMasVendidos,
    distribucionVentas,
    ultimosPedidos,
    ultimosEventos,
    fechaInicio,
    fechaFin,
    tipoPedido,
    setFechaInicio,
    setFechaFin,
    setTipoPedido,
    getFilteredVentas,
    getFilteredPedidos,
    updateMetrics,
    init,
  } = useDashboardStore()
  
  useEffect(() => {
    init()
    // Update metrics every minute
    const interval = setInterval(() => {
      updateMetrics()
    }, 60000)
    
    return () => clearInterval(interval)
  }, [init, updateMetrics])
  
  const filteredVentas = getFilteredVentas()
  const filteredPedidos = getFilteredPedidos()
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border-4 border-jalapeno-red">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-jalapeno-red mb-2 font-cartoon">
                Dashboard de Analytics
              </h1>
              <p className="text-gray-600">Taquería El Jalapeño - Métricas y Estadísticas</p>
            </div>
            <div className="mt-4 md:mt-0 text-sm text-gray-600">
              Última actualización: {new Date().toLocaleTimeString('es-MX')}
            </div>
          </div>
        </div>
        
        {/* Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <MetricCard
            title="Ventas del Día"
            value={`$${ventasDelDia.toLocaleString('es-MX')}`}
            icon={DollarSign}
            color="red"
            trend={{ value: 12, isPositive: true }}
          />
          <MetricCard
            title="Pedidos Activos"
            value={pedidosActivos}
            icon={ShoppingCart}
            color="yellow"
          />
          <MetricCard
            title="Total del Mes"
            value={`$${totalDelMes.toLocaleString('es-MX')}`}
            icon={TrendingUp}
            color="green"
            trend={{ value: 8, isPositive: true }}
          />
          <MetricCard
            title="Eventos Próximos"
            value={eventosProximos}
            icon={Calendar}
            color="orange"
          />
        </div>
        
        {/* Filters */}
        <DashboardFilters
          fechaInicio={fechaInicio}
          fechaFin={fechaFin}
          tipoPedido={tipoPedido}
          onFechaInicioChange={setFechaInicio}
          onFechaFinChange={setFechaFin}
          onTipoPedidoChange={setTipoPedido}
        />
        
        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <LineChart
            data={filteredVentas}
            title="Ventas por Día"
          />
          <DoughnutChart
            data={distribucionVentas}
            title="Distribución de Ventas"
          />
        </div>
        
        <div className="mb-6">
          <BarChart
            data={productosMasVendidos.slice(0, 8)}
            title="Productos Más Vendidos"
          />
        </div>
        
        {/* Tables */}
        <DashboardTables
          ultimosPedidos={filteredPedidos}
          ultimosEventos={ultimosEventos}
          productosVendidos={productosMasVendidos}
        />
      </div>
    </div>
  )
}

