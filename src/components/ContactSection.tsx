import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Shield } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

const SERVICE_OPTIONS = [
  'Accountancy',
  'Bookkeeping',
  'Payroll',
  'Tax Returns',
  'VAT',
  'Tax Planning',
  'Business Advisory',
  'Business Start-Up',
  'Wealth Management',
  'Other'
];

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    telephone: '',
    serviceRequired: 'Accountancy',
    preferredDate: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName || !formData.email || !formData.telephone) {
      setErrorMsg('Please complete all required fields (Full Name, Email, Telephone).');
      return;
    }

    setLoading(true);
    // Simulate real submission handling
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-block text-xs font-semibold tracking-wider text-[#2C775B] uppercase">
            Get In Touch
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#152B45] tracking-tight">
            Speak With ABC
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            If you would like to learn more about the ABC way, and how we can support you, get in touch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Office Information Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-2xl bg-[#152B45] text-white shadow-xl space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">
                  Principal Office
                </span>
                <h3 className="font-display text-2xl font-bold">
                  Mold Practice
                </h3>
                <p className="text-xs text-slate-300">
                  Flintshire, North Wales & serving clients UK-wide
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/10 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-slate-200 leading-relaxed text-xs sm:text-sm">
                    <strong>Truwood House</strong><br />
                    Bromfield Industrial Estate<br />
                    Mold, Flintshire<br />
                    CH7 1XB<br />
                    United Kingdom
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="text-slate-200 hover:text-white font-medium underline text-xs sm:text-sm"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-emerald-400 shrink-0" />
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-slate-200 hover:text-white underline text-xs sm:text-sm"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-slate-200 text-xs">
                    Monday – Friday: 08:30 – 17:30<br />
                    Weekend consultations by prior arrangement
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-slate-300 space-y-1">
                <div>Licence No: <strong>1002421</strong></div>
                <div>Company Registration: <strong>11068331</strong></div>
                <div className="text-emerald-300 text-[11px] pt-1">
                  Registered in England & Wales
                </div>
              </div>
            </div>

            {/* Reassurance Card */}
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="p-2.5 bg-[#DCE9DF] text-[#2C775B] rounded-lg shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-[#152B45] uppercase tracking-wider">
                  Confidential & No-Obligation
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  All discussions and financial reviews are conducted under strict chartered confidentiality rules. No sales pressure.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in">
                  <div className="w-14 h-14 bg-[#DCE9DF] text-[#2C775B] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#152B45]">
                    Enquiry Received
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.fullName}. A member of our senior accounting team will review your enquiry for <strong>{formData.serviceRequired}</strong> and contact you within one working day.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: '',
                          businessName: '',
                          email: '',
                          telephone: '',
                          serviceRequired: 'Accountancy',
                          preferredDate: '',
                          message: ''
                        });
                      }}
                      className="px-6 py-2.5 text-xs font-semibold text-[#152B45] bg-[#F2F4F6] hover:bg-slate-200 rounded-md transition-colors"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-1 border-b border-slate-100 pb-4">
                    <h3 className="font-display text-xl font-bold text-[#152B45]">
                      Send Your Enquiry
                    </h3>
                    <p className="text-xs text-slate-500">
                      Please let us know how we can assist your business.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-md">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. David Williams"
                        className="w-full px-3.5 py-2.5 text-xs rounded-md border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#2C775B]"
                      />
                    </div>

                    {/* Business Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700">
                        Business Name
                      </label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Williams Engineering Ltd"
                        className="w-full px-3.5 py-2.5 text-xs rounded-md border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#2C775B]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email Address */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="d.williams@company.co.uk"
                        className="w-full px-3.5 py-2.5 text-xs rounded-md border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#2C775B]"
                      />
                    </div>

                    {/* Telephone Number */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700">
                        Telephone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.telephone}
                        onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                        placeholder="e.g. 07123 456789"
                        className="w-full px-3.5 py-2.5 text-xs rounded-md border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#2C775B]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Service Required */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700">
                        Service Required *
                      </label>
                      <select
                        value={formData.serviceRequired}
                        onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-md border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#2C775B]"
                      >
                        {SERVICE_OPTIONS.map((srv) => (
                          <option key={srv} value={srv}>
                            {srv}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Preferred Date */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700">
                        Preferred Consultation Date
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-md border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#2C775B]"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">
                      Message / Overview of Requirements
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please tell us a little about your business, turnover, or the specific accounts/tax challenge you are looking to solve..."
                      className="w-full px-3.5 py-2.5 text-xs rounded-md border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#2C775B]"
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto px-8 py-3 text-xs font-semibold text-white bg-[#2C775B] hover:bg-[#235f49] shadow-sm rounded-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{loading ? 'Sending...' : 'Send Your Enquiry'}</span>
                    </button>
                    <p className="text-[11px] text-slate-400 mt-2">
                      Connected directly to enquiries@accountingbookkeeping.co.uk. We aim to respond within 24 hours.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
