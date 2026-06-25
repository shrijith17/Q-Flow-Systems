"use client";
import { Globe, Share2, Play, ArrowUpRight } from "lucide-react";

const footerLinks = {
  Products: [
    "Cartridge Mechanical Seals",
    "Component Mechanical Seals",
    "Metal Bellows Seals",
    "Elastomer Bellows Seals",
    "Agitator Seals",
    "Custom Engineered Seals",
  ],
  Industries: [
    "Water Treatment",
    "Chemical Processing",
    "Oil & Gas",
    "Food & Beverage",
    "Pharmaceuticals",
    "Manufacturing",
  ],
  Company: [
    "About Us",
    "Quality & Certifications",
    "Technical Support",
    "Case Studies",
    "Careers",
    "Contact",
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 pt-20 pb-8">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/20 to-charcoal-900 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* CTA Banner */}
        <div className="card-glass rounded-2xl p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-400/5 pointer-events-none" />
          <div className="relative">
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">Ready to solve your sealing challenge?</h3>
            <p className="text-gray-400">Our engineers are standing by — response within 24 hours.</p>
          </div>
          <a
            href="#contact"
            className="btn-primary flex-shrink-0 text-white font-semibold px-8 py-4 rounded-full flex items-center gap-2 group relative"
          >
            Get a Free Consultation
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 rounded-full border border-cyan-400/30 animate-spin-slow" />
                <div className="absolute inset-1 rounded-full border border-blue-400/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500" />
                </div>
              </div>
              <div>
                <div className="text-white font-bold leading-none">Q FLOW</div>
                <div className="text-cyan-400/60 text-[9px] tracking-[0.3em] uppercase">Systems</div>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Precision mechanical seals engineered for the world's most demanding industrial applications.
            </p>
            <div className="flex gap-3">
              {[Globe, Share2, Play].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/10 hover:border-cyan-400/30 flex items-center justify-center text-gray-600 hover:text-cyan-400 transition-all"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white text-sm font-semibold mb-5 tracking-wide">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-600 text-sm hover:text-cyan-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="cyan-divider mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-700 text-xs">
          <div>© {new Date().getFullYear()} Q Flow Systems Ltd. All rights reserved.</div>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Cookie Settings"].map((item) => (
              <a key={item} href="#" className="hover:text-gray-400 transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
