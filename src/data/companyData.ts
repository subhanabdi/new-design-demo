export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: 'Compliance' | 'Planning' | 'Advisory';
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  image: string;
  tags: string[];
}

export interface AwardItem {
  id: string;
  title: string;
  year?: string;
  location?: string;
  category: string;
  issuer: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  summary: string;
  content: string;
  link: string;
  image: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  company: string;
  location: string;
  verifiedSource: string;
  quote: string;
  highlight: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  category: 'Accounting' | 'Tax' | 'Payroll & VAT' | 'Advisory & Onboarding';
  answer: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  category: 'Tax Guide' | 'Business Start-Up' | 'Compliance' | 'Financial Planning';
  description: string;
  fileFormat: string;
  fileSize: string;
  updated: string;
}

export const COMPANY_INFO = {
  name: "Accounting & Bookkeeping Consultancy Ltd",
  shortName: "ABC",
  eyebrow: "ACCOUNTING & BOOKKEEPING CONSULTANCY LTD.",
  tagline: "Modern Accounting, Bookkeeping and Consultancy with Traditional Values",
  phone: "01352 872222",
  phoneInternational: "+441352872222",
  email: "enquiries@accountingbookkeeping.co.uk",
  portalUrl: "https://portal.accountingbookkeeping.co.uk/signin",
  consultationUrl: "https://accountingbookkeeping.co.uk/contact-us/",
  servicesUrl: "https://accountingbookkeeping.co.uk/services-2/",
  newsUrl: "https://accountingbookkeeping.co.uk/news/",
  reviewsUrl: "https://accountingbookkeeping.co.uk/reviews/",
  address: {
    line1: "Truwood House",
    line2: "Bromfield Industrial Estate",
    city: "Mold",
    county: "Flintshire",
    postcode: "CH7 1XB",
    country: "United Kingdom",
  },
  legal: {
    companyNumber: "11068331",
    licenceNumber: "1002421",
    registeredIn: "England & Wales",
    registeredOffice: "Truwood House, Bromfield Ind Est, Mold, Flintshire, CH7 1XB",
  },
  colors: {
    navy: "#152B45",
    emerald: "#2C775B",
    sage: "#DCE9DF",
    warmWhite: "#FAFAF7",
    lightGrey: "#F2F4F6",
    charcoal: "#303843",
  }
};

export const HERO_SLIDES = [
  {
    id: 'slide-1',
    eyebrow: "ACCOUNTING & BOOKKEEPING CONSULTANCY LTD.",
    title: "Modern Accounting, Bookkeeping and Consultancy with Traditional Values",
    subtitle: "We support businesses and private clients across the UK with accounts, tax, and ongoing financial guidance, delivered with traditional values and a modern approach.",
    supportingText: "From start-ups to established organisations, we provide clarity, consistency, and calm, practical advice that helps you move forward with confidence. We exist to make your finances easier to understand, easier to manage, and supported by people who are genuinely with you every step of the way.",
    image: "/src/assets/images/hero_accountant_consultation_1794482468735.jpg",
    badge: "Senior Practice Consultation",
  },
  {
    id: 'slide-2',
    eyebrow: "FINANCIAL CLARITY & DILIGENCE",
    title: "Deliberate Precision for Your Statutory Accounts and Corporation Tax",
    subtitle: "Drafted once, reviewed twice. Timely statutory reporting that keeps you ahead of HMRC and Companies House schedules without stressful last-minute rushes.",
    supportingText: "Clear reconciliations, thorough financial health checks, and actionable management reports tailored to give business owners true peace of mind.",
    image: "/src/assets/images/hero_financial_analysis_1794482469510.jpg",
    badge: "Compliance & Corporation Tax",
  },
  {
    id: 'slide-3',
    eyebrow: "FORWARD-LOOKING ADVISORY",
    title: "Strategic Guidance to Make Confident Business Decisions",
    subtitle: "Proactive support throughout the entire year, from remuneration strategy and tax planning to retirement and corporate exit modelling.",
    supportingText: "Long-term relationships built on honest counsel. We take the time to understand your unique business context so every conversation delivers tangible direction.",
    image: "/src/assets/images/hero_partnership_boardroom_1794482470472.jpg",
    badge: "Strategic Advisory & Wealth",
  }
];

export const TRUST_INDICATORS = [
  { label: "20+ Years in Practice", description: "Trusted since establishment with enduring client relationships" },
  { label: "UK-Wide Support", description: "Serving ambitious enterprises & individuals from Mold across Great Britain" },
  { label: "Traditional Values, Modern Approach", description: "Personal integrity coupled with leading cloud accounting technology" }
];

export const OVERVIEW_SERVICES: ServiceItem[] = [
  {
    id: 'accountancy',
    number: '01',
    title: 'Accountancy',
    category: 'Compliance',
    shortDesc: 'Annual account preparation, corporation tax, and comprehensive financial reporting.',
    fullDesc: 'Statutory accounts for Companies House and HMRC, drafted once, reviewed twice. We explain what your balance sheet and profit ratios actually say about operational performance.',
    deliverables: ['Statutory Year-End Accounts', 'Corporation Tax (CT600)', 'Filing with Companies House & HMRC', 'Management Ratios & Health Check'],
    image: '/src/assets/images/services_accountancy_audit_1794482470491.jpg',
    tags: ['Statutory Accounts', 'Corporation Tax', 'Companies House', 'Balance Sheet']
  },
  {
    id: 'bookkeeping',
    number: '02',
    title: 'Bookkeeping',
    category: 'Compliance',
    shortDesc: 'Day-to-day financial transaction recording, keeping your books accurate and organised.',
    fullDesc: 'Monthly bookkeeping on all major software platforms, reconciled within five working days of month-end, accompanied by a concise written note highlighting anything unusual.',
    deliverables: ['Monthly Bank Reconciliations', 'Digital Invoice & Receipt Processing', 'Clean Nominal Ledger Maintenance', 'Prompt Month-End Closing Notes'],
    image: '/src/assets/images/hero_financial_analysis_1794482469510.jpg',
    tags: ['Bank Feeds', 'Cloud Reconciliations', 'Digital Invoices', 'Month-End Notes']
  },
  {
    id: 'payroll-bureau',
    number: '03',
    title: 'Payroll Bureau',
    category: 'Compliance',
    shortDesc: 'Complete payroll management, PAYE, National Insurance, and employee payment processing.',
    fullDesc: 'Weekly or monthly payroll for teams between two and eighty staff. Real Time Information (RTI), workplace pension auto-enrolment, and P60/P11D obligations handled reliably.',
    deliverables: ['Weekly & Monthly Payroll Runs', 'HMRC RTI Submissions', 'Pension Auto-Enrolment & Re-declaration', 'Digital Secure Payslips & Year-End P60s'],
    image: '/src/assets/images/personal_service_client_1794482470716.jpg',
    tags: ['PAYE', 'Auto-Enrolment', 'RTI Submissions', 'P60 & P11D']
  },
  {
    id: 'advisory',
    number: '04',
    title: 'Advisory',
    category: 'Advisory',
    shortDesc: 'Strategic financial guidance to help you make confident business decisions.',
    fullDesc: 'Structured, agenda-led coaching and financial reviews focused on profitability, working capital, cashflow forecasting, and sustainable commercial expansion.',
    deliverables: ['Quarterly Board-Level Advisory', 'Cash Flow & Runway Projections', 'Margin & Pricing Structure Reviews', 'Growth Strategy Roadmapping'],
    image: '/src/assets/images/hero_partnership_boardroom_1794482470472.jpg',
    tags: ['Cashflow Forecast', 'Profitability', 'Growth Strategy', 'Board Review']
  },
  {
    id: 'tax-protection',
    number: '05',
    title: 'Tax Investigation Protection',
    category: 'Compliance',
    shortDesc: 'Free protection services providing peace of mind against HMRC enquiries.',
    fullDesc: 'Comprehensive defence and fee protection coverage. Should HMRC initiate an audit, our senior team handles representation without unexpected professional fee bills.',
    deliverables: ['Full Representation in HMRC Enquiries', 'Professional Defence Fee Shield', 'Corporation Tax & VAT Aspect Audits', 'Zero Surprise Invoices for Defence'],
    image: '/src/assets/images/hero_accountant_consultation_1794482468735.jpg',
    tags: ['HMRC Protection', 'Audit Defence', 'Fee Insurance', 'Complete Peace of Mind']
  },
  {
    id: 'wealth-management',
    number: '06',
    title: 'Wealth Management',
    category: 'Planning',
    shortDesc: 'Personal financial planning and wealth management to secure your future.',
    fullDesc: 'Coordinated advice alongside regulated financial advisers to align corporate dividends, pension contributions, and private investments for tax-efficient long-term wealth.',
    deliverables: ['Executive Remuneration Modelling', 'Pension Contribution Tax Relief', 'Lifetime Wealth Strategy Review', 'Independent Financial Collaboration'],
    image: '/src/assets/images/hero_partnership_boardroom_1794482470472.jpg',
    tags: ['Executive Pension', 'Tax Efficiency', 'Succession', 'Dividend Planning']
  }
];

export const ALL_SERVICES_BY_CATEGORY = {
  Compliance: {
    headline: "The Regular Work, Done to a Deliberate Standard.",
    description: "We go beyond accounts and tax deadlines to help you understand what your numbers really mean, how your business is performing, and what steps can help you move forward with confidence.",
    items: [
      {
        title: "Accounts Preparation",
        desc: "Statutory accounts for Companies House and HMRC, drafted once, reviewed twice.",
        details: "Full preparation of annual statutory balance sheets, profit & loss statements, director disclosures, and filing via IXBRL."
      },
      {
        title: "Bookkeeping",
        desc: "Monthly bookkeeping on all Accounting & Bookkeeping software, reconciled within five working days of month-end, with a short written note on anything unusual.",
        details: "Eliminates shoebox accounting. Daily and monthly bank feeds synced, sales and expense ledgers accurately classified."
      },
      {
        title: "Tax Returns",
        desc: "Self-assessment, corporation tax, and partnership returns — filed without last-minute rushes.",
        details: "Proactive computation of liabilities months in advance of the statutory deadline so you can manage cash reserves calmly."
      },
      {
        title: "Payroll",
        desc: "Weekly or monthly payroll for teams between two and eighty. Auto-enrolment, RTI, and P60/P11D obligations handled without you thinking about them.",
        details: "Direct digital payslips for employees, calculation of student loans, statutory sick pay, maternity pay, and NEST/Smart pension integration."
      },
      {
        title: "VAT",
        desc: "VAT returns under Making Tax Digital, with proactive scheme reviews every eighteen months to check you are in the right one.",
        details: "MTD compliant digital submissions, standard vs flat rate vs margin scheme comparisons, and import/export guidance."
      },
      {
        title: "Company Secretarial",
        desc: "Confirmation statements, officer changes, share allotments, and the statutory registers every Ltd company has to keep.",
        details: "Strict maintenance of PSC registers, share transfers, articles of association, registered office facility, and board resolutions."
      },
      {
        title: "Internal Audit",
        desc: "Independent assurance over risk management, governance, and internal controls. Quiet, readable, specific about what to fix.",
        details: "Systematic checks on financial workflows, anti-fraud controls, authorisations, and procedural weaknesses before external scrutiny."
      }
    ]
  },
  Planning: {
    headline: "The Long-View Work, Started Before It Has To.",
    description: "From tax efficiency to retirement and succession planning, we take a proactive approach; working with you early and providing coordinated, year-round advice to support better long-term decisions.",
    items: [
      {
        title: "Tax Planning",
        desc: "R&D, capital allowances, EIS/SEIS, and remuneration strategy reviewed before the year-end, while we can still change something.",
        details: "Identification of allowable qualifying expenditure, full expensing allowances, annual investment allowances, and optimal director salary/dividend splits."
      },
      {
        title: "Estate Planning",
        desc: "Inheritance tax modelling, lifetime gift strategies, trust structures, and Business Relief reviews. Begin at least eighteen months early.",
        details: "Structuring qualifying trading assets for 100% Business Relief, spousal allowances, family investment companies, and lifetime giving schedules."
      },
      {
        title: "Retirement Strategies",
        desc: "Pension contribution profile, dividend-vs-salary modelling, and business exit planning for the ten years before, not the day after.",
        details: "Maximising employer pension contributions to reduce corporation tax while building personal financial independence outside company assets."
      },
      {
        title: "Wealth Management",
        desc: "Coordinated advice with a regulated financial adviser. Annual review; no cross-selling.",
        details: "Joined-up financial architecture connecting company performance, director pension schemes, ISAs, and long-term capital preservation."
      }
    ]
  },
  Advisory: {
    headline: "Support That Grows With Your Business",
    description: "From first steps to full-scale growth, we provide tailored accounting, bookkeeping, and advisory services designed around you; giving you clarity, stability, and the confidence to make smarter business decisions at every stage.",
    items: [
      {
        title: "Business Advisory",
        desc: "Professional business advice and coaching focused on profitability, growth, and confident decision-making, delivered through structured, agenda-led sessions with clear outcomes and actions.",
        details: "KPI dashboards, break-even analysis, financial health diagnostics, overhead reviews, and actionable board packs."
      },
      {
        title: "Business Start-Up",
        desc: "Sole trader or Ltd setup, HMRC registration, first bookkeeping system, and a one-hour strategic conversation before your first quarter.",
        details: "Guidance on company formation vs sole trader status, VAT threshold planning, business banking introductions, and setting up clean chart of accounts."
      }
    ]
  }
};

export const TRADITIONAL_VALUES = [
  {
    title: "Traditional Values",
    desc: "Integrity, reliability, and personal service remain central to everything we do. We hold ourselves to uncompromising standards of professional rectitude.",
    icon: "ShieldCheck"
  },
  {
    title: "Clear Insight",
    desc: "We focus on helping you understand your numbers, not just preparing them. Jargon-free explanations that clarify where your profit originates.",
    icon: "LineChart"
  },
  {
    title: "Forward Planning",
    desc: "Proactive support throughout the year, not just when deadlines approach. We contact you before fiscal changes take effect so you are always prepared.",
    icon: "Compass"
  }
];

export const AWARDS: AwardItem[] = [
  { id: '1', title: "Global 100 · 2026 Winner", year: "2026", category: "Accountancy Excellence", issuer: "Global 100 Awards" },
  { id: '2', title: "Global 100 · 2024 Winner", year: "2024", category: "Best Practice UK", issuer: "Global 100 Awards" },
  { id: '3', title: "Most Trusted Accountancy Practice · 2024", year: "2024", category: "Client Trust & Integrity", issuer: "UK Enterprise Awards" },
  { id: '4', title: "Corporate Excellence · Mold · 2023", year: "2023", location: "Mold", category: "Regional Excellence", issuer: "Corporate LiveWire" },
  { id: '5', title: "Three Best Rated · 2024", year: "2024", category: "Top Rated Accountants", issuer: "Three Best Rated UK" },
  { id: '6', title: "Best Modern Accountancy · 2021", year: "2021", category: "Modern Practice", issuer: "SME News" },
  { id: '7', title: "Innovation & Excellence · 2020", year: "2020", category: "Accountancy Innovation", issuer: "Corporate LiveWire" },
  { id: '8', title: "Top 3 Accountants · Mold · 2022", year: "2022", location: "Mold", category: "Top 3 Rated", issuer: "Three Best Rated" },
  { id: '9', title: "Best SME Accountancy · Wales · 2020", year: "2020", location: "Wales", category: "SME Accounting", issuer: "Welsh Enterprise Awards" }
];

export const SOFTWARE_PARTNERS = [
  { name: "Xero", tier: "Platinum Partner", type: "Cloud Accounting Platform" },
  { name: "Intuit QuickBooks", tier: "Advanced ProAdvisor", type: "Accounting & Bookkeeping" },
  { name: "Sage", tier: "Accountant Partner", type: "Enterprise Financial Software" },
  { name: "FreeAgent", tier: "Accredited Practitioner", type: "Small Business & Freelance" },
  { name: "Dext", tier: "Certified Partner", type: "Receipt & Invoice Extraction" },
  { name: "AutoEntry", tier: "Authorised Partner", type: "Automated Data Capture" }
];

export const LATEST_NEWS: NewsArticle[] = [
  {
    id: 'pension-death-benefit',
    title: "Pension Death Benefit Tax Rules Relaxed",
    date: "14 October 2026",
    category: "Pensions & Estate Planning",
    readTime: "4 min read",
    summary: "The two-year time limit for paying tax-free pension death benefits is being removed. This means lump sum death benefits will no longer face inadvertent income tax penalties due to administrative delays.",
    content: "Under existing rules, if a pension scheme administrator failed to distribute death benefits within two years of being notified of a member's death, the payment could become taxable at the beneficiary's marginal income tax rate. The Treasury has confirmed that this artificial cliff-edge is being dismantled, offering critical protection for bereaved families navigating complex estates. We review what this means for your nominated beneficiaries and how to ensure your expressions of wish remain up to date.",
    link: "https://accountingbookkeeping.co.uk/pension-death-benefit-tax-rules-relaxed/",
    image: "/src/assets/images/hero_partnership_boardroom_1794482470472.jpg"
  },
  {
    id: 'lifetime-isa',
    title: "Lifetime ISA Withdrawal Charges Reduced",
    date: "28 September 2026",
    category: "Personal Finance & Property",
    readTime: "3 min read",
    summary: "The withdrawal charge for Lifetime ISA savings used by first-time buyers to purchase a property costing more than the cap is being recalibrated to prevent penalising genuine savers in high-growth housing areas.",
    content: "The Lifetime ISA 25% withdrawal penalty previously clawed back not only the government bonus but also a portion of the saver's original capital. Following sustained representations from financial bodies and accountancy leaders, revised rules provide a fair mechanism when property values exceed the historical £450,000 threshold. In this briefing, we examine the updated relief criteria and how young professionals and their families can plan their deposit strategy safely.",
    link: "https://accountingbookkeeping.co.uk/lifetime-isa-withdrawal-charges-reduced/",
    image: "/src/assets/images/hero_financial_analysis_1794482469510.jpg"
  },
  {
    id: 'child-benefit',
    title: "Child Benefit Overpayment Tax Rules Clarified",
    date: "12 September 2026",
    category: "Personal Tax & HMRC Rules",
    readTime: "5 min read",
    summary: "A new measure introduced as part of the recent Budget will allow High Income Child Benefit Charge payments to be calculated through dynamic PAYE adjustments, avoiding unexpected self-assessment back-taxes.",
    content: "For years, the High Income Child Benefit Charge (HICBC) has caught thousands of unsuspecting families who were unaware that earning above the threshold necessitated registering for Self Assessment. HMRC is now rolling out automated tax code adjustments and clear guidance on past overpayment calculations. We outline the revised household threshold tests and how couples can structure pension contributions to legally reduce adjusted net income below the liability bracket.",
    link: "https://accountingbookkeeping.co.uk/child-benefit-overpayment-tax-rules-clarified/",
    image: "/src/assets/images/services_accountancy_audit_1794482470491.jpg"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    clientName: "David Hughes",
    role: "Managing Director",
    company: "Cambrian Precision Engineering Ltd",
    location: "Flintshire",
    verifiedSource: "Google Verified Review",
    quote: "ABC has transformed how we manage our financial obligations. Their accounts preparation is impeccably thorough, and for the first time in ten years of trading, we actually understand our cashflow cycles. The team in Mold is always accessible, calm, and dependable.",
    highlight: "Impeccably thorough, always accessible, calm, and dependable.",
    rating: 5
  },
  {
    id: '2',
    clientName: "Sarah Jenkins",
    role: "Founder & Director",
    company: "Meadowland Healthcare Group",
    location: "Chester & North Wales",
    verifiedSource: "Client Feedback Audit",
    quote: "Switching our payroll bureau and corporation tax to ABC was the best operational decision we made. Our team of 45 staff is paid seamlessly every month, and their proactive tax planning saved us tens of thousands prior to year end.",
    highlight: "Proactive tax planning saved us tens of thousands prior to year end.",
    rating: 5
  },
  {
    id: '3',
    clientName: "Robert Ellis",
    role: "Senior Partner",
    company: "Ellis & Morgan Logistics",
    location: "Wrexham",
    verifiedSource: "Verified Business Client",
    quote: "What stands out about ABC is their traditional integrity combined with modern cloud speed. When HMRC launched a random routine audit, their Tax Investigation Protection handled every single query without costing us a penny in professional fees. True peace of mind.",
    highlight: "Traditional integrity combined with modern cloud speed.",
    rating: 5
  },
  {
    id: '4',
    clientName: "Elen Pritchard",
    role: "Co-Founder",
    company: "Kinetic Digital Commerce",
    location: "Manchester & Wales",
    verifiedSource: "Verified Review",
    quote: "From our initial business start-up setup through to multi-currency VAT and R&D capital allowances, ABC has been a genuine partner. They explain the numbers in plain English and give us the confidence to invest in our team.",
    highlight: "Explain numbers in plain English with genuine partnership.",
    rating: 5
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: "What accounting services does ABC provide?",
    category: "Accounting",
    answer: "ABC provides comprehensive statutory accounts preparation for Companies House and HMRC, corporation tax computations, management accounting, annual balance sheet reconciliations, and internal audit controls for sole traders, partnerships, and limited companies across the UK."
  },
  {
    id: 'faq-2',
    question: "How does your monthly bookkeeping support work?",
    category: "Accounting",
    answer: "We manage your day-to-day transactions on approved cloud platforms (Xero, QuickBooks, Sage, or FreeAgent). We reconcile bank feeds, capture digital receipts, keep ledgers pristine within 5 working days of month-end, and provide a clear written summary highlighting any unusual movements or upcoming liabilities."
  },
  {
    id: 'faq-3',
    question: "How do you handle Tax Returns and HMRC deadlines?",
    category: "Tax",
    answer: "We prepare and submit Self-Assessment returns, Corporation Tax returns (CT600), and Partnership returns well ahead of statutory deadlines. By calculating your exact liabilities early, we ensure you have ample notice to manage your cashflow and avoid eleventh-hour panics or late filing surcharges."
  },
  {
    id: 'faq-4',
    question: "What is included in your Payroll Bureau service?",
    category: "Payroll & VAT",
    answer: "Our payroll service covers teams from 2 up to 80 employees. We process weekly and monthly payrolls, manage Real Time Information (RTI) submissions to HMRC, track student loan repayments, handle statutory sick pay and maternity pay, administer pension auto-enrolment with NEST or your chosen provider, and issue secure digital payslips and P60s."
  },
  {
    id: 'faq-5',
    question: "How do you assist with Making Tax Digital (MTD) and VAT?",
    category: "Payroll & VAT",
    answer: "We ensure full compliance with HMRC's Making Tax Digital rules, preparing and submitting VAT returns accurately. Furthermore, every 18 months we conduct a proactive review of your VAT scheme (Standard, Flat Rate, Cash Accounting, or Margin Scheme) to verify that your business is operating under the most advantageous arrangement."
  },
  {
    id: 'faq-6',
    question: "What is ABC's Tax Investigation Protection service?",
    category: "Tax",
    answer: "Tax Investigation Protection provides our clients with complete peace of mind. If HMRC opens an enquiry into your accounts, PAYE, or VAT, our professional representation and defence fees are covered, ensuring expert protection without unexpected legal or accounting bills."
  },
  {
    id: 'faq-7',
    question: "Can ABC help me set up a new business or limited company?",
    category: "Advisory & Onboarding",
    answer: "Yes. Our Business Start-Up service guides you through company formation or sole trader registration, HMRC VAT and PAYE enrollment, setting up your cloud accounting software, and includes a dedicated 1-hour strategic consultation before your first quarter to establish healthy financial foundations."
  },
  {
    id: 'faq-8',
    question: "What makes ABC's Advisory services different?",
    category: "Advisory & Onboarding",
    answer: "We do not believe in generic dashboards or vague advice. Our advisory sessions are structured and agenda-led, focusing on tangible key performance indicators, gross profit margins, cashflow forecasts, and concrete action steps to improve your bottom line."
  },
  {
    id: 'faq-9',
    question: "How does the initial consultation process work?",
    category: "Advisory & Onboarding",
    answer: "We begin with a focused, no-obligation 30-minute consultation either in person at our Mold office, over video, or via telephone. We discuss your current financial setup, immediate challenges, and statutory needs. You will receive honest, straightforward guidance on how we can help—with zero sales pressure."
  },
  {
    id: 'faq-10',
    question: "How do I access the Client Portal?",
    category: "Accounting",
    answer: "Our secure Client Portal is accessible 24/7 via the 'Client Portal' button in the header or by visiting https://portal.accountingbookkeeping.co.uk/signin. The portal enables secure document exchange, tax return sign-offs, and instant access to your historical filing documents."
  }
];

export const RESOURCES_LIST: ResourceItem[] = [
  {
    id: 'res-1',
    title: "UK Key Tax Rates & Allowances 2026/27 Briefing",
    category: "Tax Guide",
    description: "A clear, concise reference guide to current Corporation Tax main rates, marginal relief, dividend allowances, and capital gains thresholds.",
    fileFormat: "PDF Briefing",
    fileSize: "1.4 MB",
    updated: "Updated October 2026"
  },
  {
    id: 'res-2',
    title: "New Business Start-Up Financial Roadmap",
    category: "Business Start-Up",
    description: "Step-by-step checklist covering Companies House incorporation, VAT thresholds, bank accounts, and first-year statutory reporting.",
    fileFormat: "Interactive PDF Checklist",
    fileSize: "2.1 MB",
    updated: "Updated August 2026"
  },
  {
    id: 'res-3',
    title: "Making Tax Digital (MTD) VAT & ITSA Compliance Guide",
    category: "Compliance",
    description: "Everything UK SMEs and landlords need to know about digital record keeping, compliant software, and HMRC quarterly submissions.",
    fileFormat: "Whitepaper Guide",
    fileSize: "1.8 MB",
    updated: "Updated September 2026"
  },
  {
    id: 'res-4',
    title: "Owner-Director Remuneration & Dividend Strategy",
    category: "Financial Planning",
    description: "Analytical comparison of salary vs dividend extraction, taking into account National Insurance thresholds and corporation tax deduction rules.",
    fileFormat: "Executive Strategy Note",
    fileSize: "950 KB",
    updated: "Updated November 2026"
  }
];
