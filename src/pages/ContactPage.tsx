import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, MessageCircle, CheckCircle2 } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Full-Scale SaaS Architecture',
    budget: '$2,000 - $5,000',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setSubmitted(true);
      } else {
        const errorText = result.error?.message || (typeof result.error === 'string' ? result.error : 'Failed to send message. Please contact us via WhatsApp.');
        setErrorMessage(errorText);
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setErrorMessage('Network connection error. Please use WhatsApp or email directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    'Full-Scale SaaS Architecture',
    'Autonomous AI Agents & Solutions',
    'Performance Marketing & GEO / AI-SEO',
    'Workflow & Business Automation',
    'Brand Identity & UI/UX Design',
    'Other / Custom Consulting'
  ];

  const budgets = [
    '< ₹50,000 / $600 (Starter)',
    '₹50,000 - ₹2,00,000 / $1k - $2.5k',
    '₹2,00,000 - ₹5,00,000 / $2.5k - $6k',
    '₹5,00,000+ / $6k+ (Enterprise)'
  ];

  return (
    <div className="w-full min-h-screen bg-background text-textPrimary pt-28 pb-24 px-6 sm:px-12 lg:px-20 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-[#7621B0]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#00d8ff]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col gap-16 relative z-10">
        {/* Header */}
        <FadeIn delay={0.1} y={30} className="flex flex-col gap-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-8 h-[1px] bg-[#00d8ff]" />
            <span className="text-[#00d8ff] text-xs uppercase tracking-[0.3em] font-semibold">Initiate Collaboration</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Let’s build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d8ff] to-[#7621B0]">extraordinary</span>.
          </h1>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed font-light mt-2">
            Whether you are building an AI-powered SaaS, automating mission-critical workflows, or transforming your local business presence—we are ready to execute.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form Container (7 cols) */}
          <FadeIn delay={0.2} y={30} className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 flex flex-col items-center text-center gap-4"
                  >
                    <CheckCircle2 className="w-16 h-16 text-[#25D366]" />
                    <h3 className="text-2xl font-bold text-white">Message Dispatched!</h3>
                    <p className="text-white/70 text-sm sm:text-base max-w-md font-light">
                      Thank you for reaching out. Founder Harsh Kumar Singh or a lead architect will review your project and get back to you within 2 to 4 hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          service: 'Full-Scale SaaS Architecture',
                          budget: '< ₹50,000 / $600 (Starter)',
                          message: ''
                        });
                      }}
                      className="mt-6 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-white hover:bg-white/20 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    {errorMessage && (
                      <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs sm:text-sm flex flex-col gap-1">
                        <span className="font-semibold text-red-200">Delivery Alert:</span>
                        <span>{errorMessage}</span>
                        <span className="text-white/60 text-[11px] mt-1">
                          You can also reach founder Harsh instantly on WhatsApp using the button below.
                        </span>
                      </div>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase tracking-wider text-white/60 font-medium">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#00d8ff] transition-colors placeholder:text-white/20"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase tracking-wider text-white/60 font-medium">Work Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="rahul@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#00d8ff] transition-colors placeholder:text-white/20"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase tracking-wider text-white/60 font-medium">Phone / WhatsApp</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#00d8ff] transition-colors placeholder:text-white/20"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase tracking-wider text-white/60 font-medium">Service of Interest</label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-white/10 text-white text-sm focus:outline-none focus:border-[#00d8ff] transition-colors"
                        >
                          {services.map(s => (
                            <option key={s} value={s} className="bg-[#141414] text-white">{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs uppercase tracking-wider text-white/60 font-medium">Estimated Budget</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-white/10 text-white text-sm focus:outline-none focus:border-[#00d8ff] transition-colors"
                      >
                        {budgets.map(b => (
                          <option key={b} value={b} className="bg-[#141414] text-white">{b}</option>
                        ))}
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs uppercase tracking-wider text-white/60 font-medium">Project Scope & Goals *</label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your product, challenges, desired timeline, or key objectives..."
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#00d8ff] transition-colors placeholder:text-white/20 resize-none"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold tracking-wider text-black bg-white hover:bg-gray-100 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:scale-105 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span>Sending Proposal Request...</span>
                        ) : (
                          <>
                            <span>SUBMIT PROPOSAL REQUEST</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>

                      <a
                        href="https://wa.me/917385750187?text=Hi%20NextGen%20AI!%20I'd%20like%20to%20discuss%20a%20project."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold tracking-wider text-[#25D366] bg-white hover:bg-gray-100 transition-all flex items-center justify-center gap-2 shadow-md hover:scale-105"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>QUICK CHAT ON WHATSAPP</span>
                      </a>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </FadeIn>

          {/* Contact Details & Direct Connect (5 cols) */}
          <FadeIn delay={0.3} y={30} className="lg:col-span-5 flex flex-col gap-8">
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 flex flex-col gap-6">
              <h3 className="text-xl font-bold text-white tracking-tight">Direct Channels</h3>
              
              <div className="flex flex-col gap-4">
                <a 
                  href="https://wa.me/917385750187?text=Hi%20NextGen%20AI!%20I'm%20interested%20in%20discussing%20a%20project." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 transition-all group"
                >
                  <div className="p-2.5 rounded-xl bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-white/50 uppercase tracking-wider font-medium">Instant Messaging</span>
                    <span className="text-white font-semibold text-base group-hover:text-[#25D366] transition-colors">+91 7385750187</span>
                    <span className="text-xs text-white/40 mt-0.5">Average reply time: under 15 mins</span>
                  </div>
                </a>

                <a 
                  href="mailto:aigetnextgen@gmail.com" 
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 transition-all group"
                >
                  <div className="p-2.5 rounded-xl bg-[#00d8ff]/10 text-[#00d8ff] border border-[#00d8ff]/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-white/50 uppercase tracking-wider font-medium">Email Inquiries</span>
                    <span className="text-white font-semibold text-base group-hover:text-[#00d8ff] transition-colors">aigetnextgen@gmail.com</span>
                    <span className="text-xs text-white/40 mt-0.5">Detailed scopes & RFP documents</span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="p-2.5 rounded-xl bg-[#7621B0]/10 text-[#7621B0] border border-[#7621B0]/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-white/50 uppercase tracking-wider font-medium">Headquarters</span>
                    <span className="text-white font-semibold text-base">Pune, Maharashtra, India</span>
                    <span className="text-xs text-white/40 mt-0.5">Viman Nagar & Baner Tech Corridors</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Guarantee / Callout Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#7621B0]/15 to-[#00d8ff]/10 border border-white/10 flex flex-col gap-3">
              <span className="text-[#00d8ff] text-xs font-bold uppercase tracking-wider">NextGen Commitment</span>
              <h4 className="text-lg font-bold text-white">Strict Non-Disclosure & Intellectual Property</h4>
              <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed">
                You own 100% of the code, intellectual property, and design assets from day one. Mutual NDAs are available prior to any technical discovery call.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};
