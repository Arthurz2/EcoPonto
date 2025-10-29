"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Recycle, MapPin, Gift, User, LogOut, Menu, LayoutDashboard, QrCode } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navigationItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Check-in",
    href: "/checkin",
    icon: QrCode,
  },
  {
    name: "Mapa",
    href: "/map",
    icon: MapPin,
  },
  {
    name: "Recompensas",
    href: "/rewards",
    icon: Gift,
  },
  {
    name: "Perfil",
    href: "/profile",
    icon: User,
  },
]

export function AppNavigation() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="border-b bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/dashboard" className="flex items-center gap-2 text-emerald-600">
            <Recycle className="h-8 w-8" />
            <span className="text-2xl font-bold">EcoPonto</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navigationItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={cn(
                      "hover:bg-emerald-50",
                      isActive && "bg-emerald-100 text-emerald-700 hover:bg-emerald-100",
                    )}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {item.name}
                  </Button>
                </Link>
              )
            })}
            <Link href="/">
              <Button variant="ghost" size="sm" className="hover:bg-red-50 hover:text-red-600">
                <LogOut className="h-4 w-4 mr-2" />
                Sair
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation - Hamburger Menu */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="hover:bg-emerald-50">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px]">
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2 text-emerald-600">
                    <Recycle className="h-6 w-6" />
                    EcoPonto
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-8 flex flex-col gap-2">
                  {navigationItems.map((item) => {
                    const Icon = item.icon
                    const isActive = pathname === item.href
                    return (
                      <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                        <Button
                          variant="ghost"
                          className={cn(
                            "w-full justify-start hover:bg-emerald-50",
                            isActive && "bg-emerald-100 text-emerald-700 hover:bg-emerald-100",
                          )}
                        >
                          <Icon className="h-5 w-5 mr-3" />
                          {item.name}
                        </Button>
                      </Link>
                    )
                  })}
                  <div className="my-4 border-t" />
                  <Link href="/" onClick={() => setOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start hover:bg-red-50 hover:text-red-600">
                      <LogOut className="h-5 w-5 mr-3" />
                      Sair
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
