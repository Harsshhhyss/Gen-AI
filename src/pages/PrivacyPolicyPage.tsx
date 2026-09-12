import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, Eye, FileText, UserCheck, Mail, MapPin } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

export const PrivacyPolicyPage: React.FC = () => {
  const lastUpdated = "September 12, 2026";

  return (
    <div className="w-full min-h-screen bg-background text-textPrimary pt-28 pb-24 px-6 sm:px-12 lg:px-20 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-[#7621B0]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col gap-12 relative z-10">
        {/* Header */}
        <FadeIn delay={0.1} y={30} className="flex flex-col gap-4 border-b border-white/10 pb-8">
          <div className="flex items-center gap-2">
            <span className="w-8 h-[1px] bg-[#00d8ff]" />
            <span className="text-[#00d8ff] text-xs uppercase tracking-[0.3em] font-semibold">Legal & Compliance</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-white/60 text-sm">
            Compliant with the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong> and the <strong>Information Technology Act, 2000</strong> of India.
          </p>
          <div className="flex items-center gap-2 text-xs text-white/40 mt-1">
            <span>Effective Date: {lastUpdated}</span>
            <span>•</span>
            <span>Headquarters: Pune, Maharashtra, India</span>
          </div>
        </FadeIn>

        {/* Introduction */}
        <FadeIn delay={0.15} y={20} className="flex flex-col gap-4 text-white/80 text-sm sm:text-base leading-relaxed font-light">
          <p>
            At <strong>NextGen AI</strong> ("we," "our," or "us"), we value the trust you place in us when sharing your personal information. This Privacy Policy sets out how we collect, store, process, transfer, and protect your digital personal data when you visit our website (<a href="https://www.getnextgen.in" className="text-[#00d8ff] underline">https://www.getnextgen.in</a>) or engage our custom software, AI engineering, and digital growth services.
          </p>
          <p>
            By accessing our website or submitting your information through our contact forms, chatbot, or communication channels, you consent to the practices described in this policy in accordance with the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>, the <strong>Information Technology Act, 2000 (IT Act)</strong>, and the <strong>IT (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 (SPDI Rules)</strong>.
          </p>
        </FadeIn>

        {/* Section 1: Data We Collect */}
        <FadeIn delay={0.2} y={20} className="flex flex-col gap-4 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10">
          <div className="flex items-center gap-3 text-white font-bold text-lg">
            <Eye className="w-5 h-5 text-[#00d8ff]" />
            <h2>1. Personal Data We Collect</h2>
          </div>
          <p className="text-white/70 text-sm leading-relaxed font-light">
            We adhere to the principle of <strong>Data Minimization</strong>. We only collect information that is strictly necessary to evaluate your project, respond to your inquiries, and fulfill contractual services:
          </p>
          <ul className="list-disc list-inside text-white/70 text-sm space-y-2 font-light">
            <li><strong>Contact & Identity Data:</strong> Your full name, work email address, phone number, and WhatsApp contact details provided via our proposal form or direct outreach.</li>
            <li><strong>Business & Project Inquiries:</strong> Details regarding your organization, service of interest (e.g. SaaS Architecture, AI Agents, GEO/SEO), estimated budget tiers, and technical project scope.</li>
            <li><strong>Conversational Data:</strong> Queries, prompts, and feedback provided to our interactive chatbot (NexBot) or via WhatsApp messaging.</li>
            <li><strong>Technical & Usage Data:</strong> Standard server logs, IP addresses, browser types, device identifiers, and pages accessed, collected automatically to maintain website stability and defense against cyber threats.</li>
          </ul>
          <p className="text-white/50 text-xs mt-2 italic">
            * We do not collect Sensitive Personal Data (such as biometric data, genetic data, or financial passwords) on this public showcase website.
          </p>
        </FadeIn>

        {/* Section 2: Purpose of Collection */}
        <FadeIn delay={0.25} y={20} className="flex flex-col gap-4 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10">
          <div className="flex items-center gap-3 text-white font-bold text-lg">
            <FileText className="w-5 h-5 text-[#7621B0]" />
            <h2>2. Purpose & Legal Basis of Processing</h2>
          </div>
          <p className="text-white/70 text-sm leading-relaxed font-light">
            Under the DPDP Act 2023, your personal data is processed solely for specified, lawful purposes:
          </p>
          <ul className="list-disc list-inside text-white/70 text-sm space-y-2 font-light">
            <li><strong>Service Delivery & Discovery:</strong> To review your technical specifications, draft proposals, deliver feasibility assessments, and schedule consultation calls.</li>
            <li><strong>Direct Communication:</strong> To send email follow-ups via Resend or respond directly to your WhatsApp inquiries regarding project milestones.</li>
            <li><strong>Legal Compliance & Cybersecurity:</strong> To verify compliance with Indian laws, prevent unauthorized intrusion or abuse of our APIs, and ensure secure infrastructure uptime.</li>
          </ul>
          <p className="text-white/70 text-sm leading-relaxed font-light mt-2">
            <strong>We do not sell, rent, or trade your personal information to third-party data brokers or marketing aggregators under any circumstances.</strong>
          </p>
        </FadeIn>

        {/* Section 3: Data Sharing & Third-Party Processors */}
        <FadeIn delay={0.3} y={20} className="flex flex-col gap-4 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10">
          <div className="flex items-center gap-3 text-white font-bold text-lg">
            <Lock className="w-5 h-5 text-[#00d8ff]" />
            <h2>3. Third-Party Technical Processors (Data Processors)</h2>
          </div>
          <p className="text-white/70 text-sm leading-relaxed font-light">
            To deliver modern cloud infrastructure, we partner with industry-standard technical service providers who process data strictly on our instructions:
          </p>
          <ul className="list-disc list-inside text-white/70 text-sm space-y-2 font-light">
            <li><strong>Resend Inc.:</strong> Used for transactional email dispatch of proposal requests submitted through our contact form.</li>
            <li><strong>Vercel Inc.:</strong> High-performance serverless cloud hosting and global edge delivery.</li>
            <li><strong>WhatsApp (Meta Platforms):</strong> When you click our direct chat links, communication is governed by WhatsApp’s end-to-end encrypted protocol.</li>
          </ul>
        </FadeIn>

        {/* Section 4: Security & Reasonable Security Practices */}
        <FadeIn delay={0.35} y={20} className="flex flex-col gap-4 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10">
          <div className="flex items-center gap-3 text-white font-bold text-lg">
            <ShieldCheck className="w-5 h-5 text-[#25D366]" />
            <h2>4. Security Safeguards & Data Retention</h2>
          </div>
          <p className="text-white/70 text-sm leading-relaxed font-light">
            Pursuant to <strong>Section 43A of the Information Technology Act, 2000</strong> and the <strong>DPDP Act, 2023</strong>, we maintain reasonable security practices and procedures:
          </p>
          <ul className="list-disc list-inside text-white/70 text-sm space-y-2 font-light">
            <li><strong>HTTPS Encryption:</strong> All data transmitted between your browser and our servers is secured using Transport Layer Security (TLS 1.3).</li>
            <li><strong>Access Control:</strong> Only authorized engineering leadership (founder and designated project leads) have access to proposal submissions.</li>
            <li><strong>Data Retention:</strong> We retain your contact information only as long as necessary to facilitate ongoing business communication or satisfy statutory accounting and tax requirements in India.</li>
          </ul>
        </FadeIn>

        {/* Section 5: Your Rights under DPDP Act 2023 */}
        <FadeIn delay={0.4} y={20} className="flex flex-col gap-4 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10">
          <div className="flex items-center gap-3 text-white font-bold text-lg">
            <UserCheck className="w-5 h-5 text-[#00d8ff]" />
            <h2>5. Your Rights as a Data Principal (Under Indian Law)</h2>
          </div>
          <p className="text-white/70 text-sm leading-relaxed font-light">
            As a user residing in India (or accessing our services), you possess the following statutory rights regarding your personal data:
          </p>
          <ul className="list-disc list-inside text-white/70 text-sm space-y-2 font-light">
            <li><strong>Right to Access:</strong> You have the right to request a summary of the personal data we hold about you and the processing activities undertaken.</li>
            <li><strong>Right to Correction & Erasure:</strong> You may request the correction of inaccurate or outdated data, or the total deletion of your personal records from our databases.</li>
            <li><strong>Right to Withdraw Consent:</strong> You may withdraw your consent for future communication at any time by contacting our Grievance Officer.</li>
            <li><strong>Right of Grievance Redressal:</strong> You have the right to seek expeditious redressal of any concerns or complaints regarding your personal data.</li>
          </ul>
        </FadeIn>

        {/* Section 6: Grievance Redressal (Mandatory under Indian Law) */}
        <FadeIn delay={0.45} y={20} className="flex flex-col gap-6 p-8 rounded-3xl bg-gradient-to-r from-white/[0.06] to-white/[0.02] border border-white/15">
          <div className="flex flex-col gap-2">
            <span className="text-[#00d8ff] text-xs uppercase tracking-[0.2em] font-semibold">Statutory Grievance Mechanism</span>
            <h2 className="text-2xl font-bold text-white">6. Grievance Officer & Contact Information</h2>
            <p className="text-white/70 text-sm leading-relaxed font-light">
              In accordance with the <strong>Information Technology Act, 2000</strong> and the <strong>Digital Personal Data Protection Act, 2023</strong>, the name and contact details of our designated Grievance Officer are set forth below:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col gap-1">
              <span className="text-xs uppercase text-white/40 font-medium">Designated Officer</span>
              <span className="text-white font-semibold text-sm">Harsh Kumar Singh</span>
              <span className="text-[#00d8ff] text-xs">Founder & Data Controller</span>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col gap-1">
              <span className="text-xs uppercase text-white/40 font-medium">Grievance Email</span>
              <a href="mailto:connect@getnextgen.in" className="text-white font-semibold text-sm hover:text-[#00d8ff] transition-colors flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                connect@getnextgen.in
              </a>
              <span className="text-white/40 text-xs">Response time: ≤ 48 hours</span>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col gap-1">
              <span className="text-xs uppercase text-white/40 font-medium">Headquarters Address</span>
              <span className="text-white font-semibold text-sm flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#7621B0]" />
                Pune, Maharashtra, India
              </span>
              <span className="text-white/40 text-xs">Postal Code: 411014</span>
            </div>
          </div>

          <p className="text-white/60 text-xs leading-relaxed font-light border-t border-white/10 pt-4">
            If you wish to exercise your rights of access, correction, or erasure, please email our Grievance Officer with the subject line <strong>"Data Principal Rights Request"</strong>. All requests will be resolved within the statutory timeline prescribed under Indian law.
          </p>
        </FadeIn>

        {/* Section 7: Updates to Policy */}
        <FadeIn delay={0.5} y={20} className="flex flex-col gap-4 text-white/60 text-xs leading-relaxed font-light">
          <p>
            <strong>7. Updates to this Policy:</strong> We may revise this Privacy Policy periodically to reflect changes in Indian data protection laws or our business operations. The revised version will be indicated by an updated "Effective Date" at the top of this page. We encourage you to review this policy periodically.
          </p>
          <div className="pt-4 flex items-center gap-4">
            <Link to="/contact" className="text-sm font-semibold text-[#00d8ff] hover:text-white transition-colors">
              Have Questions? Contact Us →
            </Link>
            <span className="text-white/20">•</span>
            <Link to="/" className="text-sm font-semibold text-white/60 hover:text-white transition-colors">
              Return to Home
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};
