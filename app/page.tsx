import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Certifications } from "@/components/certifications"
import { DiscoveryCall } from "@/components/discovery-call"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Certifications />
      <DiscoveryCall />
      <ContactForm />
      <Footer />
    </main>
  )
}
