"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import type { Activity } from "@/app/checkin/page"

type RecentActivityProps = {
  activities: Activity[]
}

export function RecentActivity({ activities }: RecentActivityProps) {
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
            <p className="text-sm text-muted-foreground">Pontos acumulados nesta sessão</p>
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
          {activities.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <p className="text-sm">Nenhum check-in realizado ainda.</p>
              <p className="text-xs mt-1">Faça seu primeiro check-in para começar!</p>
            </div>
          ) : (
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
          )}
        </CardContent>
      </Card>
    </div>
  )
}
