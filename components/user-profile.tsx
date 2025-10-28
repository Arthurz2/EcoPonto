"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Edit, Mail, MapPin, Calendar, Award } from "lucide-react"

export function UserProfile() {
  return (
    <Card className="p-6 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-primary/20 shadow-lg">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Avatar Section */}
        <div className="flex flex-col items-center gap-4">
          <Avatar className="h-32 w-32 border-4 border-primary/20 shadow-xl">
            <AvatarImage src="/placeholder.svg?height=128&width=128" />
            <AvatarFallback className="text-3xl bg-gradient-to-br from-primary to-primary/60">JD</AvatarFallback>
          </Avatar>
          <Badge className="bg-gradient-to-r from-primary to-green-600 text-white px-4 py-1">
            <Award className="h-3 w-3 mr-1" />
            Nível 12
          </Badge>
        </div>

        {/* Info Section */}
        <div className="flex-1 space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground">João da Silva</h2>
              <p className="text-muted-foreground">@joaosilva</p>
            </div>
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <Edit className="h-4 w-4" />
              Editar
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">joao.silva@email.com</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Belo Horizonte, MG</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Membro desde Jan 2024</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">2,450</p>
              <p className="text-xs text-muted-foreground">Pontos Totais</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">87</p>
              <p className="text-xs text-muted-foreground">Check-ins</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">15</p>
              <p className="text-xs text-muted-foreground">Recompensas</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
