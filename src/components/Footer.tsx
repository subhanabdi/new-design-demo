import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Lock,
  ArrowUpRight,
  Linkedin,
  Twitter,
  Facebook,
  ExternalLink,
  X
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface FooterProps {
  onNavigateTab: (tab: string) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTab, onOpenConsultation }) => {
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'cookies' | null>(null);

  return (
    <footer className="bg-[#152B45] text-white border-t border-white/10">
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Col 1: Company Profile (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/assets/aistudio/image_278405c2.png"
                alt="ABC Accounting & Bookkeeping Consultancy Ltd Logo"
                className="h-12 w-auto object-contain brightness-110"
              />
              <div>
                <span className="font-display font-bold text-lg text-white tracking-tight block">
                  ABC
                </span>
                <span className="text-[10px] tracking-wider text-slate-300 uppercase block font-medium">
                  Accounting & Bookkeeping Consultancy
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              We help business owners gain clarity and confidence in their financial position, providing guidance that allows them to focus on running and growing their business.
            </p>

            {/* Client Portal Button in Footer */}
            <div className="pt-2">
              <a
                href={COMPANY_INFO.portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-xs font-semibold text-white rounded-md border border-white/20 transition-all duration-200"
              >
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Client Portal Access</span>
                <ArrowUpRight className="w-3 h-3 text-slate-300" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ABC on LinkedIn"
                className="p-2 rounded-md bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors border border-white/10"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ABC on X / Twitter"
                className="p-2 rounded-md bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors border border-white/10"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ABC on Facebook"
                className="p-2 rounded-md bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors border border-white/10"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Office (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-wider text-emerald-400 font-bold">
              Mold Office
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong>Truwood House</strong><br />
                  Bromfield Industrial Estate<br />
                  Mold, Flintshire CH7 1XB<br />
                  United Kingdom
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white underline">
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white underline">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Services (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-wider text-emerald-400 font-bold">
              Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <button
                  onClick={() => onNavigateTab('services')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Compliance
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('services')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Planning
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('services')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Advisory
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('services')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Tax Investigation Shield
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('services')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Payroll Bureau
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: The Firm & Compliance Assurance (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-wider text-emerald-400 font-bold">
              The Firm
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <button
                  onClick={() => onNavigateTab('home')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Our Approach
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('news')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Insights & News
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('resources')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Practice Resources
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('testimonials')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Verified Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('contact')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Contact & Consultations
                </button>
              </li>
            </ul>

            {/* CompliAssure SiteSeal representation badge */}
            <div className="pt-3">
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center gap-3">
                <div className="p-2 bg-emerald-950/70 text-emerald-400 rounded-md shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-white tracking-wide">
                    CompliAssure SiteSeal Verified
                  </div>
                  <div className="text-[10px] text-slate-400">
                    Security & Statutory Audit Checked · 2026
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-white/10 bg-[#0E1E31] py-6 px-4 sm:px-6 lg:px-8 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <div>
              © 2026 Accounting & Bookkeeping Consultancy Ltd. All rights reserved.
            </div>
            <div className="text-[11px] text-slate-300">
              Licence No: <strong>1002421</strong> · Company Registration No: <strong>11068331</strong> · Registered in England & Wales, Truwood House, Bromfield Ind Est, Mold, CH7 1XB.
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium text-slate-300">
            <button
              onClick={() => setLegalModalType('privacy')}
              className="hover:text-white hover:underline transition-colors"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              onClick={() => setLegalModalType('terms')}
              className="hover:text-white hover:underline transition-colors"
            >
              Terms and Conditions
            </button>
            <span>·</span>
            <button
              onClick={() => setLegalModalType('cookies')}
              className="hover:text-white hover:underline transition-colors"
            >
              Cookie Policy
            </button>
          </div>
        </div>
      </div>

      {/* Legal Modals */}
      {legalModalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-xl bg-white text-slate-900 rounded-xl p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[85vh] overflow-y-auto space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="font-display text-xl font-bold text-[#152B45]">
                {legalModalType === 'privacy' && 'Privacy Policy'}
                {legalModalType === 'terms' && 'Terms and Conditions'}
                {legalModalType === 'cookies' && 'Cookie Policy'}
              </h3>
              <button
                onClick={() => setLegalModalType(null)}
                className="p-1 text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
              {legalModalType === 'privacy' && (
                <>
                  <p>
                    <strong>Accounting & Bookkeeping Consultancy Ltd (ABC)</strong> is committed to protecting and respecting your privacy in strict compliance with the UK General Data Protection Regulation (UK GDPR) and Data Protection Act 2018.
                  </p>
                  <p>
                    <strong>Information We Collect:</strong> We collect contact details, corporate registration numbers, and relevant financial documentation solely for providing accounting, statutory reporting, tax planning, and payroll bureau services.
                  </p>
                  <p>
                    <strong>Data Security:</strong> All client documentation is stored within encrypted cloud environments complying with ISO 27001 standards and statutory retention periods required by HMRC and Companies House.
                  </p>
                  <p>
                    For queries regarding data access, rectification, or erasure, please write to our Data Compliance Officer at Truwood House, Bromfield Industrial Estate, Mold, Flintshire CH7 1XB or call 01352 872222.
                  </p>
                </>
              )}

              {legalModalType === 'terms' && (
                <>
                  <p>
                    These terms govern the use of this website operated by Accounting & Bookkeeping Consultancy Ltd (Company No. 11068331, Licence No. 1002421).
                  </p>
                  <p>
                    <strong>Professional Disclaimers:</strong> Information published on this website is for general background guidance only. It does not constitute formal, individualized accounting, tax, or legal advice. An engagement is only established following written execution of an ABC Engagement Letter.
                  </p>
                  <p>
                    <strong>Client Portal Terms:</strong> Secure portal credentials are confidential and strictly for authorized client use.
                  </p>
                </>
              )}

              {legalModalType === 'cookies' && (
                <>
                  <p>
                    We use strictly necessary cookies to ensure optimal site navigation, secure portal authentication, and basic analytics that respect user anonymity.
                  </p>
                  <p>
                    We do not sell data to third-party advertising networks. You may disable cookies via your browser settings at any time without impeding your ability to contact our office.
                  </p>
                </>
              )}
            </div>

            <div className="pt-4 border-t border-slate-200 text-right">
              <button
                onClick={() => setLegalModalType(null)}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#152B45] hover:bg-[#2C775B] rounded-md transition-colors"
              >
                Understood & Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
