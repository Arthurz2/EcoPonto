"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, MapPin, TrendingUp } from "lucide-react"

const groups = [
  {
    id: 1,
    name: "Eco Warriors BH",
    location: "Belo Horizonte - MG",
    members: 1234,
    activity: "Muito ativa",
    description: "Grupo dedicado à reciclagem e sustentabilidade em BH",
    avatar: "EW",
  },
  {
    id: 2,
    name: "Recicla Savassi",
    location: "Savassi - BH",
    members: 567,
    activity: "Ativa",
    description: "Comunidade local focada em reciclagem no bairro Savassi",
    avatar: "RS",
  },
  {
    id: 3,
    name: "Sustentabilidade Pampulha",
    location: "Pampulha - BH",
    members: 892,
    activity: "Muito ativa",
    description: "Promovendo práticas sustentáveis na região da Pampulha",
    avatar: "SP",
  },
]

export function LocalGroups() {
  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/10">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Users className="h-5 w-5 text-primary" />
        Grupos Locais
      </h2>
      <div className="space-y-4">
        {groups.map((group) => (
          <div key={group.id} className="p-4 rounded-lg border border-border bg-background/50">
            <div className="flex items-start gap-3 mb-3">
              <Avatar className="h-12 w-12">
                <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${group.name}`} />
                <AvatarFallback className="bg-gradient-to-br from-primary to-emerald-600 text-white">
                  {group.avatar}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm mb-1">{group.name}</h3>
                <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{group.description}</p>
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {group.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {group.members} membros
                  </span>
                  <Badge variant="outline" className="text-xs">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {group.activity}
                  </Badge>
                </div>
              </div>
            </div>
            <Button size="sm" variant="outline" className="w-full bg-transparent">
              Entrar no grupo
            </Button>
          </div>
        ))}
      </div>
    </Card>
  )
}
