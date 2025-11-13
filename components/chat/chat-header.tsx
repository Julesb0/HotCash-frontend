"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { LogOut, User, Home } from "lucide-react"

export function ChatHeader() {
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem("user")
    router.push("/")
  }

  // Get user from localStorage
  const getUserName = () => {
    const userData = localStorage.getItem("user")
    if (userData) {
      const user = JSON.parse(userData)
      return user.nombre
    }
    return "Usuario"
  }

  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => router.push("/")} className="lg:hidden">
              <Home className="h-5 w-5" />
            </Button>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground">HotCash</span>
              <span className="text-xs text-muted-foreground hidden lg:block">Tu asistente virtual inteligente</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
              <User className="h-4 w-4" />
              <span>{getUserName()}</span>
            </div>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Salir
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
