"use client"

import { motion } from "framer-motion"
import { 
  Database, 
  Link2, 
  ShoppingCart, 
  Cloud, 
  Wrench, 
  Package,
  ArrowRight
} from "lucide-react"

const services = [
  {
    icon: Database,
    title: "NetSuite Development",
    description: "Custom SuiteScript solutions, workflows, and integrations tailored to your unique business requirements.",
    features: ["SuiteScript 2.x Development", "Custom Records & Fields", "Workflows & Saved Searches", "RESTlet & Suitelet APIs"]
  },
  {
    icon: Link2,
    title: "Celigo Integrations",
    description: "Seamless iPaaS implementations connecting NetSuite to your entire technology ecosystem.",
    features: ["Flow Builder Expertise", "Custom Connectors", "Error Handling & Monitoring", "Data Transformation"]
  },
  {
    icon: ShoppingCart,
    title: "Shopify Integrations",
    description: "End-to-end ecommerce connectivity ensuring real-time sync between your storefront and ERP.",
    features: ["Order Synchronization", "Inventory Management", "Customer Data Sync", "Multi-store Support"]
  },
  {
    icon: Cloud,
    title: "Oracle Integration Cloud",
    description: "Enterprise-grade OIC implementations for complex B2B and application integrations.",
    features: ["Process Automation", "B2B Integration", "Application Adapters", "Hybrid Deployments"]
  },
  {
    icon: Wrench,
    title: "Integration Troubleshooting",
    description: "Expert diagnosis and resolution of complex integration issues and performance bottlenecks.",
    features: ["Root Cause Analysis", "Performance Optimization", "Error Resolution", "System Audits"]
  },
  {
    icon: Package,
    title: "Ecommerce & 3PL Integrations",
    description: "Connect your fulfillment partners, marketplaces, and logistics providers seamlessly.",
    features: ["3PL Connectivity", "Marketplace Integrations", "Shipping Carriers", "EDI Solutions"]
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}

export function Services() {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary border border-primary/30 rounded-full mb-6">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-foreground">Enterprise-Grade</span>
            <br />
            <span className="text-gold-gradient">Integration Solutions</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Comprehensive integration services designed to streamline operations, 
            eliminate data silos, and drive digital transformation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative p-8 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-500 glow-gold hover:glow-gold"
            >
              {/* Service number */}
              <span className="absolute top-6 right-6 text-6xl font-bold text-muted/20">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="relative z-10">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/link"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
