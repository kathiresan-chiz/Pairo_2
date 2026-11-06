import { useParams } from 'react-router'
import Seo from '../components/Seo'
import { Pill } from '../components/ui'
import Hero from '../components/sections/Hero'
import Approach from '../components/sections/Approach'
import TileGrid from '../components/sections/TileGrid'
import StoryCarousel from '../components/sections/StoryCarousel'
import CardRail from '../components/sections/CardRail'
import QuoteCarousel from '../components/sections/QuoteCarousel'
import LetsTalk from '../components/sections/LetsTalk'
import NotFound from './NotFound'
import { solutionIcon } from '../content/icons'
import { navCta } from '../content/site'
import { solutions } from '../content/pairo'

const lineLabels = ['Shows', 'Then', 'And']

/** One agentic solution (module) page, built from the solution's content in pairo.ts. */
export default function Solution() {
  const { key } = useParams()
  const s = solutions.find((x) => x.key === key)
  if (!s) return <NotFound />
  const Icon = solutionIcon(s.key)
  const rest = s.name.slice(s.em.length)
  const n = solutions.indexOf(s)
  const next = solutions[(n + 1) % solutions.length]

  return (
    <>
      <Seo title={`${s.name} | Agentic Solutions | PairoApps`} description={`${s.sub} ${s.agent.join('. ')}.`} path={`/services/${s.key}`} />

      <Hero
        title={<><span className="text-seal">{s.em}</span>{rest}</>}
        image={s.image}
        labels={s.chips}
        text={s.sub}
        actions={<><Pill to={navCta.to} tone="dark">Book a Demo</Pill><Pill to="/pricing">See packs</Pill></>}
      />

      {/* What the agent does */}
      <Approach
        title="What the Agent Does for You."
        label={`${s.live} · live`}
        columns={[
          `${s.agent.join('. ')}.`,
          `Ask Parrot AI: ${s.asks.map((a) => `“${a}”`).join(' or ')}`,
        ]}
        image={s.image2}
        statement={<>The flow: <span className="text-seal">{s.flow.join(' → ')}</span></>}
        cta={{ label: 'All agentic solutions', to: '/services' }}
      />

      {/* Feature highlights */}
      <TileGrid
        eyebrow="Feature highlights"
        title={`${s.name}, Handled by Agents.`}
        tiles={s.features.map(([title, body]) => ({ title, body, Icon }))}
      />

      {/* Flagship feature, step by step */}
      <StoryCarousel
        title={s.flagship.title}
        intro={`${s.flagship.eyebrow}. ${s.flagship.rules.join(' · ')}.`}
        items={s.flagship.steps.map((st) => ({
          title: st.b,
          body: st.d,
          rows: [['On screen', st.title], ...st.lines.map((l, i) => [lineLabels[i] ?? `Line ${i + 1}`, l])] as [string, string][],
        }))}
        itemCta={{ label: 'See it in a demo', to: navCta.to }}
      />

      {/* When something's off */}
      <CardRail
        title="When Something's Off."
        intro={s.flagship.note}
        cta={{ label: 'See packs', to: '/pricing' }}
        cards={s.flagship.offs.map(([q, b, d]) => ({ title: q, rows: [['Agent', b], ['Then', d]] }))}
      />

      {/* You vs your agent */}
      <QuoteCarousel
        title="Same Work. Two Ways."
        intro={[
          `What you do today: ${s.vs.human}. What your agent does: ${s.vs.agent}.`,
          `${s.vs.foot.map(([a, b]) => `${a} ${b}`).join(' · ')}. ${s.vs.note}`,
        ]}
        items={s.vs.tasks.map(([today, min, agent, mode], i) => ({
          text: `Today: ${today}, ${min} min. With the agent: ${agent}${mode === 'approve' ? ', waiting for your one tap.' : ', done automatically.'}`,
          name: `Task 0${i + 1} of 0${s.vs.tasks.length}`,
          role: `You vs your ${s.live.toLowerCase()}`,
        }))}
      />

      <LetsTalk
        title={`See the ${s.live} at Work.`}
        intro={`Book a demo and we'll run ${s.name.toLowerCase()} on books like yours. Next up: ${next.name}.`}
      />
    </>
  )
}
