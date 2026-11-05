import type { ReactNode } from 'react'
import { brandify, Container, Etch, Eyebrow, Pill, Reveal, type EtchName } from '../ui'

/**
 * "Our approach" block on etching paper: title left, "++ LABEL +" right, two text columns,
 * a wide etched illustration, then a large statement.
 */
export default function Approach({ title, label, columns, statement, cta, image = 'm-office' }: {
  title: ReactNode; label: string; columns: string[]; statement: ReactNode; cta?: { label: string; to: string }; image?: EtchName
}) {
  return (
    <section className="bg-paper py-14 text-navy-900 sm:py-20 md:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-4">
          <Reveal className="lg:col-span-2"><h2 className="heading-lg max-w-[20ch]">{title}</h2></Reveal>
          <div className="flex items-start justify-between lg:col-span-2">
            <Eyebrow className="text-navy-800/70">{label}</Eyebrow>
            <span aria-hidden className="text-lg leading-none text-navy-800/70">+</span>
          </div>
        </div>
        <div className="mt-12 grid gap-8 text-[13px] md:text-[15px] leading-relaxed text-navy-800/80 md:grid-cols-2 lg:grid-cols-4">
          {columns.map((c, i) => (
            <Reveal key={i} delay={i * 100} className={i === 1 ? 'lg:col-start-3' : ''}><p className="max-w-sm">{brandify(c)}</p></Reveal>
          ))}
        </div>

        <Reveal className="mt-16 md:mt-20">
          <Etch name={image} className="block w-full" sizes="(min-width: 1440px) 1360px, 100vw" />
        </Reveal>

        <div className="mt-14 border-t border-navy-800/15 pt-10 md:mt-16">
          <Reveal><p className="heading-md max-w-[30ch]">{statement}</p></Reveal>
          {cta && <Pill to={cta.to} tone="dark" className="mt-8">{cta.label}</Pill>}
        </div>
      </Container>
    </section>
  )
}
