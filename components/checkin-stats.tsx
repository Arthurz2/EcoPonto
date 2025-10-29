"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Flame, Target, TrendingUp } from "lucide-react"
import type { Stats } from "@/app/checkin/page"

type CheckInStatsProps = {
  stats: Stats
}

export function CheckInStats({ stats }: CheckInStatsProps) {
  const statsData = [
    {
      label: "Total de Check-ins",
      value: stats.totalCheckIns.toString(),
      icon: Target,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      label: "Sequência Atual",
      value: `${stats.currentStreak} dias`,
      icon: Flame,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      label: "Ranking Local",
      value: `#${stats.ranking}`,
      icon: Trophy,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      label: "Esta Semana",
      value: `+${stats.thisWeek}`,
      icon: TrendingUp,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
  ]

  return (
    <div className="grid grid-cols-2 gap-4">
      {statsData.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.label} className="border-2">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <Icon className={`h-5 w-5 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
