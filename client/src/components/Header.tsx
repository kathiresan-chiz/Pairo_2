import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { Wordmark } from './brand/Logo'
import { Arrow, Container } from './ui'
import { insightCategories, navCta } from '../content/site'
import { solutions } from '../content/pairo'

type Item = { label: string; to: string; children?: { label: string; to: string }[] }

const centre: Item[] = [
  { label: 'Home', to: '/' },
  { label: 'Solutions', to: '/services', children: [{ label: 'All agentic solutions', to: '/services' }, ...solutions.map((s) => ({ label: s.name, to: `/services/${s.key}` }))] },
  { label: 'Platform', to: '/parrot-ai', children: [{ label: 'Parrot AI', to: '/parrot-ai' }, { label: 'Health Check', to: '/health-check' }, { label: 'Compliance', to: '/compliance' }] },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About', to: '/about' },
  { label: 'Insights', to: '/insights', children: insightCategories.map((c) => ({ label: c.name, to: `/insights/${c.slug}` })) },
]

function Chevron() {
  return <svg viewBox="0 0 10 6" className="h-1.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden><path d="M1 1l4 4 4-4" /></svg>
}

/** Transparent header over each page's wave hero; turns solid navy once scrolled. */
export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  // Slide the navbar away while the footer is on screen; it returns when the visitor scrolls back up.
  const [atFooter, setAtFooter] = useState(false)
  useEffect(() => {
    const footer = document.querySelector('footer')
    if (!footer) return
    const io = new IntersectionObserver(([e]) => setAtFooter(e.isIntersecting), { rootMargin: '0px 0px -25% 0px' })
    io.observe(footer)
    return () => io.disconnect()
  }, [])
  const [subOpen, setSubOpen] = useState<string | null>(null)
  useEffect(() => {
    setOpen(false)
  }, [pathname])
  // collapse any open sub-menu whenever the mobile menu closes
  useEffect(() => {
    if (!open) setSubOpen(null)
  }, [open])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 text-navy-900 transition-[background-color,border-color,transform,opacity] duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${atFooter && !open ? 'pointer-events-none -translate-y-full opacity-0' : 'translate-y-0 opacity-100'} ${open ? 'border-b border-navy-800/10 bg-paper' : scrolled ? 'border-b border-navy-800/10 bg-paper/[0.97]' : 'bg-transparent'}`}>
      <Container className="grid h-16 grid-cols-[1fr_auto] items-center md:h-20 lg:grid-cols-[1fr_auto_1fr]">
        <Link to="/" aria-label="PairoApps home" className="justify-self-start"><Wordmark tone="navy" height={34} /></Link>

        <nav className="hidden items-center gap-9 text-[13px] md:text-[15px] lg:flex" aria-label="Main">
          {centre.map((item) => (
            <div key={item.to} className="group relative">
              <NavLink to={item.to} end={item.to === '/'} className={({ isActive }) => `flex items-center gap-1.5 py-6 transition-opacity hover:opacity-100 ${isActive ? 'opacity-100' : 'opacity-80'}`}>
                {item.label}{item.children && <Chevron />}
              </NavLink>
              {item.children && (
                <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 translate-y-1 rounded-2xl border border-navy-800/10 bg-paper p-2 text-navy-900 opacity-0 shadow-[0_20px_40px_-20px_rgba(15,42,77,0.35)] transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  {item.children.map((c) => (
                    <Link key={c.label} to={c.to} className="block rounded-xl px-3 py-2 text-[13px] md:text-[15px] hover:bg-navy-900/5">{c.label}</Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center justify-self-end gap-8 text-[13px] md:text-[15px] lg:flex">
          <NavLink to="/contact" className="opacity-80 hover:opacity-100">Contact</NavLink>
          <Link to={navCta.to} className="rounded-none bg-navy-900 px-4 py-2 text-[13px] md:text-[14px] font-medium text-paper transition-colors hover:bg-navy-800">{navCta.label}</Link>
        </div>

        <button className="justify-self-end p-2 lg:hidden" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span className={`block h-px w-6 bg-navy-900 transition-transform ${open ? 'translate-y-[3px] rotate-45' : ''}`} />
          <span className={`mt-1.5 block h-px w-6 bg-navy-900 transition-transform ${open ? '-translate-y-[4px] -rotate-45' : ''}`} />
        </button>
      </Container>

      {open && (
        // data-lenis-prevent: let the open menu scroll on its own (tall when the Services list is expanded)
        <div data-lenis-prevent className="max-h-[calc(100dvh-4rem)] overflow-y-auto lg:hidden">
        <Container className="flex flex-col gap-1 pb-8">
          {[...centre, { label: 'Contact', to: '/contact' }].map((i) =>
            i.children ? (
              // label opens the page, chevron reveals the sub-menu
              <div key={i.to} className="border-b border-navy-800/10">
                <div className="flex items-center justify-between">
                  <Link to={i.to} onClick={() => setOpen(false)} className="flex-1 py-4 text-2xl tracking-tight">{i.label}</Link>
                  <button
                    className="grid h-11 w-11 place-items-center"
                    aria-label={`${subOpen === i.label ? 'Hide' : 'Show'} ${i.label} menu`}
                    aria-expanded={subOpen === i.label}
                    onClick={() => setSubOpen(subOpen === i.label ? null : i.label)}
                  >
                    <span className={`transition-transform duration-300 ${subOpen === i.label ? 'rotate-180' : ''}`}><Chevron /></span>
                  </button>
                </div>
                <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${subOpen === i.label ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <ul className="overflow-hidden">
                    {i.children.map((c) => (
                      <li key={c.label}>
                        <Link to={c.to} onClick={() => setOpen(false)} tabIndex={subOpen === i.label ? 0 : -1} className="flex items-center justify-between border-t border-navy-800/10 py-3 pl-4 text-[15px] text-navy-800/85 hover:text-navy-900">
                          {c.label}<Arrow className="h-2.5 w-2.5 opacity-60" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link key={i.to} to={i.to} onClick={() => setOpen(false)} className="border-b border-navy-800/10 py-4 text-2xl tracking-tight">{i.label}</Link>
            ),
          )}
          <Link to={navCta.to} onClick={() => setOpen(false)} className="mt-6 self-start rounded-none bg-navy-900 px-5 py-2.5 text-[13px] md:text-[14px] font-medium text-paper">{navCta.label}</Link>
        </Container>
        </div>
      )}
    </header>
  )
}
