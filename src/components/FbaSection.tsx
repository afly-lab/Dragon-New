import React from "react";
import { X, Check, PackageCheck, AlertTriangle } from "lucide-react";

const svcImages = [
  { src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80", label: "On The Ground Support" },
  { src: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=400&q=80", label: "Factory Verification" },
  { src: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=400&q=80", label: "FBA Support" },
  { src: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=400&q=80", label: "Sourcing From China" },
  { src: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=400&q=80", label: "Private Label Solutions" },
  { src: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=400&q=80", label: "Pre-Shipment Inspection" },
];

export default function FbaSection() {
  const grievances = [
    { title: "Shipment rejected at Amazon", text: "Wrong FNSKU labels, missing box IDs, non-compliant packaging. Your $8,000 shipment sits stranded in an Amazon warehouse generating storage fees while you scramble to fix it from another continent." },
    { title: "Factory sends wrong specification", text: "The product you receive is different from the sample you approved. Wrong steel grade, different colour, inferior component. You only discover this when customers start leaving 1-star reviews." },
    { title: "Fake certification documents", text: "The factory's CE and FCC certificates look real but cannot be verified. When Amazon requests compliance documentation, your listing gets suspended because the test reports are fabricated." },
    { title: "Alibaba middleman markup", text: "You are paying 20–30% more than the actual factory price because you are buying through export-facing platforms, not the domestic factory channels we work in. That margin gap is what your competitors use to undercut you on price or outspend you on ads." },
    { title: "No one to inspect before shipping", text: "By the time you discover a quality problem, 500 units are already in Amazon's warehouse or your customer's hands. A $150 pre-shipment inspection would have prevented a $5,000 disaster." },
    { title: "Communication delays kill timelines", text: "Time zone differences, language barriers, and slow WeChat responses mean your product launch keeps slipping. Your competitors are already ranking while you are waiting for a factory reply." }
  ];

  const solutions = [
    "Your FNSKU label on every unit, covering the factory barcode",
    "FBA Box ID label on all 4 sides of every carton",
    "Amazon-approved void fill: bubble wrap or air pillows",
    "Individual polybags with suffocation warning where required",
    "Quantity verified and confirmed against your shipment plan",
    "Commercial invoice issued by our registered WFOE entity",
    "English labelling on all outer cartons",
    "Pre-shipment inspection report showing compliance"
  ];

  return (
    <section id="fba" className="bg-white border-t border-gray-100">

      {/* ── WHAT WE DO heading + image grid (Dragon Sourcing style) ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="text-center mb-10">
          <span className="font-sans text-sm font-bold text-gold uppercase tracking-widest mb-3 block">What We Do</span>
          <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-ink">
            End-to-End Sourcing &amp; Fulfillment Solutions
          </h2>
          <p className="text-ink-faint mt-3 max-w-xl mx-auto text-base">
            We provide comprehensive support at every step of your sourcing journey.
          </p>
        </div>

        {/* 6-image service grid */}
        <div className="svc-img-grid mb-12 rounded-xl overflow-hidden border border-gray-100 shadow-sm">
          {svcImages.map((img, i) => (
            <div key={i} className="svc-img-item">
              <img src={img.src} alt={img.label} loading="lazy" />
              <div className="svc-img-overlay">
                <div className="svc-img-label">{img.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ── FBA section heading ── */}
        <div className="max-w-3xl mb-12 mt-20">
          <span className="font-sans text-sm font-bold text-gold uppercase tracking-widest mb-3 block">
            Built For Amazon FBA &amp; FBM Sellers
          </span>
          <h2 className="font-sans font-extrabold text-3xl md:text-5xl text-ink leading-tight">
            Every way China sourcing<br />
            <span className="text-ink-faint font-light italic" style={{fontFamily:'var(--font-serif)'}}>goes wrong for FBA sellers</span>
          </h2>
          <p className="text-ink-faint text-base leading-relaxed mt-4">
            67% of new FBA sellers face a shipment rejection at least once. Since January 2026, Amazon no longer fixes prep issues at the warehouse — what arrives must be ready. Here is what goes wrong, and exactly what we do instead.
          </p>
        </div>

        {/* 6 grievance cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {grievances.map((g, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-xl p-7 hover:-translate-y-1 hover:shadow-lg hover:shadow-gold/10 hover:border-gold/30 transition-all duration-300 relative group overflow-hidden">
              <div className="absolute left-0 bottom-0 w-full h-[3px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-xl"></div>
              <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-red-50 border border-red-100">
                <X className="w-5 h-5 text-red-600" />
              </div>
              <h3 className="font-sans font-bold text-lg text-ink mb-2">{g.title}</h3>
              <p className="text-ink-faint text-sm leading-relaxed">{g.text}</p>
              <span className="learn-more">Learn More →</span>
            </div>
          ))}
        </div>

        {/* $8,000 mistake + solution */}
        <div className="bg-ink rounded-2xl border border-gold/20 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 md:p-12 border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="inline-flex items-center gap-2 bg-red-900/30 px-3 py-1 rounded-full mb-5">
                <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                <span className="font-sans text-[9px] uppercase tracking-wider text-red-400 font-bold">The $8,000 Mistake</span>
              </div>
              <h3 className="font-sans font-bold text-2xl text-white leading-snug mb-5">
                What the factory ships<br /><span className="font-light text-white/50">when no one is on the ground</span>
              </h3>
              <ul className="space-y-3">
                {["Factory barcode on the product instead of your FNSKU","One shipping label on one side of the carton","Packing peanuts (banned by Amazon) as void fill","No polybag or suffocation warning where required","Quantity that doesn't match your shipment plan","Commercial invoice in the factory's name, not your brand"].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-white/70 leading-relaxed">
                    <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" /><span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-10 md:p-12 bg-white/[0.03]">
              <div className="inline-flex items-center gap-2 bg-gold/10 px-3 py-1 rounded-full mb-5">
                <PackageCheck className="w-3.5 h-3.5 text-gold" />
                <span className="font-sans text-[9px] uppercase tracking-wider text-gold font-bold">What XinAo Ships Instead</span>
              </div>
              <h3 className="font-sans font-bold text-2xl text-white leading-snug mb-5">
                FBA-ready, every time<br /><span className="font-light text-gold-light">prepped at our China facility</span>
              </h3>
              <ul className="space-y-3">
                {solutions.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-white/85 leading-relaxed">
                    <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" /><span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── PHOTO STRIP ── */}
      <div className="photo-strip">
        <div className="photo-strip-item"><img src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80" alt="Warehouse" loading="lazy" /><div className="photo-strip-label">Warehouse Logistics</div></div>
        <div className="photo-strip-item"><img src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&q=80" alt="QC" loading="lazy" /><div className="photo-strip-label">Quality Control</div></div>
        <div className="photo-strip-item"><img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80" alt="Inspection" loading="lazy" /><div className="photo-strip-label">On-Site Inspection</div></div>
        <div className="photo-strip-item"><img src="https://images.unsplash.com/photo-1586528116493-a029325540f5?w=600&q=80" alt="Shipping" loading="lazy" /><div className="photo-strip-label">Export & Shipping</div></div>
      </div>

    </section>
  );
}
