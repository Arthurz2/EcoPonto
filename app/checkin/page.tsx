"use client"

import { useState } from "react"
import { CheckInInterface } from "@/components/checkin-interface"
import { RecentActivity } from "@/components/recent-activity"
import { CheckInStats } from "@/components/checkin-stats"
import { RecyclingTips } from "@/components/recycling-tips"
import { DailyGoals } from "@/components/daily-goals"
import { AppNavigation } from "@/components/app-navigation"

export type Activity = {
  id: number
  type: string
  material: string
  weight: number
  points: number
  location: string
  date: string
  icon: any
  color: string
  bgColor: string
}

export type Stats = {
  totalCheckIns: number
  currentStreak: number
  ranking: number
  thisWeek: number
}

export default function CheckInPage() {
  const [activities, setActivities] = useState<Activity[]>([])
  const [stats, setStats] = useState<Stats>({
    totalCheckIns: 0,
    currentStreak: 0,
    ranking: 150,
    thisWeek: 0,
  })

  const handleNewCheckIn = (newActivity: Activity) => {
    setActivities((prev) => [newActivity, ...prev])
    setStats((prev) => ({
      ...prev,
      totalCheckIns: prev.totalCheckIns + 1,
      thisWeek: prev.thisWeek + 1,
      currentStreak: prev.currentStreak + 1,
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <AppNavigation />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <CheckInStats stats={stats} />
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Check-in Interface */}
            <div className="lg:col-span-2 space-y-6">
              <CheckInInterface onCheckIn={handleNewCheckIn} />
              <DailyGoals />
            </div>

            {/* Sidebar with multiple sections */}
            <div className="space-y-6">
              <RecentActivity activities={activities} />
              <RecyclingTips />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
