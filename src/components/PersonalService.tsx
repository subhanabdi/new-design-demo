import React from 'react';
import { CheckCircle2, Clock, Users, Award } from 'lucide-react';

interface PersonalServiceProps {
  onOpenConsultation: () => void;
}

export const PersonalService: React.FC<PersonalServiceProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-20 lg:py-28 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with editorial framing */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-white">
              <img
                src="/src/assets/images/personal_service_client_1794482470716.jpg"
                alt="Accountant discussing financial records with UK business owner in Mold office"
                referrerPolicy="no-referrer"
                className="w-full h-[400px] sm:h-[480px] lg:h-[520px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#152B45]/70 via-transparent to-transparent" />
              
              {/* Floating Quote Stamp */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-xl border border-slate-200 shadow-lg">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#DCE9DF] text-[#2C775B] rounded-lg shrink-0 mt-0.5">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-[#152B45] italic">
                      "Knowing our accountant is only a phone call away provides genuine reassurance that lets us focus entirely on growth."
                    </p>
                    <p className="text-[11px] text-slate-500 mt-1 font-semibold">
                      — Client Partner, Engineering Sector
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle background decorative accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#DCE9DF]/60 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#152B45]/5 rounded-2xl -z-10" />
          </div>

          {/* Right Column: Editorial Text & Values */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block text-xs font-semibold tracking-wider text-[#2C775B] uppercase">
              The ABC Difference
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#152B45] leading-tight">
              A Personal Service That Businesses Value
            </h2>

            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                One of the things clients often tell us they value most is the reassurance of knowing that support is available whenever they need it.
              </p>
              <p>
                At ABC, we believe accountancy should feel approachable and straightforward. When questions arise, we aim to provide clear explanations and practical guidance, so you always understand what is happening in your business finances.
              </p>
              <p>
                Our goal is to build long-term professional relationships with the businesses we support. By taking the time to understand each client properly, we can provide advice that is more meaningful and relevant to their individual circumstances.
              </p>
            </div>

            {/* Four Concrete Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-[#F2F4F6] border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#2C775B] shrink-0" />
                <span className="text-xs font-semibold text-[#152B45]">Direct partner accessibility</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-[#F2F4F6] border border-slate-200">
                <Clock className="w-4 h-4 text-[#2C775B] shrink-0" />
                <span className="text-xs font-semibold text-[#152B45]">Rapid 24h response guarantee</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-[#F2F4F6] border border-slate-200">
                <Award className="w-4 h-4 text-[#2C775B] shrink-0" />
                <span className="text-xs font-semibold text-[#152B45]">Drafted once, reviewed twice</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-[#F2F4F6] border border-slate-200">
                <Users className="w-4 h-4 text-[#2C775B] shrink-0" />
                <span className="text-xs font-semibold text-[#152B45]">Dedicated client manager</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3 text-xs font-semibold text-white bg-[#2C775B] hover:bg-[#235f49] rounded-md shadow-sm transition-colors cursor-pointer"
              >
                Speak With a Dedicated Accountant
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
