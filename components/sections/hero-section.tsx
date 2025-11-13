"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { RegisterDialog } from "@/components/auth/register-dialog"
import { LoginDialog } from "@/components/auth/login-dialog"
import { useRouter } from "next/navigation"

export function HeroSection() {
  const [showRegister, setShowRegister] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem("user"))
  }, [])

  const handleDemoClick = () => {
    if (isAuthenticated) {
      router.push("/chat")
    } else {
      setShowRegister(true)
    }
  }

  return (
    <>
      <section className="relative overflow-hidden bg-linear-to-b from-background via-background to-background/80 pt-28 pb-16">
        <div className="absolute inset-x-0 -top-40 h-80 bg-primary/10 blur-3xl" aria-hidden="true" />

        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.2em] text-primary/80">Asistente virtual para tu negocio</p>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-balance text-foreground">
                Resuelve dudas críticas y toma decisiones con apoyo de IA, sin salir de HotCash
              </h1>
              <p className="text-base lg:text-lg text-muted-foreground max-w-xl">
                Ten a mano un copiloto que entiende finanzas, marketing y operaciones. Conversa, guarda tus avances y
                obtén recomendaciones accionables en minutos.
              </p>

              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Respuestas adaptadas a tu giro y etapa de negocio</li>
                <li>• Guías rápidas para planes de acción y seguimiento</li>
                <li>• Mentores sugeridos según tus objetivos</li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={handleDemoClick}>
                  {isAuthenticated ? "Ir al chat" : "Crear cuenta gratis"}
                </Button>
                <Button size="lg" variant="outline" onClick={() => setShowLogin(true)}>
                  Ya tengo cuenta
                </Button>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card/80 p-6 shadow-xl backdrop-blur">
              <p className="text-sm font-medium text-muted-foreground mb-4">Así te apoyamos</p>
              <div className="space-y-4 text-sm text-foreground">
                <div className="rounded-2xl border border-border/60 bg-background/40 p-4">
                  <p className="font-semibold">Diagnóstico express</p>
                  <p className="text-muted-foreground mt-1">
                    Comparte tu reto puntual y recibe un plan breve con próximos pasos sugeridos.
                  </p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-background/40 p-4">
                  <p className="font-semibold">Guías reutilizables</p>
                  <p className="text-muted-foreground mt-1">
                    Guarda respuestas y plantillas para repetir procesos clave de tu operación.
                  </p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-background/40 p-4">
                  <p className="font-semibold">Mentores recomendados</p>
                  <p className="text-muted-foreground mt-1">
                    Conecta con especialistas que ya ayudaron a negocios similares al tuyo.
                  </p>
                </div>
              </div>
            </div>
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
