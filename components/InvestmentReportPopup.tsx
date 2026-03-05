"use client";

import React, { useId, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, X, TrendingUp } from "lucide-react";
import Link from "next/link";

interface InvestmentReportPopupProps {
  open: boolean;
  onClose: () => void;
}

/** Z-index: sabse upar, koi bhi header/overlay iske upar na aaye */
const POPUP_BACKDROP_Z = 2147483646;
const POPUP_MODAL_Z = 2147483647;

export default function InvestmentReportPopup({ open, onClose }: InvestmentReportPopupProps) {
  const id = useId().replace(/:/g, "");
  const lineGrad = `reportLineGrad-${id}`;
  const fillGrad = `reportFillGrad-${id}`;
  // Popup open hone par body scroll lock – 2-finger scroll sirf popup ke andar
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    const prevPaddingRight = document.body.style.paddingRight;
    document.body.style.overflow = "hidden";
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;
    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPaddingRight;
    };
  }, [open]);

  const popupContent = (
    <AnimatePresence>
      {open && (
        <>
          {/* Full-screen overlay – click pe close */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
            style={{ zIndex: POPUP_BACKDROP_Z }}
            onClick={onClose}
            aria-hidden
          />
          {/* Modal container – center, scroll area andar */}
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ type: "spring", damping: 26, stiffness: 280 }}
            className="fixed inset-0 flex items-center justify-center p-3 sm:p-4 md:p-6 pointer-events-none"
            style={{ zIndex: POPUP_MODAL_Z }}
          >
            <div
              className="flex flex-col w-full max-w-4xl h-[82vh] sm:h-[86vh] max-h-[90vh] rounded-none sm:rounded-2xl bg-zinc-900 border-0 sm:border border-zinc-700 shadow-2xl pointer-events-auto overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header – hamesha dikhe, close clickable */}
              <div className="shrink-0 flex items-center justify-between px-4 sm:px-6 py-4 border-b border-zinc-800 bg-zinc-900">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-teal-400 shrink-0" />
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Investment Growth Report</span>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable body – yahi 2-finger / trackpad scroll lega */}
              <div
                className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden overscroll-contain touch-pan-y"
                style={{ WebkitOverflowScrolling: "touch" }}
              >
              <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
                {/* Key metrics - prominent */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 }}
                  className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
                >
                  {[
                    { label: "Total ROI", value: "$1,000,000+", sub: "Cumulative", highlight: true },
                    { label: "Avg. ROI", value: "247%", sub: "YTD" },
                    { label: "Phases", value: "3", sub: "Completed" },
                    { label: "Status", value: "Active", sub: "Live" },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 + i * 0.05, type: "spring", stiffness: 200 }}
                      className={`p-4 sm:p-5 rounded-xl border ${stat.highlight ? "bg-teal-500/10 border-teal-400/30" : "bg-zinc-800/50 border-zinc-700"}`}
                    >
                      <div className="text-[10px] sm:text-xs font-semibold text-zinc-500 uppercase tracking-wider">{stat.label}</div>
                      <div className={`mt-1 text-lg sm:text-xl font-black ${stat.highlight ? "text-teal-300" : "text-white"}`}>{stat.value}</div>
                      {stat.sub ? <div className="text-[10px] text-teal-400 font-medium mt-0.5">{stat.sub}</div> : null}
                    </motion.div>
                  ))}
                </motion.div>

                {/* Chart 1: Main growth curve */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="rounded-xl bg-zinc-800/50 border border-zinc-700 p-4 sm:p-5"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-4 h-4 text-teal-400" />
                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Growth trajectory</span>
                  </div>
                  <div className="relative w-full h-[220px] sm:h-[280px] md:h-[320px]">
                    <div className="absolute inset-0 flex flex-col justify-between opacity-10 pointer-events-none p-4">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-full h-px bg-white" />
                      ))}
                    </div>
                    <svg className="absolute inset-0 w-full h-full overflow-visible p-4" viewBox="0 0 400 200" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id={lineGrad} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.2" />
                          <stop offset="50%" stopColor="#2dd4bf" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#fff" stopOpacity="1" />
                        </linearGradient>
                        <linearGradient id={fillGrad} x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <motion.path
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        d="M 0 200 C 100 200, 150 120, 200 100 C 250 80, 300 40, 400 20 L 400 200 Z"
                        fill={`url(#${fillGrad})`}
                      />
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
                        d="M 0 200 C 100 200, 150 120, 200 100 C 250 80, 300 40, 400 20"
                        fill="none"
                        stroke={`url(#${lineGrad})`}
                        strokeWidth="4"
                        strokeLinecap="round"
                        className="drop-shadow-[0_0_12px_rgba(45,212,191,0.5)]"
                      />
                    </svg>
                    {[
                      { bottom: "50%", left: "50%", val: "$500K", label: "Phase 2" },
                      { bottom: "88%", left: "98%", val: "$1M+", label: "Current" },
                    ].map((node, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.35, delay: 0.7 + i * 0.1, type: "spring", stiffness: 200 }}
                        className="absolute flex flex-col items-center -translate-x-1/2 translate-y-1/2"
                        style={{ bottom: node.bottom, left: node.left }}
                      >
                        <div className="mb-1 px-2.5 py-1 bg-zinc-800 border border-zinc-600 rounded-lg text-xs font-bold text-white whitespace-nowrap">{node.val}</div>
                        <div className="relative w-3 h-3 bg-white rounded-full shadow-[0_0_10px_#2dd4bf]">
                          <div className="absolute inset-0 rounded-full bg-teal-500" />
                        </div>
                        <div className="mt-1 text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">{node.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Chart 2: Portfolio / phase breakdown bars */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="rounded-xl bg-zinc-800/50 border border-zinc-700 p-4 sm:p-5"
                >
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Portfolio mix (revenue share)</span>
                  <div className="mt-4 flex flex-col gap-3 sm:gap-4">
                    {[
                      { label: "Amazon", pct: 42 },
                      { label: "Shopify", pct: 28 },
                      { label: "Walmart", pct: 18 },
                      { label: "TikTok Shop", pct: 12 },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="w-24 sm:w-28 text-xs font-medium text-zinc-400 shrink-0">{item.label}</span>
                        <div className="flex-1 h-8 rounded-lg bg-zinc-800 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${item.pct}%` }}
                            transition={{ duration: 0.8, delay: 0.5 + i * 0.08, ease: "easeOut" }}
                            className="h-full rounded-lg bg-gradient-to-r from-teal-500/80 to-teal-400"
                          />
                        </div>
                        <span className="text-xs font-bold text-white w-10 text-right">{item.pct}%</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Full summary */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="rounded-xl bg-zinc-800/30 border border-zinc-700/80 p-4 sm:p-6"
                >
                  <h4 className="text-sm font-bold text-zinc-300 uppercase tracking-widest mb-3">Full summary</h4>
                  <ul className="space-y-2 text-sm text-zinc-400 leading-relaxed">
                    <li>• Verified trajectory reflects real portfolio performance across Amazon, Shopify, TikTok Shop and Walmart.</li>
                    <li>• Cumulative ROI has crossed $1M+ with three completed phases and an average 247% return (YTD).</li>
                    <li>• Revenue mix is diversified; growth is tracked with clear milestones and clean reporting.</li>
                    <li>• For a detailed breakdown, custom projections and strategy call, schedule a session with our team.</li>
                  </ul>
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="pt-2 pb-2 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4"
                >
                  <p className="text-xs text-zinc-500">Need a custom report or strategy session?</p>
                  <Link
                    href="/contact"
                    onClick={onClose}
                    className="text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors cursor-pointer"
                  >
                    Book a consultant →
                  </Link>
                </motion.div>
              </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  if (typeof document === "undefined") return null;
  return createPortal(popupContent, document.body);
}
