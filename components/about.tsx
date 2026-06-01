"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "5+", label: "Certified across 5 platforms" },
  { value: "99%", label: "Delivery Focus" },
  { value: "24/7", label: "Support Available" },
]

const expertise = [
  "Deep NetSuite ecosystem knowledge spanning development, administration, and optimization",
  "Deep experience across eCommerce, 3PL, and logistics sectors serving mid-market to enterprise clients companies and high-growth startups alike",
  "Agile methodology ensuring rapid delivery without compromising quality",
  "Continuous innovation staying ahead of platform updates and industry trends",
]

export function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary border border-primary/30 rounded-full mb-6">
              About Syntara
            </span>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              <span className="text-foreground">Expertise That</span>
              <br />
              <span className="text-gold-gradient">Drives Results</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Founded on a passion for seamless system connectivity, Syntara brings 
              over a decade of hands-on experience in enterprise integration. We 
              specialize in transforming complex technical challenges into streamlined, 
              automated solutions that empower businesses to scale with confidence.
            </p>

            <ul className="space-y-4 mb-10">
              {expertise.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-card rounded-lg border border-border text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-gold-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
