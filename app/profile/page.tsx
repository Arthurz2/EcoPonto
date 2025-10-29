import { UserProfile } from "@/components/user-profile"
import { BadgesCollection } from "@/components/badges-collection"
import { WeeklyMissions } from "@/components/weekly-missions"
import { Leaderboard } from "@/components/leaderboard"
import { ActivityTimeline } from "@/components/activity-timeline"
import { ProfileSettings } from "@/components/profile-settings"
import { AppNavigation } from "@/components/app-navigation"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <AppNavigation />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              <UserProfile />
              <BadgesCollection />
              <WeeklyMissions />
              <ActivityTimeline />
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <Leaderboard />
              <ProfileSettings />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
