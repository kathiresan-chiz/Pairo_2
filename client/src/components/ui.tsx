import { useEffect, useRef, type ReactNode } from 'react'
import { Link } from 'react-router'

/**
 * The "PairoApps" name, highlighted: "Pairo" in bold navy, "Apps" in brand blue,
 * with a soft sky highlighter stroke behind the lower half of the letters.
 */
export function Brand() {
  return (
    <span className="whitespace-nowrap bg-[linear-gradient(transparent_58%,rgb(200_230_250/0.9)_58%,rgb(200_230_250/0.9)_92%,transparent_92%)] px-[0.08em] font-semibold text-navy-900">
      Pairo<span className="text-seal">Apps</span>
    </span>
  )
}

/** Replace every "PairoApps" inside a plain string with the highlighted <Brand />; other content passes through. */
export function brandify(content: ReactNode): ReactNode {
  if (typeof content !== 'string' || !content.includes('PairoApps')) return content
  return content.split(/(PairoApps)/).map((part, i) => (part === 'PairoApps' ? <Brand key={i} /> : part))
}

/** Page gutter + max width used by every section. */
export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1440px] px-5 md:px-10 ${className}`}>{children}</div>
}

/** "++ LABEL" eyebrow from the reference. */
export function Eyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p className={`eyebrow flex items-center gap-3 ${className}`}>
      <span aria-hidden className="tracking-[-0.1em]">++</span>
      {children}
    </p>
  )
}

/** The board's arrow (↘), path taken from the PAIRO brand identity board. */
export function Arrow({ className = 'h-3 w-3' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M2 2L22 22M22 8v14H8" />
    </svg>
  )
}

type PillTone = 'white' | 'dark' | 'blue' | 'outline'
/** Etched-paper theme: navy ink pills and hairline outlines on paper. */
const pillTones: Record<PillTone, string> = {
  white: 'border border-navy-800/40 text-navy-900 hover:border-navy-900 hover:bg-navy-900 hover:text-paper',
  dark: 'bg-navy-900 text-paper hover:bg-navy-800',
  blue: 'bg-navy-800 text-paper hover:bg-navy-900',
  outline: 'border border-current hover:bg-navy-900/5',
}

export type EtchName = 'm-ai-erp-hero' | 'm-port' | 'm-office' | 'm-ai' | 'm-city-bridge' | 'm-handshake' | 'm-team' | 'm-warehouse' | 'm-factory' | 'm-retail' | 'm-analyst' | 'footer-engraving'

/** Intrinsic sizes, so the browser reserves space before each image loads (no layout shift while scrolling). */
const ETCH_SIZE: Partial<Record<EtchName, [number, number]>> = { 'm-ai': [1024, 1024], 'm-handshake': [1024, 1024] }

/** One of the PAIRO etched illustrations (navy ink on paper #EDF3FE), responsive WebP. */
export function Etch({ name, className = '', eager, sizes = '100vw' }: { name: EtchName; className?: string; eager?: boolean; sizes?: string }) {
  const small = name === 'footer-engraving' ? `/brand/${name}-1000.webp 1000w` : `/brand/${name}-900.webp 900w`
  return (
    <img
      src={`/brand/${name}.webp`}
      srcSet={`${small}, /brand/${name}.webp 1792w`}
      sizes={sizes}
      width={(ETCH_SIZE[name] ?? [1792, 768])[0]}
      height={(ETCH_SIZE[name] ?? [1792, 768])[1]}
      alt=""
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className={className}
    />
  )
}

/** Button / link: square-cornered box with an arrow. */
export function Pill({ to, children, tone = 'white', className = '', type, onClick, disabled }: {
  to?: string; children: ReactNode; tone?: PillTone; className?: string
  type?: 'submit' | 'button'; onClick?: () => void; disabled?: boolean
}) {
  const cls = `inline-flex items-center gap-2 rounded-none px-4 py-2 text-[13px] md:text-[14px] font-medium transition-colors disabled:opacity-50 ${pillTones[tone]} ${className}`
  const inner = <>{children}<Arrow /></>
  if (to) return <Link to={to} className={cls}>{inner}</Link>
  return <button type={type ?? 'button'} onClick={onClick} disabled={disabled} className={cls}>{inner}</button>
}

/** Round prev / next control used by the carousels. */
export function RoundButton({ dir, onClick, dark }: { dir: 'prev' | 'next'; onClick: () => void; dark?: boolean }) {
  return (
    <button
      onClick={onClick}
      aria-label={dir === 'prev' ? 'Previous' : 'Next'}
      className={`grid h-9 w-9 place-items-center rounded-none border transition-colors ${dark ? 'border-white/30 text-white hover:bg-white hover:text-ink' : 'border-navy-800/30 text-navy-900 hover:bg-navy-900 hover:text-paper'}`}
    >
      <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
        {dir === 'prev' ? <path d="M10 6H2M5 3L2 6l3 3" /> : <path d="M2 6h8M7 3l3 3-3 3" />}
      </svg>
    </button>
  )
}

/** Carousel position dots. */
export function Dots({ count, active, onSelect, dark }: { count: number; active: number; onSelect: (i: number) => void; dark?: boolean }) {
  return (
    <div className="flex gap-1.5">
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          aria-label={`Go to slide ${i + 1}`}
          onClick={() => onSelect(i)}
          className={`h-1 rounded-full transition-all ${i === active ? 'w-4' : 'w-1'} ${dark ? 'bg-white' : 'bg-navy-900'} ${i === active ? '' : 'opacity-30'}`}
        />
      ))}
    </div>
  )
}

/** Fades + lifts its children in when scrolled into view. */
export function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }: {
  children: ReactNode; className?: string; delay?: number; as?: 'div' | 'li' | 'section'
}) {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.dataset.shown = 'true'; io.disconnect() }
    }, { threshold: 0.15 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <Tag ref={ref as never} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  )
}
