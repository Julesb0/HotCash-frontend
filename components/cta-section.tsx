import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="py-20 lg:py-32 bg-linear-to-br from-primary/10 via-background to-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
            Lleva tu negocio urbano al <span className="text-primary">siguiente nivel</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground mb-10 text-pretty">
            Comienza gratis con nuestro asistente IA para emprendedores
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
              Comenzar gratis ahora
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
              Ver demostración
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-8">100% gratuito • Sin tarjeta de crédito requerida</p>
        </div>
      </div>
    </section>
  )
}
