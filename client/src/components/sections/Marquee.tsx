import { Container, Eyebrow } from '../ui'

type Item = { title: string; sub: string }

function Row({ items, reverse }: { items: Item[]; reverse?: boolean }) {
  const doubled = [...items, ...items]
  return (
    <div className="flex overflow-hidden">
      <ul className={`flex shrink-0 gap-14 pr-14 will-change-transform ${reverse ? 'animate-marquee-rev' : 'animate-marquee'}`}>
        {doubled.map((it, i) => (
          <li key={i} aria-hidden={i >= items.length} className="flex shrink-0 items-start gap-4">
            <span className="mt-5 h-px w-3 bg-navy-800/40" />
            <div>
              <p className="whitespace-nowrap text-3xl tracking-tight font-light md:text-[2.75rem]">{it.title}</p>
              <p className="mt-1 text-[11px] md:text-[13px] text-navy-800/60">{it.sub}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

/** Reference "Our awards" ticker: two large text rows scrolling in opposite directions. */
export default function Marquee({ eyebrow, rowA, rowB }: { eyebrow: string; rowA: Item[]; rowB: Item[] }) {
  return (
    <section className="bg-paper py-14 text-navy-900 sm:py-20 md:py-24">
      <Container><div className="border-t border-navy-800/15 pt-5"><Eyebrow className="text-navy-800/70">{eyebrow}</Eyebrow></div></Container>
      <div className="mt-20 space-y-10">
        <Row items={rowA} />
        <Row items={rowB} reverse />
      </div>
    </section>
  )
}
