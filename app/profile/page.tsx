import { UserProfile } from "@/components/user-profile"
import { BadgesCollection } from "@/components/badges-collection"
import { WeeklyMissions } from "@/components/weekly-missions"
import { Leaderboard } from "@/components/leaderboard"
import { User, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/dashboard">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar
                </Button>
              </Link>
              <div className="flex items-center gap-2">
                <User className="h-6 w-6 text-primary" />
                <h1 className="text-xl font-semibold">Meu Perfil</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              <UserProfile />
              <BadgesCollection />
              <WeeklyMissions />
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <Leaderboard />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
