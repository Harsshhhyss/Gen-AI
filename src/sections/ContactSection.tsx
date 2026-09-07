import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const InstaIcon = (props: any) => <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><defs><linearGradient id="insta-grad2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#f09433" /><stop offset="25%" stopColor="#e6683c" /><stop offset="50%" stopColor="#dc2743" /><stop offset="75%" stopColor="#cc2366" /><stop offset="100%" stopColor="#bc1888" /></linearGradient></defs><rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="url(#insta-grad2)"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="url(#insta-grad2)"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="url(#insta-grad2)"></line></svg>;
const LinkedinIcon = (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="#0077b5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const TwitterIcon = (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="#1DA1F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>;
const YoutubeIcon = (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.17 1 12 1 12s0 3.83.46 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.83 23 12 23 12s0-3.83-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#FF0000"></polygon></svg>;

const socials = [
  { icon: InstaIcon, href: '#' },
  { icon: LinkedinIcon, href: '#' },
  { icon: TwitterIcon, href: '#' },
  { icon: YoutubeIcon, href: '#' },
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      projectDetails: formData.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSent(true);
      } else {
        console.error('Failed to send message');
        // Fallback or show error in a real app
      }
    } catch (err) {
      console.error('Error sending message:', err);
    } finally {
      setSending(false);
    }
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
              className="font-bold tracking-tight text-[clamp(2.5rem,10vw,120px)] mb-8 sm:mb-12 drop-shadow-2xl text-white"
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
                        name="name"
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
                        name="phone"
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
                      name="message"
                      placeholder="Tell us about your project..."
                      className={`${inputClass('message')} resize-none`}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      disabled={sending}
                      className="group relative overflow-hidden rounded-full px-10 py-4 sm:px-14 sm:py-5 text-sm sm:text-base font-medium uppercase tracking-widest text-white cursor-pointer disabled:opacity-70 w-full sm:w-auto"
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
                            className="flex items-center gap-3 justify-center"
                          >
                            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                            </svg>
                            Sending…
                          </motion.span>
                        ) : (
                          <motion.span key="send" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex justify-center">
                            WORK WITH US
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.button>
                    
                    <motion.a
                      href="https://wa.me/917385750187?text=Hi%20NextGen%20AI!%20I'm%20interested%20in%20discussing%20a%20project."
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="group flex items-center justify-center gap-2 rounded-full px-10 py-4 sm:px-14 sm:py-5 text-sm sm:text-base font-medium uppercase tracking-widest text-[#25D366] bg-white hover:bg-gray-100 transition-colors w-full sm:w-auto shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      CHAT ON WHATSAPP
                    </motion.a>
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
                  <div className="flex flex-col gap-4">
                    <h3 className="text-[#D7E2EA] font-bold tracking-tight text-3xl sm:text-4xl leading-tight drop-shadow-md">
                      Message<br />Received.
                    </h3>
                    <p className="text-[#D7E2EA]/50 font-light text-base leading-relaxed max-w-xs">
                      We'll get back to you within 24 hours. Looking forward to creating something exceptional together.
                    </p>
                  </div>
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
                href="mailto:aigetnextgen@gmail.com"
                className="text-[#D7E2EA] font-medium text-xl sm:text-2xl md:text-3xl tracking-tight hover:text-[#B600A8] transition-colors duration-300 group flex items-center gap-3 break-all"
              >
                aigetnextgen@gmail.com
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
