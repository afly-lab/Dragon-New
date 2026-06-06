import React from "react";
import { ArrowRight, Star, Shield, Users } from "lucide-react";

export default function Hero() {
  const stats = [
    { number: "$0",   label: "Product Markups · Sourcing Agent Fee is 0%" },
    { number: "24h",  label: "Ground Response Guarantee" },
    { number: "100%", label: "Pricing Transparency & Raw Invoices" },
    { number: "6",    label: "Export Markets Served from China" }
  ];

  const iconStrip = [
    { icon: "🏭", title: "On The Ground Support",      sub: "Local experts in China to represent your interests." },
    { icon: "🔍", title: "Factory Verification",       sub: "Verify factories, audit suppliers, ensure quality." },
    { icon: "📦", title: "FBA Support",                sub: "End-to-end Amazon FBA prep, shipping and delivery." },
    { icon: "🛒", title: "Sourcing From China",        sub: "Find the best products at the most competitive prices." },
    { icon: "🏷️", title: "Private Label Solutions",   sub: "Build your brand with our end-to-end support." },
    { icon: "✅", title: "Pre-Shipment Inspection",    sub: "Ensure quality before your goods ship from China." },
  ];

  return (
    <>
      {/* ── HERO SPLIT: left text / right photo ── */}
      <section id="hero" className="hero-split">
        {/* LEFT TEXT */}
        <div className="hero-left-text">
          <div className="inline-flex items-center gap-2 mb-5 bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-full w-fit">
            <span className="h-2 w-2 rounded-full bg-gold animate-pulse"></span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-gold-dark font-bold">
              Your Dedicated Mainland Extension
            </span>
          </div>

          <h1 className="font-sans font-extrabold text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.1] tracking-tight mb-5">
            Your China Office.<br />
            <span className="text-gold">Without the Overhead.</span>
          </h1>

          <p className="text-ink-faint text-lg leading-relaxed mb-8 max-w-lg font-light">
            <strong className="text-ink font-semibold">We step past the digital listing to verify reality on the physical floor</strong> — managing your factories, verifying licenses, inspecting shipments, and negotiating direct prices. No full-time employee risk, no undisclosed agent kickbacks.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a
              href="#audit-planner"
              className="inline-flex items-center justify-center gap-2 bg-gold text-white hover:bg-gold-dark font-sans text-sm font-bold py-3.5 px-7 rounded-lg transition-all duration-200 shadow-lg shadow-gold/25"
            >
              Run a Free Product Pre-Audit
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#fba"
              className="inline-flex items-center justify-center gap-2 border-2 border-ink/15 text-ink hover:border-gold hover:text-gold font-sans text-sm font-semibold py-3.5 px-7 rounded-lg transition-all duration-200"
            >
              See How We Solve FBA Headaches
            </a>
          </div>

          {/* Trust row */}
          <div className="flex items-center gap-3 pt-6 border-t border-ink/8">
            <div className="flex -space-x-2">
              {[
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&q=80",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=48&q=80",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=48&q=80",
              ].map((src, i) => (
                <img key={i} src={src} alt="client" className="w-9 h-9 rounded-full border-2 border-white object-cover" loading="lazy" />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-0.5 mb-0.5">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                <span className="text-xs font-bold text-ink ml-1">4.9/5</span>
              </div>
              <p className="text-[11px] text-ink-faint font-medium">Trusted by 2000+ businesses worldwide</p>
            </div>
          </div>

          {/* Mini stat row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-ink/8">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <div className="font-sans text-2xl md:text-3xl font-extrabold text-gold">{stat.number}</div>
                <div className="font-mono text-[9px] uppercase tracking-wider text-ink-faint mt-1 leading-relaxed">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT PHOTO */}
        <div className="hero-right-photo">
          <img
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=85"
            alt="Factory inspection — XinAo International"
            loading="eager"
          />
          {/* Blue tint overlay — matches Dragon Sourcing aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/10 pointer-events-none" />
        </div>
      </section>

      {/* ── ICON STRIP ── */}
      <div className="icon-strip">
        {iconStrip.map((item, i) => (
          <div key={i} className="icon-strip-item">
            <div className="icon-strip-icon">{item.icon}</div>
            <div className="font-sans font-bold text-ink text-sm mb-1">{item.title}</div>
            <div className="font-sans text-[11px] text-ink-faint leading-relaxed">{item.sub}</div>
          </div>
        ))}
      </div>
    </>
  );
}
