"use client"

import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trophy, TrendingUp } from "lucide-react"

const leaderboard = [
  { rank: 1, name: "Maria Santos", points: 3250, avatar: "/placeholder.svg", trend: "up" },
  { rank: 2, name: "Pedro Costa", points: 2890, avatar: "/placeholder.svg", trend: "up" },
  { rank: 3, name: "Ana Lima", points: 2650, avatar: "/placeholder.svg", trend: "down" },
  { rank: 4, name: "João Silva", points: 2450, avatar: "/placeholder.svg", trend: "same", isCurrentUser: true },
  { rank: 5, name: "Carlos Souza", points: 2120, avatar: "/placeholder.svg", trend: "up" },
]

export function Leaderboard() {
  return (
    <Card className="p-6 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-primary/20 shadow-lg sticky top-24">
      <div className="flex items-center gap-2 mb-6">
        <Trophy className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">Ranking</h3>
      </div>

      <div className="space-y-3">
        {leaderboard.map((user) => (
          <div
            key={user.rank}
            className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
              user.isCurrentUser ? "bg-primary/10 border-2 border-primary/30" : "bg-card/50 hover:bg-card/80"
            }`}
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 font-bold text-sm">
              {user.rank}
            </div>
            <Avatar className="h-10 w-10 border-2 border-primary/20">
              <AvatarImage src={user.avatar || "/placeholder.svg"} />
              <AvatarFallback>
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm truncate">{user.name}</p>
              <p className="text-xs text-muted-foreground">{user.points.toLocaleString()} pts</p>
            </div>
            {user.trend === "up" && <TrendingUp className="h-4 w-4 text-green-500 flex-shrink-0" />}
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-border/50 text-center">
        <p className="text-xs text-muted-foreground">Atualizado há 5 minutos</p>
      </div>
    </Card>
  )
}
