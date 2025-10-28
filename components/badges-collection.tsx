"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Lock, Leaf, Recycle, Trophy, Star, Zap, Target } from "lucide-react"

const badges = [
  { id: 1, name: "Primeiro Check-in", icon: Star, unlocked: true, color: "from-yellow-500 to-orange-500" },
  { id: 2, name: "Eco Warrior", icon: Leaf, unlocked: true, color: "from-green-500 to-emerald-500" },
  { id: 3, name: "Reciclador Pro", icon: Recycle, unlocked: true, color: "from-blue-500 to-cyan-500" },
  { id: 4, name: "Campeão Mensal", icon: Trophy, unlocked: true, color: "from-purple-500 to-pink-500" },
  { id: 5, name: "Streak 7 Dias", icon: Zap, unlocked: false, color: "from-gray-400 to-gray-500" },
  { id: 6, name: "Meta 100kg", icon: Target, unlocked: false, color: "from-gray-400 to-gray-500" },
]

export function BadgesCollection() {
  return (
    <Card className="p-6 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-primary/20 shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <Award className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">Conquistas</h3>
        <Badge variant="secondary" className="ml-auto">
          4/6
        </Badge>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {badges.map((badge) => {
          const Icon = badge.icon
          return (
            <div
              key={badge.id}
              className={`relative p-4 rounded-xl border-2 transition-all duration-300 ${
                badge.unlocked
                  ? "bg-gradient-to-br from-card to-card/50 border-primary/30 hover:border-primary/50 hover:scale-105 cursor-pointer"
                  : "bg-muted/20 border-muted/30 opacity-60"
              }`}
            >
              <div className="flex flex-col items-center gap-2 text-center">
                <div className={`p-3 rounded-full bg-gradient-to-br ${badge.color} ${!badge.unlocked && "grayscale"}`}>
                  {badge.unlocked ? <Icon className="h-6 w-6 text-white" /> : <Lock className="h-6 w-6 text-white" />}
                </div>
                <p className="text-sm font-medium">{badge.name}</p>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
