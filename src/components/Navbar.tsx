import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, Lock } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenConsultation,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'FAQ', id: 'faq' },
    { label: 'News', id: 'news' },
    { label: 'Resources', id: 'resources' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Talk to Us', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Top subtle emergency/direct dial strip */}
      <div className="bg-[#152B45] text-slate-200 text-xs py-2 px-4 sm:px-8 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="text-slate-300 font-medium">Truwood House, Mold, Flintshire CH7 1XB</span>
            <span className="text-white/30">|</span>
            <span className="text-slate-300">Licence No: 1002421 · Company No: 11068331</span>
          </div>
          <div className="flex items-center gap-6">
            <a 
              href={`tel:${COMPANY_INFO.phone}`} 
              className="inline-flex items-center gap-1.5 text-emerald-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="font-semibold">{COMPANY_INFO.phone}</span>
            </a>
            <span className="text-white/30">|</span>
            <a
              href={COMPANY_INFO.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <Lock className="w-3 h-3 text-emerald-400" />
              <span>Client Portal</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-[#FAFAF7] border-b border-slate-200/80 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo & Brand Zone */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group shrink-0"
          >
            <img
              src="/assets/aistudio/image_278405c2.png"
              alt="ABC Accounting & Bookkeeping Consultancy Ltd"
              className="h-11 sm:h-13 w-auto object-contain transition-transform group-hover:scale-105 duration-200"
            />
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg sm:text-xl text-[#152B45] tracking-tight leading-tight">
                ABC
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-wider text-slate-600 uppercase">
                Accounting & Bookkeeping
              </span>
            </div>
          </div>

          {/* Nav links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative py-1 text-sm font-medium transition-colors hover:text-[#152B45] ${
                  activeTab === link.id
                    ? 'text-[#152B45] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#2C775B]'
                    : 'text-slate-600'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={COMPANY_INFO.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#152B45] bg-[#F2F4F6] hover:bg-slate-200 rounded-md transition-colors border border-slate-300/80"
              title="Secure Client Portal Login"
            >
              <Lock className="w-3.5 h-3.5 text-[#2C775B]" />
              <span>Client Portal</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400" />
            </a>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-[#2C775B] hover:bg-[#235f49] shadow-sm rounded-md transition-all duration-200"
            >
              Book a Consultation
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-[#152B45] rounded-md focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile dropdown drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-2">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left px-3 py-2.5 rounded-md text-sm font-medium ${
                    activeTab === link.id
                      ? 'bg-[#DCE9DF]/50 text-[#152B45] font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={COMPANY_INFO.portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#152B45] bg-[#F2F4F6] rounded-md border border-slate-300"
              >
                <Lock className="w-3.5 h-3.5 text-[#2C775B]" />
                <span>Client Portal Sign In</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-2.5 text-xs font-semibold text-white bg-[#2C775B] hover:bg-[#235f49] rounded-md transition-colors text-center shadow-sm"
              >
                Book a Consultation
              </button>

              <div className="pt-2 text-center text-xs text-slate-500">
                <span>Call Mold office: </span>
                <a href={`tel:${COMPANY_INFO.phone}`} className="font-semibold text-[#152B45]">
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
