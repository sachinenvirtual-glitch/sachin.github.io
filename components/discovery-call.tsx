"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, Video, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const benefits = [
  {
    icon: Clock,
    title: "30-Minute Session",
    description: "Focused discussion on your integration challenges"
  },
  {
    icon: Video,
    title: "Video or Phone",
    description: "Choose your preferred communication method"
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Book a time that works for your schedule"
  }
]

export function DiscoveryCall() {
  return (
    <section id="discovery" className="py-32 relative overflow-hidden bg-secondary/20">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary border border-primary/30 rounded-full mb-6">
              Get Started
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="text-foreground">Book Your Free</span>
              <br />
              <span className="text-gold-gradient">Discovery Call</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
              Let&apos;s discuss your integration challenges and explore how Syntara can 
              transform your business operations. No commitment, just expert insights.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="p-6 bg-card rounded-lg border border-border"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 mx-auto mb-4">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-lg font-semibold group"
            >
              <a href="#contact">
                Schedule Your Call
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              No obligation • Typically responds within 24 hours
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
