"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Target, CheckCircle2 } from "lucide-react"

export function DailyGoals() {
  const goals = [
    { label: "Check-ins hoje", current: 2, target: 3, completed: false },
    { label: "Materiais diferentes", current: 3, target: 3, completed: true },
    { label: "Pontos ganhos", current: 85, target: 100, completed: false },
  ]

  return (
    <Card className="border-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Target className="h-5 w-5 text-primary" />
          Metas Diárias
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {goals.map((goal, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">{goal.label}</span>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">
                  {goal.current}/{goal.target}
                </span>
                {goal.completed && <CheckCircle2 className="h-4 w-4 text-green-500" />}
              </div>
            </div>
            <Progress value={(goal.current / goal.target) * 100} className="h-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
