import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router'
import ParrotIcon from './ParrotIcon'
import { Arrow } from '../ui'
import { navCta } from '../../content/site'
import { parrotAnswers, parrotFallback, parrotScript } from '../../content/pairo'

const reducedMotion = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Parrot AI companion, on every page.
 * On each page change it flies in along a swooping path (wing flapping, sparkle trail),
 * lands in the corner and types a line for that page. Tap it to open a small chat with
 * that page's questions and the demo company's sample answers.
 */
export default function ParrotCompanion() {
  const { pathname } = useLocation()
  const script = parrotScript(pathname)

  const [flying, setFlying] = useState(false)
  const [landed, setLanded] = useState(0)
  const [bubble, setBubble] = useState('')
  const [count, setCount] = useState(0)
  const typed = bubble.slice(0, count)
  const show = (text: string) => { setBubble(text); setCount(reducedMotion() ? text.length : 0) }
  const [open, setOpen] = useState(false)
  const [asked, setAsked] = useState<string | null>(null)
  const [thinking, setThinking] = useState(false)

  const flyer = useRef<HTMLDivElement>(null)
  const dock = useRef<HTMLButtonElement>(null)
  const trail = useRef<HTMLDivElement>(null)

  // Fly in once per page (Layout remounts this component on every page change), then greet.
  useEffect(() => {
    const say = parrotScript(pathname).say
    const f = flyer.current, d = dock.current
    if (reducedMotion() || !f || !d) {
      const t = setTimeout(() => show(say), 600)
      return () => clearTimeout(t)
    }
    const run: { anim: Animation | null } = { anim: null }
    let raf = 0
    const start = setTimeout(() => {
      const r = d.getBoundingClientRect()
      const w = window.innerWidth, h = window.innerHeight
      const ex = r.left + r.width / 2, ey = r.top + r.height / 2
      const path = `M -70 ${h * 0.46} C ${w * 0.2} ${h * 0.1}, ${w * 0.4} ${h * 0.78}, ${w * 0.58} ${h * 0.4} S ${w * 0.84} ${h * 0.14}, ${ex} ${ey}`
      f.style.setProperty('offset-path', `path('${path}')`)
      setFlying(true)
      const anim = f.animate([{ offsetDistance: '0%', opacity: 0 }, { opacity: 1, offset: 0.08 }, { offsetDistance: '100%', opacity: 1 }], {
        duration: 2800, easing: 'cubic-bezier(.45,.05,.3,1)', fill: 'forwards',
      })
      let last = 0
      const tick = (t: number) => {
        if (t - last > 34 && trail.current) {
          last = t
          const b = f.getBoundingClientRect()
          const dot = document.createElement('span')
          dot.className = 'pc-trail'
          const size = 3 + Math.random() * 4
          dot.style.cssText = `left:${b.left + b.width * 0.2 + (Math.random() - 0.5) * 8}px;top:${b.top + b.height * 0.7 + (Math.random() - 0.5) * 8}px;width:${size}px;height:${size}px`
          dot.addEventListener('animationend', () => dot.remove())
          trail.current.appendChild(dot)
        }
        raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
      run.anim = anim
      anim.onfinish = () => {
        cancelAnimationFrame(raf)
        setFlying(false)
        setLanded((n) => n + 1)
        setTimeout(() => show(say), 350)
      }
    }, 700)
    return () => { clearTimeout(start); run.anim?.cancel(); cancelAnimationFrame(raf) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Type the speech bubble, then let it rest and fade.
  useEffect(() => {
    if (!bubble) return
    const id = setInterval(() => setCount((c) => (c >= bubble.length ? c : c + 1)), 26)
    const hide = setTimeout(() => setBubble(''), 9000 + bubble.length * 26)
    return () => { clearInterval(id); clearTimeout(hide) }
  }, [bubble])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  function ask(q: string) {
    setAsked(q)
    setThinking(true)
    setTimeout(() => setThinking(false), reducedMotion() ? 0 : 1100)
  }

  return (
    <>
      {/* sparkle trail + the flying parrot (decorative) */}
      <div ref={trail} aria-hidden className="pointer-events-none fixed inset-0 z-40" />
      <div ref={flyer} aria-hidden className={`pc-flyer pointer-events-none fixed left-0 top-0 z-40 w-16 opacity-0 md:w-20 ${flying ? 'parrot-flying' : 'hidden'}`}>
        <ParrotIcon tone="brand" className="block h-auto w-full drop-shadow-[0_10px_14px_rgba(30,74,135,0.3)]" />
      </div>

      <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-3 md:bottom-6 md:right-6">
        {/* chat panel */}
        {open && (
          <div data-lenis-prevent role="dialog" aria-label="Parrot AI" className="pc-pop w-[min(320px,calc(100vw-2rem))] border border-navy-800/15 bg-paper text-navy-900 shadow-[0_24px_48px_-24px_rgba(15,42,77,0.45)]">
            <div className="flex items-center gap-3 border-b border-navy-800/15 px-4 py-3">
              <ParrotIcon tone="brand" className="h-7 w-auto" />
              <div className="flex-1">
                <p className="text-[14px] font-medium">Parrot AI</p>
                <p className="text-[11px] text-navy-800/60">The AI behind every agent · own model</p>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close Parrot AI" className="grid h-7 w-7 place-items-center text-lg leading-none text-navy-800/70 hover:text-navy-900">×</button>
            </div>

            <div className="space-y-2 px-4 py-4 text-[13px]" aria-live="polite">
              {!asked && <p className="text-navy-800/80">{script.say}</p>}
              {asked && (
                <>
                  <p className="pc-pop ml-auto w-fit max-w-[85%] bg-navy-900 px-3 py-2 text-paper">{asked}</p>
                  {thinking ? (
                    <p className="flex w-fit gap-1 border border-navy-800/15 bg-white/50 px-3 py-3" aria-label="Parrot AI is thinking">
                      {[0, 1, 2].map((d) => <span key={d} className="pc-dot h-1.5 w-1.5 rounded-full bg-navy-800" style={{ animationDelay: `${d * 0.15}s` }} />)}
                    </p>
                  ) : (
                    <p className="pc-pop w-fit max-w-[90%] border border-navy-800/15 bg-white/50 px-3 py-2 leading-relaxed">{parrotAnswers[asked] ?? parrotFallback}</p>
                  )}
                </>
              )}
            </div>

            <div className="border-t border-navy-800/15 px-4 py-3">
              <p className="eyebrow text-navy-800/60">Try asking</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {script.asks.map((q) => (
                  <button key={q} onClick={() => ask(q)} className={`border px-2.5 py-1 text-left text-[12px] transition-colors ${asked === q ? 'border-navy-900 bg-navy-900 text-paper' : 'border-navy-800/25 hover:border-navy-900'}`}>
                    {q}
                  </button>
                ))}
              </div>
              <p className="mt-3 text-[10px] text-navy-800/50">Sample answers from a demo company.</p>
              <div className="mt-3 flex items-center justify-between gap-3 text-[12px]">
                <Link to="/parrot-ai" className="inline-flex items-center gap-1.5 hover:text-seal">Everything I do <Arrow className="h-2.5 w-2.5" /></Link>
                <Link to={navCta.to} className="inline-flex items-center gap-1.5 bg-navy-900 px-3 py-1.5 text-paper hover:bg-navy-800">Try me in a demo <Arrow className="h-2.5 w-2.5" /></Link>
              </div>
            </div>
          </div>
        )}

        {/* speech bubble */}
        {bubble && !open && (
          <button onClick={() => { setOpen(true); setBubble('') }} className="pc-pop relative max-w-[min(260px,calc(100vw-6rem))] border border-navy-800/15 bg-paper px-3.5 py-2.5 text-left text-[12.5px] leading-snug text-navy-900 shadow-[0_16px_32px_-18px_rgba(15,42,77,0.45)] md:text-[13px]">
            <span className="sr-only">Open Parrot AI: </span>
            {typed}<span aria-hidden className={typed.length < bubble.length ? 'pc-caret' : 'hidden'}>▍</span>
            <span aria-hidden className="absolute -bottom-[7px] right-7 h-3 w-3 rotate-45 border-b border-r border-navy-800/15 bg-paper" />
          </button>
        )}

        {/* the docked parrot */}
        <button
          ref={dock}
          onClick={() => { setOpen(!open); setBubble('') }}
          aria-label={open ? 'Close Parrot AI' : 'Ask Parrot AI'}
          aria-expanded={open}
          className={`pc-dock group relative grid h-16 w-16 place-items-center md:h-[72px] md:w-[72px] ${flying ? 'opacity-0' : 'opacity-100'} transition-opacity`}
        >
          <span aria-hidden className="pc-halo absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(200,230,250,0.95)_0%,rgba(200,230,250,0.55)_55%,transparent_72%)]" />
          <span aria-hidden className="pc-ring absolute inset-1 rounded-full border border-seal/50" />
          <span aria-hidden className="absolute inset-[6px] rounded-full border border-navy-800/15 bg-paper shadow-[0_12px_28px_-12px_rgba(15,42,77,0.55)] transition-colors group-hover:border-navy-800/40" />
          <span aria-hidden className="pc-ring pc-ring-2 absolute inset-1 rounded-full border border-seal/40" />
          <span key={landed} className="pc-land relative block w-[70%]">
            <span className="parrot-stand block">
              <ParrotIcon tone="brand" className="block h-auto w-full transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110" />
            </span>
          </span>
          <span aria-hidden className="absolute right-1.5 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-paper bg-seal" />
        </button>
      </div>
    </>
  )
}
