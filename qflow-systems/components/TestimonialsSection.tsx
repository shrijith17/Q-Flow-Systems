"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Q Flow's cartridge seals reduced our pump MTBR from 8 months to over 3 years. The engineering support during commissioning was exceptional — they treated our problem as their own.",
    author: "David Harrington",
    role: "Chief Engineer",
    company: "Thames Water Infrastructure",
    industry: "Water Treatment",
  },
  {
    quote: "In 12 years of specifying seals for our chlorine and sulphuric acid service, I have never found a supplier that matches Q Flow Systems on material depth and technical response speed.",
    author: "Dr. Amara Mensah",
    role: "Process Engineering Manager",
    company: "Ineos Chemicals",
    industry: "Chemical Processing",
  },
  {
    quote: "We switched our entire refinery seal program to Q Flow after their metal bellows outperformed the previous supplier's product in high-temperature hydrocarbon service. Zero failures in 18 months.",
    author: "Tariq Al-Rashidi",
    role: "Rotating Equipment Superintendent",
    company: "Gulf Petroleum Operations",
    industry: "Oil & Gas",
  },
  {
    quote: "FDA compliance, hygienic design, and reliable supply chain — Q Flow delivers all three. Our validation team now specifies Q Flow as the standard across all new installations.",
    author: "Claire Beaumont",
    role: "VP Manufacturing Operations",
    company: "Novartis Global Facilities",
    industry: "Pharmaceuticals",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/30 to-charcoal-900/0 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-cyan-400 text-xs font-medium tracking-[0.3em] uppercase mb-4">Client Testimonials</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="testimonial-card rounded-3xl p-10 md:p-14 relative overflow-hidden">
            {/* Background quote mark */}
            <div className="absolute top-6 right-8 opacity-5">
              <Quote size={120} className="text-cyan-400" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mb-8">
                  <Quote size={18} className="text-cyan-400" />
                </div>

                <blockquote className="text-gray-200 text-xl md:text-2xl font-light leading-relaxed mb-10 max-w-3xl">
                  "{testimonials[active].quote}"
                </blockquote>

                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-lg">
                    {testimonials[active].author[0]}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonials[active].author}</div>
                    <div className="text-gray-500 text-sm">{testimonials[active].role} · {testimonials[active].company}</div>
                  </div>
                  <div className="ml-auto hidden md:block">
                    <span className="bg-cyan-400/10 border border-cyan-400/20 text-cyan-400/80 text-xs px-3 py-1 rounded-full">
                      {testimonials[active].industry}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === active ? "w-8 bg-cyan-400" : "w-4 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-white/10 hover:border-cyan-400/40 flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-white/10 hover:border-cyan-400/40 flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
