import type { ComponentType } from 'react'
import { Link } from 'react-router'
import { Arrow, Container, Eyebrow, Reveal } from '../ui'

export type Tile = { id?: string; title: string; body?: string; Icon?: ComponentType<{ className?: string; strokeWidth?: number }>; to?: string }

/**
 * Hairline tile grid on etching paper: thin navy line icon top-left, label bottom-left;
 * on hover the tile fills with navy ink and the description appears.
 */
export default function TileGrid({ eyebrow, title, tiles, footerLink }: {
  eyebrow: string; title: string; tiles: Tile[]; footerLink?: { label: string; to: string }
}) {
  return (
    <section className="bg-paper py-14 text-navy-900 sm:py-20 md:py-24">
      <Container>
        <div className="grid gap-6 border-t border-navy-800/15 pt-6 lg:grid-cols-4">
          <Eyebrow className="text-navy-800/70">{eyebrow}</Eyebrow>
          <Reveal className="lg:col-span-2 lg:col-start-3"><h2 className="heading-lg max-w-[18ch]">{title}</h2></Reveal>
        </div>

        {/* 3 tiles stack on phones (no empty cell); larger sets go 2 → 4 columns from tablet up */}
        <div className={`mt-10 grid border-l border-t border-navy-800/15 md:mt-14 ${tiles.length === 3 ? 'grid-cols-1 sm:grid-cols-3 lg:grid-cols-4' : 'grid-cols-2 md:grid-cols-4'}`}>
          {tiles.map(({ id, title, body, Icon, to }, i) => {
            const inner = (
              <>
                {Icon && <Icon className="relative h-7 w-7 text-navy-800/80 transition-colors group-hover:text-paper" strokeWidth={1} />}
                <div className="relative">
                  <h3 className="max-w-[14ch] text-[15px] font-light leading-snug">{title}</h3>
                  {body && <p className="mt-2 max-h-0 overflow-hidden text-xs leading-relaxed text-paper/80 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">{body}</p>}
                </div>
                <Arrow className="absolute bottom-5 right-5 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
              </>
            )
            const cls = `group relative flex ${tiles.length === 3 ? 'min-h-40 sm:aspect-[1/1.02] sm:min-h-0' : 'aspect-[1/1.02]'} flex-col overflow-hidden justify-between border-b border-r border-navy-800/15 p-5 transition-colors duration-300 hover:bg-navy-900 hover:text-paper md:p-6`
            return (
              <div key={title} id={id} className="scroll-mt-28">
                <Reveal delay={(i % 4) * 70}>
                  {to ? <Link to={to} className={cls}>{inner}</Link> : <div className={cls}>{inner}</div>}
                </Reveal>
              </div>
            )
          })}
        </div>

        {footerLink && (
          <div className="mt-8 text-center">
            <Link to={footerLink.to} className="inline-flex items-center gap-2 text-xs text-navy-800/70 hover:text-navy-900">{footerLink.label}<Arrow /></Link>
          </div>
        )}
      </Container>
    </section>
  )
}
