"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Gift,
  ShoppingBag,
  Coffee,
  Ticket,
  Smartphone,
  Leaf,
  Coins,
  Star,
  Zap,
  Utensils,
  Book,
  Bike,
  Shirt,
  Home,
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"

interface RewardsCategoriesProps {
  onRedeem: (rewardName: string, points: number) => void
  userPoints: number
}

const rewards = [
  {
    id: 1,
    name: "Vale Compras R$ 20",
    points: 500,
    category: "Compras",
    icon: ShoppingBag,
    available: 15,
    image: "/shopping-voucher.png",
    featured: true,
    description: "Vale compras para usar em lojas parceiras",
  },
  {
    id: 2,
    name: "Café Grátis",
    points: 200,
    category: "Alimentação",
    icon: Coffee,
    available: 30,
    image: "/steaming-coffee-cup.png",
    featured: false,
    description: "Café premium em cafeterias parceiras",
  },
  {
    id: 3,
    name: "Ingresso Cinema",
    points: 800,
    category: "Entretenimento",
    icon: Ticket,
    available: 8,
    image: "/movie-ticket.png",
    featured: true,
    description: "Ingresso para qualquer sessão",
  },
  {
    id: 4,
    name: "Fone Bluetooth",
    points: 1500,
    category: "Eletrônicos",
    icon: Smartphone,
    available: 5,
    image: "/bluetooth-headphones.png",
    featured: false,
    description: "Fone de ouvido sem fio de alta qualidade",
  },
  {
    id: 5,
    name: "Kit Sustentável",
    points: 600,
    category: "Eco",
    icon: Leaf,
    available: 12,
    image: "/sustainable-kit.jpg",
    featured: true,
    description: "Kit com produtos ecológicos reutilizáveis",
  },
  {
    id: 6,
    name: "Vale Presente R$ 50",
    points: 1200,
    category: "Compras",
    icon: Gift,
    available: 10,
    image: "/gift-card-assortment.png",
    featured: false,
    description: "Vale presente para diversas lojas",
  },
  {
    id: 7,
    name: "Almoço Vegano",
    points: 350,
    category: "Alimentação",
    icon: Utensils,
    available: 20,
    image: "/vegan-lunch.jpg",
    featured: false,
    description: "Refeição completa em restaurante vegano",
  },
  {
    id: 8,
    name: "Livro Digital",
    points: 400,
    category: "Educação",
    icon: Book,
    available: 50,
    image: "/digital-book.jpg",
    featured: false,
    description: "E-book de sua escolha",
  },
  {
    id: 9,
    name: "Aluguel de Bike",
    points: 300,
    category: "Mobilidade",
    icon: Bike,
    available: 25,
    image: "/bike-rental.jpg",
    featured: false,
    description: "1 dia de aluguel de bicicleta",
  },
  {
    id: 10,
    name: "Camiseta Ecológica",
    points: 700,
    category: "Moda",
    icon: Shirt,
    available: 18,
    image: "/eco-tshirt.jpg",
    featured: false,
    description: "Camiseta de algodão orgânico",
  },
  {
    id: 11,
    name: "Desconto 30% Decoração",
    points: 900,
    category: "Casa",
    icon: Home,
    available: 12,
    image: "/cozy-living-room.png",
    featured: false,
    description: "Cupom de desconto em loja de decoração",
  },
  {
    id: 12,
    name: "Powerbank Solar",
    points: 1800,
    category: "Eletrônicos",
    icon: Zap,
    available: 6,
    image: "/solar-powerbank.jpg",
    featured: true,
    description: "Carregador portátil com painel solar",
  },
]

export function RewardsCategories({ onRedeem, userPoints }: RewardsCategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState("Todas")
  const [confirmDialog, setConfirmDialog] = useState<{
    open: boolean
    reward: (typeof rewards)[0] | null
  }>({
    open: false,
    reward: null,
  })
  const { toast } = useToast()

  const categories = [
    "Todas",
    "Compras",
    "Alimentação",
    "Entretenimento",
    "Eco",
    "Eletrônicos",
    "Educação",
    "Mobilidade",
    "Moda",
    "Casa",
  ]

  const filteredRewards =
    selectedCategory === "Todas" ? rewards : rewards.filter((r) => r.category === selectedCategory)

  const featuredRewards = rewards.filter((r) => r.featured)

  const handleRedeemClick = (reward: (typeof rewards)[0]) => {
    setConfirmDialog({ open: true, reward })
  }

  const confirmRedeem = () => {
    if (confirmDialog.reward) {
      const reward = confirmDialog.reward

      if (userPoints >= reward.points) {
        onRedeem(reward.name, reward.points)
        toast({
          title: "Resgate realizado com sucesso!",
          description: `Você resgatou ${reward.name} por ${reward.points} pontos.`,
        })
      } else {
        toast({
          title: "Pontos insuficientes",
          description: `Você precisa de ${reward.points - userPoints} pontos a mais.`,
          variant: "destructive",
        })
      }
    }
    setConfirmDialog({ open: false, reward: null })
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
          <h2 className="text-xl font-bold">Recompensas em Destaque</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {featuredRewards.map((reward) => {
            const Icon = reward.icon
            const canAfford = userPoints >= reward.points

            return (
              <Card
                key={reward.id}
                className="group overflow-hidden bg-gradient-to-br from-yellow-500/10 via-card/80 to-card/40 backdrop-blur-sm border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="relative h-32 overflow-hidden bg-gradient-to-br from-yellow-500/20 to-yellow-500/5">
                  <Badge className="absolute top-2 left-2 bg-yellow-500 text-yellow-950">
                    <Star className="h-3 w-3 mr-1" />
                    Destaque
                  </Badge>
                  <img
                    src={reward.image || "/placeholder.svg"}
                    alt={reward.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-3 space-y-2">
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-primary" />
                    <h3 className="font-semibold text-sm">{reward.name}</h3>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Coins className="h-4 w-4 text-primary" />
                      <span className="font-bold text-primary">{reward.points}</span>
                    </div>
                    <Button
                      size="sm"
                      disabled={!canAfford}
                      onClick={() => handleRedeemClick(reward)}
                      className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white"
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

      <div className="flex items-center justify-between flex-wrap gap-4">
        <h2 className="text-2xl font-bold">Todas as Recompensas</h2>
        <div className="flex gap-2 flex-wrap">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-gradient-to-r from-primary to-green-600" : ""}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRewards.map((reward) => {
          const Icon = reward.icon
          const canAfford = userPoints >= reward.points

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

                <p className="text-xs text-muted-foreground line-clamp-2">{reward.description}</p>

                <div className="flex items-center justify-between pt-2 border-t border-border/50">
                  <div className="flex items-center gap-1">
                    <Coins className="h-4 w-4 text-primary" />
                    <span className="font-bold text-primary">{reward.points}</span>
                    <span className="text-xs text-muted-foreground">pontos</span>
                  </div>
                  <Button
                    size="sm"
                    disabled={!canAfford}
                    onClick={() => handleRedeemClick(reward)}
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

      <Dialog open={confirmDialog.open} onOpenChange={(open) => setConfirmDialog({ open, reward: null })}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmar Resgate</DialogTitle>
            <DialogDescription>Você tem certeza que deseja resgatar esta recompensa?</DialogDescription>
          </DialogHeader>
          {confirmDialog.reward && (
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                <img
                  src={confirmDialog.reward.image || "/placeholder.svg"}
                  alt={confirmDialog.reward.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h3 className="font-semibold">{confirmDialog.reward.name}</h3>
                  <p className="text-sm text-muted-foreground">{confirmDialog.reward.description}</p>
                  <div className="flex items-center gap-1 mt-2">
                    <Coins className="h-4 w-4 text-primary" />
                    <span className="font-bold text-primary">{confirmDialog.reward.points} pontos</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                <span className="text-sm">Seu saldo atual:</span>
                <span className="font-bold">{userPoints} pontos</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <span className="text-sm">Saldo após resgate:</span>
                <span className="font-bold text-primary">{userPoints - confirmDialog.reward.points} pontos</span>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setConfirmDialog({ open: false, reward: null })}>
              Cancelar
            </Button>
            <Button
              onClick={confirmRedeem}
              className="bg-gradient-to-r from-primary to-green-600 hover:from-primary/90 hover:to-green-600/90"
            >
              Confirmar Resgate
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
