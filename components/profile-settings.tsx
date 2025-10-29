"use client"

import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Settings, Bell, Mail, Shield } from "lucide-react"
import { useState } from "react"

export function ProfileSettings() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    weeklyReport: false,
    marketingEmails: false,
    publicProfile: true,
    showInLeaderboard: true,
  })

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <Card className="p-6 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-primary/20 shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <Settings className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">Configurações</h3>
      </div>

      <div className="space-y-6">
        {/* Notifications Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Bell className="h-4 w-4 text-primary" />
            <span>Notificações</span>
          </div>
          <div className="space-y-3 pl-6">
            <div className="flex items-center justify-between">
              <Label htmlFor="email-notif" className="text-sm cursor-pointer">
                Notificações por email
              </Label>
              <Switch
                id="email-notif"
                checked={settings.emailNotifications}
                onCheckedChange={() => toggleSetting("emailNotifications")}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="push-notif" className="text-sm cursor-pointer">
                Notificações push
              </Label>
              <Switch
                id="push-notif"
                checked={settings.pushNotifications}
                onCheckedChange={() => toggleSetting("pushNotifications")}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="weekly-report" className="text-sm cursor-pointer">
                Relatório semanal
              </Label>
              <Switch
                id="weekly-report"
                checked={settings.weeklyReport}
                onCheckedChange={() => toggleSetting("weeklyReport")}
              />
            </div>
          </div>
        </div>

        {/* Privacy Section */}
        <div className="space-y-4 pt-4 border-t border-border/50">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Shield className="h-4 w-4 text-primary" />
            <span>Privacidade</span>
          </div>
          <div className="space-y-3 pl-6">
            <div className="flex items-center justify-between">
              <Label htmlFor="public-profile" className="text-sm cursor-pointer">
                Perfil público
              </Label>
              <Switch
                id="public-profile"
                checked={settings.publicProfile}
                onCheckedChange={() => toggleSetting("publicProfile")}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="show-leaderboard" className="text-sm cursor-pointer">
                Aparecer no ranking
              </Label>
              <Switch
                id="show-leaderboard"
                checked={settings.showInLeaderboard}
                onCheckedChange={() => toggleSetting("showInLeaderboard")}
              />
            </div>
          </div>
        </div>

        {/* Marketing Section */}
        <div className="space-y-4 pt-4 border-t border-border/50">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Mail className="h-4 w-4 text-primary" />
            <span>Marketing</span>
          </div>
          <div className="space-y-3 pl-6">
            <div className="flex items-center justify-between">
              <Label htmlFor="marketing-emails" className="text-sm cursor-pointer">
                Receber ofertas e novidades
              </Label>
              <Switch
                id="marketing-emails"
                checked={settings.marketingEmails}
                onCheckedChange={() => toggleSetting("marketingEmails")}
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
