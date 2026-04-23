"use client";

import React, { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import InvestmentReportPopup from "./InvestmentReportPopup";

const PLATFORMS = [
  { name: "AMAZON", pct: 72, amount: "$720" },
  { name: "TIKTOK SHOP", pct: 89, amount: "$340" },
  { name: "SHOPIFY", pct: 48, amount: "$180" },
  { name: "WALMART", pct: 35, amount: "$120" },
] as const;

export default function HeroPortfolioCard() {
  const [income, setIncome] = useState(128430);
  const [earnedToday, setEarnedToday] = useState(4210);
  const [percentChange, setPercentChange] = useState(3.4);
  const [sleepAmount, setSleepAmount] = useState(1240);
  const [reportOpen, setReportOpen] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setIncome((prev) => prev + Math.floor(Math.random() * 90) + 10);
    }, 2200);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      const delta = Math.floor(Math.random() * 80) + 20;
      setEarnedToday((prev) => Math.max(0, prev + (Math.random() > 0.15 ? delta : -delta)));
      setPercentChange((prev) => Math.max(0.1, Math.min(8, prev + (Math.random() - 0.5) * 0.4)));
    }, 3000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setSleepAmount((prev) => prev + Math.floor(Math.random() * 60) + 20);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <div
        className="
          w-full mx-auto
          md:max-w-none md:w-[280px] lg:w-[320px] xl:w-[340px]
          md:absolute md:right-[32px] lg:right-[56px] xl:right-[72px]
          md:bottom-[10%] lg:bottom-[12%]
          z-10
        "
      >
        <div className="hero-portfolio-card relative overflow-hidden rounded-2xl bg-zinc-900/90 border border-white/10 backdrop-blur-xl p-4 sm:p-6">
          {/* Label */}
          <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-zinc-500 uppercase mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            Your portfolio · Live
          </div>

          {/* Big animated value */}
          <div className="font-mono text-[28px] sm:text-[36px] md:text-[48px] lg:text-[52px] leading-none tracking-tight text-white tabular-nums">
            ${income.toLocaleString()}
          </div>

          {/* Earned today */}
          <div className="text-[12px] sm:text-[13px] text-teal-400 font-medium tracking-wide mt-1 mb-5">
            ↑ +${earnedToday.toLocaleString()} earned today &nbsp;(+{percentChange.toFixed(1)}%)
          </div>

          {/* Sleep indicator */}
          <div className="flex items-start gap-3 p-3 rounded-xl mb-5 bg-teal-500/10 border border-teal-400/20">
            <span className="text-lg mt-0.5" aria-hidden>😴</span>
            <p className="text-[11px] sm:text-[12px] text-zinc-400 leading-relaxed">
              While you were sleeping,{" "}
              <strong className="text-teal-400">Retail Automation made ${sleepAmount.toLocaleString()}</strong> for you across 4 platforms.
            </p>
          </div>

          <div className="h-px bg-white/10 mb-4" />

          {/* Platform breakdown */}
          <div className="space-y-3 mb-5">
            {PLATFORMS.map((row) => (
              <div key={row.name} className="flex items-center gap-3">
                <span className="font-mono text-[10px] tracking-wide text-zinc-500 uppercase w-20 shrink-0">
                  {row.name}
                </span>
                <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-teal-400/90 transition-all duration-700"
                    style={{ width: `${row.pct}%` }}
                  />
                </div>
                <span className="font-mono text-[11px] text-teal-400 w-12 text-right shrink-0">
                  {row.amount}
                </span>
              </div>
            ))}
          </div>

          {/* View full report – same popup as before */}
          <button
            type="button"
            onClick={() => setReportOpen(true)}
            className="report-cta-blink w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-teal-500/15 border border-teal-400/30 text-teal-400 font-mono text-[11px] font-semibold tracking-widest uppercase hover:bg-teal-500/25 hover:border-teal-400/50 transition-all cursor-pointer"
          >
            View full report
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <InvestmentReportPopup open={reportOpen} onClose={() => setReportOpen(false)} />
    </>
  );
}
