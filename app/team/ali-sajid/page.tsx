import type { Metadata } from "next";
import Image from "next/image";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export const metadata: Metadata = {
  title: "Ali Sajid | Finance Payment Receiver — The Retail Automation",
  description:
    "Ali Sajid is a Finance Payment Receiver employed at The Retail Automation, a leading e-commerce automation company based in Karachi, Pakistan.",
  alternates: {
    canonical: "https://thesharkretail.com/team/ali-sajid",
  },
};

export default function AliSajidProfile() {
  return (
    <div className="min-h-screen bg-[#020205]">
      <Header />

      <main className="py-20 px-4 sm:px-8">
        <div className="max-w-3xl mx-auto">

          {/* Top badge */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.07]">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-[0.2em]">Team Member Profile</span>
            </div>
          </div>

          {/* Profile card */}
          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm overflow-hidden">

            {/* Avatar + name block — centered */}
            <div className="px-8 sm:px-12 pt-14 pb-10 flex flex-col items-center text-center">

              {/* Circle photo */}
              <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-teal-500/30 shadow-2xl mb-5 flex-shrink-0">
                <Image
                  src="/images/team/ali-sajid.png"
                  alt="Ali Sajid — Finance Payment Receiver at The Retail Automation"
                  width={144}
                  height={144}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 5%' }}
                  priority
                />
              </div>

              {/* Company badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 mb-4">
                <Image
                  src="/images/retail-automation-logo.png"
                  alt="The Retail Automation logo"
                  width={80}
                  height={20}
                  className="h-5 w-auto object-contain"
                />
                <span className="text-teal-400 text-xs font-bold uppercase tracking-widest">The Retail Automation</span>
              </div>

              {/* Name & role */}
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3">
                Ali Sajid
              </h1>
              <div className="flex flex-wrap justify-center items-center gap-3 mb-8">
                <span className="px-3 py-1 rounded-md bg-teal-500/15 border border-teal-500/25 text-teal-300 text-sm font-bold uppercase tracking-widest">
                  Finance Payment Receiver
                </span>
                <span className="px-3 py-1 rounded-md bg-white/[0.05] border border-white/10 text-gray-400 text-sm font-semibold uppercase tracking-widest">
                  Employee
                </span>
              </div>

            </div>{/* end centered block */}

            {/* Info grid — left aligned */}
            <div className="px-8 sm:px-12 pb-10">

              {/* Divider */}
              <div className="border-t border-white/[0.07] mb-8"></div>

              {/* Info grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Company */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">Company</p>
                    <p className="text-white font-semibold text-base">The Retail Automation</p>
                    <p className="text-gray-400 text-sm">thesharkretail.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">Phone</p>
                    <a href="tel:+923146569768" className="text-white font-semibold text-base hover:text-teal-400 transition-colors">
                      +92 314 656 9768
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">Email</p>
                    <a href="mailto:ali.sajid.0023@gmail.com" className="text-white font-semibold text-base hover:text-teal-400 transition-colors break-all">
                      ali.sajid.0023@gmail.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">Primary Address</p>
                    <p className="text-white font-semibold text-base leading-snug">
                      House 1045, Sector 31-B<br />
                      KDA Employees, Korangi Crossing<br />
                      Karachi, Pakistan
                    </p>
                    <p className="text-teal-400 text-sm font-mono mt-1">Postal Code: 74900</p>
                  </div>
                </div>

              </div>

              {/* Divider */}
              <div className="border-t border-white/[0.07] my-8"></div>

              {/* About / relationship statement */}
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6">
                <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-3">About</p>
                <p className="text-gray-300 text-base leading-relaxed">
                  Ali Sajid is a Finance Payment Receiver employed at <span className="text-teal-400 font-semibold">The Retail Automation</span>, an
                  e-commerce automation company that builds and manages Amazon, Shopify, TikTok Shop, and Walmart stores for investors and operators worldwide.
                  In his role, Ali handles payment processing and financial coordination on behalf of the company.
                </p>
              </div>

            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
