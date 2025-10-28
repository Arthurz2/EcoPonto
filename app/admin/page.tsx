"use client"

import {
  Users,
  TrendingUp,
  MapPin,
  Award,
  BarChart3,
  Activity,
  Leaf,
  ArrowLeft,
  Download,
  Calendar,
  Wind,
  Droplet,
  Zap,
  TreePine,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Area, AreaChart } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Mock data for admin dashboard
const engagementData = [
  { date: "01/01", users: 120, checkins: 45, points: 2400 },
  { date: "08/01", users: 145, checkins: 58, points: 3100 },
  { date: "15/01", users: 178, checkins: 72, points: 3800 },
  { date: "22/01", users: 210, checkins: 89, points: 4500 },
  { date: "29/01", users: 245, checkins: 105, points: 5200 },
  { date: "05/02", users: 289, checkins: 128, points: 6100 },
  { date: "12/02", users: 334, checkins: 156, points: 7300 },
]

const materialsTrendData = [
  { month: "Jan", plastico: 450, papel: 380, vidro: 220, metal: 150, eletronicos: 80 },
  { month: "Fev", plastico: 520, papel: 420, vidro: 260, metal: 180, eletronicos: 95 },
  { month: "Mar", plastico: 610, papel: 480, vidro: 310, metal: 210, eletronicos: 115 },
  { month: "Abr", plastico: 680, papel: 540, vidro: 350, metal: 240, eletronicos: 130 },
  { month: "Mai", plastico: 750, papel: 600, vidro: 390, metal: 270, eletronicos: 150 },
  { month: "Jun", plastico: 820, papel: 660, vidro: 430, metal: 300, eletronicos: 170 },
]

const topUsers = [
  { name: "Maria Silva", points: 8450, checkins: 67, materials: 125.5 },
  { name: "João Santos", points: 7890, checkins: 62, materials: 118.2 },
  { name: "Ana Costa", points: 7320, checkins: 58, materials: 110.8 },
  { name: "Pedro Oliveira", points: 6850, checkins: 54, materials: 102.3 },
  { name: "Carla Souza", points: 6420, checkins: 51, materials: 96.7 },
]

const collectionPoints = [
  { name: "Savassi", checkins: 234, status: "Ativo", capacity: 85 },
  { name: "Pampulha", checkins: 198, status: "Ativo", capacity: 72 },
  { name: "Centro", checkins: 187, status: "Ativo", capacity: 68 },
  { name: "Barreiro", checkins: 156, status: "Manutenção", capacity: 45 },
  { name: "Venda Nova", checkins: 142, status: "Ativo", capacity: 91 },
]

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/dashboard">
                <Button variant="ghost" size="sm" className="hover:bg-gray-100">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar
                </Button>
              </Link>
              <div className="flex items-center gap-2 text-slate-700">
                <BarChart3 className="h-8 w-8" />
                <span className="text-2xl font-bold">Painel Administrativo</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="hover:bg-emerald-50 bg-transparent">
                <Download className="h-4 w-4 mr-2" />
                Exportar Relatório
              </Button>
              <Button variant="outline" size="sm" className="hover:bg-emerald-50 bg-transparent">
                <Calendar className="h-4 w-4 mr-2" />
                Período: Últimos 30 dias
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Admin Dashboard Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Overview Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white/80 backdrop-blur-sm border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-700">Total de Usuários</CardTitle>
                <Users className="h-5 w-5 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600">1,847</div>
                <p className="text-xs text-blue-600 font-medium mt-1">+89 novos este mês</p>
                <div className="mt-2 h-1 bg-blue-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: "78%" }} />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-emerald-200 hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-700">Check-ins Totais</CardTitle>
                <Activity className="h-5 w-5 text-emerald-500" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-emerald-600">12,456</div>
                <p className="text-xs text-emerald-600 font-medium mt-1">+653 esta semana</p>
                <div className="mt-2 h-1 bg-emerald-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: "92%" }} />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-teal-200 hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-700">Material Reciclado</CardTitle>
                <Leaf className="h-5 w-5 text-teal-500" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-teal-600">8,342 kg</div>
                <p className="text-xs text-teal-600 font-medium mt-1">+412 kg esta semana</p>
                <div className="mt-2 h-1 bg-teal-100 rounded-full overflow-hidden">
                  <div className="h-full bg-teal-500 rounded-full" style={{ width: "85%" }} />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-amber-200 hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-700">Pontos Distribuídos</CardTitle>
                <Award className="h-5 w-5 text-amber-500" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-amber-600">456,789</div>
                <p className="text-xs text-amber-600 font-medium mt-1">+23,450 esta semana</p>
                <div className="mt-2 h-1 bg-amber-100 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full" style={{ width: "88%" }} />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Environmental Impact Total */}
          <Card className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Leaf className="h-7 w-7" />
                Impacto Ambiental Total da Plataforma
              </CardTitle>
              <CardDescription className="text-green-100">
                O impacto positivo gerado por todos os usuários do EcoPonto
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <Wind className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-sm font-medium text-green-100">CO₂ Evitado</p>
                  </div>
                  <p className="text-4xl font-bold">125 ton</p>
                  <p className="text-sm text-green-100 mt-2">Equivalente a 5.500 árvores</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <Droplet className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-sm font-medium text-green-100">Água Economizada</p>
                  </div>
                  <p className="text-4xl font-bold">2.3 mi L</p>
                  <p className="text-sm text-green-100 mt-2">15.000 dias de consumo</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-sm font-medium text-green-100">Energia Economizada</p>
                  </div>
                  <p className="text-4xl font-bold">288 MWh</p>
                  <p className="text-sm text-green-100 mt-2">120 casas por 1 mês</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <TreePine className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-sm font-medium text-green-100">Árvores Salvas</p>
                  </div>
                  <p className="text-4xl font-bold">22,150</p>
                  <p className="text-sm text-green-100 mt-2">Pela reciclagem de papel</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Engagement Charts */}
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="bg-white/80 backdrop-blur-sm border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-800">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  Engajamento de Usuários
                </CardTitle>
                <CardDescription>Usuários ativos, check-ins e pontos distribuídos</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    users: { label: "Usuários", color: "hsl(var(--chart-1))" },
                    checkins: { label: "Check-ins", color: "hsl(var(--chart-2))" },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={engagementData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="date" stroke="#6b7280" fontSize={12} />
                      <YAxis stroke="#6b7280" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Area
                        type="monotone"
                        dataKey="users"
                        stackId="1"
                        stroke="#3b82f6"
                        fill="#3b82f6"
                        fillOpacity={0.6}
                      />
                      <Area
                        type="monotone"
                        dataKey="checkins"
                        stackId="2"
                        stroke="#10b981"
                        fill="#10b981"
                        fillOpacity={0.6}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-teal-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-800">
                  <Leaf className="h-5 w-5 text-teal-600" />
                  Tendência de Materiais Reciclados
                </CardTitle>
                <CardDescription>Evolução por tipo de material (kg)</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    plastico: { label: "Plástico", color: "hsl(var(--chart-1))" },
                    papel: { label: "Papel", color: "hsl(var(--chart-2))" },
                    vidro: { label: "Vidro", color: "hsl(var(--chart-3))" },
                    metal: { label: "Metal", color: "hsl(var(--chart-4))" },
                    eletronicos: { label: "Eletrônicos", color: "hsl(var(--chart-5))" },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={materialsTrendData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="month" stroke="#6b7280" fontSize={12} />
                      <YAxis stroke="#6b7280" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line type="monotone" dataKey="plastico" stroke="#3b82f6" strokeWidth={2} />
                      <Line type="monotone" dataKey="papel" stroke="#10b981" strokeWidth={2} />
                      <Line type="monotone" dataKey="vidro" stroke="#06b6d4" strokeWidth={2} />
                      <Line type="monotone" dataKey="metal" stroke="#f59e0b" strokeWidth={2} />
                      <Line type="monotone" dataKey="eletronicos" stroke="#8b5cf6" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          {/* Tables Section */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Top Users */}
            <Card className="bg-white/80 backdrop-blur-sm border-amber-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-800">
                  <Award className="h-5 w-5 text-amber-600" />
                  Usuários Mais Ativos
                </CardTitle>
                <CardDescription>Top 5 usuários por pontos acumulados</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {topUsers.map((user, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-4">
                        <div className="bg-amber-500 text-white font-bold w-10 h-10 rounded-full flex items-center justify-center text-lg">
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{user.name}</p>
                          <p className="text-sm text-gray-600">
                            {user.checkins} check-ins • {user.materials} kg
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-amber-600 text-lg">{user.points.toLocaleString()}</p>
                        <p className="text-xs text-gray-500">pontos</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Collection Points Status */}
            <Card className="bg-white/80 backdrop-blur-sm border-emerald-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-800">
                  <MapPin className="h-5 w-5 text-emerald-600" />
                  Status dos Pontos de Coleta
                </CardTitle>
                <CardDescription>Monitoramento de capacidade e atividade</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {collectionPoints.map((point, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-200 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <MapPin className="h-5 w-5 text-emerald-600" />
                          <div>
                            <p className="font-semibold text-gray-900">{point.name}</p>
                            <p className="text-sm text-gray-600">{point.checkins} check-ins este mês</p>
                          </div>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            point.status === "Ativo" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"
                          }`}
                        >
                          {point.status}
                        </span>
                      </div>
                      <div className="mt-2">
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span className="text-gray-600">Capacidade</span>
                          <span className="font-semibold text-gray-900">{point.capacity}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              point.capacity > 80
                                ? "bg-red-500"
                                : point.capacity > 60
                                  ? "bg-orange-500"
                                  : "bg-emerald-500"
                            }`}
                            style={{ width: `${point.capacity}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
