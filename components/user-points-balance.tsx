"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Coins, TrendingUp, Gift } from "lucide-react"

export function UserPointsBalance() {
  return (
    <Card className="p-6 bg-gradient-to-br from-primary/10 via-card/80 to-card/40 backdrop-blur-sm border-primary/30 shadow-xl">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="p-4 rounded-full bg-gradient-to-br from-primary to-green-600 shadow-lg">
            <Coins className="h-8 w-8 text-white" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Saldo Disponível</p>
            <p className="text-4xl font-bold text-primary">1,250</p>
            <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              +150 pontos esta semana
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Button className="bg-gradient-to-r from-primary to-green-600 hover:from-primary/90 hover:to-green-600/90 gap-2">
            <Gift className="h-4 w-4" />
            Resgatar Recompensa
          </Button>
          <p className="text-xs text-center text-muted-foreground">Próxima recompensa em 250 pts</p>
        </div>
      </div>
    </Card>
  )
}
