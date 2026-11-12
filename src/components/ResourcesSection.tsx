import React, { useState } from 'react';
import { FileText, Download, CheckCircle, ArrowRight, X, ExternalLink } from 'lucide-react';
import { RESOURCES_LIST, ResourceItem } from '../data/companyData';

export const ResourcesSection: React.FC = () => {
  const [downloadSuccessItem, setDownloadSuccessItem] = useState<string | null>(null);
  const [selectedResource, setSelectedResource] = useState<ResourceItem | null>(null);

  const handleDownload = (res: ResourceItem) => {
    setSelectedResource(res);
    setDownloadSuccessItem(res.id);
    setTimeout(() => {
      setDownloadSuccessItem(null);
    }, 4000);
  };

  return (
    <section id="resources" className="py-20 lg:py-28 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-block text-xs font-semibold tracking-wider text-[#2C775B] uppercase">
            Client Practice Library
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#152B45] tracking-tight">
            Financial Guidance & Resources
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Downloadable reference guides, statutory checklists, and tax planning frameworks prepared by our chartered professionals to support UK businesses.
          </p>
        </div>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RESOURCES_LIST.map((res) => (
            <div
              key={res.id}
              className="p-6 sm:p-8 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#2C775B] bg-[#DCE9DF]/50 px-2.5 py-1 rounded">
                    {res.category}
                  </span>
                  <span className="text-xs text-slate-400">
                    {res.updated}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-[#152B45] group-hover:text-[#2C775B] transition-colors">
                  {res.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {res.description}
                </p>

                <div className="flex items-center gap-4 text-xs text-slate-500 pt-1">
                  <span>Format: {res.fileFormat}</span>
                  <span aria-hidden="true">·</span>
                  <span>Size: {res.fileSize}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => handleDownload(res)}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#152B45] hover:bg-[#2C775B] rounded-md transition-colors cursor-pointer shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Resource</span>
                </button>

                {downloadSuccessItem === res.id && (
                  <span className="inline-flex items-center gap-1 text-xs text-emerald-700 font-medium animate-in fade-in">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Access Granted</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Extra notice */}
        <div className="mt-12 p-6 rounded-xl bg-[#F2F4F6] border border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-[#152B45]">
              Looking for tailored advice on Making Tax Digital or your company year-end?
            </h4>
            <p className="text-xs text-slate-600">
              Our Mold accountants provide bespoke tax simulations and corporate accounts health checks.
            </p>
          </div>
          <a
            href="tel:01352872222"
            className="px-4 py-2 text-xs font-semibold text-[#152B45] bg-white hover:bg-slate-50 border border-slate-300 rounded-md transition-colors shrink-0"
          >
            Call 01352 872222
          </a>
        </div>
      </div>

      {/* Download preview confirmation modal */}
      {selectedResource && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-md bg-white rounded-xl p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-start justify-between">
              <div className="p-3 bg-[#DCE9DF] text-[#2C775B] rounded-lg">
                <FileText className="w-6 h-6" />
              </div>
              <button
                onClick={() => setSelectedResource(null)}
                className="p-1 text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div>
              <span className="text-xs font-semibold text-[#2C775B] uppercase tracking-wider">
                {selectedResource.category}
              </span>
              <h3 className="font-display text-lg font-bold text-[#152B45] mt-1">
                {selectedResource.title}
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {selectedResource.description}
              </p>
            </div>

            <div className="bg-[#FAFAF7] p-3 rounded-md text-xs text-slate-600 border border-slate-200 space-y-1">
              <div>File: {selectedResource.fileFormat} ({selectedResource.fileSize})</div>
              <div>Published by: ABC Accounting & Bookkeeping Consultancy Ltd, Mold, UK</div>
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedResource(null)}
                className="px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100 rounded-md"
              >
                Close
              </button>
              <button
                onClick={() => {
                  alert(`Resource downloaded: "${selectedResource.title}". A copy is ready for offline reading.`);
                  setSelectedResource(null);
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#2C775B] hover:bg-[#235f49] rounded-md shadow-sm"
              >
                Save PDF Document
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
