"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, ClipboardCheck, Microscope, RotateCcw } from "lucide-react";

const certs = [
  { name: "ISO 9001:2015", desc: "Quality Management System" },
  { name: "API 682", desc: "Pumps — Shaft Sealing Systems" },
  { name: "ISO 21049", desc: "Mechanical Seals Standard" },
  { name: "ATEX / IECEx", desc: "Explosive Atmospheres" },
  { name: "FDA CFR 21", desc: "Food Contact Compliance" },
  { name: "USP Class VI", desc: "Pharmaceutical Grade" },
];

const steps = [
  { icon: ClipboardCheck, step: "01", title: "Material Traceability", desc: "Every raw material is certified and batch-traced from mill certificate to finished product." },
  { icon: Microscope, step: "02", title: "In-Process Inspection", desc: "CMM dimensional checks at every machining stage. Surface roughness verified to Ra < 0.2µm on seal faces." },
  { icon: CheckCircle2, step: "03", title: "Pressure & Leak Testing", desc: "100% of seals hydrostatically pressure-tested. Zero-leakage verified before dispatch." },
  { icon: RotateCcw, step: "04", title: "Continuous Improvement", desc: "Field feedback loop drives constant product refinement. FMEA and root-cause analysis on every return." },
];

export default function QualitySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="quality" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/0 via-navy-900/40 to-charcoal-900/0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-cyan-400 text-xs font-medium tracking-[0.3em] uppercase mb-4">Certifications & Quality</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Certified to the <span className="gradient-text">Highest Standards</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our manufacturing facility and products are certified to international standards
            across every major industry vertical.
          </p>
        </motion.div>

        {/* Cert badges */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-24">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="card-glass rounded-xl p-4 text-center"
            >
              <div className="text-cyan-400 font-bold text-sm mb-1">{cert.name}</div>
              <div className="text-gray-600 text-[11px] leading-snug">{cert.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* QA process */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-full w-full h-px bg-gradient-to-r from-cyan-400/20 to-transparent z-10" />
              )}
              <div className="card-glass rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
                    <step.icon size={18} className="text-cyan-400" />
                  </div>
                  <span className="text-cyan-400/40 text-3xl font-black">{step.step}</span>
                </div>
                <h4 className="text-white font-semibold mb-2">{step.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
