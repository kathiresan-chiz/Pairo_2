import type { ReactNode } from 'react'
import { brandify, Container, Etch, Reveal, type EtchName } from '../ui'

type Props = {
  title: ReactNode
  labels?: string[]
  text?: string
  actions?: ReactNode
  image?: EtchName
  full?: boolean
  /** Replaces the etched scene at the bottom (Home: the Parrot AI reveal). */
  visual?: ReactNode
}

/**
 * Hero on etching paper: large navy headline with a "+" marker, a hairline row of labels,
 * a blurb with pills on the right, and a wide etched scene anchored to the bottom.
 */
/** Illustrations with open sky at the top can slide up behind the text; detailed ones sit below it. */
const SKY_TOP: EtchName[] = ['m-ai-erp-hero', 'm-port', 'm-city-bridge', 'footer-engraving']

export default function Hero({ title, labels = [], text, actions, image = 'm-port', full, visual }: Props) {
  const overlap = SKY_TOP.includes(image)
  // Labels, text and actions: a hairline row under the title (or, with a custom visual, right under the hero)
  const info = (labels.length > 0 || text || actions) && (
    <div className={`grid gap-8 border-t border-navy-800/15 pt-4 lg:grid-cols-4 ${visual ? 'mt-6' : 'mt-10'}`}>
      {labels.length > 0 && (
        <ul className="eyebrow grid grid-cols-2 gap-3 text-navy-800/70 sm:grid-cols-3 lg:col-span-3">
          {labels.map((l) => <li key={l}>{l}</li>)}
        </ul>
      )}
      {(text || actions) && (
        <Reveal delay={150} className={`max-w-sm text-[13px] md:text-[15px] leading-relaxed text-navy-800/85 ${labels.length ? '' : 'lg:col-start-4'}`}>
          {text && <p>{brandify(text)}</p>}
          {actions && <div className="mt-5 flex flex-wrap gap-2">{actions}</div>}
        </Reveal>
      )}
    </div>
  )
  return (
    <>
    <section className={`relative isolate overflow-hidden bg-paper text-navy-900 ${visual ? 'flex h-[100svh] min-h-[600px] flex-col' : ''}`}>
      <Container className={`relative z-10 ${visual ? 'pt-28 md:pt-32 lg:pt-36' : 'pt-32 md:pt-40'} ${full ? 'pb-4' : 'pb-2'}`}>
        <Reveal className="relative">
          <span aria-hidden className="absolute -top-6 left-0 text-sm text-navy-800/70">+</span>
          <h1 className="heading-xl max-w-[18ch]">{title}</h1>
        </Reveal>

        {!visual && info}
      </Container>

      {visual ? <div className="relative mt-2 min-h-0 flex-1">{visual}</div> : (
      <div className={`relative ${overlap ? '-mt-6 md:-mt-28 lg:-mt-40' : 'mt-10 md:mt-14'}`}>
        <Etch name={image} eager className={`block w-full object-cover object-bottom ${full || !overlap ? 'h-[300px] sm:h-auto' : 'h-[240px] sm:h-[42vw] sm:max-h-[520px]'}`} />
        {overlap && <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-[linear-gradient(180deg,#EDF3FE_0%,rgba(237,243,254,0)_100%)]" />}
      </div>
      )}
    </section>
    {visual && info && <div className="bg-paper text-navy-900"><Container className="pb-6">{info}</Container></div>}
    </>
  )
}
