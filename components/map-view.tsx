"use client"

import { useState } from "react"
import { MapPin, Navigation, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface CollectionPoint {
  id: number
  name: string
  address: string
  distance: string
  status: "open" | "closed" | "busy"
  lat: number
  lng: number
  materials: string[]
}

const collectionPoints: CollectionPoint[] = [
  {
    id: 1,
    name: "EcoPonto Savassi",
    address: "Av. Getúlio Vargas, 1300 - Savassi",
    distance: "0.8 km",
    status: "open",
    lat: 48,
    lng: 52,
    materials: ["Plástico", "Papel", "Metal", "Vidro"],
  },
  {
    id: 2,
    name: "EcoPonto Pampulha",
    address: "Av. Otacílio Negrão de Lima, 6061 - Pampulha",
    distance: "5.2 km",
    status: "open",
    lat: 25,
    lng: 55,
    materials: ["Plástico", "Papel", "Eletrônicos"],
  },
  {
    id: 3,
    name: "EcoPonto Centro",
    address: "Av. Afonso Pena, 1212 - Centro",
    distance: "1.5 km",
    status: "busy",
    lat: 52,
    lng: 48,
    materials: ["Papel", "Metal", "Vidro"],
  },
  {
    id: 4,
    name: "EcoPonto Barreiro",
    address: "Av. Tito Fulgêncio, 104 - Barreiro",
    distance: "8.3 km",
    status: "open",
    lat: 70,
    lng: 35,
    materials: ["Plástico", "Papel", "Metal"],
  },
  {
    id: 5,
    name: "EcoPonto Venda Nova",
    address: "Av. Vilarinho, 2500 - Venda Nova",
    distance: "7.1 km",
    status: "closed",
    lat: 30,
    lng: 60,
    materials: ["Vidro", "Eletrônicos", "Metal"],
  },
  {
    id: 6,
    name: "EcoPonto Contagem",
    address: "Av. João César de Oliveira, 3000 - Eldorado",
    distance: "6.5 km",
    status: "open",
    lat: 55,
    lng: 30,
    materials: ["Plástico", "Papel", "Vidro", "Metal"],
  },
]

export function MapView() {
  const [selectedPoint, setSelectedPoint] = useState<number | null>(null)
  const [userLocation] = useState({ lat: 50, lng: 50 })

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

  return (
    <div className="relative h-[600px] rounded-xl overflow-hidden border bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-950/20 dark:via-teal-950/20 dark:to-cyan-950/20">
      {/* Map Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* User Location Marker */}
      <div
        className="absolute z-20 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"
        style={{ left: `${userLocation.lng}%`, top: `${userLocation.lat}%` }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-50 animate-ping" />
          <div className="relative bg-blue-500 rounded-full p-2 border-4 border-white shadow-lg">
            <Navigation className="h-4 w-4 text-white" />
          </div>
        </div>
      </div>

      {/* Collection Points Markers */}
      {collectionPoints.map((point) => (
        <div
          key={point.id}
          className="absolute z-10 transform -translate-x-1/2 -translate-y-full cursor-pointer transition-transform hover:scale-110"
          style={{ left: `${point.lng}%`, top: `${point.lat}%` }}
          onClick={() => setSelectedPoint(point.id)}
        >
          <div className="relative">
            <MapPin
              className={`h-10 w-10 ${
                selectedPoint === point.id ? "text-emerald-600 scale-125" : "text-emerald-500"
              } drop-shadow-lg transition-all`}
              fill="currentColor"
            />
            <div
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${getStatusColor(
                point.status,
              )}`}
            />
          </div>
        </div>
      ))}

      {/* Selected Point Info Card */}
      {selectedPoint && (
        <div className="absolute bottom-4 left-4 right-4 z-30 animate-in slide-in-from-bottom-4">
          {(() => {
            const point = collectionPoints.find((p) => p.id === selectedPoint)
            if (!point) return null
            return (
              <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-xl p-4 shadow-2xl border">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-lg">{point.name}</h3>
                      <Badge variant={point.status === "open" ? "default" : "secondary"} className="text-xs">
                        {getStatusText(point.status)}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{point.address}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <Navigation className="h-4 w-4 text-emerald-600" />
                      <span className="font-medium text-emerald-600">{point.distance}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {point.materials.map((material) => (
                        <Badge key={material} variant="outline" className="text-xs">
                          {material}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button size="sm" className="shrink-0">
                    <Navigation className="h-4 w-4 mr-2" />
                    Navegar
                  </Button>
                </div>
              </div>
            )
          })()}
        </div>
      )}

      {/* Map Controls */}
      <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
        <Button size="icon" variant="secondary" className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg">
          <Zap className="h-4 w-4" />
        </Button>
        <Button size="icon" variant="secondary" className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg">
          <Navigation className="h-4 w-4" />
        </Button>
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 right-4 z-20 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg p-3 shadow-lg text-xs space-y-1">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-500" />
          <span>Aberto</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-amber-500" />
          <span>Movimentado</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <span>Fechado</span>
        </div>
      </div>
    </div>
  )
}
