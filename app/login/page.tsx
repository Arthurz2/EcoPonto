import { AuthForm } from "@/components/auth-form"
import { Recycle, Leaf, Award, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-gray-950 dark:via-emerald-950 dark:to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-green-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 right-1/4 w-80 h-80 bg-teal-400/20 rounded-full blur-3xl" />
      </div>

      <header className="container mx-auto px-4 py-6 relative z-10">
        <Link
          href="/"
          className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 w-fit hover:scale-105 transition-transform"
        >
          <Recycle className="h-8 w-8" />
          <span className="text-2xl font-bold">EcoPonto</span>
        </Link>
      </header>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left side - Information */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                Transforme Reciclagem em <span className="text-emerald-600 dark:text-emerald-400">Recompensas</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Junte-se a milhares de usuários que já estão fazendo a diferença para o meio ambiente e ganhando pontos
                por isso.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-2xl space-y-3 hover:scale-105 transition-transform">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                  <Leaf className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Impacto Real</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Contribua para um planeta mais sustentável</p>
              </div>

              <div className="glass-card p-6 rounded-2xl space-y-3 hover:scale-105 transition-transform">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                  <Award className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Recompensas</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Ganhe pontos e troque por prêmios</p>
              </div>

              <div className="glass-card p-6 rounded-2xl space-y-3 hover:scale-105 transition-transform">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Acompanhe</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Veja seu progresso e impacto ambiental</p>
              </div>

              <div className="glass-card p-6 rounded-2xl space-y-3 hover:scale-105 transition-transform">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                  <Recycle className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Fácil de Usar</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Encontre pontos de coleta próximos</p>
              </div>
            </div>

            {/* Stats */}
            <div className="glass-card p-6 rounded-2xl">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">10k+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Usuários</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Pontos de Coleta</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">2M+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Kg Reciclados</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Auth Form */}
          <div className="flex items-center justify-center">
            <AuthForm />
          </div>
        </div>
      </div>
    </div>
  )
}
