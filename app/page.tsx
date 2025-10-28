import { Leaf, Recycle, Award, MapPin, Gift, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-emerald-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-emerald-500 to-green-600 p-2 rounded-xl">
                <Recycle className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                EcoPonto
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="#como-funciona">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50"
                >
                  Como Funciona
                </Button>
              </Link>
              <Link href="#beneficios">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50"
                >
                  Benefícios
                </Button>
              </Link>
              <Link href="/login">
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white shadow-lg shadow-emerald-500/30"
                >
                  Entrar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              Transforme reciclagem em recompensas
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-balance leading-tight">
              Recicle e ganhe{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                benefícios reais
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-600 text-pretty leading-relaxed max-w-3xl mx-auto">
              Conecte-se a pontos de coleta em Belo Horizonte, acumule pontos por cada descarte e troque por descontos
              em impostos, vale-compras e muito mais.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/login">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white shadow-xl shadow-emerald-500/30"
                >
                  Começar Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#como-funciona">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 border-2 border-emerald-500 text-emerald-700 hover:bg-emerald-50 bg-transparent"
                >
                  Saiba Mais
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-emerald-600">1.250+</div>
                <div className="text-sm text-gray-600">Pontos de Coleta</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-emerald-600">15.000+</div>
                <div className="text-sm text-gray-600">Usuários Ativos</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-emerald-600">2.5M kg</div>
                <div className="text-sm text-gray-600">Reciclados</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section id="como-funciona" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold">Como Funciona</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Reciclar nunca foi tão fácil e recompensador</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-white border-2 border-emerald-100 rounded-2xl p-8 space-y-4 hover:border-emerald-300 transition-all hover:shadow-xl">
                  <div className="bg-gradient-to-br from-emerald-500 to-green-600 w-16 h-16 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    1
                  </div>
                  <h3 className="text-2xl font-bold">Encontre um Ponto</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Use nosso mapa interativo para localizar pontos de coleta próximos a você em Belo Horizonte
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-white border-2 border-emerald-100 rounded-2xl p-8 space-y-4 hover:border-emerald-300 transition-all hover:shadow-xl">
                  <div className="bg-gradient-to-br from-emerald-500 to-green-600 w-16 h-16 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    2
                  </div>
                  <h3 className="text-2xl font-bold">Faça Check-in</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Escaneie o QR Code no ponto de coleta e registre o tipo e quantidade de material reciclado
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-white border-2 border-emerald-100 rounded-2xl p-8 space-y-4 hover:border-emerald-300 transition-all hover:shadow-xl">
                  <div className="bg-gradient-to-br from-emerald-500 to-green-600 w-16 h-16 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    3
                  </div>
                  <h3 className="text-2xl font-bold">Ganhe Recompensas</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Acumule pontos e troque por descontos em impostos, vale-compras e benefícios exclusivos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section id="beneficios" className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold">Por que usar o EcoPonto?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Benefícios para você e para o planeta</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/80 backdrop-blur-sm border border-emerald-100 rounded-xl p-6 space-y-4 hover:shadow-lg transition-all">
                <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold">Mapa Interativo</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Encontre pontos de coleta próximos com geolocalização em tempo real
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm border border-emerald-100 rounded-xl p-6 space-y-4 hover:shadow-lg transition-all">
                <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center">
                  <Award className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold">Sistema de Pontos</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Ganhe pontos baseados no tipo e volume do material reciclado
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm border border-emerald-100 rounded-xl p-6 space-y-4 hover:shadow-lg transition-all">
                <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center">
                  <Leaf className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold">Impacto Ambiental</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Acompanhe seu impacto positivo no meio ambiente em tempo real
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm border border-emerald-100 rounded-xl p-6 space-y-4 hover:shadow-lg transition-all">
                <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center">
                  <Gift className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold">Recompensas Reais</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Troque pontos por descontos em impostos e vale-compras
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-green-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white text-balance">Pronto para fazer a diferença?</h2>
            <p className="text-xl text-emerald-100 text-pretty max-w-2xl mx-auto">
              Junte-se a milhares de pessoas que já estão transformando reciclagem em benefícios reais
            </p>
            <Link href="/login">
              <Button size="lg" className="text-lg px-8 py-6 bg-white text-emerald-600 hover:bg-emerald-50 shadow-xl">
                Criar Conta Grátis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-emerald-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-emerald-500 to-green-600 p-2 rounded-xl">
                <Recycle className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                EcoPonto
              </span>
            </div>
            <p className="text-sm text-gray-600">2024 EcoPonto. Transformando reciclagem em recompensas.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
