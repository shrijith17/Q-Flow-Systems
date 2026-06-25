"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, Zap, Shield, Globe } from "lucide-react";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <div ref={ref} className="stat-number gradient-text-blue">{count}{suffix}</div>;
}

const stats = [
  { value: 25, suffix: "+", label: "Years of Excellence" },
  { value: 500, suffix: "+", label: "Seal Configurations" },
  { value: 50, suffix: "+", label: "Countries Served" },
  { value: 98, suffix: "%", label: "Client Retention" },
];

const values = [
  { icon: Zap, title: "Performance-First", text: "Every seal is engineered to exceed performance benchmarks under the most demanding conditions." },
  { icon: Shield, title: "Zero Compromise on Quality", text: "Rigorous QA at every manufacturing stage ensures reliability your operations can depend on." },
  { icon: Globe, title: "Global Reach, Local Support", text: "Worldwide distribution network backed by responsive technical support teams." },
  { icon: CheckCircle2, title: "Proven Track Record", text: "Trusted by Fortune 500 industrial companies across six continents for mission-critical applications." },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/0 via-navy-900/30 to-charcoal-900/0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <div className="text-cyan-400 text-xs font-medium tracking-[0.3em] uppercase mb-4">About Q Flow Systems</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Two Decades of Sealing
            <span className="gradient-text"> Innovation</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Founded on a commitment to precision manufacturing, Q Flow Systems has grown into a globally recognized
            name in mechanical sealing technology. We combine metallurgical expertise with modern engineering
            to deliver solutions that protect your most critical equipment.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card-glass rounded-2xl p-6 text-center"
            >
              <Counter target={stat.value} suffix={stat.suffix} />
              <div className="text-gray-500 text-sm mt-2 tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Grid: text + values */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-5">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              To engineer mechanical seals that maximize equipment uptime, minimize fluid emissions,
              and reduce total cost of ownership — so our clients can focus on what matters most: running their operations.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Every product that leaves our facility has been rigorously tested to ISO 21049 and API 682 standards.
              We maintain in-house materials testing labs, precision CNC machining cells, and a dedicated
              R&D team constantly pushing the limits of sealing performance.
            </p>

            <div className="space-y-3">
              {["API 682 & ISO 21049 Compliant", "In-house metallurgical testing", "Rapid prototyping for custom designs", "Global OEM partnerships"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="card-glass rounded-xl p-5"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mb-4">
                  <val.icon size={18} className="text-cyan-400" />
                </div>
                <h4 className="text-white font-semibold text-sm mb-2">{val.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{val.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
