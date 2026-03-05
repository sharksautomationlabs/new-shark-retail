"use client";

const items = [
  "AMAZON ↑ +24.3%",
  "SHOPIFY ↑ +31.7%",
  "TIKTOK SHOP ↑ +89.2%",
  "WALMART ↑ +18.5%",
  "CLIENT AVG ROI: 340%",
  "$42M+ REVENUE MANAGED",
  "500+ ACTIVE INVESTORS",
];

export default function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div className="relative z-10 topbar-engagement">
      <div className="overflow-hidden">
        <div
          className="ticker-track whitespace-nowrap py-2.5 px-6 lg:px-12"
        style={{
          borderTop: "1px solid transparent",
          borderBottom: "1px solid rgba(20, 184, 166, 0.35)",
        }}
      >
        {doubled.map((text, i) => (
          <span
            key={i}
            className="topbar-text inline-flex items-center shrink-0 font-mono text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-white/90 px-6 lg:px-8"
          >
            <span className="text-teal-400/90">{text}</span>
            <span
              className="ml-6 lg:ml-8 text-teal-400/40 text-[8px]"
              aria-hidden
            >
              ◆
            </span>
          </span>
        ))}
        </div>
      </div>

      {/* Bottom glow line – theme teal */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400/60 to-transparent pointer-events-none" />
    </div>
  );
}
