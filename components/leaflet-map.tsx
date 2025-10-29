"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Navigation, Phone, Clock, CheckCircle2, AlertCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface CollectionPoint {
  id: number
  name: string
  address: string
  phone: string
  hours: string
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
    address: "Av. Getúlio Vargas, 1300 - Savassi, Belo Horizonte - MG",
    phone: "(31) 3241-5678",
    hours: "Seg-Sex: 8h-18h | Sáb: 8h-12h",
    distance: "0.8 km",
    status: "open",
    lat: -19.9367,
    lng: -43.9345,
    materials: ["Plástico", "Papel", "Metal", "Vidro"],
  },
  {
    id: 2,
    name: "EcoPonto Pampulha",
    address: "Av. Otacílio Negrão de Lima, 6061 - Pampulha, Belo Horizonte - MG",
    phone: "(31) 3491-2345",
    hours: "Seg-Sex: 7h-19h | Sáb: 8h-14h",
    distance: "5.2 km",
    status: "open",
    lat: -19.8517,
    lng: -43.9667,
    materials: ["Plástico", "Papel", "Eletrônicos", "Vidro"],
  },
  {
    id: 3,
    name: "EcoPonto Centro",
    address: "Av. Afonso Pena, 1212 - Centro, Belo Horizonte - MG",
    phone: "(31) 3277-8901",
    hours: "Seg-Sex: 8h-17h",
    distance: "1.5 km",
    status: "busy",
    lat: -19.9217,
    lng: -43.9445,
    materials: ["Papel", "Metal", "Vidro"],
  },
  {
    id: 4,
    name: "EcoPonto Barreiro",
    address: "Av. Tito Fulgêncio, 104 - Barreiro, Belo Horizonte - MG",
    phone: "(31) 3384-5612",
    hours: "Seg-Sex: 8h-18h | Sáb: 8h-13h",
    distance: "8.3 km",
    status: "open",
    lat: -19.9967,
    lng: -44.0345,
    materials: ["Plástico", "Papel", "Metal", "Orgânico"],
  },
  {
    id: 5,
    name: "EcoPonto Venda Nova",
    address: "Av. Vilarinho, 2500 - Venda Nova, Belo Horizonte - MG",
    phone: "(31) 3452-7890",
    hours: "Seg-Sex: 7h-18h",
    distance: "7.1 km",
    status: "closed",
    lat: -19.8167,
    lng: -43.9645,
    materials: ["Vidro", "Eletrônicos", "Metal"],
  },
  {
    id: 6,
    name: "EcoPonto Contagem",
    address: "Av. João César de Oliveira, 3000 - Eldorado, Contagem - MG",
    phone: "(31) 3391-4567",
    hours: "Seg-Sex: 8h-18h | Sáb: 8h-12h",
    distance: "6.5 km",
    status: "open",
    lat: -19.9317,
    lng: -44.0545,
    materials: ["Plástico", "Papel", "Vidro", "Metal"],
  },
]

export function LeafletMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [selectedPoint, setSelectedPoint] = useState<CollectionPoint | null>(null)
  const [map, setMap] = useState<any>(null)
  const [L, setL] = useState<any>(null)

  useEffect(() => {
    // Dynamically import Leaflet only on client side
    import("leaflet").then((leaflet) => {
      setL(leaflet)

      // Import Leaflet CSS
      const link = document.createElement("link")
      link.rel = "stylesheet"
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      document.head.appendChild(link)

      if (mapRef.current && !map) {
        // Initialize map centered on Belo Horizonte
        const newMap = leaflet.map(mapRef.current).setView([-19.9167, -43.9345], 13)

        // Add OpenStreetMap tiles
        leaflet
          .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19,
          })
          .addTo(newMap)

        // Custom icon for collection points
        const customIcon = leaflet.divIcon({
          className: "custom-marker",
          html: `<div style="position: relative;">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" style="color: #10b981; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>`,
          iconSize: [40, 40],
          iconAnchor: [20, 40],
        })

        const closedIcon = leaflet.divIcon({
          className: "custom-marker",
          html: `<div style="position: relative;">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" style="color: #ef4444; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>`,
          iconSize: [40, 40],
          iconAnchor: [20, 40],
        })

        const busyIcon = leaflet.divIcon({
          className: "custom-marker",
          html: `<div style="position: relative;">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" style="color: #f59e0b; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>`,
          iconSize: [40, 40],
          iconAnchor: [20, 40],
        })

        // Add markers for each collection point
        collectionPoints.forEach((point) => {
          const icon = point.status === "closed" ? closedIcon : point.status === "busy" ? busyIcon : customIcon

          const marker = leaflet
            .marker([point.lat, point.lng], { icon })
            .addTo(newMap)
            .on("click", () => {
              setSelectedPoint(point)
              newMap.setView([point.lat, point.lng], 15)
            })

          marker.bindTooltip(point.name, {
            permanent: false,
            direction: "top",
            offset: [0, -40],
          })
        })

        // Add user location marker
        const userIcon = leaflet.divIcon({
          className: "user-marker",
          html: `<div style="position: relative;">
            <div style="width: 20px; height: 20px; background: #3b82f6; border: 4px solid white; border-radius: 50%; box-shadow: 0 2px 8px rgba(0,0,0,0.3);"></div>
            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 40px; height: 40px; background: rgba(59, 130, 246, 0.2); border-radius: 50%; animation: pulse 2s infinite;"></div>
          </div>`,
          iconSize: [20, 20],
          iconAnchor: [10, 10],
        })

        leaflet.marker([-19.9167, -43.9345], { icon: userIcon }).addTo(newMap).bindTooltip("Você está aqui", {
          permanent: false,
          direction: "top",
        })

        setMap(newMap)
      }
    })

    return () => {
      if (map) {
        map.remove()
      }
    }
  }, [])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "open":
        return <CheckCircle2 className="h-4 w-4 text-green-500" />
      case "busy":
        return <AlertCircle className="h-4 w-4 text-amber-500" />
      case "closed":
        return <XCircle className="h-4 w-4 text-red-500" />
      default:
        return null
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
    <div className="relative">
      <div ref={mapRef} className="h-[600px] rounded-xl overflow-hidden border-2 shadow-lg z-0" />

      {/* Selected Point Info Card */}
      {selectedPoint && (
        <Card className="absolute bottom-4 left-4 right-4 z-10 shadow-2xl border-2 animate-in slide-in-from-bottom-4">
          <CardContent className="p-4">
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-lg">{selectedPoint.name}</h3>
                    {getStatusIcon(selectedPoint.status)}
                  </div>
                  <Badge variant={selectedPoint.status === "open" ? "default" : "secondary"} className="text-xs">
                    {getStatusText(selectedPoint.status)}
                  </Badge>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setSelectedPoint(null)} className="shrink-0">
                  ✕
                </Button>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{selectedPoint.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{selectedPoint.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{selectedPoint.hours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Navigation className="h-4 w-4 text-emerald-600" />
                  <span className="font-medium text-emerald-600">{selectedPoint.distance}</span>
                </div>
              </div>

              <div>
                <p className="text-xs font-medium text-muted-foreground mb-2">Materiais aceitos:</p>
                <div className="flex flex-wrap gap-1">
                  {selectedPoint.materials.map((material) => (
                    <Badge key={material} variant="outline" className="text-xs">
                      {material}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button className="w-full" size="sm">
                <Navigation className="h-4 w-4 mr-2" />
                Como Chegar
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  )
}
