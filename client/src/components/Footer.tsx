import { Link } from 'react-router'
import { Wordmark } from './brand/Logo'
import { Brand } from './ui'

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Agentic Solutions', to: '/services' },
      { label: 'Parrot AI', to: '/parrot-ai' },
      { label: 'Health Check', to: '/health-check' },
      { label: 'Compliance', to: '/compliance' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Pricing', to: '/pricing' },
      { label: 'Book a Demo', to: '/contact?intent=demo' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Insights', to: '/insights' },
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Terms', to: '/terms' },
    ],
  },
]

/**
 * Footer laid out exactly like the reference: one light background throughout,
 * logo + one-line description + copyright on the left, three link columns on the right,
 * and a wide single-colour etched scene filling the bottom. PAIRO theme: navy ink #1E4A87 on light #EDF3FE (matches the illustration paper).
 */
export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#EDF3FE] text-navy-800">
      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] gap-12 px-5 pt-14 md:grid-cols-2 md:px-14 md:pt-16">
        <div>
          <Link to="/" aria-label="PairoApps home" className="inline-block"><Wordmark tone="navy" height={34} /></Link>
          <p className="mt-5 max-w-[19rem] text-[13px] md:text-[15px] leading-[1.55] text-navy-800/90">
            The agentic ERP for India. An accountant and an auditor working round the clock, built by accountants.
          </p>
          <p className="mt-5 text-[13px] md:text-[15px] text-navy-800/90">© {new Date().getFullYear()} <Brand /></p>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-3 gap-6">
          {columns.map((col) => (
            <div key={col.title}>
              <h2 className="text-[13px] md:text-[15px] font-semibold text-navy-900">{col.title}</h2>
              <ul className="mt-5 space-y-[0.9rem] text-[13px] md:text-[15px] text-navy-800/90">
                {col.links.map((l) => (
                  <li key={l.label}><Link to={l.to} className="transition-colors hover:text-seal">{l.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      {/* Etched illustration (navy ink on #EDF3FE), top edge faded into the footer background */}
      <div className="relative mt-6 md:mt-0">
        <img
          src="/brand/footer-engraving.webp"
          srcSet="/brand/footer-engraving-1000.webp 1000w, /brand/footer-engraving.webp 1792w"
          sizes="100vw"
          width={1792}
          height={768}
          alt=""
          loading="lazy"
          decoding="async"
          className="block h-[260px] w-full object-cover object-[42%_100%] sm:h-auto"
        />
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[30%] bg-[linear-gradient(180deg,#EDF3FE_0%,rgba(237,243,254,0)_100%)]" />
      </div>
    </footer>
  )
}
