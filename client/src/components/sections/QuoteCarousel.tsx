import { useState } from 'react'
import { AppIcon } from '../brand/Logo'
import { brandify, Container, Dots, Reveal, RoundButton } from '../ui'

export type Quote = { text: string; name: string; role: string }

/**
 * Reference "Testimonials": title + intro left, oversized quote right,
 * dots bottom-left, attribution and arrows bottom-right.
 */
export default function QuoteCarousel({ title, intro, items }: { title: string; intro: string[]; items: Quote[] }) {
  const [i, setI] = useState(0)
  const go = (d: number) => setI((i + d + items.length) % items.length)
  const q = items[i]

  return (
    <section className="bg-paper py-14 text-navy-900 sm:py-20 md:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2 lg:pr-20">
            <Reveal><h2 className="heading-lg max-w-[14ch]">{title}</h2></Reveal>
            <div className="mt-8 max-w-xs space-y-4 text-[13px] md:text-[15px] leading-relaxed text-navy-800/80">
              {intro.map((p) => <p key={p}>{brandify(p)}</p>)}
            </div>
          </div>
          <div className="relative lg:col-span-2 lg:col-start-3" aria-live="polite">
            <span aria-hidden className="absolute -left-10 top-0 hidden text-6xl leading-none md:block">“</span>
            <p key={i} className="heading-md animate-[fadein_.6s_ease]">{q.text}</p>
          </div>
        </div>

        <div className="mt-16 grid items-center gap-6 lg:grid-cols-4">
          <Dots count={items.length} active={i} onSelect={setI} />
          <div className="flex items-center gap-3 lg:col-start-3">
            <AppIcon size={32} />
            <div className="text-xs">
              <p className="font-medium">{q.name}</p>
              <p className="text-navy-800/60">{brandify(q.role)}</p>
            </div>
          </div>
          <div className="flex gap-2 justify-self-start lg:justify-self-end">
            <RoundButton dir="prev" onClick={() => go(-1)} />
            <RoundButton dir="next" onClick={() => go(1)} />
          </div>
        </div>
      </Container>
    </section>
  )
}
