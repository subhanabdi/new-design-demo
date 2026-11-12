import React, { useState } from 'react';
import { Calendar, ArrowRight, ExternalLink, X, BookOpen, Clock } from 'lucide-react';
import { LATEST_NEWS, NewsArticle, COMPANY_INFO } from '../data/companyData';

export const NewsSection: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<NewsArticle | null>(null);

  return (
    <section id="news" className="py-20 lg:py-28 bg-[#F2F4F6] border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-semibold tracking-wider text-[#2C775B] uppercase">
              Regulatory Briefings & Analysis
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#152B45] tracking-tight">
              Latest News & Financial Insights
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Timely analysis on UK fiscal policy, statutory thresholds, and wealth preservation from our Mold team.
            </p>
          </div>

          <a
            href={COMPANY_INFO.newsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#152B45] bg-white hover:bg-slate-50 border border-slate-300 rounded-md transition-colors shrink-0 shadow-xs"
          >
            <span>Explore All News</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
          </a>
        </div>

        {/* 3 Magazine-Style Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LATEST_NEWS.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Article Image */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded text-[11px] font-semibold text-[#152B45]">
                    {article.category}
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#2C775B]" />
                      <span>{article.date}</span>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#152B45] group-hover:text-[#2C775B] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {article.summary}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setActiveArticle(article)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2C775B] hover:text-[#235f49] group/btn cursor-pointer"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>

                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-slate-400 hover:text-slate-700 transition-colors flex items-center gap-1"
                  title="Open source link"
                >
                  <span>Official Post</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
            <div className="relative h-56 bg-slate-100 shrink-0">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#152B45] via-[#152B45]/60 to-transparent" />
              <button
                onClick={() => setActiveArticle(null)}
                aria-label="Close dialog"
                className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
                <div className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">
                  {activeArticle.category} · {activeArticle.date}
                </div>
                <h3 className="font-display text-2xl font-bold leading-snug">
                  {activeArticle.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div className="flex items-center gap-4 text-xs text-slate-500 pb-3 border-b border-slate-100">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#2C775B]" />
                  <span>{activeArticle.readTime}</span>
                </span>
                <span aria-hidden="true">·</span>
                <span>By ABC Technical Advisory Desk, Mold</span>
              </div>

              <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
                <p className="font-medium text-slate-900 text-base">
                  {activeArticle.summary}
                </p>
                <p>
                  {activeArticle.content}
                </p>
                <p className="text-slate-600 italic bg-[#FAFAF7] p-4 rounded-lg border border-slate-200">
                  Disclaimer: This briefing is provided for information purposes only and does not constitute formal tax advice. Every business and individual position is unique. For tailored counsel on how this measure impacts your circumstances, please contact our team.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <a
                  href={activeArticle.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-[#152B45]"
                >
                  <span>View on accountingbookkeeping.co.uk</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
                >
                  Close Briefing
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
