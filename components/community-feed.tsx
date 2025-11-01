"use client"

import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, MessageCircle, Share2, Award, Recycle } from "lucide-react"
import { useState } from "react"

const feedItems = [
  {
    id: 1,
    user: { name: "Maria Santos", avatar: "MS", points: 3250 },
    action: "completou um desafio",
    challenge: "Recicle 50kg de plástico",
    points: 100,
    time: "2 horas atrás",
    likes: 24,
    comments: 5,
  },
  {
    id: 2,
    user: { name: "Pedro Costa", avatar: "PC", points: 2890 },
    action: "alcançou um novo nível",
    level: "Eco Warrior",
    time: "5 horas atrás",
    likes: 18,
    comments: 3,
  },
  {
    id: 3,
    user: { name: "Ana Lima", avatar: "AL", points: 2650 },
    action: "fez check-in em",
    location: "EcoPonto Savassi",
    material: "15kg de papel",
    points: 75,
    time: "1 dia atrás",
    likes: 32,
    comments: 8,
  },
  {
    id: 4,
    user: { name: "Carlos Silva", avatar: "CS", points: 2100 },
    action: "resgatou uma recompensa",
    reward: "Vale-compra R$ 20",
    time: "2 dias atrás",
    likes: 15,
    comments: 2,
  },
]

export function CommunityFeed() {
  const [likedItems, setLikedItems] = useState<Set<number>>(new Set())

  const toggleLike = (id: number) => {
    const newLiked = new Set(likedItems)
    if (newLiked.has(id)) {
      newLiked.delete(id)
    } else {
      newLiked.add(id)
    }
    setLikedItems(newLiked)
  }

  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/10">
      <h2 className="text-xl font-semibold mb-4">Feed da Comunidade</h2>
      <div className="space-y-4">
        {feedItems.map((item) => (
          <div key={item.id} className="p-4 rounded-lg border border-border bg-background/50">
            <div className="flex items-start gap-3 mb-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${item.user.name}`} />
                <AvatarFallback className="bg-gradient-to-br from-primary to-emerald-600 text-white">
                  {item.user.avatar}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-semibold text-sm">{item.user.name}</p>
                  <Badge variant="secondary" className="text-xs">
                    {item.user.points} pts
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {item.action}{" "}
                  {item.challenge && <span className="font-medium text-foreground">"{item.challenge}"</span>}
                  {item.level && <span className="font-medium text-foreground">{item.level}</span>}
                  {item.location && <span className="font-medium text-foreground">{item.location}</span>}
                  {item.reward && <span className="font-medium text-foreground">{item.reward}</span>}
                </p>
                {item.material && (
                  <div className="flex items-center gap-2 mt-2">
                    <Recycle className="h-4 w-4 text-primary" />
                    <span className="text-sm">{item.material}</span>
                  </div>
                )}
                {item.points && (
                  <Badge variant="outline" className="mt-2">
                    <Award className="h-3 w-3 mr-1" />+{item.points} pontos
                  </Badge>
                )}
                <p className="text-xs text-muted-foreground mt-2">{item.time}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-3 border-t border-border">
              <Button variant="ghost" size="sm" className="gap-2" onClick={() => toggleLike(item.id)}>
                <Heart className={`h-4 w-4 ${likedItems.has(item.id) ? "fill-red-500 text-red-500" : ""}`} />
                <span className="text-xs">{item.likes + (likedItems.has(item.id) ? 1 : 0)}</span>
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <MessageCircle className="h-4 w-4" />
                <span className="text-xs">{item.comments}</span>
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
