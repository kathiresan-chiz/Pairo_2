import { useRef } from 'react'
import { brandify, Container, Pill, Reveal, RoundButton } from '../ui'

export type RailCard = { title: string; tag?: string; rows: [string, string][]; featured?: boolean }

/**
 * Card rail on etching paper: title + intro + pill, arrows right,
 * and a horizontal rail of hairline cards with key/value rows (featured card in navy ink).
 */
export default function CardRail({ title, intro, cta, cards }: {
  title: string; intro: string; cta?: { label: string; to: string }; cards: RailCard[]
}) {
  const rail = useRef<HTMLDivElement>(null)
  const scroll = (d: number) => rail.current?.scrollBy({ left: d * (rail.current.clientWidth * 0.6), behavior: 'smooth' })

  return (
    <section className="bg-paper py-14 text-navy-900 sm:py-20 md:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-8 border-t border-navy-800/15 pt-10">
          <div>
            <Reveal><h2 className="heading-lg max-w-[18ch]">{title}</h2></Reveal>
            <p className="mt-4 max-w-xs text-[13px] md:text-[15px] leading-relaxed text-navy-800/80">{brandify(intro)}</p>
            {cta && <Pill to={cta.to} className="mt-6">{cta.label}</Pill>}
          </div>
          <div className="flex gap-2">
            <RoundButton dir="prev" onClick={() => scroll(-1)} />
            <RoundButton dir="next" onClick={() => scroll(1)} />
          </div>
        </div>

        <div ref={rail} className="mt-14 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [scrollbar-width:none]">
          {cards.map((c) => (
            <article
              key={c.title}
              className={`flex min-h-[300px] w-[82%] shrink-0 snap-start flex-col justify-between border p-6 sm:w-[46%] lg:w-[31%] ${c.featured ? 'border-navy-900 bg-navy-900 text-paper' : 'border-navy-800/15 bg-white/40'}`}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="max-w-[16ch] text-lg font-light leading-snug">{c.title}</h3>
                {c.tag && <span className="shrink-0 text-[10px] opacity-60">{c.tag}</span>}
              </div>
              <dl className={`mt-10 space-y-2 border-t pt-5 text-xs ${c.featured ? 'border-paper/20' : 'border-navy-800/15'}`}>
                {c.rows.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[1fr_1.4fr] gap-4"><dt className="opacity-60">{k}</dt><dd>{v}</dd></div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
