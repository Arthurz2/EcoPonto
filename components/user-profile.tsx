"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Edit, Mail, MapPin, Calendar, Award, Camera } from "lucide-react"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function UserProfile() {
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [userData, setUserData] = useState({
    name: "João da Silva",
    username: "joaosilva",
    email: "joao.silva@email.com",
    location: "Belo Horizonte, MG",
    bio: "Apaixonado por sustentabilidade e reciclagem. Fazendo minha parte para um mundo melhor!",
  })

  const currentLevel = 12
  const currentXP = 2450
  const nextLevelXP = 3000
  const progressToNextLevel = (currentXP / nextLevelXP) * 100

  const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(userData.name)}`
  const initials = userData.name
    .split(" ")
    .map((n) => n[0])
    .join("")

  const handleSave = () => {
    setIsEditOpen(false)
    // Here you would save to backend
  }

  return (
    <Card className="p-6 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-primary/20 shadow-lg">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Avatar Section */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative group">
            <Avatar className="h-32 w-32 border-4 border-primary/20 shadow-xl">
              <AvatarImage src={avatarUrl || "/placeholder.svg"} alt={userData.name} />
              <AvatarFallback className="text-3xl bg-gradient-to-br from-primary to-primary/60 text-white font-bold">
                {initials}
              </AvatarFallback>
            </Avatar>
            <button className="absolute bottom-0 right-0 p-2 rounded-full bg-primary text-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <Camera className="h-4 w-4" />
            </button>
          </div>
          <Badge className="bg-gradient-to-r from-primary to-green-600 text-white px-4 py-1">
            <Award className="h-3 w-3 mr-1" />
            Nível {currentLevel}
          </Badge>
          <div className="w-full space-y-1">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Nível {currentLevel}</span>
              <span>Nível {currentLevel + 1}</span>
            </div>
            <Progress value={progressToNextLevel} className="h-2" />
            <p className="text-xs text-center text-muted-foreground">
              {currentXP}/{nextLevelXP} XP
            </p>
          </div>
        </div>

        {/* Info Section */}
        <div className="flex-1 space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground">{userData.name}</h2>
              <p className="text-muted-foreground">@{userData.username}</p>
            </div>
            <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <Edit className="h-4 w-4" />
                  Editar
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Editar Perfil</DialogTitle>
                  <DialogDescription>Atualize suas informações pessoais</DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input
                      id="name"
                      value={userData.name}
                      onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="username">Nome de Usuário</Label>
                    <Input
                      id="username"
                      value={userData.username}
                      onChange={(e) => setUserData({ ...userData, username: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={userData.email}
                      onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Localização</Label>
                    <Input
                      id="location"
                      value={userData.location}
                      onChange={(e) => setUserData({ ...userData, location: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Input
                      id="bio"
                      value={userData.bio}
                      onChange={(e) => setUserData({ ...userData, bio: e.target.value })}
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setIsEditOpen(false)}>
                    Cancelar
                  </Button>
                  <Button onClick={handleSave}>Salvar Alterações</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <p className="text-sm text-muted-foreground italic">{userData.bio}</p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">{userData.email}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">{userData.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Membro desde Jan 2025</span>
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
