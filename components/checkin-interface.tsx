"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { QrCode, Scan, CheckCircle2, Loader2, Recycle, Trash2, Droplet, Battery, X } from "lucide-react"
import { toast } from "sonner"

const materialTypes = [
  { value: "plastic", label: "Plástico", icon: Recycle, color: "text-blue-500", points: 10 },
  { value: "paper", label: "Papel", icon: Recycle, color: "text-amber-500", points: 8 },
  { value: "glass", label: "Vidro", icon: Droplet, color: "text-emerald-500", points: 12 },
  { value: "metal", label: "Metal", icon: Battery, color: "text-slate-500", points: 15 },
  { value: "organic", label: "Orgânico", icon: Trash2, color: "text-green-600", points: 5 },
]

export function CheckInInterface() {
  const [isScanning, setIsScanning] = useState(false)
  const [scanned, setScanned] = useState(false)
  const [selectedMaterial, setSelectedMaterial] = useState("")
  const [weight, setWeight] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [locationName, setLocationName] = useState("")
  const [showCamera, setShowCamera] = useState(false)
  const [scanProgress, setScanProgress] = useState(0)

  const handleScan = () => {
    setShowCamera(true)
    setIsScanning(true)
    setScanProgress(0)

    const progressInterval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 5
      })
    }, 100)

    setTimeout(() => {
      clearInterval(progressInterval)
      setScanProgress(100)
      setIsScanning(false)

      setTimeout(() => {
        setShowCamera(false)
        setScanned(true)
        setLocationName("EcoPonto Centro - Rua das Flores, 123")
        toast.success("QR Code escaneado com sucesso!")
        setScanProgress(0)
      }, 800)
    }, 3000)
  }

  const handleCloseCamera = () => {
    setShowCamera(false)
    setIsScanning(false)
    setScanProgress(0)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedMaterial || !weight) {
      toast.error("Por favor, preencha todos os campos")
      return
    }

    setIsSubmitting(true)

    setTimeout(() => {
      const material = materialTypes.find((m) => m.value === selectedMaterial)
      const pointsEarned = material ? material.points * Number.parseFloat(weight) : 0

      setIsSubmitting(false)
      toast.success(`Check-in realizado! Você ganhou ${pointsEarned.toFixed(0)} pontos!`, {
        description: `${weight}kg de ${material?.label} registrado`,
      })

      setScanned(false)
      setSelectedMaterial("")
      setWeight("")
      setLocationName("")
    }, 1500)
  }

  return (
    <>
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <QrCode className="h-5 w-5 text-primary" />
            Fazer Check-in
          </CardTitle>
          <CardDescription>Escaneie o QR Code do ponto de coleta e registre seu descarte</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <div
                className={`aspect-square max-w-sm mx-auto rounded-2xl border-4 flex items-center justify-center transition-all duration-300 ${
                  scanned
                    ? "border-green-500 bg-green-50 dark:bg-green-950/20"
                    : isScanning
                      ? "border-primary bg-primary/5 animate-pulse"
                      : "border-dashed border-muted-foreground/30 bg-muted/30"
                }`}
              >
                {isScanning ? (
                  <div className="text-center space-y-4">
                    <Loader2 className="h-16 w-16 animate-spin text-primary mx-auto" />
                    <p className="text-sm text-muted-foreground font-medium">Escaneando QR Code...</p>
                  </div>
                ) : scanned ? (
                  <div className="text-center space-y-4 p-6">
                    <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto" />
                    <div>
                      <p className="font-semibold text-green-700 dark:text-green-400">Local Identificado</p>
                      <p className="text-sm text-muted-foreground mt-2">{locationName}</p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center space-y-4 p-6">
                    <Scan className="h-16 w-16 text-muted-foreground/50 mx-auto" />
                    <p className="text-sm text-muted-foreground">Clique no botão abaixo para escanear</p>
                  </div>
                )}
              </div>
            </div>

            {!scanned && (
              <Button onClick={handleScan} disabled={isScanning} className="w-full" size="lg">
                {isScanning ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Escaneando...
                  </>
                ) : (
                  <>
                    <Scan className="mr-2 h-4 w-4" />
                    Escanear QR Code
                  </>
                )}
              </Button>
            )}
          </div>

          {scanned && (
            <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="space-y-2">
                <Label htmlFor="material">Tipo de Material</Label>
                <Select value={selectedMaterial} onValueChange={setSelectedMaterial}>
                  <SelectTrigger id="material">
                    <SelectValue placeholder="Selecione o tipo de material" />
                  </SelectTrigger>
                  <SelectContent>
                    {materialTypes.map((material) => {
                      const Icon = material.icon
                      return (
                        <SelectItem key={material.value} value={material.value}>
                          <div className="flex items-center gap-2">
                            <Icon className={`h-4 w-4 ${material.color}`} />
                            <span>{material.label}</span>
                            <span className="text-xs text-muted-foreground ml-auto">{material.points} pts/kg</span>
                          </div>
                        </SelectItem>
                      )
                    })}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="weight">Peso (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  step="0.1"
                  min="0.1"
                  placeholder="Ex: 2.5"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>

              {selectedMaterial && weight && (
                <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Pontos estimados:</span>
                    <span className="text-2xl font-bold text-primary">
                      {(
                        (materialTypes.find((m) => m.value === selectedMaterial)?.points || 0) *
                        Number.parseFloat(weight || "0")
                      ).toFixed(0)}{" "}
                      pts
                    </span>
                  </div>
                </div>
              )}

              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setScanned(false)
                    setSelectedMaterial("")
                    setWeight("")
                    setLocationName("")
                  }}
                  className="flex-1"
                >
                  Cancelar
                </Button>
                <Button type="submit" disabled={isSubmitting} className="flex-1">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Registrando...
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      Confirmar Check-in
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}
        </CardContent>
      </Card>

      {showCamera && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <button
            onClick={handleCloseCamera}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Fechar câmera"
          >
            <X className="h-6 w-6 text-white" />
          </button>

          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute inset-0 rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div key={i} className="border border-white/10" />
                  ))}
                </div>
              </div>

              {isScanning && scanProgress < 100 && (
                <div
                  className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent shadow-lg shadow-primary/50 transition-all duration-100"
                  style={{
                    top: `${scanProgress}%`,
                  }}
                >
                  <div className="absolute inset-0 bg-primary/30 blur-sm" />
                </div>
              )}

              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="relative w-full aspect-square">
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-primary rounded-tl-2xl" />
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-primary rounded-tr-2xl" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-primary rounded-bl-2xl" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-primary rounded-br-2xl" />

                  {scanProgress === 100 && (
                    <div className="absolute inset-0 flex items-center justify-center animate-in zoom-in duration-300">
                      <div className="bg-green-500 rounded-full p-6">
                        <CheckCircle2 className="h-16 w-16 text-white" />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {isScanning && scanProgress < 100 && (
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  <div className="w-48 h-48 bg-white rounded-lg p-4">
                    <div className="grid grid-cols-8 grid-rows-8 gap-1 h-full w-full">
                      {Array.from({ length: 64 }).map((_, i) => (
                        <div key={i} className={`${Math.random() > 0.5 ? "bg-black" : "bg-white"} rounded-sm`} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="absolute -bottom-24 left-0 right-0 text-center space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Scan className="h-5 w-5 text-primary animate-pulse" />
                <p className="text-white font-medium">
                  {scanProgress === 100
                    ? "QR Code Detectado!"
                    : isScanning
                      ? "Escaneando..."
                      : "Posicione o QR Code no centro"}
                </p>
              </div>
              {isScanning && scanProgress < 100 && (
                <div className="w-full max-w-xs mx-auto bg-white/10 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-100"
                    style={{ width: `${scanProgress}%` }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
