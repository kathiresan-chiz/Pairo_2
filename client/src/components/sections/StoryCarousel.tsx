import { useState, type ReactNode } from 'react'
import { brandify, Container, Dots, Etch, Pill, Reveal, RoundButton, type EtchName } from '../ui'

export type Story = { title: string; body: string; rows: [string, string][]; visual?: string }

/**
 * "Success stories" layout on etching paper: etched illustration with title/intro/button on the left;
 * on the right a carousel of capability cards with key/value rows, dots and arrows.
 */
export default function StoryCarousel({ title, intro, cta, items, itemCta, image = 'm-ai', visual }: {
  title: string; intro: string; cta?: { label: string; to: string }; items: Story[]; itemCta?: { label: string; to: string }; image?: EtchName; visual?: ReactNode
}) {
  const [i, setI] = useState(0)
  const go = (d: number) => setI((i + d + items.length) % items.length)
  const s = items[i]

  return (
    <section className="bg-paper py-14 text-navy-900 sm:py-20 md:py-24">
      <Container>
        <div className="grid items-center gap-14 border-t border-navy-800/15 pt-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>{visual ?? <Etch name={image} className="mx-auto block w-full max-w-[520px]" sizes="(min-width: 1024px) 520px, 90vw" />}</Reveal>
          <Reveal className="mt-10"><h2 className="heading-md max-w-[22ch]">{title}</h2></Reveal>
          <p className="mt-4 max-w-sm text-[13px] md:text-[15px] leading-relaxed text-navy-800/80">{brandify(intro)}</p>
          {cta && <Pill to={cta.to} className="mt-6">{cta.label}</Pill>}
        </div>

        <div aria-live="polite">
          <p className="eyebrow text-navy-800/60">0{i + 1} / 0{items.length}</p>
          <div key={i} className="mt-6 animate-[fadein_.6s_ease]">
            <h3 className="heading-md">{s.title}</h3>
            <p className="mt-5 max-w-md text-[13px] md:text-[15px] leading-relaxed text-navy-800/80">{brandify(s.body)}</p>
            <dl className="mt-10 divide-y divide-navy-800/15 border-y border-navy-800/15 text-xs">
              {s.rows.map(([k, v]) => (
                <div key={k} className="grid grid-cols-2 py-3.5"><dt className="text-navy-800/60">{k}</dt><dd>{v}</dd></div>
              ))}
            </dl>
            {itemCta && <Pill to={itemCta.to} tone="dark" className="mt-8">{itemCta.label}</Pill>}
          </div>
          <div className="mt-12 flex items-center justify-between">
            <Dots count={items.length} active={i} onSelect={setI} />
            <div className="flex gap-2">
              <RoundButton dir="prev" onClick={() => go(-1)} />
              <RoundButton dir="next" onClick={() => go(1)} />
            </div>
          </div>
        </div>
        </div>
      </Container>
    </section>
  )
}
