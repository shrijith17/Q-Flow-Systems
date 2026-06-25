"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Layers, Cog, Disc, Circle, Wind, Wrench } from "lucide-react";

const products = [
  {
    icon: Layers,
    name: "Cartridge Mechanical Seals",
    description: "Pre-assembled, self-contained units that simplify installation and eliminate the risk of incorrect setting. Ideal for retrofit and OEM applications.",
    features: ["Easy installation", "Pre-set dimensions", "Reduced downtime", "API 682 compliant"],
    tag: "Most Popular",
  },
  {
    icon: Cog,
    name: "Component Mechanical Seals",
    description: "Individual seal components offering maximum flexibility for custom configurations. Perfect for specialized pumps and compressors.",
    features: ["Fully customizable", "Wide material options", "Cost-effective", "High-performance faces"],
    tag: null,
  },
  {
    icon: Disc,
    name: "Metal Bellows Seals",
    description: "Welded metal bellows eliminate the need for secondary dynamic O-rings, excelling in extreme temperature and corrosive media applications.",
    features: ["Cryogenic to +400°C", "Zero elastomer", "Chemical resistant", "Long service life"],
    tag: "High Temp",
  },
  {
    icon: Circle,
    name: "Elastomer Bellows Seals",
    description: "Cost-efficient single-spring design using a moulded elastomer bellows as both the secondary seal and anti-rotation device.",
    features: ["Compact design", "Self-cleaning", "Wide chemical compatibility", "Easy maintenance"],
    tag: null,
  },
  {
    icon: Wind,
    name: "Agitator Seals",
    description: "Purpose-engineered for stirrers, mixers, and reactors operating under pressure or vacuum. Available in single, double, and tandem configurations.",
    features: ["Pressure & vacuum rated", "Top/bottom entry", "Heating/cooling options", "ATEX available"],
    tag: "Specialized",
  },
  {
    icon: Wrench,
    name: "Custom Engineered Seals",
    description: "Our R&D team works directly with your engineers to design sealing solutions for unique equipment geometries and process conditions.",
    features: ["Full CAD/CAE design", "Material development", "Rapid prototyping", "Life-cycle support"],
    tag: "Custom",
  },
];

function SealIcon({ Icon }: { Icon: React.ElementType }) {
  return (
    <div className="relative w-full h-44 product-img-area flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-400/5" />
      {/* decorative rings */}
      <div className="absolute w-28 h-28 rounded-full border border-cyan-400/10 animate-spin-slow" />
      <div className="absolute w-20 h-20 rounded-full border border-blue-400/15" style={{ animation: "spin-reverse 12s linear infinite" }} />
      <div className="w-14 h-14 rounded-full bg-charcoal-800/80 border border-cyan-400/20 flex items-center justify-center z-10">
        <Icon size={24} className="text-cyan-400" />
      </div>
    </div>
  );
}

export default function ProductsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="products" className="py-32 relative" ref={ref}>
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-cyan-400 text-xs font-medium tracking-[0.3em] uppercase mb-4">Product Range</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Engineered to <span className="gradient-text">Perform</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive range of mechanical seals designed for every application, fluid type, and operating condition.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-glass rounded-2xl overflow-hidden flex flex-col group"
            >
              <div className="relative">
                <SealIcon Icon={product.icon} />
                {product.tag && (
                  <span className="absolute top-3 right-3 bg-cyan-400/15 border border-cyan-400/30 text-cyan-400 text-[10px] font-semibold px-2.5 py-1 rounded-full tracking-wide">
                    {product.tag}
                  </span>
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-white font-bold text-lg mb-3 group-hover:text-cyan-400 transition-colors">{product.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{product.description}</p>
                <div className="space-y-2 mb-6">
                  {product.features.map((f) => (
                    <div key={f} className="flex items-center gap-2.5">
                      <div className="w-1 h-1 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span className="text-gray-400 text-xs">{f}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="flex items-center gap-2 text-cyan-400 text-sm font-semibold group/link hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
