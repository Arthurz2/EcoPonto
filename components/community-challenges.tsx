"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Trophy, Users, Target, Clock } from "lucide-react"

const challenges = [
  {
    id: 1,
    title: "Desafio Semanal: Plástico Zero",
    description: "Recicle 100kg de plástico esta semana",
    participants: 234,
    progress: 65,
    reward: 200,
    timeLeft: "3 dias",
    type: "Semanal",
  },
  {
    id: 2,
    title: "Maratona de Reciclagem",
    description: "Faça 20 check-ins em 30 dias",
    participants: 156,
    progress: 40,
    reward: 150,
    timeLeft: "12 dias",
    type: "Mensal",
  },
  {
    id: 3,
    title: "Campeão do Vidro",
    description: "Seja o primeiro a reciclar 50kg de vidro",
    participants: 89,
    progress: 80,
    reward: 300,
    timeLeft: "5 dias",
    type: "Competição",
  },
]

export function CommunityChallenges() {
  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/10">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Target className="h-5 w-5 text-primary" />
        Desafios da Comunidade
      </h2>
      <div className="space-y-4">
        {challenges.map((challenge) => (
          <div key={challenge.id} className="p-4 rounded-lg border border-border bg-background/50">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-sm">{challenge.title}</h3>
                  <Badge variant="outline" className="text-xs">
                    {challenge.type}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mb-2">{challenge.description}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {challenge.participants} participantes
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {challenge.timeLeft}
                  </span>
                </div>
              </div>
              <Badge variant="secondary" className="flex-shrink-0">
                <Trophy className="h-3 w-3 mr-1" />
                {challenge.reward} pts
              </Badge>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Seu progresso</span>
                <span className="font-medium">{challenge.progress}%</span>
              </div>
              <Progress value={challenge.progress} className="h-2" />
            </div>

            <Button size="sm" className="w-full mt-3">
              Participar
            </Button>
          </div>
        ))}
      </div>
    </Card>
  )
}
