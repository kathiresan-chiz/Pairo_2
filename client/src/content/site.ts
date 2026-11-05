/**
 * PairoApps website content, from "Website Strategy & Content Architecture v1.0".
 * Anything with confirmed: false is a planning suggestion from that doc and
 * must be validated by the PairoApps team before launch.
 */

export const SITE_URL = 'https://www.pairoapps.com' // TODO: confirm production domain

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  // { label: 'Pricing', to: '/pricing' }, // Pricing page switched off for now
  { label: 'Insights', to: '/insights' },
  { label: 'Contact', to: '/contact' },
] as const

export const navCta = { label: 'Book a Demo', to: '/contact?intent=demo' }

export const seo = {
  home: { title: 'PairoApps | AI-Powered ERP Software for Smarter Business Management', description: 'PairoApps brings finance, operations, people and processes into one connected, AI-powered ERP platform.', path: '/' },
  about: { title: 'About PairoApps | Our Vision, Mission & ERP Technology', description: 'Why PairoApps exists, the principles behind what we build, and how we approach business technology.', path: '/about' },
  services: { title: 'ERP Software & Business Automation Solutions | PairoApps', description: 'A connected ERP ecosystem for every business function, with intelligent automation, implementation and support.', path: '/services' },
  pricing: { title: 'PairoApps ERP Pricing | Flexible Business Software Plans', description: 'ERP pricing shaped around your users, modules, integrations and support needs.', path: '/pricing' },
  insights: { title: 'Business & ERP Insights | PairoApps', description: 'Ideas on ERP, AI, automation, finance and operations for a smarter way to do business.', path: '/insights' },
  contact: { title: 'Contact PairoApps | Talk to Our ERP Software Team', description: 'Book a demo or talk to the PairoApps team about connecting your business.', path: '/contact' },
} as const

export const modules = [
  { key: 'finance', name: 'Finance & Accounting', blurb: 'Ledgers, receivables, payables and reporting in one place.' },
  { key: 'sales', name: 'Sales & CRM', blurb: 'From lead to invoice without re-keying data.' },
  { key: 'purchase', name: 'Purchase Management', blurb: 'Requisitions, approvals and supplier orders, connected.' },
  { key: 'inventory', name: 'Inventory Management', blurb: 'Live stock levels across every location.' },
  { key: 'hr', name: 'HR Management', blurb: 'People, payroll and attendance alongside the rest of the business.' },
  { key: 'tax', name: 'Tax & Compliance', blurb: 'Tax-ready records as part of everyday transactions.' },
  { key: 'projects', name: 'Projects & Budgets', blurb: 'Track spend against plan, project by project.' },
  { key: 'analytics', name: 'Analytics & Reports', blurb: 'Clear reporting across every connected module.' },
].map((m) => ({ ...m, confirmed: false }))

export const aiCapabilities = [
  { name: 'AI-powered assistance', blurb: 'Ask questions of your business data in plain language.' },
  { name: 'Intelligent document processing', blurb: 'Turn invoices and receipts into structured entries.' },
  { name: 'Workflow automation', blurb: 'Let routine, supported steps run on their own.' },
  { name: 'Predictive insights', blurb: 'Spot trends in cash, stock and demand earlier.' },
  { name: 'Automated reporting', blurb: 'Reports that build themselves on schedule.' },
].map((c) => ({ ...c, confirmed: false }))

export const howItWorks = [
  'Connect business operations.',
  'Centralise business information.',
  'Automate supported workflows.',
  'Access meaningful insights.',
  'Make informed decisions.',
]

export const differentiators = [
  'Connected business management',
  'Intelligent automation',
  'Centralised information',
  'Operational visibility',
  'Flexible and scalable architecture',
  'User-friendly experience',
]

export const principles = [
  { name: 'Connection', meaning: 'Bring business functions together.' },
  { name: 'Intelligence', meaning: 'Make technology more useful.' },
  { name: 'Progress', meaning: 'Help organisations continuously improve.' },
]

export const services = ['ERP Implementation', 'System Configuration', 'Data Migration', 'Third-party Integrations', 'User Training', 'Technical Support']

export const plans = [
  { name: 'Essential', audience: 'Small businesses', featured: false },
  { name: 'Professional', audience: 'Growing businesses', featured: true },
  { name: 'Enterprise', audience: 'Large or complex organisations', featured: false },
].map((p) => ({ ...p, confirmed: false }))

export const pricingFactors = ['Number of users', 'Selected ERP modules', 'Implementation requirements', 'Integrations', 'Support requirements']

const TBC = 'To be confirmed by the PairoApps team.'
export const pricingFaq = [
  { q: 'How is ERP pricing calculated?', a: 'Pricing depends on users, selected modules, implementation, integrations and support. Our team will scope it with you.' },
  { q: 'Can I choose individual modules?', a: TBC },
  { q: 'Is implementation included?', a: TBC },
  { q: 'Can I upgrade my plan?', a: TBC },
  { q: 'Does PairoApps support integrations?', a: TBC },
  { q: 'Is product training available?', a: TBC },
]

export const insightCategories = [
  { slug: 'erp-enterprise-technology', name: 'ERP & Enterprise Technology' },
  { slug: 'artificial-intelligence', name: 'Artificial Intelligence' },
  { slug: 'business-automation', name: 'Business Automation' },
  { slug: 'finance-accounting', name: 'Finance & Accounting' },
  { slug: 'operations-management', name: 'Operations & Management' },
  { slug: 'industry-perspectives', name: 'Industry Perspectives' },
]

export type Article = { slug: string; title: string; category: string; excerpt: string; readTime: string }

export const articles: Article[] = [
  { slug: 'what-is-ai-powered-erp-software', title: 'What Is AI-Powered ERP Software?', category: 'artificial-intelligence', excerpt: 'How intelligence built into ERP changes the way finance, stock and people data work together.', readTime: '6 min read' },
  { slug: 'how-erp-improves-efficiency', title: 'How ERP Software Helps Businesses Improve Efficiency', category: 'erp-enterprise-technology', excerpt: 'Where time goes in disconnected businesses, and how one connected system gives it back.', readTime: '5 min read' },
  { slug: 'traditional-erp-vs-ai-erp', title: 'Traditional ERP vs. AI-Powered ERP', category: 'artificial-intelligence', excerpt: 'What actually differs, and what to ask vendors when comparing them.', readTime: '7 min read' },
  { slug: 'signs-your-business-needs-erp', title: '7 Signs Your Business Needs an ERP System', category: 'erp-enterprise-technology', excerpt: 'Spreadsheets, re-keyed data and late reports are usually the first signals.', readTime: '4 min read' },
  { slug: 'automation-reduces-manual-work', title: 'How Business Automation Reduces Manual Work', category: 'business-automation', excerpt: 'Which repetitive tasks are worth automating first, and which are not.', readTime: '5 min read' },
  { slug: 'why-connected-systems-matter', title: 'Why Connected Business Systems Matter', category: 'operations-management', excerpt: 'One source of truth for every team, and why it matters more as you grow.', readTime: '4 min read' },
  { slug: 'erp-implementation-guide', title: 'ERP Implementation: A Complete Guide', category: 'erp-enterprise-technology', excerpt: 'From scoping and data migration to training and go-live.', readTime: '12 min read' },
  { slug: 'choose-the-right-erp', title: 'How to Choose the Right ERP Software', category: 'erp-enterprise-technology', excerpt: 'A practical checklist for choosing a platform that fits how you work.', readTime: '8 min read' },
]

/**
 * Etched illustrations used as article imagery (until real photography exists).
 * One per article, chosen so no image repeats on the page it appears on:
 * the first two (shown on Home) avoid every image already used on Home.
 */
const visuals = ['m-warehouse', 'm-factory', 'm-retail', 'm-team', 'm-office', 'm-city-bridge', 'm-port', 'm-ai'] as const
export const articleVisual = (a: Article) => visuals[articles.indexOf(a) % visuals.length]

/** AI capabilities as "story" cards (reference success-stories carousel). */
export const aiStories = [
  { title: 'AI-powered assistance', body: 'Ask questions of your business data in plain language and get answers drawn from every connected module.', rows: [['Works across', 'All connected modules'], ['Helps with', 'Everyday questions and lookups'], ['Benefit', 'Answers without building a report']] as [string, string][], visual: 'bg-pairo-blue' },
  { title: 'Intelligent document processing', body: 'Turn invoices, receipts and purchase documents into structured entries, ready to review.', rows: [['Works across', 'Finance, Purchase'], ['Helps with', 'Data entry from documents'], ['Benefit', 'Less re-keying, fewer errors']] as [string, string][], visual: 'bg-pairo-icon' },
  { title: 'Workflow automation', body: 'Let routine, supported steps such as approvals, reminders and postings run on their own.', rows: [['Works across', 'Sales, Purchase, HR'], ['Helps with', 'Repetitive process steps'], ['Benefit', 'Teams focus on exceptions']] as [string, string][], visual: 'bg-pairo-screen' },
  { title: 'Predictive insights', body: 'Spot trends in cash, stock and demand earlier, so decisions are made before problems arrive.', rows: [['Works across', 'Finance, Inventory, Sales'], ['Helps with', 'Planning and forecasting'], ['Benefit', 'Earlier, better-informed decisions']] as [string, string][], visual: 'bg-pairo-night' },
  { title: 'Automated reporting', body: 'Reports that build themselves on schedule and land with the people who need them.', rows: [['Works across', 'Analytics & Reports'], ['Helps with', 'Recurring management reports'], ['Benefit', 'Always-current numbers']] as [string, string][], visual: 'bg-pairo-light' },
]

/** "Why PairoApps" statements, shown in the reference testimonial layout. Not customer quotes. */
export const whyStatements = [
  { text: 'Connected business management. Finance, stock, sales and people share one source of truth, so every team works from the same numbers.', name: 'Connected', role: 'Why PairoApps · 01' },
  { text: 'Intelligent automation. Routine, supported steps run on their own, so your people spend their time on the work that needs them.', name: 'Intelligent', role: 'Why PairoApps · 02' },
  { text: 'Centralised information. No more chasing spreadsheets across inboxes. What you need is where you expect it.', name: 'Centralised', role: 'Why PairoApps · 03' },
  { text: 'Operational visibility. See what is happening across the business as it happens, not at month-end.', name: 'Visible', role: 'Why PairoApps · 04' },
  { text: 'Flexible and scalable architecture. Start with the modules you need and add more as the business grows.', name: 'Scalable', role: 'Why PairoApps · 05' },
  { text: 'A user-friendly experience. Calm, clear screens that people actually want to use every day.', name: 'Human', role: 'Why PairoApps · 06' },
]

/** Ticker rows (reference awards marquee), using the brand vocabulary. */
export const vocabularyA = [
  { title: 'Connected Operations', sub: 'Every function, one system' },
  { title: 'Intelligent Automation', sub: 'Routine work, handled' },
  { title: 'Business Clarity', sub: 'One version of the numbers' },
  { title: 'Actionable Insights', sub: 'From data to decisions' },
]
export const vocabularyB = [
  { title: 'Unified Ecosystem', sub: 'Finance · Stock · People · Growth' },
  { title: 'Operational Efficiency', sub: 'Less friction, more flow' },
  { title: 'Smarter Decisions', sub: 'Built-in intelligence' },
  { title: 'Scalable Technology', sub: 'Grows with your business' },
]

export const industries = ['Manufacturing', 'Retail & Distribution', 'Professional Services', 'Healthcare', 'Construction', 'Other']

// TODO: replace with verified contact details
export const contactInfo = { email: 'hello@pairoapps.com', phone: '', address: '', hours: 'Mon-Fri, 9:00-18:00' }
