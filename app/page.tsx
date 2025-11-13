import { Navbar } from "@/components/layout/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { DashboardPreview } from "@/components/sections/dashboard-preview"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/layout/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <DashboardPreview />
      <CtaSection />
      <Footer />
    </main>
  )
}
