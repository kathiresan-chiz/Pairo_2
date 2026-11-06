import Seo from '../components/Seo'
import { Pill } from '../components/ui'
import Hero from '../components/sections/Hero'
import StoryCarousel from '../components/sections/StoryCarousel'
import CardRail from '../components/sections/CardRail'
import TileGrid from '../components/sections/TileGrid'
import LetsTalk from '../components/sections/LetsTalk'
import { lawIcons } from '../content/icons'
import { navCta, seo } from '../content/site'
import { dueDates, laws, lawStories } from '../content/pairo'

export default function Compliance() {
  return (
    <>
      <Seo {...seo.compliance} />
      <Hero
        title={<>The Law, <span className="text-seal">Built In</span>.</>}
        image="m-office"
        labels={['GST', 'TDS · TCS', 'Schedule III', 'MSME']}
        text="GST, TDS under the Income-tax Act 2025, Companies Act and MSME — checked as you post, ready before every due date."
        actions={<Pill to={navCta.to} tone="dark">Book a Demo</Pill>}
      />
      <TileGrid
        eyebrow="Depth in Indian compliance"
        title="Four Laws. Checked on Every Entry."
        tiles={laws.map((l, i) => ({ title: l.name, body: l.act, Icon: lawIcons[i] }))}
      />
      <StoryCarousel
        title="From Posting to Return, Step by Step."
        intro="Each law has its own flow, built into the entries you already make."
        items={lawStories}
        itemCta={{ label: 'See it in a demo', to: navCta.to }}
      />
      <CardRail
        title="November 2026. Ready on Time."
        intro="Compliance calendar: every due date prepared before it arrives. E-invoice and e-way bill generation are being built."
        cards={dueDates.map((d) => ({ title: d.name, tag: d.due, rows: [['Due', d.due], ['Status', 'Ready ✓']] }))}
      />
      <LetsTalk title="Never Miss a Due Date Again." intro="Book a demo and we'll walk you through GST, TDS, Schedule III and MSME on books like yours." />
    </>
  )
}
