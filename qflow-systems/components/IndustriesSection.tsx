"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Droplets, FlaskConical, Flame, UtensilsCrossed, Pill, Factory } from "lucide-react";

const industries = [
  {
    icon: Droplets,
    name: "Water Treatment",
    description: "Seals for pumps handling clean water, wastewater, and aggressive chemicals in treatment plants. EN 12756 compliant.",
    stat: "40% of installs",
  },
  {
    icon: FlaskConical,
    name: "Chemical Processing",
    description: "Engineered for aggressive solvents, acids, and caustics at elevated temperatures and pressures.",
    stat: "ATEX certified options",
  },
  {
    icon: Flame,
    name: "Oil & Gas",
    description: "API 682 compliant seals for upstream, midstream, and downstream applications — including sour service and cryogenic.",
    stat: "API 682 compliant",
  },
  {
    icon: UtensilsCrossed,
    name: "Food & Beverage",
    description: "FDA-compliant elastomers and hygienic face materials ensuring zero contamination risk in food-grade processes.",
    stat: "FDA / EHEDG",
  },
  {
    icon: Pill,
    name: "Pharmaceuticals",
    description: "USP Class VI and EHEDG certified seals meeting the strictest cleanability and biocompatibility standards.",
    stat: "USP Class VI",
  },
  {
    icon: Factory,
    name: "Manufacturing",
    description: "Versatile sealing solutions for general industrial pumps, mixers, compressors, and rotating equipment.",
    stat: "Universal fit",
  },
];

export default function IndustriesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="industries" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/40 to-charcoal-900/0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="text-cyan-400 text-xs font-medium tracking-[0.3em] uppercase mb-4">Industries We Serve</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Built for the World's
            <span className="gradient-text"> Hardest Environments</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            From clean-room pharmaceutical plants to corrosive chemical reactors, Q Flow seals are specified
            by engineers who cannot afford failure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="industry-card rounded-2xl p-6 group cursor-default"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center flex-shrink-0 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10 transition-all">
                  <industry.icon size={22} className="text-blue-400 group-hover:text-cyan-400 transition-colors" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-0.5">{industry.name}</h3>
                  <span className="text-cyan-400/70 text-xs font-medium tracking-wide">{industry.stat}</span>
                </div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
