"use client"

import { motion } from "framer-motion"
import { Award, Shield, BadgeCheck, Star } from "lucide-react"

const certifications = [
  {
    icon: Award,
    title: "Celigo Level 4 Certified",
    description: "Highest tier partner certification demonstrating mastery of the Celigo iPaaS platform and complex integration scenarios.",
    badge: "Elite Partner"
  },
  {
    icon: Shield,
    title: "Oracle Integration Cloud Certified",
    description: "Certified expertise in Oracle&apos;s enterprise integration platform for mission-critical B2B and application integrations.",
    badge: "Certified"
  },
  {
    icon: BadgeCheck,
    title: "Workato Pro Certified",
    description: "Professional certification in Workato&apos;s intelligent automation platform for enterprise workflow automation.",
    badge: "Professional"
  },
  {
    icon: Star,
    title: "12+ Years NetSuite Development",
    description: "Over a decade of hands-on experience building custom solutions across the entire NetSuite ecosystem.",
    badge: "Expert"
  }
]

export function Certifications() {
  return (
    <section id="certifications" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary border border-primary/30 rounded-full mb-6">
            Credentials
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-foreground">Certified</span>
            <br />
            <span className="text-gold-gradient">Excellence</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Industry-recognized certifications and proven expertise that set us apart 
            in the integration consulting landscape.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-500"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
                  <cert.icon className="h-8 w-8 text-primary" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <span className="px-2 py-1 text-xs font-semibold bg-primary/20 text-primary rounded">
                      {cert.badge}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-8">
            Trusted by leading brands and implementation partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
            {["NetSuite", "Celigo", "Oracle", "Shopify", "Workato"].map((brand) => (
              <span key={brand} className="text-xl font-semibold text-muted-foreground">
                {brand}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
