"use client"

import { useState } from "react"
import { RewardsCategories } from "@/components/rewards-categories"
import { UserPointsBalance } from "@/components/user-points-balance"
import { RecentExchanges } from "@/components/recent-exchanges"
import { AppNavigation } from "@/components/app-navigation"

export type Exchange = {
  id: number
  reward: string
  points: number
  date: string
  status: string
}

export default function RewardsPage() {
  const [userPoints, setUserPoints] = useState(1250)
  const [weeklyPoints, setWeeklyPoints] = useState(150)
  const [exchanges, setExchanges] = useState<Exchange[]>([
    { id: 1, reward: "Café Grátis", points: 200, date: "Há 2 dias", status: "completed" },
    { id: 2, reward: "Vale Compras R$ 20", points: 500, date: "Há 5 dias", status: "completed" },
    { id: 3, reward: "Kit Sustentável", points: 600, date: "Há 1 semana", status: "completed" },
  ])

  const handleRedeem = (rewardName: string, points: number) => {
    // Deduct points
    setUserPoints((prev) => prev - points)

    // Add to exchanges history
    const newExchange: Exchange = {
      id: Date.now(),
      reward: rewardName,
      points: points,
      date: "Agora",
      status: "completed",
    }
    setExchanges((prev) => [newExchange, ...prev])
  }

  const totalRedeemed = exchanges.reduce((sum, ex) => sum + ex.points, 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <AppNavigation />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              <UserPointsBalance points={userPoints} weeklyPoints={weeklyPoints} />
              <RewardsCategories onRedeem={handleRedeem} userPoints={userPoints} />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <RecentExchanges exchanges={exchanges} totalRedeemed={totalRedeemed} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
