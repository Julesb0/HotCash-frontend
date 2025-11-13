"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LoginDialog } from "@/components/auth/login-dialog"
import { RegisterDialog } from "@/components/auth/register-dialog"
import { User, LogOut } from "lucide-react"

export function Navbar() {
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("user")
    setUser(null)
    router.push("/")
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex flex-col cursor-pointer" onClick={() => router.push("/")}>
              <span className="text-xl lg:text-2xl font-bold text-foreground">HotCash</span>
              <span className="text-xs text-muted-foreground hidden lg:block">Asistente IA para emprendedores</span>
            </div>

            <div className="flex items-center gap-3">
              {user ? (
                <>
                  <Button
                    variant="ghost"
                    className="text-sm hidden sm:inline-flex gap-2"
                    onClick={() => router.push("/chat")}
                  >
                    <User className="h-4 w-4" />
                    {user.nombre}
                  </Button>
                  <Button variant="outline" className="text-sm bg-transparent" onClick={handleLogout}>
                    <LogOut className="h-4 w-4" />
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="ghost" className="text-sm hidden sm:inline-flex" onClick={() => setShowLogin(true)}>
                    Iniciar sesión
                  </Button>
                  <Button
                    className="text-sm bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={() => setShowRegister(true)}
                  >
                    Crear cuenta
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      <LoginDialog
        open={showLogin}
        onOpenChange={setShowLogin}
        onSwitchToRegister={() => {
          setShowLogin(false)
          setShowRegister(true)
        }}
      />
      <RegisterDialog
        open={showRegister}
        onOpenChange={setShowRegister}
        onSwitchToLogin={() => {
          setShowRegister(false)
          setShowLogin(true)
        }}
      />
    </>
  )
}
