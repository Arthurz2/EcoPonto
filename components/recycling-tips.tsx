"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Recycle, Droplet, Leaf } from "lucide-react"

export function RecyclingTips() {
  const tips = [
    {
      icon: Recycle,
      title: "Lave os recicláveis",
      description: "Remova resíduos antes de descartar para facilitar a reciclagem",
      color: "text-blue-500",
    },
    {
      icon: Droplet,
      title: "Separe por tipo",
      description: "Organize plástico, papel, vidro e metal em grupos diferentes",
      color: "text-cyan-500",
    },
    {
      icon: Leaf,
      title: "Reduza o consumo",
      description: "A melhor reciclagem é não gerar resíduo. Reutilize sempre que possível",
      color: "text-green-500",
    },
  ]

  return (
    <Card className="border-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Lightbulb className="h-5 w-5 text-yellow-500" />
          Dicas de Reciclagem
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {tips.map((tip, index) => {
          const Icon = tip.icon
          return (
            <div key={index} className="flex gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
              <Icon className={`h-5 w-5 ${tip.color} shrink-0 mt-0.5`} />
              <div>
                <p className="font-medium text-sm">{tip.title}</p>
                <p className="text-xs text-muted-foreground mt-1">{tip.description}</p>
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
