import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const InstaIcon = (props: any) => <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><defs><linearGradient id="insta-grad2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#f09433" /><stop offset="25%" stopColor="#e6683c" /><stop offset="50%" stopColor="#dc2743" /><stop offset="75%" stopColor="#cc2366" /><stop offset="100%" stopColor="#bc1888" /></linearGradient></defs><rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="url(#insta-grad2)"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="url(#insta-grad2)"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="url(#insta-grad2)"></line></svg>;
const LinkedinIcon = (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="#0077b5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const TwitterIcon = (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="#1DA1F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>;
const DribbbleIcon = (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="#EA4C89" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path></svg>;

const socials = [
  { icon: InstaIcon, href: '#' },
  { icon: LinkedinIcon, href: '#' },
  { icon: TwitterIcon, href: '#' },
  { icon: DribbbleIcon, href: '#' },
];


const FlyingChar = ({ char, delay }: { char: string; delay: number }) => (
  <motion.span
    initial={{ opacity: 0, y: 60, rotateX: -90 }}
    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    className="inline-block"
    style={{ transformOrigin: 'bottom' }}
  >
    {char === ' ' ? '\u00A0' : char}
  </motion.span>
);

const SplitHeading = ({ text, className }: { text: string; className?: string }) => (
  <span className={className} style={{ perspective: '800px' }}>
    {text.split('').map((char, i) => (
      <FlyingChar key={i} char={char} delay={0.03 * i} />
    ))}
  </span>
);

export const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end end'],
  });

  // Gradient orb movement
  const orbY = useTransform(scrollYProgress, [0, 1], [200, -80]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1800);
  };

  const inputClass = (name: string) =>
    `w-full bg-transparent border-b-2 py-4 text-[#D7E2EA] placeholder-[#D7E2EA]/30 text-base md:text-lg font-light outline-none transition-all duration-500 ${
      focused === name
        ? 'border-[#B600A8]'
        : 'border-[#D7E2EA]/15 hover:border-[#D7E2EA]/30'
    }`;

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative bg-[#0C0C0C] overflow-hidden"
    >
      {/* ── Ambient gradient orb ── */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[900px] h-[900px] rounded-full opacity-20 blur-[120px]"
        style={{
          y: orbY,
          background:
            'radial-gradient(circle, #B600A8 0%, #7621B0 40%, transparent 70%)',
        }}
      />

      {/* ── Top edge glow line ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7621B0] to-transparent opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-12 pt-28 sm:pt-36 md:pt-44 pb-20">

        {/* ── Big CTA heading ── */}
        <div className="overflow-hidden mb-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-[#D7E2EA]/40 text-xs sm:text-sm tracking-[0.3em] uppercase mb-8 font-medium"
          >
            Let's build something great
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className="font-black uppercase leading-[0.9] tracking-tighter text-[clamp(3.5rem,11vw,140px)] mb-8 sm:mb-12"
            style={{ perspective: '800px' }}
          >
            <SplitHeading text="START A" className="hero-heading block" />
            <SplitHeading
              text="PROJECT"
              className="block"
            />
          </h2>
        </motion.div>

        {/* ── Divider ── */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="h-px bg-gradient-to-r from-[#7621B0] via-[#D7E2EA]/20 to-transparent mb-16 sm:mb-20 origin-left"
        />

        {/* ── Two columns: form + info ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* LEFT — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <AnimatePresence mode="wait">
              {!sent ? (
                <motion.form
                  key="form"
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-10"
                  exit={{ opacity: 0, y: -20 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[#D7E2EA]/40 text-xs tracking-widest uppercase">Name</label>
                      <input
                        required
                        type="text"
                        placeholder="Your name"
                        className={inputClass('name')}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused(null)}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[#D7E2EA]/40 text-xs tracking-widest uppercase">Phone Number</label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 00000 00000"
                        className={inputClass('number')}
                        onFocus={() => setFocused('number')}
                        onBlur={() => setFocused(null)}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[#D7E2EA]/40 text-xs tracking-widest uppercase">
                      Message <span className="opacity-50 normal-case">(optional)</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your project..."
                      className={`${inputClass('message')} resize-none`}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                    />
                  </div>

                  <div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      disabled={sending}
                      className="group relative overflow-hidden rounded-full px-10 py-4 sm:px-14 sm:py-5 text-sm sm:text-base font-medium uppercase tracking-widest text-white cursor-pointer disabled:opacity-70"
                      style={{
                        background:
                          'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                        boxShadow:
                          '0 0 20px rgba(181,1,167,0.4), 4px 4px 12px #7721B1 inset',
                        border: '1.5px solid rgba(255,255,255,0.9)',
                        outline: '2px solid transparent',
                        outlineOffset: '-3px',
                      }}
                    >
                      {/* Shimmer sweep */}
                      <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                      <AnimatePresence mode="wait">
                        {sending ? (
                          <motion.span
                            key="sending"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-3"
                          >
                            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                            </svg>
                            Sending…
                          </motion.span>
                        ) : (
                          <motion.span key="send" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            WORK WITH US
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-start gap-6 py-16"
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: 'linear-gradient(123deg, #7621B0, #B600A8)' }}
                  >
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-[#D7E2EA] font-black uppercase text-3xl sm:text-4xl leading-tight">
                    Message<br />Received.
                  </h3>
                  <p className="text-[#D7E2EA]/50 font-light text-base leading-relaxed max-w-xs">
                    We'll get back to you within 24 hours. Looking forward to creating something exceptional together.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* RIGHT — Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-14 lg:pt-4"
          >
            {/* Email */}
            <div className="flex flex-col gap-2">
              <span className="text-[#D7E2EA]/40 text-xs tracking-[0.3em] uppercase">Email us</span>
              <a
                href="mailto:GetNextGenAi@gmail.com"
                className="text-[#D7E2EA] font-medium text-xl sm:text-2xl md:text-3xl tracking-tight hover:text-[#B600A8] transition-colors duration-300 group flex items-center gap-3 break-all"
              >
                GetNextGenAi@gmail.com
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg">→</span>
              </a>
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <span className="text-[#D7E2EA]/40 text-xs tracking-[0.3em] uppercase">Call us</span>
              <a
                href="tel:+917385750187"
                className="text-[#D7E2EA] font-medium text-xl sm:text-2xl md:text-3xl tracking-tight hover:text-[#B600A8] transition-colors duration-300 group flex items-center gap-3"
              >
                +91 7385750187
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg">→</span>
              </a>
            </div>

            {/* Based in */}
            <div className="flex flex-col gap-2">
              <span className="text-[#D7E2EA]/40 text-xs tracking-[0.3em] uppercase">Based in</span>
              <span className="text-[#D7E2EA] font-light text-lg sm:text-xl">
                India — Available Worldwide
              </span>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-4">
              <span className="text-[#D7E2EA]/40 text-xs tracking-[0.3em] uppercase">Follow the journey</span>
              <div className="flex items-center gap-4">
                {socials.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <motion.a
                      key={i}
                      href={s.href}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                      className="w-12 h-12 rounded-full border border-[#D7E2EA]/10 flex items-center justify-center hover:border-[#7621B0]/50 hover:bg-[#7621B0]/10 transition-all duration-300 group"
                    >
                      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Footer bar ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
        className="relative z-10 border-t border-[#D7E2EA]/10 mx-5 sm:mx-8 md:mx-12"
      >
        <div className="max-w-7xl mx-auto py-7 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-[#D7E2EA]/30 text-xs tracking-wider">
            © {new Date().getFullYear()} NextGen AI. All rights reserved.
          </span>
          <span className="text-[#D7E2EA]/20 text-xs tracking-wider">
            Crafted with precision & purpose.
          </span>
        </div>
      </motion.div>
    </section>
  );
};
