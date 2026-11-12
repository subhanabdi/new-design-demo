import React, { useRef, useState } from 'react';
import {
  FileSpreadsheet,
  Receipt,
  Users,
  TrendingUp,
  ShieldAlert,
  PiggyBank,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ExternalLink,
  CheckCircle,
  X
} from 'lucide-react';
import { OVERVIEW_SERVICES, ServiceItem, COMPANY_INFO } from '../data/companyData';

interface ServicesCarouselProps {
  onNavigateToServices: () => void;
  onOpenConsultation: () => void;
}

export const ServicesCarousel: React.FC<ServicesCarouselProps> = ({
  onNavigateToServices,
  onOpenConsultation,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const cardWidth = 360;
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'accountancy':
        return <FileSpreadsheet className="w-5 h-5 text-[#2C775B]" />;
      case 'bookkeeping':
        return <Receipt className="w-5 h-5 text-[#2C775B]" />;
      case 'payroll-bureau':
        return <Users className="w-5 h-5 text-[#2C775B]" />;
      case 'advisory':
        return <TrendingUp className="w-5 h-5 text-[#2C775B]" />;
      case 'tax-protection':
        return <ShieldAlert className="w-5 h-5 text-[#2C775B]" />;
      case 'wealth-management':
        return <PiggyBank className="w-5 h-5 text-[#2C775B]" />;
      default:
        return <FileSpreadsheet className="w-5 h-5 text-[#2C775B]" />;
    }
  };

  return (
    <section id="services-overview" className="py-20 lg:py-28 bg-[#F2F4F6] border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-semibold tracking-wider text-[#2C775B] uppercase">
              Our Capabilities
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#152B45] tracking-tight">
              What We Do
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Supporting business with clarity, insight, and dependable accounting.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="p-3 rounded-lg bg-white hover:bg-slate-100 text-[#152B45] border border-slate-300 shadow-sm transition-all duration-200 cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="p-3 rounded-lg bg-white hover:bg-slate-100 text-[#152B45] border border-slate-300 shadow-sm transition-all duration-200 cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Carousel with Big Images */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-6 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {OVERVIEW_SERVICES.map((service) => (
            <div
              key={service.id}
              className="min-w-[300px] sm:min-w-[360px] md:min-w-[380px] max-w-[380px] bg-white rounded-xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden group snap-start shrink-0"
            >
              {/* Big Service Image */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#152B45]/80 via-transparent to-transparent" />
                
                {/* Number Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-md text-xs font-bold text-[#152B45] tracking-wide border border-slate-200 shadow-sm">
                  {service.number}
                </div>

                {/* Category Pill */}
                <div className="absolute top-4 right-4 px-2.5 py-1 bg-[#152B45]/80 backdrop-blur-md rounded-md text-[11px] font-medium text-emerald-300 border border-white/10">
                  {service.category}
                </div>

                {/* Icon Circle */}
                <div className="absolute bottom-4 left-4 p-2.5 bg-white rounded-lg shadow-md border border-slate-100">
                  {getServiceIcon(service.id)}
                </div>
              </div>

              {/* Service Info Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-display text-xl font-bold text-[#152B45] group-hover:text-[#2C775B] transition-colors">
                    {service.number} — {service.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Deliverables snippet */}
                <div className="pt-2 border-t border-slate-100 space-y-1.5">
                  {service.deliverables.slice(0, 2).map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-[#2C775B] shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Action footer */}
                <div className="pt-4 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2C775B] hover:text-[#235f49] group/btn cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>

                  <button
                    onClick={onOpenConsultation}
                    className="text-[11px] font-medium text-slate-500 hover:text-[#152B45] transition-colors"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global CTA button below carousel */}
        <div className="mt-10 text-center">
          <button
            onClick={onNavigateToServices}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-semibold text-white bg-[#152B45] hover:bg-[#1a3656] shadow-sm rounded-md transition-all duration-200 cursor-pointer"
          >
            <span>Learn More About Our Services</span>
            <ArrowRight className="w-4 h-4 text-emerald-400" />
          </button>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
            <div className="relative h-48 bg-slate-100 shrink-0">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#152B45] via-[#152B45]/50 to-transparent" />
              <button
                onClick={() => setSelectedService(null)}
                aria-label="Close dialog"
                className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 text-white">
                <span className="text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                  Category: {selectedService.category}
                </span>
                <h3 className="font-display text-2xl font-bold">
                  {selectedService.number} — {selectedService.title}
                </h3>
              </div>
            </div>

            <div className="p-6 overflow-y-auto space-y-6">
              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">
                  Overview
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {selectedService.fullDesc}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">
                  Key Deliverables Included
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-[#F2F4F6] text-xs text-[#152B45] font-medium border border-slate-200">
                      <CheckCircle className="w-4 h-4 text-[#2C775B] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <a
                  href={COMPANY_INFO.servicesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-[#152B45]"
                >
                  <span>Official Portal Details</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => {
                    setSelectedService(null);
                    onOpenConsultation();
                  }}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-[#2C775B] hover:bg-[#235f49] rounded-md transition-colors shadow-sm"
                >
                  Book Consultation For This Service
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
