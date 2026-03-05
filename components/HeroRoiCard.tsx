"use client";

import React, { useState } from "react";
import { ShieldCheck, ChevronRight, TrendingUp, BarChart3 } from "lucide-react";
import InvestmentReportPopup from "./InvestmentReportPopup";

export default function HeroRoiCard() {
  const [reportOpen, setReportOpen] = useState(false);

  const boxBase =
    "rounded-2xl bg-zinc-900/75 border border-white/10 backdrop-blur-xl shadow-xl hover:border-teal-400/30 transition-all duration-300 flex flex-col justify-center items-center text-center";

  return (
    <>
      {/* 4 separate big portal boxes – hero right side, 2x2 */}
      <div className="absolute right-[16px] sm:right-[24px] md:right-[40px] lg:right-[56px] xl:right-[72px] bottom-[8%] md:bottom-[10%] lg:bottom-[12%] z-10 w-[200px] sm:w-[240px] md:w-[280px] lg:w-[300px]">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5">
          {/* Box 1: Verified Trajectory – big, separate */}
          <div className={`${boxBase} min-h-[100px] sm:min-h-[120px] md:min-h-[130px] p-4 sm:p-5 md:p-6`}>
            <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-teal-400 shrink-0 mb-2 sm:mb-3" />
            <span className="text-[10px] sm:text-xs md:text-sm font-bold text-zinc-400 uppercase tracking-widest leading-tight">Verified</span>
            <span className="text-[9px] sm:text-[10px] text-zinc-500 mt-0.5">Trajectory</span>
          </div>

          {/* Box 2: Investment Growth – big, separate */}
          <div className={`${boxBase} min-h-[100px] sm:min-h-[120px] md:min-h-[130px] p-4 sm:p-5 md:p-6`}>
            <TrendingUp className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-teal-400 shrink-0 mb-2 sm:mb-3" />
            <span className="text-[10px] sm:text-xs md:text-sm font-bold text-zinc-400 uppercase tracking-widest leading-tight">Investment</span>
            <span className="text-[9px] sm:text-[10px] text-zinc-500 mt-0.5">Growth</span>
          </div>

          {/* Box 3: Total ROI – big, separate */}
          <div className={`${boxBase} min-h-[100px] sm:min-h-[120px] md:min-h-[130px] p-4 sm:p-5 md:p-6`}>
            <BarChart3 className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-teal-400 shrink-0 mb-2 sm:mb-3" />
            <span className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wider">Total ROI</span>
            <span className="text-lg sm:text-xl md:text-2xl font-black text-white mt-1">$1M+</span>
          </div>

          {/* Box 4: View full report – big, separate, click opens report */}
          <button
            type="button"
            onClick={() => setReportOpen(true)}
            className={`${boxBase} min-h-[100px] sm:min-h-[120px] md:min-h-[130px] p-4 sm:p-5 md:p-6 cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:ring-offset-2 focus:ring-offset-transparent`}
          >
            <span className="report-cta-blink text-[10px] sm:text-xs md:text-sm font-semibold text-teal-400 uppercase tracking-widest leading-tight">View full</span>
            <span className="report-cta-blink text-[10px] sm:text-xs md:text-sm font-semibold text-teal-400 mt-1 flex items-center gap-1">
              report
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </span>
          </button>
        </div>
      </div>

      <InvestmentReportPopup open={reportOpen} onClose={() => setReportOpen(false)} />
    </>
  );
}
