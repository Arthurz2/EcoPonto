"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Recycle, Gift, Award, MapPin } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "checkin",
    icon: Recycle,
    title: "Check-in realizado",
    description: "EcoPonto Savassi - 5kg de plástico",
    points: "+50 pontos",
    time: "Há 2 horas",
    color: "text-green-500",
  },
  {
    id: 2,
    type: "reward",
    icon: Gift,
    title: "Recompensa resgatada",
    description: "Vale-compra R$ 20 - Mercado Local",
    points: "-500 pontos",
    time: "Há 5 horas",
    color: "text-blue-500",
  },
  {
    id: 3,
    type: "badge",
    icon: Award,
    title: "Conquista desbloqueada",
    description: "Campeão Mensal",
    points: "+100 pontos bônus",
    time: "Há 1 dia",
    color: "text-purple-500",
  },
  {
    id: 4,
    type: "checkin",
    icon: Recycle,
    title: "Check-in realizado",
    description: "EcoPonto Pampulha - 3kg de papel",
    points: "+30 pontos",
    time: "Há 1 dia",
    color: "text-green-500",
  },
  {
    id: 5,
    type: "location",
    icon: MapPin,
    title: "Novo ponto visitado",
    description: "Primeira visita ao EcoPonto Centro",
    points: "+20 pontos bônus",
    time: "Há 2 dias",
    color: "text-orange-500",
  },
]

export function ActivityTimeline() {
  return (
    <Card className="p-6 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-primary/20 shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <Clock className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">Atividades Recentes</h3>
      </div>

      <div className="space-y-4">
        {activities.map((activity, index) => {
          const Icon = activity.icon
          return (
            <div key={activity.id} className="flex gap-4">
              <div className="relative flex flex-col items-center">
                <div className={`p-2 rounded-full bg-card border-2 border-primary/20 ${activity.color}`}>
                  <Icon className="h-4 w-4" />
                </div>
                {index < activities.length - 1 && <div className="w-0.5 h-full bg-border/50 mt-2" />}
              </div>
              <div className="flex-1 pb-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-medium text-sm">{activity.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{activity.description}</p>
                  </div>
                  <Badge variant="secondary" className="text-xs whitespace-nowrap">
                    {activity.points}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mt-2">{activity.time}</p>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
