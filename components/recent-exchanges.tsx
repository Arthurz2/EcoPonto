"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { History, CheckCircle2 } from "lucide-react"

const exchanges = [
  { id: 1, reward: "Café Grátis", points: 200, date: "Há 2 dias", status: "completed" },
  { id: 2, reward: "Vale Compras R$ 20", points: 500, date: "Há 5 dias", status: "completed" },
  { id: 3, reward: "Kit Sustentável", points: 600, date: "Há 1 semana", status: "completed" },
]

export function RecentExchanges() {
  return (
    <Card className="p-6 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-primary/20 shadow-lg sticky top-24">
      <div className="flex items-center gap-2 mb-6">
        <History className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">Resgates Recentes</h3>
      </div>

      <div className="space-y-3">
        {exchanges.map((exchange) => (
          <div
            key={exchange.id}
            className="p-3 rounded-lg bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="flex-1">
                <p className="font-medium text-sm">{exchange.reward}</p>
                <p className="text-xs text-muted-foreground">{exchange.date}</p>
              </div>
              <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
            </div>
            <Badge variant="secondary" className="text-xs">
              -{exchange.points} pontos
            </Badge>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-border/50 text-center">
        <p className="text-xs text-muted-foreground">Total resgatado: 1,300 pts</p>
      </div>
    </Card>
  )
}
