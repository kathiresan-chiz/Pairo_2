import { useId } from 'react'

/**
 * Parrot AI key mark, drawn as SVG on a transparent background in the PAIRO palette:
 * a sail (the "P" stroke) over a gliding bird with a blade-line tail.
 *
 * Tones:
 *  - brand: theme gradients (Sky → Seal Blue → Navy), for feature visuals
 *  - mono:  one colour from `currentColor`, for icons, tiles and text (follows hover colours)
 *  - paper: light version for dark backgrounds
 *
 * Same file as a static asset: public/brand/parrot-ai.svg
 */
export type ParrotTone = 'brand' | 'mono' | 'paper'

const PARROT_PATHS = {
  sail: 'M62 4C42 17 35 46 45 69H101C84 54 70 32 62 4Z',
  body: 'M28 99C58 84 94 69 121 69C137 69 147 77 150 86C141 84 133 88 127 94C110 104 80 103 28 99Z',
  wing: 'M70 89C88 80 104 76 118 77C108 81 96 88 86 95C80 94 75 92 70 89Z',
  tail: 'M1 111L80 89L76 96Z',
  eye: 'M133 78a2.6 2.6 0 1 0 0.1 0Z',
}

export default function ParrotIcon({ tone = 'brand', className = '', title }: { tone?: ParrotTone; className?: string; title?: string; strokeWidth?: number }) {
  const id = useId().replace(/:/g, '')
  const g = (n: string) => `url(#${id}-${n})`
  const brand = tone === 'brand'
  const light = tone === 'paper'

  return (
    <svg viewBox="0 0 152 120" className={className} role={title ? 'img' : undefined} aria-label={title} aria-hidden={title ? undefined : true} fill="none">
      {brand && (
        <defs>
          <linearGradient id={`${id}-sail`} x1="40" y1="4" x2="100" y2="70" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#1e4a87" />
            <stop offset=".55" stopColor="#3a78c2" />
            <stop offset="1" stopColor="#c8e6fa" />
          </linearGradient>
          <linearGradient id={`${id}-body`} x1="28" y1="100" x2="150" y2="70" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#c8e6fa" />
            <stop offset=".45" stopColor="#3a78c2" />
            <stop offset="1" stopColor="#1e4a87" />
          </linearGradient>
          <linearGradient id={`${id}-tail`} x1="1" y1="111" x2="80" y2="90" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#3a78c2" stopOpacity="0" />
            <stop offset="1" stopColor="#3a78c2" />
          </linearGradient>
        </defs>
      )}
      <path d={PARROT_PATHS.sail} fill={brand ? g('sail') : light ? '#c8e6fa' : 'currentColor'} opacity={brand ? 1 : 0.55} />
      <path d={PARROT_PATHS.body} fill={brand ? g('body') : light ? '#ffffff' : 'currentColor'} />
      <path className="parrot-wing" d={PARROT_PATHS.wing} fill={brand ? '#c8e6fa' : light ? '#c8e6fa' : 'currentColor'} opacity={brand ? 0.75 : 0.35} />
      <path d={PARROT_PATHS.tail} fill={brand ? g('tail') : light ? '#ffffff' : 'currentColor'} opacity={brand ? 1 : 0.7} />
      <path className="parrot-eye" d={PARROT_PATHS.eye} fill={brand ? '#edf3fe' : light ? '#0f2a4d' : 'currentColor'} opacity={brand || light ? 1 : 0} />
    </svg>
  )
}

/** One-colour glyph that drops into icon slots (TileGrid, menus) next to the lucide icons. */
export function ParrotGlyph({ className = '' }: { className?: string; strokeWidth?: number }) {
  return <ParrotIcon tone="mono" className={className} />
}
