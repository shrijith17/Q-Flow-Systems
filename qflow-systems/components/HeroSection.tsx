"use client";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Play } from "lucide-react";

// Animated mechanical seal SVG art
function SealVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Outer decorative rings */}
      <div className="absolute w-[520px] h-[520px] rounded-full border border-cyan-400/5 animate-spin-slow" />
      <div className="absolute w-[440px] h-[440px] rounded-full border border-blue-400/8" style={{ animation: "spin-reverse 25s linear infinite" }} />
      <div className="absolute w-[360px] h-[360px] rounded-full border border-cyan-400/10 animate-spin-slow" style={{ animationDuration: "18s" }} />

      {/* Glowing core */}
      <div className="absolute w-[200px] h-[200px] rounded-full bg-blue-500/5 blur-3xl animate-pulse-glow" />
      <div className="absolute w-[120px] h-[120px] rounded-full bg-cyan-400/8 blur-2xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      {/* Main mechanical seal SVG */}
      <svg
        viewBox="0 0 300 300"
        className="w-[320px] h-[320px] animate-float"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer housing */}
        <circle cx="150" cy="150" r="140" stroke="rgba(34,211,238,0.15)" strokeWidth="1.5" />
        <circle cx="150" cy="150" r="132" stroke="rgba(46,109,232,0.1)" strokeWidth="1" />

        {/* Housing body */}
        <circle cx="150" cy="150" r="125" fill="rgba(26,30,40,0.9)" stroke="rgba(34,211,238,0.2)" strokeWidth="1.5" />

        {/* Radial bolt holes */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x = 150 + 112 * Math.cos(rad);
          const y = 150 + 112 * Math.sin(rad);
          return (
            <circle key={i} cx={x} cy={y} r="5" fill="rgba(34,211,238,0.1)" stroke="rgba(34,211,238,0.3)" strokeWidth="1" />
          );
        })}

        {/* Outer ring */}
        <circle cx="150" cy="150" r="95" fill="rgba(18,21,28,0.95)" stroke="rgba(34,211,238,0.25)" strokeWidth="2" />

        {/* Spring coils representation */}
        {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x1 = 150 + 78 * Math.cos(rad);
          const y1 = 150 + 78 * Math.sin(rad);
          const x2 = 150 + 90 * Math.cos(rad);
          const y2 = 150 + 90 * Math.sin(rad);
          return (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(46,109,232,0.4)" strokeWidth="2.5" strokeLinecap="round" />
          );
        })}

        {/* Rotating face */}
        <circle cx="150" cy="150" r="70" fill="rgba(13,15,20,0.98)" stroke="rgba(34,211,238,0.3)" strokeWidth="1.5" />

        {/* Face grooves */}
        <circle cx="150" cy="150" r="60" fill="none" stroke="rgba(34,211,238,0.12)" strokeWidth="1" />
        <circle cx="150" cy="150" r="50" fill="none" stroke="rgba(34,211,238,0.08)" strokeWidth="0.5" />

        {/* Drive pins */}
        {[0, 120, 240].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x = 150 + 62 * Math.cos(rad);
          const y = 150 + 62 * Math.sin(rad);
          return (
            <rect key={i} x={x - 3} y={y - 3} width="6" height="6" rx="1"
              fill="rgba(34,211,238,0.3)" stroke="rgba(34,211,238,0.5)" strokeWidth="0.5"
              transform={`rotate(${angle}, ${x}, ${y})`}
            />
          );
        })}

        {/* Stationary face glow ring */}
        <circle cx="150" cy="150" r="35"
          fill="none"
          stroke="rgba(34,211,238,0.4)"
          strokeWidth="2"
          strokeDasharray="4 3"
        />

        {/* Center bore */}
        <circle cx="150" cy="150" r="22" fill="rgba(5,13,31,0.98)" stroke="rgba(46,109,232,0.4)" strokeWidth="1.5" />
        <circle cx="150" cy="150" r="14" fill="rgba(30,86,192,0.15)" stroke="rgba(34,211,238,0.5)" strokeWidth="1" />

        {/* Shaft keyway */}
        <rect x="143" y="130" width="14" height="8" rx="1" fill="rgba(34,211,238,0.2)" stroke="rgba(34,211,238,0.4)" strokeWidth="0.5" />

        {/* Center dot - seal face */}
        <circle cx="150" cy="150" r="5" fill="rgba(34,211,238,0.7)" />
        <circle cx="150" cy="150" r="2" fill="#22d3ee" />

        {/* Technical dimension lines */}
        <line x1="10" y1="150" x2="25" y2="150" stroke="rgba(34,211,238,0.2)" strokeWidth="0.5" />
        <line x1="275" y1="150" x2="290" y2="150" stroke="rgba(34,211,238,0.2)" strokeWidth="0.5" />
        <line x1="150" y1="10" x2="150" y2="25" stroke="rgba(34,211,238,0.2)" strokeWidth="0.5" />
        <line x1="150" y1="275" x2="150" y2="290" stroke="rgba(34,211,238,0.2)" strokeWidth="0.5" />
      </svg>

      {/* Floating data labels */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute right-0 top-1/3 bg-charcoal-800/80 border border-cyan-400/20 rounded-lg px-3 py-2 backdrop-blur-sm"
      >
        <div className="text-[10px] text-gray-500 uppercase tracking-widest">Pressure Rating</div>
        <div className="text-cyan-400 font-bold text-sm">40 Bar</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute left-0 top-2/3 bg-charcoal-800/80 border border-cyan-400/20 rounded-lg px-3 py-2 backdrop-blur-sm"
      >
        <div className="text-[10px] text-gray-500 uppercase tracking-widest">Temperature</div>
        <div className="text-cyan-400 font-bold text-sm">−40°C to 200°C</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute top-4 left-1/2 -translate-x-1/2 bg-charcoal-800/80 border border-cyan-400/20 rounded-lg px-3 py-2 backdrop-blur-sm"
      >
        <div className="text-[10px] text-gray-500 uppercase tracking-widest">ISO 21049 / API 682</div>
        <div className="text-cyan-400 font-bold text-sm">Certified</div>
      </motion.div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen hero-gradient grid-bg flex items-center overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 2, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-6 items-center">
          {/* Left: Copy */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-cyan-400/8 border border-cyan-400/20 rounded-full px-4 py-1.5 mb-8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-400 text-xs font-medium tracking-widest uppercase">
                Precision Engineering
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
            >
              <span className="text-white">Precision</span>
              <br />
              <span className="gradient-text">Sealing</span>
              <br />
              <span className="text-white">Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg"
            >
              Engineered for reliability, efficiency, and performance across
              critical industrial applications. Trusted by leading plants worldwide.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="btn-primary text-white font-semibold px-7 py-3.5 rounded-full flex items-center gap-2 group"
              >
                Request a Quote
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#products"
                className="btn-outline font-semibold px-7 py-3.5 rounded-full flex items-center gap-2"
              >
                Explore Products
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-white/5"
            >
              {[
                { value: "500+", label: "Products" },
                { value: "20+", label: "Years Experience" },
                { value: "50+", label: "Countries" },
                { value: "ISO", label: "Certified" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-gray-500 text-xs tracking-wide">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Seal Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2 relative h-[420px] lg:h-[560px] flex items-center justify-center"
          >
            <SealVisual />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-gray-600 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={16} className="text-gray-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
