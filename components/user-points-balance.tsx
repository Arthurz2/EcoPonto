"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Coins, TrendingUp, Gift } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface UserPointsBalanceProps {
  points: number
  weeklyPoints: number
}

export function UserPointsBalance({ points, weeklyPoints }: UserPointsBalanceProps) {
  const getUserLevel = (pts: number) => {
    if (pts >= 5000) return { name: "Diamante", color: "from-cyan-500 to-blue-600", icon: "💎" }
    if (pts >= 3000) return { name: "Ouro", color: "from-yellow-500 to-orange-600", icon: "🏆" }
    if (pts >= 1500) return { name: "Prata", color: "from-gray-400 to-gray-600", icon: "🥈" }
    return { name: "Bronze", color: "from-amber-700 to-amber-900", icon: "🥉" }
  }

  const level = getUserLevel(points)
  const nextLevelPoints = points >= 5000 ? 0 : points >= 3000 ? 5000 : points >= 1500 ? 3000 : 1500
  const pointsToNext = nextLevelPoints - points

  return (
    <Card className="p-6 bg-gradient-to-br from-primary/10 via-card/80 to-card/40 backdrop-blur-sm border-primary/30 shadow-xl">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className={`p-4 rounded-full bg-gradient-to-br ${level.color} shadow-lg`}>
            <Coins className="h-8 w-8 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <p className="text-sm text-muted-foreground">Saldo Disponível</p>
              <Badge variant="secondary" className="text-xs">
                {level.icon} {level.name}
              </Badge>
            </div>
            <p className="text-4xl font-bold text-primary">{points.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />+{weeklyPoints} pontos esta semana
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Button className="bg-gradient-to-r from-primary to-green-600 hover:from-primary/90 hover:to-green-600/90 gap-2">
            <Gift className="h-4 w-4" />
            Resgatar Recompensa
          </Button>
          {pointsToNext > 0 ? (
            <p className="text-xs text-center text-muted-foreground">Próximo nível em {pointsToNext} pts</p>
          ) : (
            <p className="text-xs text-center text-primary font-semibold">Nível máximo atingido!</p>
          )}
        </div>
      </div>
    </Card>
  )
}
