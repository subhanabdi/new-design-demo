import React from 'react';
import { CheckCircle2, Cloud, Shield } from 'lucide-react';
import { SOFTWARE_PARTNERS } from '../data/companyData';

export const SoftwarePartners: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#2C775B] uppercase">
            <Cloud className="w-3.5 h-3.5" />
            <span>Digital Infrastructure</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#152B45] tracking-tight">
            Approved and Partnered With Tools We Stand By
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Certified expertise across the UK’s leading cloud accounting, payroll, and receipt extraction ecosystems.
          </p>
        </div>

        {/* Clean Balanced Partner Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {SOFTWARE_PARTNERS.map((partner, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#FAFAF7] border border-slate-200/80 hover:border-[#2C775B]/40 hover:bg-white transition-all duration-200 flex flex-col items-center justify-center text-center space-y-2 shadow-xs group"
            >
              <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#152B45] font-display font-bold text-base shadow-xs group-hover:scale-105 group-hover:text-[#2C775B] transition-transform">
                {partner.name[0]}
              </div>
              <div className="font-bold text-sm text-[#152B45] tracking-tight">
                {partner.name}
              </div>
              <div className="text-[11px] font-semibold text-[#2C775B] bg-[#DCE9DF]/50 px-2 py-0.5 rounded">
                {partner.tier}
              </div>
              <div className="text-[10px] text-slate-500 leading-tight">
                {partner.type}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
          <Shield className="w-3.5 h-3.5 text-[#2C775B]" />
          <span>All integrations are Making Tax Digital (MTD) compliant & bank-grade 256-bit encrypted</span>
        </div>
      </div>
    </section>
  );
};
