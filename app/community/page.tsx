import { AppNavigation } from "@/components/app-navigation"
import { CommunityFeed } from "@/components/community-feed"
import { CommunityChallenges } from "@/components/community-challenges"
import { LocalGroups } from "@/components/local-groups"
import { Card } from "@/components/ui/card"
import { Users, Trophy, Target, TrendingUp } from "lucide-react"

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <AppNavigation />

      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
            Comunidade EcoPonto
          </h1>
          <p className="text-muted-foreground">Conecte-se com outros recicladores e participe de desafios</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/20">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 bg-blue-500/20 rounded-lg mb-2">
                <Users className="h-6 w-6 text-blue-500" />
              </div>
              <p className="text-2xl font-bold">12.5k</p>
              <p className="text-xs text-muted-foreground">Membros ativos</p>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-purple-500/10 to-purple-600/5 border-purple-500/20">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 bg-purple-500/20 rounded-lg mb-2">
                <Trophy className="h-6 w-6 text-purple-500" />
              </div>
              <p className="text-2xl font-bold">48</p>
              <p className="text-xs text-muted-foreground">Desafios ativos</p>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-amber-500/10 to-amber-600/5 border-amber-500/20">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 bg-amber-500/20 rounded-lg mb-2">
                <Target className="h-6 w-6 text-amber-500" />
              </div>
              <p className="text-2xl font-bold">156</p>
              <p className="text-xs text-muted-foreground">Grupos locais</p>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-green-500/10 to-green-600/5 border-green-500/20">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 bg-green-500/20 rounded-lg mb-2">
                <TrendingUp className="h-6 w-6 text-green-500" />
              </div>
              <p className="text-2xl font-bold">2.3k</p>
              <p className="text-xs text-muted-foreground">Posts hoje</p>
            </div>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Feed */}
          <div className="lg:col-span-2">
            <CommunityFeed />
          </div>

          {/* Right Column - Challenges and Groups */}
          <div className="space-y-6">
            <CommunityChallenges />
            <LocalGroups />
          </div>
        </div>
      </main>
    </div>
  )
}
