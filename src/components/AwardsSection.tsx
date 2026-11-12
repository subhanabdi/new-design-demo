import React from 'react';
import { Award, Trophy, Star } from 'lucide-react';
import { AWARDS } from '../data/companyData';

export const AwardsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#2C775B] uppercase">
            <Trophy className="w-3.5 h-3.5" />
            <span>Independent Honours</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#152B45] tracking-tight">
            Recognised
          </h2>
          <div className="space-y-1 text-slate-600 text-sm sm:text-base leading-relaxed">
            <p className="font-medium text-slate-800">
              A handful of recognitions from organisations we value.
            </p>
            <p className="text-slate-500 text-xs sm:text-sm">
              We mention these once, here, then get on with the work. None of them were the reasons we did the work.
            </p>
          </div>
        </div>

        {/* 9 Award Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {AWARDS.map((award) => (
            <div
              key={award.id}
              className="p-6 rounded-xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-200 flex items-start gap-4 group"
            >
              <div className="p-3 rounded-lg bg-[#DCE9DF]/50 text-[#2C775B] group-hover:bg-[#2C775B] group-hover:text-white transition-colors shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div className="space-y-1.5 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-[#2C775B] uppercase tracking-wider">
                    {award.year} {award.location ? `· ${award.location}` : ''}
                  </span>
                </div>
                <h3 className="font-display text-base font-bold text-[#152B45] leading-snug group-hover:text-[#2C775B] transition-colors">
                  {award.title}
                </h3>
                <p className="text-xs text-slate-500">
                  {award.issuer} · {award.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
