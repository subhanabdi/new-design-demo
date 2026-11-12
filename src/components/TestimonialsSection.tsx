import React from 'react';
import { Star, Quote, CheckCircle2, ExternalLink } from 'lucide-react';
import { TESTIMONIALS, COMPANY_INFO } from '../data/companyData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-semibold tracking-wider text-[#2C775B] uppercase">
              Client Reassurance
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#152B45] tracking-tight">
              What Our Clients Say
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Real feedback from business owners and directors who place their daily accounts, payroll, and corporate tax in our care.
            </p>
          </div>

          <a
            href={COMPANY_INFO.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#152B45] bg-[#F2F4F6] hover:bg-slate-200 border border-slate-300 rounded-md transition-colors shrink-0 shadow-xs"
          >
            <span>Read More Testimonials</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
          </a>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-xl bg-[#FAFAF7] border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Top row: Stars & verified source */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#2C775B] bg-[#DCE9DF]/60 px-2 py-0.5 rounded">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{t.verifiedSource}</span>
                  </div>
                </div>

                {/* Quote highlight */}
                <h3 className="font-display text-lg font-bold text-[#152B45] leading-snug">
                  "{t.highlight}"
                </h3>

                {/* Full quote */}
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-[#152B45]">
                    {t.clientName}
                  </div>
                  <div className="text-xs text-slate-500">
                    {t.role}, {t.company}
                  </div>
                </div>
                <div className="text-xs text-slate-400 font-medium">
                  {t.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
