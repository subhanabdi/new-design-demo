import React from 'react';
import { Phone, ArrowRight, Calendar, UserCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface ConsultationCtaProps {
  onOpenConsultation: () => void;
}

export const ConsultationCta: React.FC<ConsultationCtaProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-20 lg:py-28 bg-[#DCE9DF] border-y border-[#2C775B]/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Eyebrow */}
        <div className="inline-block text-xs font-semibold tracking-wider text-[#2C775B] uppercase">
          Take The Next Step
        </div>

        {/* Main Headline */}
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#152B45] tracking-tight text-balance">
          Ready to Make Your Accounting Clearer?
        </h2>

        {/* Core Content */}
        <div className="max-w-3xl mx-auto space-y-4 text-slate-800 text-sm sm:text-base leading-relaxed">
          <p>
            If you are looking for an accountant who offers clear advice, dependable support, and a thoughtful approach to understanding your business, we would be delighted to speak with you.
          </p>
          <p className="font-semibold text-[#152B45]">
            Discover how ABC — Accounting & Bookkeeping Consultancy Ltd can help make managing your finances As Easy As ABC.
          </p>
        </div>

        {/* Supporting Text */}
        <div className="max-w-2xl mx-auto text-xs sm:text-sm text-slate-700 bg-white/60 backdrop-blur-xs p-5 rounded-xl border border-white/80 space-y-1">
          <p className="font-medium text-[#152B45]">
            If you're planning your next step, let's start with a short 30-minute conversation to understand what support you need.
          </p>
          <p className="text-slate-600">
            No sales pressure; just a straightforward, focused discussion and honest advice on how we can help.
          </p>
        </div>

        {/* CTAs */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenConsultation}
            className="px-8 py-3.5 text-xs sm:text-sm font-semibold text-white bg-[#2C775B] hover:bg-[#235f49] shadow-md shadow-emerald-900/20 rounded-md transition-all duration-200 flex items-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Consultation</span>
          </button>

          <button
            onClick={onOpenConsultation}
            className="px-8 py-3.5 text-xs sm:text-sm font-semibold text-[#152B45] bg-white hover:bg-slate-100 border border-slate-300 rounded-md transition-all duration-200 flex items-center gap-2 shadow-xs cursor-pointer"
          >
            <UserCheck className="w-4 h-4 text-[#2C775B]" />
            <span>Book a Call With a Partner</span>
          </button>
        </div>

        {/* Direct Telephone Display */}
        <div className="pt-4 flex items-center justify-center gap-2 text-sm text-slate-700 font-medium">
          <span>Or ring </span>
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="font-bold text-[#152B45] hover:text-[#2C775B] underline flex items-center gap-1 transition-colors"
          >
            <Phone className="w-4 h-4 text-[#2C775B]" />
            <span>{COMPANY_INFO.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
