"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

const contactInfo = [
  { icon: MapPin, label: "Headquarters", value: "Q Flow Systems Ltd\n14 Industrial Park Drive\nMumbai, Maharashtra 400 001, India" },
  { icon: Phone, label: "Phone", value: "+91 22 4567 8900\n+91 22 4567 8901 (Technical)" },
  { icon: Mail, label: "Email", value: "info@qflowsystems.com\nsales@qflowsystems.com" },
  { icon: Clock, label: "Business Hours", value: "Mon – Fri: 08:00 – 18:00 IST\nSat: 09:00 – 13:00 IST" },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", industry: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  const inputClass =
    "w-full bg-charcoal-800/60 border border-white/8 hover:border-cyan-400/20 focus:border-cyan-400/40 focus:outline-none rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-600 transition-all";

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-cyan-400 text-xs font-medium tracking-[0.3em] uppercase mb-4">Get in Touch</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Request a <span className="gradient-text">Quote</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tell us about your application and our engineers will respond with the optimal sealing solution within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-5"
          >
            {contactInfo.map((item) => (
              <div key={item.label} className="card-glass rounded-2xl p-5 flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/15 flex items-center justify-center flex-shrink-0">
                  <item.icon size={18} className="text-cyan-400" />
                </div>
                <div>
                  <div className="text-gray-500 text-xs mb-1 tracking-wide">{item.label}</div>
                  <div className="text-gray-200 text-sm whitespace-pre-line leading-relaxed">{item.value}</div>
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="card-glass rounded-2xl h-44 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 grid-bg opacity-50" />
              <div className="relative text-center">
                <MapPin size={32} className="text-cyan-400/40 mx-auto mb-2" />
                <div className="text-gray-600 text-xs">Mumbai, Maharashtra, India</div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400/70 text-xs underline underline-offset-2 hover:text-cyan-400 transition-colors"
                >
                  Open in Maps →
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="card-glass rounded-2xl p-8">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
                    <CheckCircle2 size={32} className="text-cyan-400" />
                  </div>
                  <h3 className="text-white text-xl font-bold">Message Sent!</h3>
                  <p className="text-gray-400 text-sm max-w-xs">
                    Thank you for reaching out. Our engineering team will respond within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: "", company: "", email: "", phone: "", industry: "", message: "" }); }}
                    className="btn-outline text-sm px-5 py-2 rounded-full mt-2"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-gray-500 text-xs mb-1.5 block tracking-wide">Full Name *</label>
                      <input name="name" required value={form.name} onChange={handleChange} placeholder="John Smith" className={inputClass} />
                    </div>
                    <div>
                      <label className="text-gray-500 text-xs mb-1.5 block tracking-wide">Company *</label>
                      <input name="company" required value={form.company} onChange={handleChange} placeholder="Company Ltd" className={inputClass} />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-gray-500 text-xs mb-1.5 block tracking-wide">Email Address *</label>
                      <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="john@company.com" className={inputClass} />
                    </div>
                    <div>
                      <label className="text-gray-500 text-xs mb-1.5 block tracking-wide">Phone Number</label>
                      <input name="phone" value={form.phone} onChange={handleChange} placeholder="+1 555 000 0000" className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label className="text-gray-500 text-xs mb-1.5 block tracking-wide">Industry</label>
                    <select name="industry" value={form.industry} onChange={handleChange} className={inputClass}>
                      <option value="">Select your industry</option>
                      <option>Water Treatment</option>
                      <option>Chemical Processing</option>
                      <option>Oil & Gas</option>
                      <option>Food & Beverage</option>
                      <option>Pharmaceuticals</option>
                      <option>Manufacturing</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-gray-500 text-xs mb-1.5 block tracking-wide">Message / Application Details *</label>
                    <textarea
                      name="message" required value={form.message} onChange={handleChange} rows={5}
                      placeholder="Describe your sealing application, equipment type, operating conditions (pressure, temperature, media), and any specific requirements…"
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {loading ? (
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <Send size={16} />
                    )}
                    {loading ? "Sending…" : "Send Enquiry"}
                  </button>
                  <p className="text-gray-600 text-xs text-center">We typically respond within 24 hours on business days.</p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
