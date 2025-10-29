import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "EcoPonto - Transforme Lixo em Recompensas",
  description: "Conecte-se a pontos de coleta de recicláveis e ganhe pontos para trocar por benefícios incríveis",
  generator: "UPX-1",
   icons: {
    icon: "/logoico.ico", // Caminho relativo à pasta 'public'
    shortcut: "logoico.ico",
    apple: "logopng.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
