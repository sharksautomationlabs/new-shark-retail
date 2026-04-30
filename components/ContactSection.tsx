"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Send, CheckCircle2, AlertCircle } from 'lucide-react';

// --- Elite Holographic 3D Icons ---
const Globe3DIcon = () => (
  <motion.div 
    whileHover={{ scale: 1.1, rotateZ: 5 }}
    transition={{ type: "spring", stiffness: 300, damping: 10 }}
    className="relative w-14 h-14 flex items-center justify-center"
  >
    <div className="absolute inset-0 bg-teal-500/20 rounded-full blur-xl"></div>
    <svg width="56" height="56" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 drop-shadow-[0_0_15px_rgba(20,184,166,0.5)]">
      <defs>
        <radialGradient id="globeGrad" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#2dd4bf" stopOpacity="1"/>
          <stop offset="60%" stopColor="#0f766e" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#042f2e" stopOpacity="0.8"/>
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="18" fill="url(#globeGrad)" stroke="#5eead4" strokeWidth="1"/>
      <ellipse cx="24" cy="24" rx="22" ry="6" fill="none" stroke="#2dd4bf" strokeWidth="1.5" strokeDasharray="4 4">
        <animateTransform attributeName="transform" type="rotate" values="0 24 24;360 24 24" dur="10s" repeatCount="indefinite" />
      </ellipse>
      <ellipse cx="24" cy="24" rx="6" ry="22" fill="none" stroke="#2dd4bf" strokeWidth="1" opacity="0.5"/>
      <path d="M6 24 H42" stroke="#5eead4" strokeWidth="1" strokeDasharray="2 2" opacity="0.6"/>
      <circle cx="14" cy="18" r="1.5" fill="#fff" className="animate-pulse"/>
      <circle cx="34" cy="28" r="1.5" fill="#fff" className="animate-pulse" style={{animationDelay: "0.5s"}}/>
    </svg>
  </motion.div>
);

const Users3DIcon = () => (
  <motion.div 
    whileHover={{ scale: 1.1, y: -5 }}
    transition={{ type: "spring", stiffness: 300, damping: 10 }}
    className="relative w-14 h-14 flex items-center justify-center"
  >
    <div className="absolute inset-0 bg-teal-500/20 rounded-full blur-xl"></div>
    <svg width="56" height="56" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 drop-shadow-[0_0_15px_rgba(20,184,166,0.5)]">
      <defs>
        <radialGradient id="usersGrad" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#2dd4bf" stopOpacity="1"/>
          <stop offset="100%" stopColor="#0f766e" stopOpacity="0.8"/>
        </radialGradient>
      </defs>
      <circle cx="24" cy="16" r="6" fill="url(#usersGrad)" stroke="#5eead4" strokeWidth="1"/>
      <path d="M14 36 C14 28 34 28 34 36" stroke="url(#usersGrad)" strokeWidth="6" strokeLinecap="round"/>
      <circle cx="12" cy="22" r="4" fill="#042f2e" stroke="#2dd4bf" strokeWidth="1.5"/>
      <circle cx="36" cy="22" r="4" fill="#042f2e" stroke="#2dd4bf" strokeWidth="1.5"/>
      <path d="M24 6 L28 10 H20 Z" fill="#5eead4" className="animate-bounce"/>
    </svg>
  </motion.div>
);

// --- High-Tech Holographic Earth ---
const HolographicEarth = () => {
  return (
    <div className="absolute top-0 right-0 w-[18rem] h-[18rem] sm:w-[24rem] sm:h-[24rem] lg:w-[40rem] lg:h-[40rem] -z-10 opacity-40 lg:opacity-60 pointer-events-none mix-blend-screen flex items-center justify-center translate-x-1/3 lg:translate-x-1/4 -translate-y-1/4">
      {/* Scanning Laser */}
      <motion.div 
        animate={{ y: ["-150%", "150%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute w-full h-1 bg-teal-400 shadow-[0_0_20px_#2dd4bf] z-20"
      />
      
      <div className="relative w-full h-full animate-[spin_40s_linear_infinite]">
        <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
          {/* Base Hologram Sphere */}
          <circle cx="100" cy="100" r="80" fill="radial-gradient(circle, rgba(20,184,166,0.1) 0%, rgba(0,0,0,0) 80%)" stroke="#0f766e" strokeWidth="0.5" strokeDasharray="4 4" />
          
          {/* Data Rings */}
          <ellipse cx="100" cy="100" rx="90" ry="30" stroke="#2dd4bf" strokeWidth="1" fill="none" opacity="0.3" transform="rotate(30 100 100)">
            <animate attributeName="stroke-dasharray" values="0,1000;1000,0" dur="10s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="100" cy="100" rx="90" ry="30" stroke="#14b8a6" strokeWidth="2" fill="none" opacity="0.5" transform="rotate(-45 100 100)" strokeDasharray="10 20" />
          
          {/* Grid Lines */}
          {[...Array(8)].map((_, i) => (
            <ellipse key={i} cx="100" cy="100" rx="80" ry={10 + i * 10} stroke="#0f766e" strokeWidth="0.5" fill="none" opacity="0.4" />
          ))}
          
          {/* Connecting Nodes */}
          {[
            {x: 60, y: 60}, {x: 140, y: 70}, {x: 80, y: 140}, {x: 150, y: 120}, {x: 40, y: 100}
          ].map((node, i) => (
            <g key={i}>
              <circle cx={node.x} cy={node.y} r="2" fill="#5eead4" className="animate-ping" style={{animationDuration: `${1 + i}s`}}/>
              <circle cx={node.x} cy={node.y} r="1" fill="#fff" />
              <line x1="100" y1="100" x2={node.x} y2={node.y} stroke="#2dd4bf" strokeWidth="0.5" opacity="0.3" strokeDasharray="2 2" />
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
};

// --- Reusable Animated Info Block ---
const InfoBlock: React.FC<{ icon: React.ReactNode; title: string; description: string; delay: number }> = ({ icon, title, description, delay }) => (
  <motion.div 
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-teal-500/30 transition-all duration-300 ease-out backdrop-blur-sm overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-teal-500/0 group-hover:from-teal-500/10 transition-all duration-500" />
    <div className="relative z-10 flex items-start gap-6">
      <div className="mt-1">{icon}</div>
      <div>
        <h3 className="text-xl sm:text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:to-teal-300 transition-all duration-500 tracking-tight">
          {title}
        </h3>
        <p className="text-gray-400 mt-2 max-w-sm text-sm sm:text-base leading-relaxed group-hover:text-gray-300">
          {description}
        </p>
      </div>
    </div>
  </motion.div>
);

// --- Sci-Fi Form Field Component ---
const FormField = ({ label, required = true, as = "input", ...props }: any) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative group w-full">
      <label className={`absolute left-4 transition-all duration-300 pointer-events-none z-10 ${
        isFocused || props.value ? '-top-2.5 text-xs bg-[#0a0a0a] px-2 text-teal-400 font-semibold' : 'top-3.5 text-sm text-gray-500'
      }`}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      
      {as === 'textarea' ? (
        <textarea 
          {...props}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          rows={4}
          className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 pt-5 text-white outline-none transition-all duration-300 focus:border-teal-400/50 focus:bg-teal-400/[0.02] focus:shadow-[0_0_15px_rgba(20,184,166,0.1)] resize-none"
        />
      ) : (
        <input 
          {...props}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 text-white outline-none transition-all duration-300 focus:border-teal-400/50 focus:bg-teal-400/[0.02] focus:shadow-[0_0_15px_rgba(20,184,166,0.1)] h-[56px]"
        />
      )}
      
      {/* Animated Bottom Line */}
      <div className={`absolute bottom-0 left-0 h-[2px] bg-teal-400 transition-all duration-500 ease-out rounded-b-xl ${isFocused ? 'w-full opacity-100' : 'w-0 opacity-0'}`} />
    </div>
  );
};

// --- Main Elite Contact Section ---
const ContactSection: React.FC = () => {

  const [selectedCountry, setSelectedCountry] = useState({ code: '+1', name: 'United States' });
  const [phoneNumber, setPhoneNumber] = useState('+1 ');
  const [budget, setBudget] = useState('');
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', companyName: '', companyUrl: '', projectDetails: '', jobInquiry: 'Please Select', services: [] as string[]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Reuse existing logic
  const countryCodes = [{ code: '+1', name: 'United States' }, { code: '+44', name: 'United Kingdom' }, { code: '+92', name: 'Pakistan' }, { code: '+971', name: 'United Arab Emirates' }, { code: '+61', name: 'Australia' }, { code: '+91', name: 'India' }]; // Truncated for brevity, paste your full list here
  
  const servicesOptions = [
    "Amazon Automation", "Shopify Automation", "TikTok Shop", "Walmart Automation", 
    "Amazon PPC Management", "Digital Marketing", "Virtual Assistant", "Account Reinstatement", "Content Creation", 
    "Product Hunting"
  ];

  const handleInputChange = (e: any) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API Call for demo
    setTimeout(() => { setIsSubmitting(false); setSubmitStatus('success'); }, 2000);
  };

  return (
    <section className="relative bg-[#050505] text-white pt-28 pb-24 lg:pt-36 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans selection:bg-teal-500/30 selection:text-teal-200 gpu-smooth min-h-dvh">
      
      {/* Elite Background Effects */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none noise-texture"></div>
      <div className="absolute top-1/4 left-0 w-[50rem] h-[50rem] bg-teal-600/10 rounded-full blur-[120px] -translate-x-1/2 pointer-events-none"></div>
      <HolographicEarth />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start relative z-10 max-w-7xl">
        
        {/* Left Column: Elite Form */}
        <motion.div 
          initial={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="lg:col-span-7 relative"
        >
          {/* Form Glass Container */}
          <div className="relative bg-white/[0.02] backdrop-blur-2xl border border-white/[0.05] p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-[2rem] shadow-2xl overflow-hidden group">
            
            {/* Ambient inner glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-teal-500/20 rounded-full blur-3xl pointer-events-none transition-all duration-700 group-hover:bg-teal-400/30"></div>

            <div className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold uppercase tracking-widest mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
                New project intake
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-teal-400 tracking-tight">
                Tell Us What You Want the Store to Do
              </h2>
              <p className="text-gray-400 mt-3 text-sm sm:text-base max-w-lg">
                Share a few details and we’ll come back with the best marketplace plan, clear next steps, and realistic timelines.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {/* Form Fields wrapped in staggered animation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField label="First Name" name="firstName" value={formData.firstName} onChange={handleInputChange} />
                <FormField label="Last Name" name="lastName" value={formData.lastName} onChange={handleInputChange} />
              </div>
              
              <FormField label="Email Address" type="email" name="email" value={formData.email} onChange={handleInputChange} />
              
              {/* Phone & Budget Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="absolute -top-2.5 left-4 text-xs bg-[#0a0a0a] px-2 text-teal-400 font-semibold z-10">Phone Number *</label>
                  <div className="flex bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden focus-within:border-teal-400/50 focus-within:shadow-[0_0_15px_rgba(20,184,166,0.1)] transition-all h-[56px]">
                    <select className="bg-transparent text-gray-300 px-3 outline-none border-r border-white/10 cursor-pointer text-sm">
                      {countryCodes.map(c => <option key={c.code} value={c.code} className="bg-black">{c.code}</option>)}
                    </select>
                    <input type="tel" className="flex-1 bg-transparent px-4 text-white outline-none" placeholder="000 000 0000" />
                  </div>
                </div>

                <div className="relative">
                  <label className="absolute -top-2.5 left-4 text-xs bg-[#0a0a0a] px-2 text-teal-400 font-semibold z-10">Capital Budget *</label>
                  <div className="flex bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden focus-within:border-teal-400/50 transition-all h-[56px] items-center px-4">
                    <span className="text-teal-500 font-bold mr-2">$</span>
                    <input type="number" placeholder="2000+" min="2000" className="flex-1 bg-transparent text-white outline-none" />
                  </div>
                </div>
              </div>

              {/* Interactive Service Grid */}
              <div className="pt-4">
                <label className="block text-sm font-semibold text-gray-300 mb-4">Required Architectures <span className="text-teal-500">*</span></label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {servicesOptions.map((service, i) => (
                    <label key={service} className="relative flex items-center p-3 rounded-lg border border-white/5 bg-white/[0.01] hover:bg-white/[0.05] cursor-pointer transition-all group overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 to-teal-500/0 group-hover:from-teal-500/5 transition-all"></div>
                      <input type="checkbox" className="peer sr-only" />
                      <div className="w-5 h-5 rounded border border-white/20 flex items-center justify-center peer-checked:bg-teal-500 peer-checked:border-teal-400 transition-all">
                        <CheckCircle2 className="w-3 h-3 text-black opacity-0 peer-checked:opacity-100 scale-0 peer-checked:scale-100 transition-all" />
                      </div>
                      <span className="ml-3 text-sm text-gray-400 peer-checked:text-white transition-colors">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              <FormField label="Project Specifications" as="textarea" name="projectDetails" value={formData.projectDetails} onChange={handleInputChange} required={false} />

              {/* Submit Button - Magnetic/Glitch Effect */}
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                disabled={isSubmitting}
                className="relative w-full h-14 bg-white text-black font-extrabold rounded-xl overflow-hidden group disabled:opacity-70 mt-4"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-teal-300 to-teal-500 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                <div className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">Processing Data <span className="animate-spin text-xl">⟳</span></span>
                  ) : submitStatus === 'success' ? (
                    <span className="flex items-center gap-2">Transmission Successful <CheckCircle2 className="w-5 h-5"/></span>
                  ) : (
                    <span className="flex items-center gap-2 group-hover:text-black transition-colors">Initialize Deployment <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform"/></span>
                  )}
                </div>
              </motion.button>

            </form>
          </div>
        </motion.div>

        {/* Right Column: Global Info */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-8 lg:space-y-12 lg:pl-8 pt-10 lg:pt-0 relative z-10">
          
          <div className="hidden lg:block absolute -right-20 top-10 text-[10rem] font-black text-white/[0.02] tracking-tighter pointer-events-none uppercase leading-none select-none">
            Connect
          </div>

          <InfoBlock 
            icon={<Globe3DIcon />}
            title="Global delivery footprint"
            description="We coordinate listings, supply partners, and reporting across the regions you sell in—one operating cadence, everywhere."
            delay={0.6}
          />
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <InfoBlock 
            icon={<Users3DIcon />}
            title="Senior operator bench"
            description="Your account is backed by channel leads who’ve run eight- and nine-figure marketplaces, not a rotating ticket queue."
            delay={0.8}
          />

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <div className="text-xs text-teal-500 uppercase tracking-widest mb-1">Direct Line</div>
              <a href="tel:+14692949964" className="text-white font-medium hover:text-teal-400 transition-colors block">(469) 294-9964</a>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <div className="text-xs text-teal-500 uppercase tracking-widest mb-1">Encrypted Mail</div>
              <a href="mailto:info@theretailautomation.com" className="text-white font-medium hover:text-teal-400 transition-colors block">info@theretailautomation.com</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;