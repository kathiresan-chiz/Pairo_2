import Seo from '../components/Seo'
import { Pill } from '../components/ui'
import Hero from '../components/sections/Hero'
import TileGrid from '../components/sections/TileGrid'
import StoryCarousel from '../components/sections/StoryCarousel'
import BlueSteps from '../components/sections/BlueSteps'
import CardRail from '../components/sections/CardRail'
import LetsTalk from '../components/sections/LetsTalk'
import { solutionIcon } from '../content/icons'
import { navCta, seo, services } from '../content/site'
import { alsoInside, implementation, solutions } from '../content/pairo'

const serviceDetail: Record<string, [string, string][]> = {
  'ERP Implementation': [['Stage', 'Project start'], ['Covers', 'Scoping, plan, go-live'], ['Outcome', 'Live in 2 weeks']],
  'System Configuration': [['Stage', 'Setup'], ['Covers', 'Modules, roles, workflows'], ['Outcome', 'Works the way you do']],
  'Data Migration': [['Stage', 'Days 1–3'], ['Covers', 'Masters, balances, open bills'], ['Outcome', 'Tied to your old books']],
  'Third-party Integrations': [['Stage', 'Any time'], ['Covers', 'Connecting existing tools'], ['Outcome', 'No more re-keying']],
  'User Training': [['Stage', 'Weeks 1–2'], ['Covers', 'Team and approvals'], ['Outcome', 'Confident teams']],
  'Technical Support': [['Stage', 'Ongoing'], ['Covers', 'Help when you need it'], ['Outcome', 'Peace of mind']],
}

export default function Services() {
  return (
    <>
      <Seo {...seo.services} />
      <Hero
        title={<>An <span className="text-seal">Agent</span> in Every Module.</>}
        image="m-factory"
        labels={['12 agents', '1 ledger', '0 re-keying']}
        text="Twelve agents do the routine, all posting into one ledger. You approve what matters."
        actions={<><Pill to={navCta.to}>Book a Demo</Pill><Pill to="/pricing">See packs</Pill></>}
      />
      <TileGrid
        eyebrow="Agentic solutions"
        title="Twelve Agents. One Ledger."
        tiles={solutions.map((s) => ({ id: s.key, title: s.name, body: s.line, Icon: solutionIcon(s.key), to: `/services/${s.key}` }))}
      />
      <StoryCarousel
        title="Talk, Consolidate, Ask — Without Leaving Your Books."
        intro="Also inside PairoApps: team chat beside the books, inter-company pairing and eliminations, and reports built from plain words."
        items={alsoInside}
        itemCta={{ label: 'See it in a demo', to: navCta.to }}
      />
      <BlueSteps
        eyebrow="Implementation"
        intro="Migration in 3 days. Live in 2 weeks. Your masters, balances and open bills move first, tied to your old books."
        steps={implementation.map((s) => `${s.when} · ${s.what}.`)}
        closing="From your old books to live, in two weeks."
        cta={{ label: 'Talk to our team', to: '/contact' }}
      />
      <CardRail
        title="Beyond Software. Support That Makes It Work."
        intro="From first conversation to everyday use, our team helps you get real value from PairoApps."
        cta={{ label: 'Talk to our team', to: '/contact' }}
        cards={services.map((s, i) => ({ title: s, tag: `0${i + 1}`, rows: serviceDetail[s] }))}
      />
      <LetsTalk title="Let's Find the Right Agents for Your Business." intro="Tell us which solutions you're interested in and we'll put together the right pack and setup for you." />
    </>
  )
}
