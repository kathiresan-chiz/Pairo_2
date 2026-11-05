/**
 * PAIRO logo components, built exactly as in the PAIRO brand identity board:
 * the official logo artwork (public/brand) + the "O" filled with the board's
 * flowing gradient and glow. Nothing here is redrawn.
 *
 *  - On light backgrounds: navy logo (no O) + solid #072D59 O
 *  - On dark backgrounds:  white logo (no O) + white O
 */

const LOGO_RATIO = 1511 / 522
const MONO_RATIO = 774 / 423

const oMask = {
  WebkitMask: 'url(/brand/pairo-o-mask.png) center / 100% 100% no-repeat',
  mask: 'url(/brand/pairo-o-mask.png) center / 100% 100% no-repeat',
} as const

type Tone = 'navy' | 'white'

/** Full PAIRO logo. Height drives size; width follows the artwork's ratio. */
export function Wordmark({ tone = 'navy', height = 32, className = '' }: { tone?: Tone; height?: number; className?: string }) {
  const width = height * LOGO_RATIO
  const dark = tone === 'white'
  return (
    <span role="img" aria-label="PAIRO" className={`relative inline-block shrink-0 ${className}`} style={{ width, height }}>
      <img
        src={dark ? '/brand/pairo-logo-white-no-o.png' : '/brand/pairo-logo-navy-no-o.png'}
        alt=""
        className="absolute inset-0 h-full w-full"
        draggable={false}
      />
      <span
        className="absolute inset-0 block"
        style={{
          ...oMask,
          backgroundImage: dark
            ? 'linear-gradient(135deg, #FFFFFF, #EAF3FC)'
            : 'linear-gradient(135deg, #072D59, #072D59)', // solid #072D59
        }}
      />
    </span>
  )
}

/** "pa" monogram (official artwork). */
export function Monogram({ tone = 'white', height = 32, className = '' }: { tone?: Tone; height?: number; className?: string }) {
  return (
    <img
      src={tone === 'white' ? '/brand/pairo-monogram-white.png' : '/brand/pairo-monogram-navy.png'}
      alt="PAIRO"
      className={`block shrink-0 ${className}`}
      style={{ height, width: height * MONO_RATIO }}
      draggable={false}
    />
  )
}

/** App icon tile, exact values from the board (200px tile, 52px radius). */
export function AppIcon({ size = 48 }: { size?: number }) {
  const k = size / 200
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center"
      style={{
        width: size,
        height: size,
        borderRadius: 52 * k,
        border: '1px solid rgba(255,255,255,0.14)',
        background: 'radial-gradient(circle at 80% 100%, rgba(244,112,138,0.45) 0%, rgba(244,112,138,0) 55%), linear-gradient(180deg, #0E2547 0%, #1B4A8C 55%, #3A78C2 100%)',
      }}
    >
      <Monogram height={(132 * k) / MONO_RATIO} />
    </span>
  )
}
