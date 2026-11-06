import { useEffect, useRef } from 'react'
import ParrotIcon from './ParrotIcon'

/**
 * Parrot AI mark: flies in when it scrolls into view, then stands with a gentle bob
 * while a soft blue glow pulses behind it. Animations live in index.css (.parrot-*).
 */
export default function ParrotMark({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.dataset.shown = 'true'; io.disconnect() }
    }, { threshold: 0.3 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className={`parrot-mark relative mx-auto grid aspect-square w-full max-w-[420px] place-items-center ${className}`} role="img" aria-label="Parrot AI">
      <span aria-hidden className="parrot-glow absolute inset-[12%] rounded-full bg-[radial-gradient(circle,rgba(58,120,194,0.40)_0%,rgba(200,230,250,0.45)_45%,transparent_70%)] opacity-0" />
      <span aria-hidden className="pm-ring absolute inset-[24%] rounded-full border border-seal/40" />
      <span aria-hidden className="pm-ring pm-ring-2 absolute inset-[24%] rounded-full border border-seal/35" />
      <span aria-hidden className="pm-ring pm-ring-3 absolute inset-[24%] rounded-full border border-seal/30" />
      <span aria-hidden className="pm-orbit absolute inset-[8%] rounded-full border border-dashed border-navy-800/15"><i className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-seal shadow-[0_0_10px_#3a78c2]" /></span>
      <span aria-hidden className="pm-orbit pm-orbit-2 absolute inset-[16%] rounded-full"><i className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-sky shadow-[0_0_8px_#c8e6fa]" /></span>
      <span aria-hidden className="parrot-shadow absolute bottom-[18%] h-3 w-1/3 rounded-full bg-navy-900/30 opacity-0 blur-md" />
      <div className="parrot-fly relative w-[66%]">
        <div className="parrot-stand">
          <ParrotIcon tone="brand" className="block h-auto w-full drop-shadow-[0_18px_24px_rgba(30,74,135,0.25)]" />
        </div>
      </div>
    </div>
  )
}
