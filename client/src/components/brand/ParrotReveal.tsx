import { useEffect, useRef } from 'react'
import ParrotIcon from './ParrotIcon'

const SRC = '/brand/parrot-hero.webp'
const SRC_SM = '/brand/parrot-hero-720.webp'
const WORD = 'PARROT AI'
/** Photo size (parrot-hero.webp): the bird is fully in frame, cut only at the bottom. */
const IMG_W = 1024, IMG_H = 1180
/** Pupil centre in the photo (fractions of width / height), measured from the image. */
const EYE = { x: 0.4848, y: 0.2975 }
/** Eyelid size as a fraction of the photo width: covers the iris and its dark lash ring (~106 px of 1024). */
const LID = 0.104

/** Eyelids (upper + lower meet at a seam), placed over the pupil. */
function Lids({ tone }: { tone: 'dark' | 'light' }) {
  return (
    <span aria-hidden className={`pr-lid pr-lid-${tone}`} style={{ left: `${EYE.x * 100}%`, top: `${EYE.y * 100}%`, width: `${LID * 100}%` }}>
      <span className="pr-lid-shade" />
      <span className="pr-lid-low"><i /></span>
      <span className="pr-lid-up"><i /></span>
      <span className="pr-nict" />
    </span>
  )
}

/**
 * Masks: the bird's own outline (the photo has the whole bird in frame, cut only at the bottom,
 * so the body runs off the bottom of the hero like a figure cropped by the frame), plus an
 * optional extra layer (the spotlight).
 */
const birdMask = (extra?: string) => {
  const layers = [
    ...(extra ? [[extra, '100% 100%']] : []),
    [`url(${SRC_SM})`, 'contain'],
  ]
  const image = layers.map((l) => l[0]).join(', ')
  const size = layers.map((l) => l[1]).join(', ')
  return {
    WebkitMaskImage: image, maskImage: image,
    WebkitMaskSize: size, maskSize: size,
    WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat',
    WebkitMaskPosition: 'center bottom', maskPosition: 'center bottom',
    WebkitMaskComposite: layers.length > 1 ? layers.slice(1).map(() => 'source-in').join(', ') : 'source-over',
    maskComposite: 'intersect',
  }
}

/**
 * Home hero visual: the Parrot AI photo stands as a navy silhouette in front of a giant word;
 * a soft spotlight follows the cursor and reveals the real bird. On touch screens (and once on
 * load) the spotlight sweeps across the head by itself.
 */
export default function ParrotReveal() {
  const stage = useRef<HTMLDivElement>(null)
  const bird = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const st = stage.current, b = bird.current
    if (!st || !b) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const touch = window.matchMedia('(hover: none)').matches
    if (reduce) { b.style.setProperty('--r', '2000px'); return }

    const cur = { x: 0.55, y: 0.25, r: 0, px: 0, py: 0 }
    const tgt = { x: 0.55, y: 0.25, r: 0, px: 0, py: 0 }


    const loop = { raf: 0, visible: true, hovering: false, sweepUntil: 0, onEye: false, nextBlink: 0 }
    const blink = (now: number) => {
      b.classList.remove('pr-blink')
      void b.offsetWidth
      b.classList.add('pr-blink')
      loop.nextBlink = now + 1900
    }
    const t0 = performance.now()
    const radius = () => Math.max(90, Math.min(190, b.clientWidth * 0.24))

    const onMove = (e: PointerEvent) => {
      const r = b.getBoundingClientRect(), s = st.getBoundingClientRect()
      tgt.x = (e.clientX - r.left) / r.width
      tgt.y = (e.clientY - r.top) / r.height
      tgt.px = (e.clientX - s.left) / s.width - 0.5
      tgt.py = (e.clientY - s.top) / s.height - 0.5
      loop.hovering = true
      loop.sweepUntil = 0
    }
    const onLeave = () => { loop.hovering = false; loop.onEye = false; tgt.px = 0; tgt.py = 0 }
    st.addEventListener('pointermove', onMove)
    st.addEventListener('pointerleave', onLeave)

    // intro sweep once, then on touch screens keep sweeping gently
    loop.sweepUntil = t0 + 3400

    const frame = (now: number) => {
      const sweeping = !loop.hovering && (now < loop.sweepUntil || touch)
      if (sweeping) {
        const k = (now - t0) / (touch ? 5200 : 3400)
        tgt.x = 0.5 + Math.cos(k * Math.PI * 2) * 0.22
        tgt.y = 0.3 + Math.sin(k * Math.PI * 4) * 0.08
        tgt.r = radius()
      } else {
        tgt.r = loop.hovering ? radius() : 0
      }
      const e = 0.14
      cur.x += (tgt.x - cur.x) * e
      cur.y += (tgt.y - cur.y) * e
      cur.r += (tgt.r - cur.r) * 0.1
      cur.px += (tgt.px - cur.px) * 0.08
      cur.py += (tgt.py - cur.py) * 0.08
      b.style.setProperty('--x', `${(cur.x * 100).toFixed(2)}%`)
      b.style.setProperty('--y', `${(cur.y * 100).toFixed(2)}%`)
      b.style.setProperty('--r', `${cur.r.toFixed(1)}px`)
      st.style.setProperty('--px', cur.px.toFixed(3))
      st.style.setProperty('--py', cur.py.toFixed(3))

      // the parrot blinks when the cursor is over its eye (and every ~2 s while it stays there)
      const eyeDist = Math.hypot((tgt.x - EYE.x) * b.clientWidth, (tgt.y - EYE.y) * b.clientHeight)
      const onEye = loop.hovering && eyeDist < Math.max(46, b.clientWidth * 0.11)
      if (onEye && (!loop.onEye || now > loop.nextBlink)) blink(now)
      loop.onEye = onEye

      if (loop.visible) loop.raf = requestAnimationFrame(frame)
    }
    loop.raf = requestAnimationFrame(frame)

    const io = new IntersectionObserver(([en]) => {
      loop.visible = en.isIntersecting
      cancelAnimationFrame(loop.raf)
      if (loop.visible) loop.raf = requestAnimationFrame(frame)
    })
    io.observe(st)

    return () => {
      cancelAnimationFrame(loop.raf)
      io.disconnect()
      st.removeEventListener('pointermove', onMove)
      st.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <div className="relative flex h-full flex-col">
    <div
      ref={stage}
      role="img"
      aria-label="Parrot AI: a blue parrot stands as a silhouette in front of the words Parrot AI; move over it to reveal the bird"
      className="pr-stage relative isolate h-full cursor-none select-none overflow-hidden touch-pan-y"
    >
      {/* giant word behind the bird */}
      <p
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[30%] z-0 flex justify-center whitespace-nowrap text-[clamp(4rem,min(19vw,24vh),18rem)] md:top-[16%] font-light leading-none tracking-[-0.05em] text-seal"
        style={{ transform: 'translate3d(calc(var(--px, 0) * -40px), calc(var(--py, 0) * -16px), 0)' }}
      >
        {WORD.split('').map((ch, i) => (
          <span key={i} className="pr-letter inline-block" style={{ animationDelay: `${120 + i * 70}ms` }}>{ch === ' ' ? ' ' : ch}</span>
        ))}
      </p>

      {/* the bird: navy silhouette + cursor-revealed photo */}
      <div
        ref={bird}
        className="pr-bird absolute -bottom-3 left-1/2 z-10 aspect-[1024/1180] h-[min(96%,112vw)] md:h-[96%]"
        style={{ transform: 'translate3d(calc(-50% + var(--px, 0) * 22px), calc(var(--py, 0) * 10px), 0)' }}
      >
        {/* resting state: the same photo in deep navy low light, so the parrot still reads as a parrot */}
        <img
          src={SRC_SM}
          width={IMG_W}
          height={IMG_H}
          alt=""
          decoding="async"
          aria-hidden
          className="pr-layer absolute inset-0 h-full w-full object-contain object-bottom [filter:brightness(0.3)_contrast(1.45)_saturate(1.35)]"
          style={birdMask()}
        />
        {/* eyelid for the dark resting state */}
        <Lids tone="dark" />
        <img
          src={SRC}
          srcSet={`${SRC_SM} 720w, ${SRC} 1024w`}
          sizes="(min-width: 1024px) 660px, 80vw"
          width={IMG_W}
          height={IMG_H}
          alt=""
          decoding="async"
          className="pr-layer absolute inset-0 h-full w-full object-contain object-bottom"
          style={birdMask('radial-gradient(circle var(--r, 0px) at var(--x, 50%) var(--y, 30%), #000 62%, transparent 100%)')}
        />
        {/* eyelid for the revealed photo, shown only inside the spotlight */}
        <div aria-hidden className="pointer-events-none absolute inset-0" style={birdMask('radial-gradient(circle var(--r, 0px) at var(--x, 50%) var(--y, 30%), #000 62%, transparent 100%)')}>
          <Lids tone="light" />
        </div>
        {/* blink accent: the catchlight glints as the eye reopens */}
        <span aria-hidden className="pr-eyefx" style={{ left: `${EYE.x * 100}%`, top: `${EYE.y * 100}%`, width: `${LID * 100}%` }}>
          <i className="pr-glint" />
        </span>
        {/* spotlight ring */}
        <span
          aria-hidden
          className="pointer-events-none absolute rounded-full border border-sky/80 shadow-[0_0_30px_rgba(200,230,250,0.45)]"
          style={{ left: 'var(--x, 50%)', top: 'var(--y, 30%)', width: 'calc(var(--r, 0px) * 2)', height: 'calc(var(--r, 0px) * 2)', transform: 'translate(-50%, -50%)' }}
        />
      </div>

      {/* hint */}
      <p className="pointer-events-none absolute right-5 top-3 z-20 inline-flex items-center gap-2 border border-navy-800/15 bg-paper/85 px-3 py-1.5 text-[11px] text-navy-800/80 backdrop-blur-sm md:right-10 md:text-[12px]">
        <ParrotIcon tone="mono" className="h-3.5 w-auto text-seal" />
        <span className="hidden md:inline">Move over the parrot</span><span className="md:hidden">Meet Parrot AI</span>
      </p>

      {/* stats, bottom-right (clear of the Parrot AI companion) */}
      <div className="pointer-events-none absolute bottom-10 right-32 z-20 hidden gap-2 lg:flex">
        <div className="border border-navy-800/15 bg-paper/85 px-4 py-3 backdrop-blur-sm">
          <p className="text-3xl font-light tracking-tight text-navy-900">24×7</p>
          <p className="mt-1 text-[11px] text-navy-800/70">Working round the clock</p>
        </div>
        <div className="border border-navy-900 bg-navy-900 px-4 py-3 text-paper">
          <p className="text-3xl font-light tracking-tight">3</p>
          <p className="mt-1 text-[11px] text-paper/70">English · தமிழ் · हिन्दी</p>
        </div>
      </div>
    </div>

    </div>
  )
}
