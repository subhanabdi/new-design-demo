import React from 'react';
import { Shield, LineChart, Compass } from 'lucide-react';
import { TRADITIONAL_VALUES } from '../data/companyData';

export const TraditionalValues: React.FC = () => {
  const getBlockIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Shield className="w-6 h-6 text-[#2C775B]" />;
      case 1:
        return <LineChart className="w-6 h-6 text-[#2C775B]" />;
      case 2:
        return <Compass className="w-6 h-6 text-[#2C775B]" />;
      default:
        return <Shield className="w-6 h-6 text-[#2C775B]" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#DCE9DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold tracking-wider text-[#2C775B] uppercase">
            Our Guiding Philosophy
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#152B45] tracking-tight">
            Traditional Values. Modern Approach.
          </h2>
          <div className="w-16 h-0.5 bg-[#2C775B] mx-auto mt-4" />
        </div>

        {/* 3 Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRADITIONAL_VALUES.map((block, idx) => (
            <div
              key={idx}
              className="bg-white/80 backdrop-blur-xs p-8 rounded-xl border border-white/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-[#DCE9DF]/60 flex items-center justify-center border border-[#2C775B]/20">
                  {getBlockIcon(idx)}
                </div>
                <h3 className="font-display text-2xl font-bold text-[#152B45]">
                  {block.title}
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  {block.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 text-xs font-semibold text-[#2C775B] flex items-center gap-1.5">
                <span>The ABC Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
