import { LeafletMap } from "@/components/leaflet-map"
import { CollectionPointsList } from "@/components/collection-points-list"
import { MapPin } from "lucide-react"
import { AppNavigation } from "@/components/app-navigation"

export default function MapPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-emerald-50/30 to-teal-50/30 dark:from-background dark:via-emerald-950/10 dark:to-teal-950/10">
      <AppNavigation />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Map - Now using real Leaflet map */}
          <div className="lg:col-span-2">
            <LeafletMap />
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
