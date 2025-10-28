import { RewardsCategories } from "@/components/rewards-categories"
import { UserPointsBalance } from "@/components/user-points-balance"
import { RecentExchanges } from "@/components/recent-exchanges"
import { Gift, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function RewardsPage() {
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
                <Gift className="h-6 w-6 text-primary" />
                <h1 className="text-xl font-semibold">Recompensas</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              <UserPointsBalance />
              <RewardsCategories />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <RecentExchanges />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
