import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react'
import { useLocation } from 'react-router'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

const HEADER_OFFSET = -96

const LenisContext = createContext<Lenis | null>(null)
export const useLenis = () => useContext(LenisContext)

/**
 * Site-wide smooth scrolling (Lenis).
 * - Wheel / trackpad scrolling is eased with inertia; touch devices keep native scrolling.
 * - Turned off entirely for visitors who ask for reduced motion.
 * - On every route change: jump to the top, or glide to #hash targets (e.g. /services#finance).
 */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null)
  const { pathname, hash } = useLocation()
  const prevPath = useRef<string | null>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const instance = new Lenis({
      lerp: 0.09, // smoothing amount: lower = silkier glide
      wheelMultiplier: 1,
      smoothWheel: true,
      syncTouch: false, // keep native momentum on phones and tablets
      anchors: { offset: HEADER_OFFSET },
    })
    let frame = 0
    const raf = (time: number) => {
      instance.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)
    setLenis(instance)
    return () => {
      cancelAnimationFrame(frame)
      instance.destroy()
      setLenis(null)
    }
  }, [])

  // Route changes: top of the new page, or the requested section.
  useEffect(() => {
    // Same page: glide to the section. Arriving from another page (or first load): jump straight there.
    const samePage = prevPath.current === pathname
    prevPath.current = pathname
    if (hash) {
      let observer: ResizeObserver | undefined
      let stopTimer = 0
      const stop = () => {
        observer?.disconnect()
        window.clearTimeout(stopTimer)
        window.removeEventListener('wheel', stop)
        window.removeEventListener('touchstart', stop)
        window.removeEventListener('keydown', stop)
      }
      // wait a frame so the new page has rendered its sections
      const id = requestAnimationFrame(() => {
        const target = document.getElementById(decodeURIComponent(hash.slice(1)))
        if (!target) return
        const go = (immediate: boolean) => {
          // Compute from the browser's live scroll position: after a page change Lenis may still
          // hold the previous page's position, which would throw the target off.
          const y = Math.max(0, target.getBoundingClientRect().top + window.scrollY + HEADER_OFFSET)
          if (lenis) {
            lenis.resize()
            lenis.scrollTo(y, { duration: 1.2, immediate, force: true })
          } else window.scrollTo(0, y)
        }
        go(!samePage)
        // Fonts and images can still change the layout above the target after the jump.
        // Re-aim for a moment while the page settles, unless the visitor starts scrolling.
        if (!samePage) {
          observer = new ResizeObserver(() => go(true))
          observer.observe(document.body)
          window.addEventListener('wheel', stop, { passive: true })
          window.addEventListener('touchstart', stop, { passive: true })
          window.addEventListener('keydown', stop)
          stopTimer = window.setTimeout(stop, 1500)
        }
      })
      return () => {
        cancelAnimationFrame(id)
        stop()
      }
    }
    if (lenis) lenis.scrollTo(0, { immediate: true, force: true })
    else window.scrollTo(0, 0)
  }, [pathname, hash, lenis])

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
}
