import { MapView } from "@/components/map-view"
import { CollectionPointsList } from "@/components/collection-points-list"
import { MapPin, Navigation, Filter, Recycle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function MapPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-emerald-50/30 to-teal-50/30 dark:from-background dark:via-emerald-950/10 dark:to-teal-950/10">
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                <Recycle className="h-6 w-6" />
                <span className="text-xl font-bold">EcoPonto</span>
              </Link>
              <div className="hidden sm:flex items-center gap-2">
                <MapPin className="h-5 w-5 text-emerald-600" />
                <h1 className="text-lg font-semibold">Pontos de Coleta</h1>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="hidden sm:flex bg-transparent">
                <Filter className="h-4 w-4 mr-2" />
                Filtros
              </Button>
              <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                <Navigation className="h-4 w-4 mr-2" />
                Localizar
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Map */}
          <div className="lg:col-span-2">
            <MapView />
          </div>

          {/* Collection Points List */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 px-1">
              <MapPin className="h-5 w-5 text-emerald-600" />
              <h2 className="text-lg font-semibold">Pontos Próximos</h2>
            </div>
            <CollectionPointsList />
          </div>
        </div>
      </div>
    </div>
  )
}
