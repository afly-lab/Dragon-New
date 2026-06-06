import React from "react";
import { BadgeCheck, ArrowRight } from "lucide-react";

export default function PrivateLabelSection() {
  const steps = [
    { num: "01", title: "Find the product", text: "We locate the exact factory making the product you want — sourced through domestic Chinese channels at true factory price, not the export markup overseas buyers pay." },
    { num: "02", title: "Brand it as yours", text: "Custom logo printed or engraved on the product, custom retail packaging, brand insert cards. Your brand — not a generic listing." },
    { num: "03", title: "Inspect & certify", text: "We physically inspect production, pull test reports in your brand name, and assemble your full compliance file before shipping." },
    { num: "04", title: "FBA-ready ship", text: "FNSKU labels, box IDs, polybags, export docs — your private-label product arrives at Amazon ready to sell under Brand Registry." }
  ];

  return (
    <section id="private-label" className="bg-white border-t border-gray-100">
      {/* Split: photo left, text right */}
      <div className="split-section">
        <div className="split-img-col" style={{minHeight:'420px'}}>
          <img src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=900&q=80" alt="Private label packaging" loading="lazy" />
          <div className="split-img-badge">Private Label<br/>End-to-End</div>
        </div>
        <div className="flex flex-col justify-center p-12 md:p-16 bg-white">
          <span className="font-sans text-sm font-bold text-gold uppercase tracking-widest block mb-4">Private Label</span>
          <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-ink leading-tight">
            Build your own brand,<br />
            <span className="text-ink-faint font-light italic" style={{fontFamily:'var(--font-serif)'}}>not a generic listing</span>
          </h2>
          <p className="text-ink-faint leading-relaxed text-base mt-4">
            A generic product can be hijacked and undercut by any seller. A private-label brand cannot. We turn a factory product into <em>your</em> product — owned, protected, and impossible to copy on your ASIN.
          </p>
          <div className="border-t border-gray-100 pt-5 space-y-3 mt-6">
            <div className="flex gap-2 text-sm text-ink-faint"><BadgeCheck className="w-4 h-4 text-gold shrink-0 mt-0.5" /><span>Custom branding &amp; packaging negotiated on the factory floor</span></div>
            <div className="flex gap-2 text-sm text-ink-faint"><BadgeCheck className="w-4 h-4 text-gold shrink-0 mt-0.5" /><span>Test reports issued in your brand name — Amazon-defensible</span></div>
            <div className="flex gap-2 text-sm text-ink-faint"><BadgeCheck className="w-4 h-4 text-gold shrink-0 mt-0.5" /><span>Brand Registry-ready so hijackers get removed fast</span></div>
          </div>
          <a href="#contact" className="bg-gold hover:bg-gold-dark text-white font-sans text-sm font-bold py-3.5 px-7 rounded-lg inline-flex items-center gap-2 transition-all duration-200 mt-8 w-fit shadow-lg shadow-gold/25">
            Launch My Private Label <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Step cards */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <div key={i} className="bg-blue-50/50 border border-gold/15 p-7 rounded-xl hover:border-gold/40 hover:shadow-md transition-all duration-300 group">
              <span className="font-sans text-xs text-gold font-bold">{s.num}</span>
              <h3 className="font-sans font-bold text-lg text-ink mt-3 mb-2 group-hover:text-gold transition-colors">{s.title}</h3>
              <p className="text-sm text-ink-faint leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
