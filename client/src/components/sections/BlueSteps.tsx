import { brandify, Container, Etch, Eyebrow, Pill, Reveal, type EtchName } from '../ui'

/**
 * Steps block on etching paper: eyebrow over a dashed rule, a large paragraph,
 * big step numbers with a solid + hatched navy bar, an indented closing line,
 * and an optional wide etched scene at the bottom.
 */
export default function BlueSteps({ eyebrow, intro, steps, closing, cta, image }: {
  eyebrow: string; intro: string; steps: string[]; closing?: string; cta?: { label: string; to: string }; image?: EtchName
}) {
  return (
    <section className="bg-paper pt-14 text-navy-900 sm:pt-20 md:pt-24">
      <Container className={`relative z-10 ${image ? '' : 'pb-14 sm:pb-20 md:pb-24'}`}>
        <div className="border-t border-dashed border-navy-800/40 pt-5"><Eyebrow className="text-navy-800/70">{eyebrow}</Eyebrow></div>
        <Reveal className="mt-10 md:mt-14"><h2 className="heading-md max-w-[34ch]">{brandify(intro)}</h2></Reveal>

        <ol className="mt-12 grid gap-x-16 gap-y-10 md:mt-16 md:grid-cols-2 md:gap-y-12">
          {steps.map((s, i) => {
            const pct = Math.round(((i + 1) / steps.length) * 100)
            return (
              <Reveal as="li" key={s} delay={(i % 2) * 120}>
                <div className="flex items-start gap-4">
                  <span className="text-4xl font-light tracking-tight md:text-5xl">0{i + 1}<span className="align-top text-lg text-navy-800/60">/0{steps.length}</span></span>
                  <p className="mt-2 max-w-[22ch] text-xs leading-relaxed text-navy-800/80">{s}</p>
                </div>
                <div className="mt-4 flex h-6">
                  <div className="bg-navy-900" style={{ width: `${pct}%` }} />
                  <div className="flex-1 bg-[repeating-linear-gradient(90deg,rgba(30,74,135,.45)_0_1px,transparent_1px_4px)]" />
                </div>
              </Reveal>
            )
          })}
        </ol>

        {closing && (
          <Reveal className="relative mt-16 md:mt-24 lg:pl-[25%]">
            <span aria-hidden className="absolute -top-6 left-0 text-sm text-navy-800/70 lg:left-[calc(25%-1.5rem)]">+</span>
            <p className="heading-md max-w-[28ch]">{closing}</p>
            {cta && <Pill to={cta.to} className="mt-8">{cta.label}</Pill>}
          </Reveal>
        )}
      </Container>

      {image && (
        <div className="relative mt-8 md:-mt-10">
          <Etch name={image} className="block h-[240px] w-full object-cover object-bottom sm:h-auto" />
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-[linear-gradient(180deg,#EDF3FE_0%,rgba(237,243,254,0)_100%)]" />
        </div>
      )}
    </section>
  )
}
