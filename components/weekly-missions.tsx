"use client"

import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Target, CheckCircle2 } from "lucide-react"

const missions = [
  { id: 1, title: "Faça 5 check-ins esta semana", progress: 3, total: 5, points: 100, completed: false },
  { id: 2, title: "Recicle 10kg de plástico", progress: 10, total: 10, points: 150, completed: true },
  { id: 3, title: "Visite 3 pontos diferentes", progress: 2, total: 3, points: 80, completed: false },
  { id: 4, title: "Convide um amigo", progress: 0, total: 1, points: 200, completed: false },
]

export function WeeklyMissions() {
  return (
    <Card className="p-6 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-primary/20 shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <Target className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">Missões Semanais</h3>
        <Badge variant="secondary" className="ml-auto">
          1/4 Completas
        </Badge>
      </div>

      <div className="space-y-4">
        {missions.map((mission) => (
          <div
            key={mission.id}
            className={`p-4 rounded-lg border transition-all duration-300 ${
              mission.completed
                ? "bg-primary/10 border-primary/30"
                : "bg-card/50 border-border/50 hover:border-primary/30"
            }`}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <p className={`font-medium ${mission.completed && "line-through text-muted-foreground"}`}>
                  {mission.title}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {mission.progress}/{mission.total} • +{mission.points} pontos
                </p>
              </div>
              {mission.completed && <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />}
            </div>
            <Progress value={(mission.progress / mission.total) * 100} className="h-2" />
          </div>
        ))}
      </div>
    </Card>
  )
}
