import React, { useState } from 'react';
import { X, Calendar, Phone, CheckCircle2, Clock, Send, ExternalLink, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Accountancy & Year-End Accounts',
    consultationType: 'Video Call (Teams / Zoom)',
    date: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      service: 'Accountancy & Year-End Accounts',
      consultationType: 'Video Call (Teams / Zoom)',
      date: '',
      notes: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-[#152B45] text-white p-6 relative">
          <button
            onClick={onClose}
            aria-label="Close consultation modal"
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-1">
            <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-widest">
              30-Minute Exploratory Session
            </span>
            <h3 className="font-display text-2xl font-bold">
              Book a Consultation
            </h3>
            <p className="text-xs text-slate-300">
              No sales pressure; just honest, practical advice on managing your accounts & tax.
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4 animate-in fade-in">
              <div className="w-14 h-14 bg-[#DCE9DF] text-[#2C775B] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-display text-2xl font-bold text-[#152B45]">
                Consultation Requested
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. We have logged your request for <strong>{formData.service}</strong>. A partner from our Mold office will confirm your appointment time within 24 hours.
              </p>
              <div className="p-4 bg-[#FAFAF7] rounded-xl border border-slate-200 text-xs text-slate-600 max-w-sm mx-auto space-y-1">
                <div>Preferred Mode: <strong>{formData.consultationType}</strong></div>
                {formData.date && <div>Requested Date: <strong>{formData.date}</strong></div>}
                <div>Direct Confirmation: <strong>{formData.email}</strong></div>
              </div>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 text-xs font-semibold text-white bg-[#152B45] hover:bg-[#2C775B] rounded-md transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="David Hughes"
                    className="w-full px-3 py-2 text-xs rounded-md border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#2C775B]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Company Name</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Hughes Logistics Ltd"
                    className="w-full px-3 py-2 text-xs rounded-md border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#2C775B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="david@company.co.uk"
                    className="w-full px-3 py-2 text-xs rounded-md border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#2C775B]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Telephone *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="07987 654321"
                    className="w-full px-3 py-2 text-xs rounded-md border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#2C775B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Service Focus</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-md border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#2C775B]"
                  >
                    <option>Accountancy & Year-End Accounts</option>
                    <option>Bookkeeping & Cloud Software</option>
                    <option>Payroll Bureau & Auto-Enrolment</option>
                    <option>Corporation Tax & VAT Returns</option>
                    <option>Tax Investigation Protection</option>
                    <option>Business Advisory & Financial Planning</option>
                    <option>Business Start-Up Guidance</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Format</label>
                  <select
                    value={formData.consultationType}
                    onChange={(e) => setFormData({ ...formData, consultationType: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-md border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#2C775B]"
                  >
                    <option>Video Call (Teams / Zoom)</option>
                    <option>Telephone Discussion</option>
                    <option>In-Person at Mold Office</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Preferred Date</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-md border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#2C775B]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Brief Notes (Optional)</label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Tell us what you'd like to achieve from this call..."
                  className="w-full px-3 py-2 text-xs rounded-md border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#2C775B]"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-[#152B45]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#2C775B]" />
                  <span>Prefer to call? {COMPANY_INFO.phone}</span>
                </a>

                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2.5 text-xs font-semibold text-white bg-[#2C775B] hover:bg-[#235f49] rounded-md transition-all duration-200 cursor-pointer disabled:opacity-75 shadow-sm"
                >
                  {loading ? 'Submitting...' : 'Confirm Request'}
                </button>
              </div>

              <div className="pt-2 text-center">
                <a
                  href={COMPANY_INFO.consultationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-slate-600"
                >
                  <span>Or book via official contact page</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
