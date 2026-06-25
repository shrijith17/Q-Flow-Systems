"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Award, BadgeCheck, Truck, SlidersHorizontal, Headphones } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "High Precision Engineering",
    description: "Sub-micron surface finishes on seal faces. CNC-machined components held to ±0.002mm tolerances. Every seal performs exactly as specified.",
  },
  {
    icon: Award,
    title: "Industry Expertise",
    description: "Our engineering team brings 200+ combined years of sealing experience across chemical, oil & gas, water, and pharmaceutical sectors.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Assurance",
    description: "ISO 9001:2015 certified facility. 100% pressure-tested before dispatch. Traceable material certifications for every component.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Standard seal configurations dispatched within 48 hours. Express manufacturing for urgent breakdowns. Global logistics network.",
  },
  {
    icon: SlidersHorizontal,
    title: "Custom Solutions",
    description: "No standard seal fits your application? Our R&D team will design, prototype, and validate a custom solution from scratch.",
  },
  {
    icon: Headphones,
    title: "Technical Support",
    description: "Dedicated application engineers available for seal selection, troubleshooting, and onsite installation guidance worldwide.",
  },
];

export default function WhyUsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-us" className="py-32 relative" ref={ref}>
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-cyan-400 text-xs font-medium tracking-[0.3em] uppercase mb-4">Why Choose Us</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            The Q Flow <span className="gradient-text">Advantage</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We don't just sell seals — we deliver engineered sealing systems with the support,
            quality, and speed that modern industry demands.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-glass rounded-2xl p-7 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-400/10 border border-cyan-400/15 flex items-center justify-center mb-5 group-hover:border-cyan-400/35 group-hover:from-blue-500/30 transition-all">
                <feat.icon size={24} className="text-cyan-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{feat.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
