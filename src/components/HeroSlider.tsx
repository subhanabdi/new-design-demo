import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ShieldCheck, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import { HERO_SLIDES, TRUST_INDICATORS } from '../data/companyData';

interface HeroSliderProps {
  onOpenConsultation: () => void;
  onNavigateToServices: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  onOpenConsultation,
  onNavigateToServices,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 7000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section
      className="relative bg-[#152B45] text-white overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="ABC Accounting Practice Highlights"
    >
      {/* Background Slides with smooth transition */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((s, idx) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            } transition-transform duration-1000`}
          >
            <img
              src={s.image}
              alt={s.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            {/* Multi-layered measured scrim ensuring absolute legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#152B45]/95 via-[#152B45]/85 to-[#152B45]/60" />
            <div className="absolute inset-0 bg-radial at-center from-transparent via-[#152B45]/40 to-[#152B45]/90" />
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-28 sm:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-8 space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-md border border-white/15 text-emerald-300 text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{slide.eyebrow}</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-[1.15] text-balance">
              {slide.title}
            </h1>

            {/* Supporting Copy */}
            <div className="space-y-4 max-w-2xl text-slate-200 text-sm sm:text-base leading-relaxed">
              <p className="font-medium text-slate-100">
                {slide.subtitle}
              </p>
              <p className="text-slate-300 text-sm">
                {slide.supportingText}
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-[#2C775B] hover:bg-[#235f49] shadow-lg shadow-emerald-950/40 rounded-md transition-all duration-200 flex items-center gap-2 group cursor-pointer"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onNavigateToServices}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/25 rounded-md transition-all duration-200 cursor-pointer"
              >
                Our Services
              </button>
            </div>
          </div>

          {/* Right Column: Slide Feature Card */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="bg-[#152B45]/85 backdrop-blur-md p-6 rounded-xl border border-white/15 shadow-2xl space-y-4">
              <div className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">
                Feature Focus
              </div>
              <div className="font-display text-xl font-bold text-white leading-snug">
                {slide.badge}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                UK-wide chartered compliance, proactive corporate tax mitigation, and board-level financial clarity from our North Wales offices.
              </p>
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>Slide {currentSlide + 1} of {HERO_SLIDES.length}</span>
                <span className="text-emerald-300 font-medium">As Easy As ABC</span>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Navigation Controls */}
        <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
          {/* Indicator dots */}
          <div className="flex items-center gap-2.5">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  i === currentSlide
                    ? 'w-8 h-2 bg-[#2C775B]'
                    : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>

          {/* Arrow buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="p-2.5 rounded-md bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors border border-white/15"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="p-2.5 rounded-md bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors border border-white/15"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Trust Indicators Strip (Docked at base of hero) */}
      <div className="relative z-10 bg-[#0E1E31] border-t border-white/10 py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className="flex items-center gap-4 pt-3 md:pt-0">
            <div className="p-2.5 bg-emerald-950/60 text-emerald-400 rounded-lg border border-emerald-500/20 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white tracking-wide">
                {TRUST_INDICATORS[0].label}
              </div>
              <div className="text-xs text-slate-300">
                {TRUST_INDICATORS[0].description}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6">
            <div className="p-2.5 bg-emerald-950/60 text-emerald-400 rounded-lg border border-emerald-500/20 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white tracking-wide">
                {TRUST_INDICATORS[1].label}
              </div>
              <div className="text-xs text-slate-300">
                {TRUST_INDICATORS[1].description}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6">
            <div className="p-2.5 bg-emerald-950/60 text-emerald-400 rounded-lg border border-emerald-500/20 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white tracking-wide">
                {TRUST_INDICATORS[2].label}
              </div>
              <div className="text-xs text-slate-300">
                {TRUST_INDICATORS[2].description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
