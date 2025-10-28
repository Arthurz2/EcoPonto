"use client"

import { useState } from "react"
import { MapPin, Navigation, Clock, Phone, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface CollectionPoint {
  id: number
  name: string
  address: string
  distance: string
  status: "open" | "closed" | "busy"
  rating: number
  phone: string
  hours: string
  materials: string[]
}

const collectionPoints: CollectionPoint[] = [
  {
    id: 1,
    name: "EcoPonto Savassi",
    address: "Av. Getúlio Vargas, 1300 - Savassi, Belo Horizonte - MG",
    distance: "0.8 km",
    status: "open",
    rating: 4.9,
    phone: "(31) 3241-5000",
    hours: "Seg-Sex: 8h-18h, Sáb: 8h-12h",
    materials: ["Plástico", "Papel", "Metal", "Vidro"],
  },
  {
    id: 2,
    name: "EcoPonto Pampulha",
    address: "Av. Otacílio Negrão de Lima, 6061 - Pampulha, Belo Horizonte - MG",
    distance: "5.2 km",
    status: "open",
    rating: 4.7,
    phone: "(31) 3277-8900",
    hours: "Seg-Sex: 7h-19h, Sáb: 7h-13h",
    materials: ["Plástico", "Papel", "Eletrônicos"],
  },
  {
    id: 3,
    name: "EcoPonto Centro",
    address: "Av. Afonso Pena, 1212 - Centro, Belo Horizonte - MG",
    distance: "1.5 km",
    status: "busy",
    rating: 4.5,
    phone: "(31) 3277-5500",
    hours: "Seg-Sex: 9h-17h",
    materials: ["Papel", "Metal", "Vidro"],
  },
  {
    id: 4,
    name: "EcoPonto Barreiro",
    address: "Av. Tito Fulgêncio, 104 - Barreiro, Belo Horizonte - MG",
    distance: "8.3 km",
    status: "open",
    rating: 4.6,
    phone: "(31) 3384-2200",
    hours: "Seg-Sáb: 8h-18h",
    materials: ["Plástico", "Papel", "Metal"],
  },
  {
    id: 5,
    name: "EcoPonto Venda Nova",
    address: "Av. Vilarinho, 2500 - Venda Nova, Belo Horizonte - MG",
    distance: "7.1 km",
    status: "closed",
    rating: 4.4,
    phone: "(31) 3486-7700",
    hours: "Seg-Sex: 8h-17h",
    materials: ["Vidro", "Eletrônicos", "Metal"],
  },
  {
    id: 6,
    name: "EcoPonto Contagem",
    address: "Av. João César de Oliveira, 3000 - Eldorado, Contagem - MG",
    distance: "6.5 km",
    status: "open",
    rating: 4.8,
    phone: "(31) 3352-9000",
    hours: "Seg-Sex: 7h-19h, Sáb: 8h-14h",
    materials: ["Plástico", "Papel", "Vidro", "Metal"],
  },
  {
    id: 7,
    name: "EcoPonto Santa Efigênia",
    address: "Rua dos Guajajaras, 910 - Centro, Belo Horizonte - MG",
    distance: "2.1 km",
    status: "open",
    rating: 4.3,
    phone: "(31) 3201-4400",
    hours: "Seg-Sex: 9h-18h",
    materials: ["Papel", "Metal", "Eletrônicos"],
  },
]

export function CollectionPointsList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState<string>("all")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-emerald-500"
      case "busy":
        return "bg-amber-500"
      case "closed":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "open":
        return "Aberto"
      case "busy":
        return "Movimentado"
      case "closed":
        return "Fechado"
      default:
        return "Desconhecido"
    }
  }

  const filteredPoints = collectionPoints.filter((point) => {
    const matchesSearch =
      point.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      point.address.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === "all" || point.status === filterStatus
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-4">
      {/* Filters */}
      <Card className="p-4 bg-gradient-to-br from-white/80 to-emerald-50/50 dark:from-gray-900/80 dark:to-emerald-950/20 backdrop-blur-sm border-emerald-200/50">
        <div className="space-y-3">
          <Input
            placeholder="Buscar por nome ou endereço..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-white/80 dark:bg-gray-900/80"
          />
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="bg-white/80 dark:bg-gray-900/80">
              <SelectValue placeholder="Filtrar por status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="open">Aberto</SelectItem>
              <SelectItem value="busy">Movimentado</SelectItem>
              <SelectItem value="closed">Fechado</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      {/* Results Count */}
      <div className="text-sm text-muted-foreground px-1">
        {filteredPoints.length} {filteredPoints.length === 1 ? "ponto encontrado" : "pontos encontrados"}
      </div>

      {/* Collection Points List */}
      <div className="space-y-3 max-h-[800px] overflow-y-auto pr-2">
        {filteredPoints.map((point) => (
          <Card
            key={point.id}
            className="p-4 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white/90 to-emerald-50/30 dark:from-gray-900/90 dark:to-emerald-950/10 backdrop-blur-sm border-emerald-200/30 hover:border-emerald-400/50"
          >
            <div className="space-y-3">
              {/* Header */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-base">{point.name}</h3>
                    <Badge variant={point.status === "open" ? "default" : "secondary"} className="text-xs">
                      <div className={`w-2 h-2 rounded-full ${getStatusColor(point.status)} mr-1`} />
                      {getStatusText(point.status)}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-amber-600 dark:text-amber-400">
                    <Star className="h-3 w-3 fill-current" />
                    <span className="font-medium">{point.rating}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">{point.distance}</div>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-emerald-600" />
                <span>{point.address}</span>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 shrink-0 text-emerald-600" />
                <span>{point.hours}</span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0 text-emerald-600" />
                <span>{point.phone}</span>
              </div>

              {/* Materials */}
              <div className="flex flex-wrap gap-1">
                {point.materials.map((material) => (
                  <Badge key={material} variant="outline" className="text-xs bg-emerald-50/50 dark:bg-emerald-950/20">
                    {material}
                  </Badge>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-2">
                <Button size="sm" className="flex-1 bg-emerald-600 hover:bg-emerald-700">
                  <Navigation className="h-4 w-4 mr-2" />
                  Navegar
                </Button>
                <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                  Ver Detalhes
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
