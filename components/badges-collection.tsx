"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Lock, Leaf, Recycle, Trophy, Star, Zap, Target, Flame, Users } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const badges = [
  {
    id: 1,
    name: "Primeiro Check-in",
    icon: Star,
    unlocked: true,
    color: "from-yellow-500 to-orange-500",
    description: "Complete seu primeiro check-in",
    unlockedDate: "15 Jan 2024",
  },
  {
    id: 2,
    name: "Eco Warrior",
    icon: Leaf,
    unlocked: true,
    color: "from-green-500 to-emerald-500",
    description: "Recicle 50kg de materiais",
    unlockedDate: "22 Jan 2024",
  },
  {
    id: 3,
    name: "Reciclador Pro",
    icon: Recycle,
    unlocked: true,
    color: "from-blue-500 to-cyan-500",
    description: "Faça 50 check-ins",
    unlockedDate: "05 Fev 2024",
  },
  {
    id: 4,
    name: "Campeão Mensal",
    icon: Trophy,
    unlocked: true,
    color: "from-purple-500 to-pink-500",
    description: "Fique em 1º lugar no ranking mensal",
    unlockedDate: "28 Fev 2024",
  },
  {
    id: 5,
    name: "Streak 7 Dias",
    icon: Flame,
    unlocked: false,
    color: "from-orange-500 to-red-500",
    description: "Faça check-ins por 7 dias consecutivos",
    progress: "5/7 dias",
  },
  {
    id: 6,
    name: "Meta 100kg",
    icon: Target,
    unlocked: false,
    color: "from-indigo-500 to-purple-500",
    description: "Recicle 100kg de materiais",
    progress: "73/100 kg",
  },
  {
    id: 7,
    name: "Influenciador",
    icon: Users,
    unlocked: false,
    color: "from-pink-500 to-rose-500",
    description: "Convide 5 amigos para o EcoPonto",
    progress: "2/5 amigos",
  },
  {
    id: 8,
    name: "Raio Verde",
    icon: Zap,
    unlocked: false,
    color: "from-lime-500 to-green-500",
    description: "Complete 10 missões semanais",
    progress: "6/10 missões",
  },
]

export function BadgesCollection() {
  const unlockedCount = badges.filter((b) => b.unlocked).length

  return (
    <Card className="p-6 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-primary/20 shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <Award className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">Conquistas</h3>
        <Badge variant="secondary" className="ml-auto">
          {unlockedCount}/{badges.length}
        </Badge>
      </div>

      <TooltipProvider>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map((badge) => {
            const Icon = badge.icon
            return (
              <Tooltip key={badge.id}>
                <TooltipTrigger asChild>
                  <div
                    className={`relative p-4 rounded-xl border-2 transition-all duration-300 ${
                      badge.unlocked
                        ? "bg-gradient-to-br from-card to-card/50 border-primary/30 hover:border-primary/50 hover:scale-105 cursor-pointer"
                        : "bg-muted/20 border-muted/30 opacity-60 hover:opacity-80 cursor-pointer"
                    }`}
                  >
                    <div className="flex flex-col items-center gap-2 text-center">
                      <div
                        className={`p-3 rounded-full bg-gradient-to-br ${badge.color} ${!badge.unlocked && "grayscale"}`}
                      >
                        {badge.unlocked ? (
                          <Icon className="h-6 w-6 text-white" />
                        ) : (
                          <Lock className="h-6 w-6 text-white" />
                        )}
                      </div>
                      <p className="text-xs font-medium">{badge.name}</p>
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="max-w-[200px]">
                  <div className="space-y-1">
                    <p className="font-semibold">{badge.name}</p>
                    <p className="text-xs text-muted-foreground">{badge.description}</p>
                    {badge.unlocked ? (
                      <p className="text-xs text-primary">Desbloqueado em {badge.unlockedDate}</p>
                    ) : (
                      <p className="text-xs text-muted-foreground">Progresso: {badge.progress}</p>
                    )}
                  </div>
                </TooltipContent>
              </Tooltip>
            )
          })}
        </div>
      </TooltipProvider>
    </Card>
  )
}
