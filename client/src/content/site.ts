/**
 * PairoApps website content, from "Website Strategy & Content Architecture v1.0".
 * Product content (agents, Parrot AI, Health Check, compliance, packs) lives in ./pairo.ts.
 */

export const SITE_URL = 'https://www.pairoapps.com' // TODO: confirm production domain

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Agentic Solutions', to: '/services' },
  { label: 'Parrot AI', to: '/parrot-ai' },
  { label: 'Health Check', to: '/health-check' },
  { label: 'Compliance', to: '/compliance' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Insights', to: '/insights' },
  { label: 'Contact', to: '/contact' },
] as const

export const navCta = { label: 'Book a Demo', to: '/contact?intent=demo' }

export const seo = {
  home: { title: 'PairoApps | The Agentic ERP for India', description: 'Your agentic accountant closes the books: 24×7, fully automated, with an auditor built in. Built by accountants, for business owners and accountants.', path: '/' },
  about: { title: 'About PairoApps | Our Vision, Mission & ERP Technology', description: 'Why PairoApps exists, the principles behind what we build, and how we approach business technology.', path: '/about' },
  services: { title: 'Agentic Solutions | PairoApps', description: 'An agent in every module: twelve agents do the routine, all posting into one ledger. You approve what matters.', path: '/services' },
  parrot: { title: 'Parrot AI | Your AI Accounting Assistant | PairoApps', description: 'Type, speak or send a photo in English, Tamil or Hindi. Parrot AI drafts the entry; nothing posts until you confirm.', path: '/parrot-ai' },
  health: { title: 'Real-time Health Check | PairoApps', description: '70 checks across 12 areas on your live books, run any time, in seconds. Add your own rules.', path: '/health-check' },
  compliance: { title: 'GST, TDS, Companies Act & MSME Compliance | PairoApps', description: 'GST, TDS under the Income-tax Act 2025, Companies Act and MSME, checked as you post and ready before every due date.', path: '/compliance' },
  pricing: { title: 'Packs and Pricing | PairoApps', description: 'One price per company. Every agent included. Start free; add people, companies and control as you grow.', path: '/pricing' },
  insights: { title: 'Business & ERP Insights | PairoApps', description: 'Ideas on ERP, AI, automation, finance and operations for a smarter way to do business.', path: '/insights' },
  contact: { title: 'Contact PairoApps | Talk to Our ERP Software Team', description: 'Book a demo or talk to the PairoApps team about connecting your business.', path: '/contact' },
} as const

export const principles = [
  { name: 'Connection', meaning: 'Bring business functions together.' },
  { name: 'Intelligence', meaning: 'Make technology more useful.' },
  { name: 'Progress', meaning: 'Help organisations continuously improve.' },
]

export const services = ['ERP Implementation', 'System Configuration', 'Data Migration', 'Third-party Integrations', 'User Training', 'Technical Support']

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

/** "Why PairoApps" statements, shown in the reference testimonial layout. Not customer quotes. */
export const whyStatements = [
  { text: 'Your accountant and your auditor are the same agent. It does the work, and checks it as you post.', name: 'Checked as you post', role: 'Why PairoApps · 01' },
  { text: 'Run a full audit any time: 70 checks across 12 areas on your live books, in seconds.', name: 'Full audit any time', role: 'Why PairoApps · 02' },
  { text: 'The audit trail is always on, as the Companies Act requires. Every change is logged with who, when and why.', name: 'Audit trail always on', role: 'Why PairoApps · 03' },
  { text: 'No year-end surprises. GSTR-1, GSTR-3B and the books are kept tied as you go.', name: 'No year-end surprises', role: 'Why PairoApps · 04' },
  { text: 'Nothing posts without you. Agents draft, check and route; one tap from you makes it final.', name: 'Nothing posts without you', role: 'Why PairoApps · 05' },
  { text: "Your data never goes to an outside AI. Parrot AI runs on PairoApps' own model.", name: 'No outside AI', role: 'Why PairoApps · 06' },
]

/** Ticker rows (reference awards marquee): the agentic accountant, in numbers. */
export const vocabularyA = [
  { title: '58 bank lines matched', sub: 'Banking agent · 08:02' },
  { title: '₹2.3 L collected today', sub: 'Collection agent' },
  { title: '70/70 checks clear', sub: 'Audit agent' },
  { title: 'Day 0 month close', sub: 'Close agent' },
]
export const vocabularyB = [
  { title: '3 days', sub: 'Migration' },
  { title: '2 weeks', sub: 'To go live' },
  { title: '24×7', sub: 'Working round the clock' },
  { title: '12 agents', sub: 'One ledger' },
]

export const industries = ['Manufacturing', 'Retail & Distribution', 'Professional Services', 'Healthcare', 'Construction', 'Other']

// TODO: replace with verified contact details
export const contactInfo = { email: 'hello@pairoapps.com', phone: '', address: '', hours: 'Mon-Fri, 9:00-18:00' }
