"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { RegisterDialog } from "@/components/auth/register-dialog"
import { LoginDialog } from "@/components/auth/login-dialog"
import { useRouter } from "next/navigation"

export function Footer() {
  const [showRegister, setShowRegister] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem("user"))
  }, [])

  const handleGetStarted = () => {
    if (isAuthenticated) {
      router.push("/chat")
    } else {
      setShowRegister(true)
    }
  }

  return (
    <>
      <footer className="bg-muted/30 border-t border-border py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-linear-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl p-8 lg:p-12 mb-12 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">Listo para transformar tu negocio?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Únete a miles de emprendedores que ya están usando HotCash para escalar sus negocios
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={handleGetStarted}
            >
              {isAuthenticated ? "Ir al chat" : "Comenzar gratis"}
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold text-foreground mb-2">HotCash</h3>
              <p className="text-sm text-muted-foreground mb-4">Asistente IA para emprendedores</p>
              <p className="text-sm text-muted-foreground">Transformando negocios con inteligencia artificial</p>
            </div>

            {/* Producto */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Producto</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById("funciones")
                      element?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Características
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleGetStarted}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Demo
                  </button>
                </li>
              </ul>
            </div>

            {/* Recursos */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Recursos</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Documentación
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Guías
                  </a>
                </li>
              </ul>
            </div>

            {/* Soporte */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Soporte</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Contacto
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Ayuda
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom section */}
          <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Términos de servicio
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Política de privacidad
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Política de cookies
              </a>
            </div>

            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427a4.902 4.902 0 011.772 1.772 4.902 4.902 0 011.153 1.153c.636.247 1.363.416 2.427.465 1.067.048 1.407.06 4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.153-1.772 4.902 4.902 0 01-1.772-1.153c-.636-.247-1.363-.416-2.427-.465-1.067-.048-1.407-.06-4.123-.06h-.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              © 2025 HotCash. Asistente IA para emprendedores. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>

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
