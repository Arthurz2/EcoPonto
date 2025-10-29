"use client"

import { Recycle, Award, Leaf, TrendingUp, MapPin, Gift, Calendar, Droplet, Zap, TreePine, Wind } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import {
  Line,
  LineChart,
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Pie,
  PieChart,
  Cell,
} from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { AppNavigation } from "@/components/app-navigation"

// Mock data for charts
const pointsOverTimeData = [
  { month: "Jan", points: 400 },
  { month: "Fev", points: 650 },
  { month: "Mar", points: 890 },
  { month: "Abr", points: 1200 },
  { month: "Mai", points: 1650 },
  { month: "Jun", points: 2100 },
  { month: "Jul", points: 2450 },
]

const materialsByTypeData = [
  { type: "Plástico", weight: 15.5 },
  { type: "Papel", weight: 12.3 },
  { type: "Vidro", weight: 8.7 },
  { type: "Metal", weight: 5.2 },
  { type: "Eletrônicos", weight: 3.5 },
]

const materialDistributionData = [
  { name: "Plástico", value: 34, color: "hsl(var(--chart-1))" },
  { name: "Papel", value: 27, color: "hsl(var(--chart-2))" },
  { name: "Vidro", value: 19, color: "hsl(var(--chart-3))" },
  { name: "Metal", value: 12, color: "hsl(var(--chart-4))" },
  { name: "Eletrônicos", value: 8, color: "hsl(var(--chart-5))" },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Navigation */}
      <AppNavigation />

      {/* Dashboard Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Welcome Section */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold text-balance mb-2">Bem-vindo de volta!</h1>
                <p className="text-emerald-100 text-lg">
                  Veja seu progresso e continue fazendo a diferença para o planeta
                </p>
              </div>
              <div className="hidden md:block">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                  <Calendar className="h-8 w-8 mx-auto mb-2" />
                  <p className="text-sm font-medium">Membro desde</p>
                  <p className="text-2xl font-bold">Jan 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white/80 backdrop-blur-sm border-emerald-200 hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-700">Pontos Totais</CardTitle>
                <Award className="h-5 w-5 text-amber-500" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-emerald-600">2,450</div>
                <p className="text-xs text-emerald-600 font-medium mt-1">+180 esta semana</p>
                <div className="mt-2 h-1 bg-emerald-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: "73%" }} />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-teal-200 hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-700">Material Reciclado</CardTitle>
                <Leaf className="h-5 w-5 text-teal-500" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-teal-600">45.2 kg</div>
                <p className="text-xs text-teal-600 font-medium mt-1">+5.8 kg esta semana</p>
                <div className="mt-2 h-1 bg-teal-100 rounded-full overflow-hidden">
                  <div className="h-full bg-teal-500 rounded-full" style={{ width: "85%" }} />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-cyan-200 hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-700">Descartes</CardTitle>
                <TrendingUp className="h-5 w-5 text-cyan-500" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-cyan-600">23</div>
                <p className="text-xs text-cyan-600 font-medium mt-1">+3 esta semana</p>
                <div className="mt-2 h-1 bg-cyan-100 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-500 rounded-full" style={{ width: "60%" }} />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-700">Recompensas</CardTitle>
                <Gift className="h-5 w-5 text-purple-500" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-purple-600">5</div>
                <p className="text-xs text-purple-600 font-medium mt-1">Disponíveis para resgate</p>
                <div className="mt-2 h-1 bg-purple-100 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 rounded-full" style={{ width: "50%" }} />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Environmental Impact Section */}
          <Card className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Leaf className="h-7 w-7" />
                Seu Impacto Ambiental
              </CardTitle>
              <CardDescription className="text-green-100">
                O impacto positivo que você gerou para o planeta com suas ações
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <Wind className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-green-100">CO₂ Evitado</p>
                    </div>
                  </div>
                  <p className="text-4xl font-bold">67.8 kg</p>
                  <p className="text-sm text-green-100 mt-2">Equivalente a 3 árvores plantadas</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <Droplet className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-green-100">Água Economizada</p>
                    </div>
                  </div>
                  <p className="text-4xl font-bold">1,240 L</p>
                  <p className="text-sm text-green-100 mt-2">Suficiente para 8 dias de consumo</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-green-100">Energia Economizada</p>
                    </div>
                  </div>
                  <p className="text-4xl font-bold">156 kWh</p>
                  <p className="text-sm text-green-100 mt-2">Equivalente a 1 mês de TV</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <TreePine className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-green-100">Árvores Salvas</p>
                    </div>
                  </div>
                  <p className="text-4xl font-bold">12</p>
                  <p className="text-sm text-green-100 mt-2">Pela reciclagem de papel</p>
                </div>
              </div>

              <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-400 p-3 rounded-lg">
                    <Award className="h-6 w-6 text-amber-900" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">Parabéns pelo seu compromisso!</h3>
                    <p className="text-green-100 text-balance">
                      Você está entre os <span className="font-bold text-white">top 15%</span> de usuários mais
                      engajados do EcoPonto. Continue assim e ajude a construir um futuro mais sustentável!
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Charts Section */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Points Over Time Chart */}
            <Card className="bg-white/80 backdrop-blur-sm border-emerald-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-800">
                  <TrendingUp className="h-5 w-5 text-emerald-600" />
                  Evolução de Pontos
                </CardTitle>
                <CardDescription>Seus pontos acumulados nos últimos 7 meses</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    points: {
                      label: "Pontos",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={pointsOverTimeData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="month" stroke="#6b7280" />
                      <YAxis stroke="#6b7280" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line
                        type="monotone"
                        dataKey="points"
                        stroke="#10b981"
                        strokeWidth={3}
                        dot={{ fill: "#10b981", r: 5 }}
                        activeDot={{ r: 7 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* Materials by Type Chart */}
            <Card className="bg-white/80 backdrop-blur-sm border-teal-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-800">
                  <Leaf className="h-5 w-5 text-teal-600" />
                  Materiais por Tipo
                </CardTitle>
                <CardDescription>Peso total reciclado por categoria (kg)</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    weight: {
                      label: "Peso (kg)",
                      color: "hsl(var(--chart-2))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={materialsByTypeData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="type" stroke="#6b7280" fontSize={12} />
                      <YAxis stroke="#6b7280" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="weight" fill="#14b8a6" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          {/* Distribution and Activity Section */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Material Distribution Pie Chart */}
            <Card className="bg-white/80 backdrop-blur-sm border-cyan-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-800">
                  <Recycle className="h-5 w-5 text-cyan-600" />
                  Distribuição
                </CardTitle>
                <CardDescription>Proporção de materiais reciclados</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    value: {
                      label: "Porcentagem",
                    },
                  }}
                  className="h-[250px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={materialDistributionData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {materialDistributionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
                <div className="mt-4 space-y-2">
                  {materialDistributionData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                        <span className="text-gray-700">{item.name}</span>
                      </div>
                      <span className="font-semibold text-gray-900">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="lg:col-span-2 bg-white/80 backdrop-blur-sm border-emerald-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-800">
                  <Award className="h-5 w-5 text-emerald-600" />
                  Atividade Recente
                </CardTitle>
                <CardDescription>Seus últimos descartes e recompensas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-xl border border-emerald-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4">
                      <div className="bg-emerald-500 p-3 rounded-xl">
                        <Recycle className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Descarte de Plástico</p>
                        <p className="text-sm text-gray-600">Ponto de Coleta Savassi - 2.5 kg</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-emerald-600 text-lg">+120 pontos</p>
                      <p className="text-xs text-gray-500">Há 2 dias</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-teal-50 rounded-xl border border-teal-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4">
                      <div className="bg-teal-500 p-3 rounded-xl">
                        <Recycle className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Descarte de Papel</p>
                        <p className="text-sm text-gray-600">Ponto de Coleta Pampulha - 3.2 kg</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-teal-600 text-lg">+60 pontos</p>
                      <p className="text-xs text-gray-500">Há 5 dias</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl border border-purple-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4">
                      <div className="bg-purple-500 p-3 rounded-xl">
                        <Gift className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Recompensa Resgatada</p>
                        <p className="text-sm text-gray-600">Vale-compras R$ 20</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-red-600 text-lg">-500 pontos</p>
                      <p className="text-xs text-gray-500">Há 1 semana</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white border-0 hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Recycle className="h-6 w-6" />
                  Fazer Check-in
                </CardTitle>
                <CardDescription className="text-emerald-100">Registre seu descarte e ganhe pontos</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/checkin">
                  <Button className="w-full bg-white text-emerald-600 hover:bg-emerald-50 font-semibold">
                    Iniciar Check-in
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white border-0 hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-6 w-6" />
                  Encontrar Ponto
                </CardTitle>
                <CardDescription className="text-cyan-100">Localize o ponto mais próximo de você</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/map">
                  <Button className="w-full bg-white text-cyan-600 hover:bg-cyan-50 font-semibold">Ver Mapa</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500 to-pink-600 text-white border-0 hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gift className="h-6 w-6" />
                  Resgatar Prêmios
                </CardTitle>
                <CardDescription className="text-purple-100">Troque seus pontos por benefícios</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/rewards">
                  <Button className="w-full bg-white text-purple-600 hover:bg-purple-50 font-semibold">
                    Ver Recompensas
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
