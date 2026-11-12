import React, { useState } from 'react';
import {
  ShieldCheck,
  Calendar,
  Compass,
  FileCheck,
  CheckCircle2,
  ArrowRight,
  Calculator,
  Building2,
  Users2,
  Sparkles
} from 'lucide-react';
import { ALL_SERVICES_BY_CATEGORY } from '../data/companyData';

interface ServicesViewProps {
  onOpenConsultation: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onOpenConsultation }) => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Compliance' | 'Planning' | 'Advisory'>('All');

  const categories = [
    { key: 'All', label: 'All Services (13)' },
    { key: 'Compliance', label: '01 · Compliance (7)' },
    { key: 'Planning', label: '02 · Planning (4)' },
    { key: 'Advisory', label: '03 · Advisory (2)' },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Lead */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#2C775B] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Professional Scope</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#152B45] tracking-tight">
            Accountancy, Planning & Advisory Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Deliberate standards, year-round proactive counsel, and structured business advice delivered across the UK from our Mold practice.
          </p>

          {/* Category Filter Buttons */}
          <div className="pt-4 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => setActiveCategory(c.key as any)}
                className={`px-4 py-2 text-xs font-semibold rounded-md transition-all duration-200 cursor-pointer ${
                  activeCategory === c.key
                    ? 'bg-[#152B45] text-white shadow-sm'
                    : 'bg-[#F2F4F6] text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Breakdown */}
        <div className="space-y-20">
          {/* 01 · Compliance */}
          {(activeCategory === 'All' || activeCategory === 'Compliance') && (
            <div className="space-y-8 p-6 sm:p-8 lg:p-10 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
              <div className="border-b border-slate-200 pb-6 space-y-2">
                <div className="text-xs font-bold tracking-wider text-[#2C775B] uppercase">
                  01 · Compliance
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#152B45]">
                  {ALL_SERVICES_BY_CATEGORY.Compliance.headline}
                </h3>
                <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
                  {ALL_SERVICES_BY_CATEGORY.Compliance.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ALL_SERVICES_BY_CATEGORY.Compliance.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-xl bg-[#F2F4F6]/70 border border-slate-200 hover:border-[#2C775B]/40 hover:bg-white transition-all duration-200 flex flex-col justify-between space-y-4 group"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-400 group-hover:text-[#2C775B] transition-colors">
                          C.0{idx + 1}
                        </span>
                        <FileCheck className="w-4 h-4 text-slate-400 group-hover:text-[#2C775B] transition-colors" />
                      </div>
                      <h4 className="font-display text-lg font-bold text-[#152B45]">
                        {item.title}
                      </h4>
                      <p className="text-xs font-medium text-slate-800 leading-relaxed">
                        {item.desc}
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed pt-1">
                        {item.details}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-200/70 flex items-center justify-between">
                      <span className="text-[11px] font-medium text-emerald-800">
                        Companies House / HMRC
                      </span>
                      <button
                        onClick={onOpenConsultation}
                        className="text-xs font-semibold text-[#152B45] hover:text-[#2C775B] transition-colors cursor-pointer"
                      >
                        Enquire →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 02 · Planning */}
          {(activeCategory === 'All' || activeCategory === 'Planning') && (
            <div className="space-y-8 p-6 sm:p-8 lg:p-10 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
              <div className="border-b border-slate-200 pb-6 space-y-2">
                <div className="text-xs font-bold tracking-wider text-[#2C775B] uppercase">
                  02 · Planning
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#152B45]">
                  {ALL_SERVICES_BY_CATEGORY.Planning.headline}
                </h3>
                <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
                  {ALL_SERVICES_BY_CATEGORY.Planning.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {ALL_SERVICES_BY_CATEGORY.Planning.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-xl bg-[#F2F4F6]/70 border border-slate-200 hover:border-[#2C775B]/40 hover:bg-white transition-all duration-200 flex flex-col justify-between space-y-4 group"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-400 group-hover:text-[#2C775B] transition-colors">
                          P.0{idx + 1}
                        </span>
                        <Compass className="w-4 h-4 text-slate-400 group-hover:text-[#2C775B] transition-colors" />
                      </div>
                      <h4 className="font-display text-lg font-bold text-[#152B45]">
                        {item.title}
                      </h4>
                      <p className="text-xs font-medium text-slate-800 leading-relaxed">
                        {item.desc}
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed pt-1">
                        {item.details}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-200/70 flex items-center justify-between">
                      <span className="text-[11px] font-medium text-emerald-800">
                        Proactive Strategy
                      </span>
                      <button
                        onClick={onOpenConsultation}
                        className="text-xs font-semibold text-[#152B45] hover:text-[#2C775B] transition-colors cursor-pointer"
                      >
                        Enquire →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 03 · Advisory */}
          {(activeCategory === 'All' || activeCategory === 'Advisory') && (
            <div className="space-y-8 p-6 sm:p-8 lg:p-10 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
              <div className="border-b border-slate-200 pb-6 space-y-2">
                <div className="text-xs font-bold tracking-wider text-[#2C775B] uppercase">
                  03 · Advisory
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#152B45]">
                  {ALL_SERVICES_BY_CATEGORY.Advisory.headline}
                </h3>
                <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
                  {ALL_SERVICES_BY_CATEGORY.Advisory.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ALL_SERVICES_BY_CATEGORY.Advisory.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-8 rounded-xl bg-[#F2F4F6]/70 border border-slate-200 hover:border-[#2C775B]/40 hover:bg-white transition-all duration-200 flex flex-col justify-between space-y-5 group"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-400 group-hover:text-[#2C775B] transition-colors">
                          A.0{idx + 1}
                        </span>
                        <Building2 className="w-5 h-5 text-slate-400 group-hover:text-[#2C775B] transition-colors" />
                      </div>
                      <h4 className="font-display text-xl font-bold text-[#152B45]">
                        {item.title}
                      </h4>
                      <p className="text-sm font-medium text-slate-800 leading-relaxed">
                        {item.desc}
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed pt-1">
                        {item.details}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#2C775B]">
                        Tailored Action Plan
                      </span>
                      <button
                        onClick={onOpenConsultation}
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#2C775B] hover:bg-[#235f49] rounded-md transition-colors shadow-sm"
                      >
                        <span>Book Session</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
