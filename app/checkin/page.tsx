import { CheckInInterface } from "@/components/checkin-interface"
import { RecentActivity } from "@/components/recent-activity"
import { QrCode, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CheckInPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar
                </Button>
              </Link>
              <div className="flex items-center gap-2">
                <QrCode className="h-6 w-6 text-primary" />
                <h1 className="text-xl font-semibold">Check-in</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Check-in Interface */}
            <div className="lg:col-span-2">
              <CheckInInterface />
            </div>

            {/* Recent Activity Sidebar */}
            <div className="space-y-4">
              <RecentActivity />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
