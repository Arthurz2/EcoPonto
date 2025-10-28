"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Gift, ShoppingBag, Coffee, Ticket, Smartphone, Leaf } from "lucide-react"
import { Coins } from "lucide-react" // Declared the Coins variable

const rewards = [
  {
    id: 1,
    name: "Vale Compras R$ 20",
    points: 500,
    category: "Compras",
    icon: ShoppingBag,
    available: 15,
    image: "/shopping-voucher.png",
  },
  {
    id: 2,
    name: "Café Grátis",
    points: 200,
    category: "Alimentação",
    icon: Coffee,
    available: 30,
    image: "/steaming-coffee-cup.png",
  },
  {
    id: 3,
    name: "Ingresso Cinema",
    points: 800,
    category: "Entretenimento",
    icon: Ticket,
    available: 8,
    image: "/movie-ticket.png",
  },
  {
    id: 4,
    name: "Fone Bluetooth",
    points: 1500,
    category: "Eletrônicos",
    icon: Smartphone,
    available: 5,
    image: "/bluetooth-headphones.png",
  },
  {
    id: 5,
    name: "Kit Sustentável",
    points: 600,
    category: "Eco",
    icon: Leaf,
    available: 12,
    image: "/sustainable-kit.jpg",
  },
  {
    id: 6,
    name: "Vale Presente R$ 50",
    points: 1200,
    category: "Compras",
    icon: Gift,
    available: 10,
    image: "/gift-card-assortment.png",
  },
]

export function RewardsCategories() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Recompensas Disponíveis</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Todas
          </Button>
          <Button variant="ghost" size="sm">
            Compras
          </Button>
          <Button variant="ghost" size="sm">
            Eco
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rewards.map((reward) => {
          const Icon = reward.icon
          const canAfford = 1250 >= reward.points // Current user points

          return (
            <Card
              key={reward.id}
              className="group overflow-hidden bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
                <img
                  src={reward.image || "/placeholder.svg"}
                  alt={reward.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <Badge className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm">
                  {reward.available} disponíveis
                </Badge>
              </div>

              <div className="p-4 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">{reward.name}</h3>
                      <p className="text-xs text-muted-foreground">{reward.category}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-border/50">
                  <div className="flex items-center gap-1">
                    <Coins className="h-4 w-4 text-primary" />
                    <span className="font-bold text-primary">{reward.points}</span>
                    <span className="text-xs text-muted-foreground">pontos</span>
                  </div>
                  <Button
                    size="sm"
                    disabled={!canAfford}
                    className="bg-gradient-to-r from-primary to-green-600 hover:from-primary/90 hover:to-green-600/90"
                  >
                    {canAfford ? "Resgatar" : "Insuficiente"}
                  </Button>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
