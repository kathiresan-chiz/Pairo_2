import Seo from '../components/Seo'
import { Pill } from '../components/ui'
import Hero from '../components/sections/Hero'
import TileGrid from '../components/sections/TileGrid'
import StoryCarousel from '../components/sections/StoryCarousel'
import CardRail from '../components/sections/CardRail'
import LetsTalk from '../components/sections/LetsTalk'
import { moduleIcons } from '../content/icons'
import { aiStories, modules, navCta, seo, services } from '../content/site'

const serviceDetail: Record<string, [string, string][]> = {
  'ERP Implementation': [['Stage', 'Project start'], ['Covers', 'Scoping, plan, go-live'], ['Outcome', 'A system that fits']],
  'System Configuration': [['Stage', 'Setup'], ['Covers', 'Modules, roles, workflows'], ['Outcome', 'Works the way you do']],
  'Data Migration': [['Stage', 'Before go-live'], ['Covers', 'Ledgers, stock, contacts'], ['Outcome', 'Clean opening data']],
  'Third-party Integrations': [['Stage', 'Any time'], ['Covers', 'Connecting existing tools'], ['Outcome', 'No more re-keying']],
  'User Training': [['Stage', 'Go-live'], ['Covers', 'Role-based sessions'], ['Outcome', 'Confident teams']],
  'Technical Support': [['Stage', 'Ongoing'], ['Covers', 'Help when you need it'], ['Outcome', 'Peace of mind']],
}

export default function Services() {
  return (
    <>
      <Seo {...seo.services} />
      <Hero
        title="Everything Your Business Needs. Connected in One Place."
        image="m-factory"
        labels={['ERP modules', 'AI capabilities', 'Implementation & support']}
        text="A connected ecosystem for every business function, with intelligence built in and people to help you make it work."
        actions={<Pill to={navCta.to}>Book a Demo</Pill>}
      />
      <TileGrid
        eyebrow="ERP capabilities"
        title="A Connected Ecosystem for Every Business Function."
        tiles={modules.map((m) => ({ id: m.key, title: m.name, body: m.blurb, Icon: moduleIcons[m.key as keyof typeof moduleIcons] }))}
      />
      <StoryCarousel
        title="Make Your Business Systems More Intelligent."
        intro="Practical AI features with clear business benefits, built into the modules you already use."
        items={aiStories}
        itemCta={{ label: 'See it in a demo', to: navCta.to }}
      />
      <CardRail
        title="Beyond Software. Support That Makes It Work."
        intro="From first conversation to everyday use, our team helps you get real value from PairoApps."
        cta={{ label: 'Talk to our team', to: '/contact' }}
        cards={services.map((s, i) => ({ title: s, tag: `0${i + 1}`, rows: serviceDetail[s] }))}
      />
      <LetsTalk title="Let's Find the Right Solution for Your Business." intro="Tell us which modules and services you're interested in and we'll put together the right setup for you." />
    </>
  )
}
