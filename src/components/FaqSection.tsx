import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Search } from 'lucide-react';
import { FAQS, FaqItem } from '../data/companyData';

interface FaqSectionProps {
  onOpenConsultation: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenConsultation }) => {
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Accounting', 'Tax', 'Payroll & VAT', 'Advisory & Onboarding'];

  const toggleFaq = (id: string) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  const filteredFaqs = FAQS.filter((f) => {
    const matchesCategory = activeCategory === 'All' || f.category === activeCategory;
    const matchesQuery =
      searchQuery.trim() === '' ||
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#FAFAF7]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Lead */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#2C775B] uppercase">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Clarity & Answers</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#152B45] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Clear, transparent answers about our accountancy workflows, cloud bookkeeping, payroll compliance, and fee protection.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic (e.g., VAT, payroll, start-up, audit)..."
              className="w-full pl-10 pr-4 py-2.5 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#2C775B] focus:border-transparent transition-all"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#152B45] text-white'
                    : 'bg-[#F2F4F6] text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-xl border border-slate-200/90 bg-white shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors"
                >
                  <span className="font-display text-base sm:text-lg font-bold text-[#152B45] leading-snug">
                    {faq.question}
                  </span>
                  <div className="p-1 rounded bg-[#F2F4F6] text-slate-500 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-[#FAFAF7]/50">
                    <p>{faq.answer}</p>
                    <div className="mt-3 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-400">
                      <span>Category: {faq.category}</span>
                      <button
                        onClick={onOpenConsultation}
                        className="font-medium text-[#2C775B] hover:underline"
                      >
                        Ask a specific question →
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12 bg-white rounded-xl border border-slate-200 text-slate-500 text-xs">
              No matching questions found for "{searchQuery}". Please reach out directly to our Mold office.
            </div>
          )}
        </div>

        {/* Bottom prompt */}
        <div className="mt-12 text-center p-6 rounded-xl bg-[#DCE9DF]/40 border border-[#2C775B]/20">
          <p className="text-sm font-semibold text-[#152B45]">
            Have a question not addressed here?
          </p>
          <p className="text-xs text-slate-600 mt-1 mb-4">
            Our Mold partners are always happy to discuss your specific requirements.
          </p>
          <button
            onClick={onOpenConsultation}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-[#2C775B] hover:bg-[#235f49] rounded-md shadow-sm transition-colors cursor-pointer"
          >
            Speak Directly With An Accountant
          </button>
        </div>
      </div>
    </section>
  );
};
