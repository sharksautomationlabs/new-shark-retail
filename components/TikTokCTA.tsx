"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, Phone, Clock, TrendingUp, Mail } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 40, filter: 'blur(10px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { type: 'spring' as const, stiffness: 80, damping: 20 } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> { label: string; as?: 'textarea'; required?: boolean; }
const FormField: React.FC<FormFieldProps> = ({ label, as, required = true, ...props }) => (
  <div>
    <label className="block text-sm font-semibold text-gray-300 mb-1">{label} {required && <span className="text-red-400">*</span>}</label>
    {as === 'textarea' ? (
      <textarea {...props as React.TextareaHTMLAttributes<HTMLTextAreaElement>} rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white placeholder-gray-500 focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-colors" />
    ) : (
      <input {...props as React.InputHTMLAttributes<HTMLInputElement>} className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white placeholder-gray-500 focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-colors" />
    )}
  </div>
);

interface CheckboxProps { label: string; id: string; checked: boolean; onChange: (checked: boolean) => void; }
const Checkbox: React.FC<CheckboxProps> = ({ label, id, checked, onChange }) => (
  <div className="flex items-center">
    <input type="checkbox" id={id} checked={checked} onChange={(e) => onChange(e.target.checked)} className="w-4 h-4 text-teal-500 border-white/20 rounded focus:ring-teal-500 bg-white/5" />
    <label htmlFor={id} className="ml-2 text-sm text-gray-400">{label}</label>
  </div>
);

const TikTokCTA: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState({ code: '+1', name: 'United States' });
  const [phoneNumber, setPhoneNumber] = useState('');
  const [budget, setBudget] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    companyUrl: '',
    projectDetails: '',
    jobInquiry: 'Please Select',
    services: [] as string[]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const servicesOptions = [
    "TikTok Content Creation",
    "Influencer Partnership Management", 
    "Social Media Automation", 
    "Viral Content Strategy", 
    "TikTok Ads Optimization", 
    "Multi-platform Integration", 
    "Digital Marketing Solutions",
    "Social Commerce Optimization", 
    "Community Management", 
    "Other Social Media Services"
  ];

  // Format phone number based on country
  const formatPhoneNumber = (value: string, countryCode: string) => {
    const digits = value.replace(/\D/g, '');
    const codeDigits = countryCode.replace(/\D/g, '');
    let phoneDigits = digits;
    
    if (digits.startsWith(codeDigits)) {
      phoneDigits = digits.slice(codeDigits.length);
    }
    
    const maxLength = countryCode === '+1' ? 10 : 12;
    phoneDigits = phoneDigits.slice(0, maxLength);
    
    if (countryCode === '+1') {
      if (phoneDigits.length === 0) return countryCode + ' ';
      if (phoneDigits.length <= 3) return `${countryCode} (${phoneDigits}`;
      if (phoneDigits.length <= 6) return `${countryCode} (${phoneDigits.slice(0, 3)}) ${phoneDigits.slice(3)}`;
      return `${countryCode} (${phoneDigits.slice(0, 3)}) ${phoneDigits.slice(3, 6)}-${phoneDigits.slice(6, 10)}`;
    } else if (countryCode === '+44') {
      if (phoneDigits.length === 0) return countryCode + ' ';
      if (phoneDigits.length <= 4) return `${countryCode} ${phoneDigits}`;
      return `${countryCode} ${phoneDigits.slice(0, 4)} ${phoneDigits.slice(4, 10)}`;
    } else if (countryCode === '+92') {
      if (phoneDigits.length === 0) return countryCode + ' ';
      if (phoneDigits.length <= 3) return `${countryCode} ${phoneDigits}`;
      return `${countryCode} ${phoneDigits.slice(0, 3)} ${phoneDigits.slice(3, 10)}`;
    } else if (countryCode === '+91') {
      if (phoneDigits.length === 0) return countryCode + ' ';
      if (phoneDigits.length <= 5) return `${countryCode} ${phoneDigits}`;
      return `${countryCode} ${phoneDigits.slice(0, 5)} ${phoneDigits.slice(5, 10)}`;
    } else if (countryCode === '+971' || countryCode === '+966' || countryCode === '+974') {
      if (phoneDigits.length === 0) return countryCode + ' ';
      if (phoneDigits.length <= 1) return `${countryCode} ${phoneDigits}`;
      if (phoneDigits.length <= 4) return `${countryCode} ${phoneDigits.slice(0, 1)} ${phoneDigits.slice(1)}`;
      return `${countryCode} ${phoneDigits.slice(0, 1)} ${phoneDigits.slice(1, 4)} ${phoneDigits.slice(4, 8)}`;
    } else {
      if (phoneDigits.length === 0) return countryCode + ' ';
      if (phoneDigits.length <= 4) return `${countryCode} ${phoneDigits}`;
      if (phoneDigits.length <= 7) return `${countryCode} ${phoneDigits.slice(0, 4)} ${phoneDigits.slice(4)}`;
      return `${countryCode} ${phoneDigits.slice(0, 4)} ${phoneDigits.slice(4, 7)} ${phoneDigits.slice(7, 11)}`;
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formatted = formatPhoneNumber(value, selectedCountry.code);
    setPhoneNumber(formatted);
  };

  const countryCodes = [
    { code: '+213', name: 'Algeria' },
    { code: '+54', name: 'Argentina' },
    { code: '+61', name: 'Australia' },
    { code: '+43', name: 'Austria' },
    { code: '+973', name: 'Bahrain' },
    { code: '+880', name: 'Bangladesh' },
    { code: '+32', name: 'Belgium' },
    { code: '+591', name: 'Bolivia' },
    { code: '+55', name: 'Brazil' },
    { code: '+237', name: 'Cameroon' },
    { code: '+1', name: 'Canada' },
    { code: '+56', name: 'Chile' },
    { code: '+86', name: 'China' },
    { code: '+57', name: 'Colombia' },
    { code: '+506', name: 'Costa Rica' },
    { code: '+420', name: 'Czech Republic' },
    { code: '+45', name: 'Denmark' },
    { code: '+593', name: 'Ecuador' },
    { code: '+20', name: 'Egypt' },
    { code: '+503', name: 'El Salvador' },
    { code: '+251', name: 'Ethiopia' },
    { code: '+358', name: 'Finland' },
    { code: '+679', name: 'Fiji' },
    { code: '+33', name: 'France' },
    { code: '+689', name: 'French Polynesia' },
    { code: '+233', name: 'Ghana' },
    { code: '+49', name: 'Germany' },
    { code: '+30', name: 'Greece' },
    { code: '+502', name: 'Guatemala' },
    { code: '+852', name: 'Hong Kong' },
    { code: '+504', name: 'Honduras' },
    { code: '+36', name: 'Hungary' },
    { code: '+91', name: 'India' },
    { code: '+62', name: 'Indonesia' },
    { code: '+353', name: 'Ireland' },
    { code: '+98', name: 'Iran' },
    { code: '+964', name: 'Iraq' },
    { code: '+972', name: 'Israel' },
    { code: '+39', name: 'Italy' },
    { code: '+81', name: 'Japan' },
    { code: '+962', name: 'Jordan' },
    { code: '+254', name: 'Kenya' },
    { code: '+82', name: 'South Korea' },
    { code: '+965', name: 'Kuwait' },
    { code: '+961', name: 'Lebanon' },
    { code: '+218', name: 'Libya' },
    { code: '+60', name: 'Malaysia' },
    { code: '+853', name: 'Macau' },
    { code: '+52', name: 'Mexico' },
    { code: '+212', name: 'Morocco' },
    { code: '+95', name: 'Myanmar' },
    { code: '+977', name: 'Nepal' },
    { code: '+31', name: 'Netherlands' },
    { code: '+64', name: 'New Zealand' },
    { code: '+687', name: 'New Caledonia' },
    { code: '+505', name: 'Nicaragua' },
    { code: '+234', name: 'Nigeria' },
    { code: '+47', name: 'Norway' },
    { code: '+968', name: 'Oman' },
    { code: '+92', name: 'Pakistan (پاکستان)' },
    { code: '+507', name: 'Panama' },
    { code: '+595', name: 'Paraguay' },
    { code: '+51', name: 'Peru' },
    { code: '+63', name: 'Philippines' },
    { code: '+48', name: 'Poland' },
    { code: '+351', name: 'Portugal' },
    { code: '+974', name: 'Qatar' },
    { code: '+40', name: 'Romania' },
    { code: '+7', name: 'Russia / Kazakhstan' },
    { code: '+966', name: 'Saudi Arabia' },
    { code: '+221', name: 'Senegal' },
    { code: '+65', name: 'Singapore' },
    { code: '+27', name: 'South Africa' },
    { code: '+34', name: 'Spain' },
    { code: '+94', name: 'Sri Lanka' },
    { code: '+46', name: 'Sweden' },
    { code: '+41', name: 'Switzerland' },
    { code: '+886', name: 'Taiwan' },
    { code: '+255', name: 'Tanzania' },
    { code: '+66', name: 'Thailand' },
    { code: '+216', name: 'Tunisia' },
    { code: '+90', name: 'Turkey' },
    { code: '+971', name: 'United Arab Emirates' },
    { code: '+44', name: 'United Kingdom' },
    { code: '+1', name: 'United States' },
    { code: '+256', name: 'Uganda' },
    { code: '+598', name: 'Uruguay' },
    { code: '+58', name: 'Venezuela' },
    { code: '+84', name: 'Vietnam' },
    { code: '+260', name: 'Zambia' },
    { code: '+263', name: 'Zimbabwe' },
  ].sort((a, b) => a.name.localeCompare(b.name));

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const [code, name] = e.target.value.split('|');
    const selected = countryCodes.find(c => c.code === code && c.name === name);
    if (selected) {
      setSelectedCountry(selected);
      setPhoneNumber(selected.code + ' ');
    }
  };

  useEffect(() => {
    if (!phoneNumber) {
      setPhoneNumber(selectedCountry.code + ' ');
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      services: checked
        ? [...prev.services, service]
        : prev.services.filter(s => s !== service)
    }));
  };

  const handleJobInquiryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, jobInquiry: e.target.value }));
  };

  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setBudget(value);
  };

  const handleBudgetBlur = () => {
    const budgetDigits = budget.replace(/\D/g, '');
    if (budgetDigits && parseInt(budgetDigits) >= 2000) {
      setBudget(budgetDigits + '$');
    } else if (budgetDigits) {
      alert('Budget must be at least $2,000');
      setBudget('');
    }
  };

  const handleBudgetFocus = () => {
    setBudget(budget.replace('$', ''));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    if (!formData.firstName || !formData.lastName || !formData.email || !phoneNumber || !budget || formData.services.length === 0) {
      setErrorMessage('Please fill in all required fields');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    const budgetDigits = budget.replace(/\D/g, '');
    if (!budgetDigits || parseInt(budgetDigits) < 2000) {
      setErrorMessage('Budget must be at least $2,000');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phoneNumber: phoneNumber,
          budget: budget,
          companyName: formData.companyName || '',
          companyUrl: formData.companyUrl || '',
          services: formData.services,
          projectDetails: formData.projectDetails || '',
          jobInquiry: formData.jobInquiry !== 'Please Select' ? formData.jobInquiry : ''
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        companyName: '',
        companyUrl: '',
        projectDetails: '',
        jobInquiry: 'Please Select',
        services: []
      });
      setPhoneNumber(selectedCountry.code + ' ');
      setBudget('');

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred. Please try again.');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative bg-[#020202] py-24 sm:py-32 px-4 sm:px-8 lg:px-12 overflow-hidden font-sans selection:bg-teal-500/30 selection:text-white">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-teal-500/10 rounded-full blur-[120px]" />
        <motion.div animate={{ scale: [1, 2, 2.5], opacity: [0.5, 0, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeOut' }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] rounded-full border border-teal-500/20" />
        <motion.div animate={{ scale: [1, 2, 2.5], opacity: [0.5, 0, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeOut', delay: 2 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] rounded-full border border-teal-500/20" />
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="flex flex-col items-center text-center mb-16">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 backdrop-blur-md shadow-[0_0_20px_rgba(20,184,166,0.15)] mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
            </span>
            <span className="text-[10px] font-bold text-teal-400 uppercase tracking-[0.3em]">TikTok</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 leading-[1.1]">
            Ready to Scale Your <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-400 to-emerald-300">TikTok</span> Business?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-gray-400 max-w-2xl mx-auto font-medium mb-12">
            Connect with us to explore premium TikTok automation solutions tailored for your brand.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="absolute -inset-px bg-gradient-to-br from-teal-500/30 to-transparent rounded-[2rem] opacity-60" />
            <div className="relative bg-[#0a0a0c]/90 backdrop-blur-2xl border border-white/10 p-6 sm:p-8 rounded-[2rem]">
              <h3 className="text-2xl font-bold text-white mb-2">Let&apos;s Talk About Your E-commerce Business</h3>
              <p className="text-sm text-gray-400 mb-6 sm:mb-8">
                Tell us about your TikTok brand and we&apos;ll design a custom automation roadmap.
              </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField 
                label="First Name" 
                type="text" 
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
              <FormField 
                label="Last Name" 
                type="text" 
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
            <FormField 
              label="Email" 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-1">Phone number <span className="text-red-400">*</span></label>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                <select value={`${selectedCountry.code}|${selectedCountry.name}`} onChange={handleCountryChange} className="bg-white/5 border border-white/10 rounded-xl sm:rounded-l-xl sm:rounded-r-none p-3 text-white focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-colors">
                  {countryCodes.map((country, index) => (
                    <option key={`${country.code}-${country.name}-${index}`} value={`${country.code}|${country.name}`} className="bg-zinc-900 text-white">{country.name} ({country.code})</option>
                  ))}
                </select>
                <input type="text" value={phoneNumber} onChange={handlePhoneChange} className="w-full bg-white/5 border border-white/10 sm:border-l-0 p-3 text-white placeholder-gray-500 focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-colors rounded-xl sm:rounded-r-xl" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-1">Budget <span className="text-red-400">*</span></label>
              <input type="text" value={budget} onChange={handleBudgetChange} onBlur={handleBudgetBlur} onFocus={handleBudgetFocus} placeholder="Enter your budget (minimum $2,000)" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white placeholder-gray-500 focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-colors" />
            </div>
            <FormField 
              label="Company name" 
              type="text" 
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              required={false}
            />
            <FormField 
              label="Company domain / URL" 
              type="text" 
              name="companyUrl"
              value={formData.companyUrl}
              onChange={handleInputChange}
              required={false}
            />
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Services you&apos;re looking for <span className="text-red-400">*</span></label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {servicesOptions.map((service) => (
                  <Checkbox 
                    key={service} 
                    label={service} 
                    id={service.replace(/\s+/g, '-').toLowerCase()}
                    checked={formData.services.includes(service)}
                    onChange={(checked) => handleServiceChange(service, checked)}
                  />
                ))}
              </div>
            </div>
            <FormField 
              label="Project Details" 
              as="textarea" 
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleInputChange}
              required
            />
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-1">I am looking for a job at Retail Automation</label>
              <div className="relative">
                <select value={formData.jobInquiry} onChange={handleJobInquiryChange} className="w-full appearance-none bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-colors">
                  <option value="Please Select" className="bg-zinc-900 text-white">Please Select</option>
                  <option value="Yes" className="bg-zinc-900 text-white">Yes</option>
                  <option value="No" className="bg-zinc-900 text-white">No</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
              </div>
            </div>
            
            {submitStatus === 'success' && (
              <div className="bg-teal-500/20 border border-teal-500/40 text-teal-200 px-4 py-3 rounded-xl">Form submitted successfully! We&apos;ll get back to you soon.</div>
            )}
            {submitStatus === 'error' && errorMessage && (
              <div className="bg-red-500/20 border border-red-500/40 text-red-200 px-4 py-3 rounded-xl">{errorMessage}</div>
            )}

            <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-wrap gap-3 items-center justify-between">
              <div className="flex items-center">
                <div className="w-7 h-7 bg-teal-500 rounded flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <span className="ml-3 text-xs text-gray-500">protected by reCAPTCHA</span>
              </div>
              <div className="text-xs text-gray-500">Privacy - Terms</div>
            </div>
            <button type="submit" disabled={isSubmitting} className="relative group w-full overflow-hidden rounded-full shadow-[0_0_40px_rgba(20,184,166,0.2)] hover:shadow-[0_0_60px_rgba(20,184,166,0.4)] transition-shadow duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-400 opacity-100 group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 w-[200%] bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-[shimmer_2s_infinite] skew-x-12" />
              <span className="relative block w-full py-3 sm:py-4 font-extrabold text-black uppercase tracking-wider text-sm">{isSubmitting ? 'Submitting...' : 'Get Started'}</span>
            </button>
          </form>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            {[
              { icon: Clock, title: 'Zero Obligation', desc: 'Expert TikTok advice tailored to your brand goals.' },
              { icon: TrendingUp, title: 'Proven Results', desc: 'Real creators, real growth—see testimonials above.' },
              { icon: Mail, title: 'Direct Line', desc: 'info@thesharkretail.com' },
            ].map((item, i) => (
              <div key={i} className="relative group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-teal-500/30 hover:bg-white/[0.04] transition-all duration-500">
                <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center text-teal-400 group-hover:border-teal-400/50 transition-all duration-500">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
            <a href="tel:+14694807938" className="flex items-center justify-center gap-3 w-full py-4 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 font-bold hover:bg-teal-500/20 transition-colors">
              <Phone className="w-5 h-5" />
              (469) 480-7938
            </a>
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `@keyframes shimmer { 100% { transform: translateX(200%) skewX(12deg); } }` }} />
    </section>
  );
};

export default TikTokCTA;
