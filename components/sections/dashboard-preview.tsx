"use client"

import { useState, useEffect } from "react"
import { MessageSquare, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RegisterDialog } from "@/components/auth/register-dialog"
import { LoginDialog } from "@/components/auth/login-dialog"
import { useRouter } from "next/navigation"

const metrics = [
  { label: "Ventas del mes", value: "$12.5M", change: "+18%" },
  { label: "Clientes activos", value: "2,340", change: "+12%" },
  { label: "Tickets resueltos", value: "147", change: "+6%" },
]

export function DashboardPreview() {
  const [showRegister, setShowRegister] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem("user"))
  }, [])

  const handleTryNow = () => {
    if (isAuthenticated) {
      router.push("/chat")
    } else {
      setShowRegister(true)
    }
  }

  return (
    <>
      <section id="resumen" className="bg-background py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold text-foreground">
              Visualiza tus conversaciones y resultados sin complicaciones
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Un vistazo rápido a cómo HotCash combina chat inteligente, métricas clave y sugerencias de acción.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
            <div className="rounded-3xl border border-border bg-card/80 p-6 shadow-lg backdrop-blur">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MessageSquare className="h-4 w-4" />
                </div>
                <span>Chat con IA</span>
              </div>

              <div className="mt-6 space-y-4">
                <div className="max-w-[85%] rounded-2xl bg-muted px-4 py-3 text-sm text-foreground">
                  ¿Cómo puedo mejorar mis márgenes de ganancia?
                </div>
                <div className="ml-auto max-w-[85%] rounded-2xl bg-primary px-4 py-3 text-sm text-primary-foreground">
                  Ajusta tus costos de inventario, revisa precios premium y negocia términos con proveedores para liberar
                  flujo de caja.
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-border/60 bg-background/50 p-4 text-sm text-muted-foreground">
                <p className="font-medium text-foreground">Siguiente paso sugerido</p>
                <p className="mt-2">
                  Agenda una reunión con tu proveedor principal y lleva la simulación de reducción de costos que te
                  entregamos.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-border bg-card/80 p-6 shadow-lg backdrop-blur">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <span>Métricas clave</span>
                </div>

                <div className="mt-4 space-y-4">
                  {metrics.map((metric) => (
                    <div key={metric.label} className="rounded-2xl border border-border/60 bg-background/40 p-4">
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">{metric.label}</p>
                      <div className="mt-1 flex items-baseline justify-between">
                        <span className="text-xl font-semibold text-foreground">{metric.value}</span>
                        <span className="text-xs text-green-500">{metric.change}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-card/80 p-6 shadow-lg backdrop-blur">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Users className="h-4 w-4" />
                  </div>
                  <span>Mentores sugeridos</span>
                </div>

                <div className="mt-4 space-y-3 text-sm">
                  <div className="rounded-2xl border border-border/60 bg-background/40 p-4">
                    <p className="font-medium text-foreground">Ana Torres · Retail</p>
                    <p className="text-muted-foreground mt-1">
                      Especialista en optimización de inventarios para tiendas físicas y e-commerce.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border/60 bg-background/40 p-4">
                    <p className="font-medium text-foreground">Jorge Paz · Finanzas</p>
                    <p className="text-muted-foreground mt-1">
                      Mentor para estructurar presupuestos y negociar financiamiento con proveedores.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={handleTryNow}>
              {isAuthenticated ? "Ir al panel" : "Probar ahora mismo"}
            </Button>
          </div>
        </div>
      </section>

      <RegisterDialog
        open={showRegister}
        onOpenChange={setShowRegister}
        onSwitchToLogin={() => {
          setShowRegister(false)
          setShowLogin(true)
        }}
      />
      <LoginDialog
        open={showLogin}
        onOpenChange={setShowLogin}
        onSwitchToRegister={() => {
          setShowLogin(false)
          setShowRegister(true)
        }}
      />
    </>
  )
}
