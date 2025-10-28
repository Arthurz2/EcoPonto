"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Recycle, Trash2, Droplet, Battery, Award } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

const activities = [
  {
    id: 1,
    type: "plastic",
    material: "Plástico",
    weight: 3.5,
    points: 35,
    location: "EcoPonto Centro",
    date: "Hoje, 14:30",
    icon: Recycle,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    id: 2,
    type: "glass",
    material: "Vidro",
    weight: 2.0,
    points: 24,
    location: "EcoPonto Jardins",
    date: "Hoje, 10:15",
    icon: Droplet,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    id: 3,
    type: "metal",
    material: "Metal",
    weight: 1.5,
    points: 22,
    location: "EcoPonto Centro",
    date: "Ontem, 16:45",
    icon: Battery,
    color: "text-slate-500",
    bgColor: "bg-slate-500/10",
  },
  {
    id: 4,
    type: "paper",
    material: "Papel",
    weight: 5.0,
    points: 40,
    location: "EcoPonto Vila Nova",
    date: "Ontem, 09:20",
    icon: Recycle,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
  {
    id: 5,
    type: "organic",
    material: "Orgânico",
    weight: 4.2,
    points: 21,
    location: "EcoPonto Centro",
    date: "2 dias atrás",
    icon: Trash2,
    color: "text-green-600",
    bgColor: "bg-green-600/10",
  },
]

export function RecentActivity() {
  const totalPoints = activities.reduce((sum, activity) => sum + activity.points, 0)

  return (
    <div className="space-y-4">
      {/* Points Summary Card */}
      <Card className="border-2 bg-gradient-to-br from-primary/10 via-background to-background">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            Seus Pontos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">{totalPoints}</div>
            <p className="text-sm text-muted-foreground">Pontos acumulados esta semana</p>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity Card */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-lg">Atividades Recentes</CardTitle>
          <CardDescription>Seus últimos check-ins</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px] pr-4">
            <div className="space-y-3">
              {activities.map((activity) => {
                const Icon = activity.icon
                return (
                  <div
                    key={activity.id}
                    className="flex items-start gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                  >
                    <div className={`p-2 rounded-lg ${activity.bgColor}`}>
                      <Icon className={`h-5 w-5 ${activity.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <p className="font-medium text-sm">{activity.material}</p>
                          <p className="text-xs text-muted-foreground">{activity.location}</p>
                        </div>
                        <Badge variant="secondary" className="shrink-0">
                          +{activity.points} pts
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-muted-foreground">{activity.weight} kg</span>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">{activity.date}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
}
