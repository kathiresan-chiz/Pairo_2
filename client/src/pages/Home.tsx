import Seo from '../components/Seo'
import { Brand, Pill } from '../components/ui'
import Hero from '../components/sections/Hero'
import Approach from '../components/sections/Approach'
import TileGrid from '../components/sections/TileGrid'
import StoryCarousel from '../components/sections/StoryCarousel'
import BlueSteps from '../components/sections/BlueSteps'
import CardRail from '../components/sections/CardRail'
import QuoteCarousel from '../components/sections/QuoteCarousel'
import Marquee from '../components/sections/Marquee'
import IntelGrid from '../components/sections/IntelGrid'
import LetsTalk from '../components/sections/LetsTalk'
import { lawIcons, solutionIcon } from '../content/icons'
import { articles, navCta, seo, SITE_URL, vocabularyA, vocabularyB, whyStatements } from '../content/site'
import { duo, healthChecks, implementation, laws, parrotStories, solutions, workingDay } from '../content/pairo'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Organization', name: 'PairoApps', url: SITE_URL, logo: `${SITE_URL}/favicon.svg` },
    { '@type': 'SoftwareApplication', name: 'PairoApps ERP', applicationCategory: 'BusinessApplication', operatingSystem: 'Web' },
  ],
}

export default function Home() {
  return (
    <>
      <Seo {...seo.home} jsonLd={jsonLd} />

      {/* 01 Hero */}
      <Hero
        full
        image="m-ai-erp-hero"
        title={<>Your Agentic Accountant <span className="text-seal">Closes the Books.</span></>}
        labels={['The agentic ERP for India', '24×7 · fully automated', 'Built by accountants']}
        text="Fully automated. An accountant working round the clock for you: it matches every bank line, reads every bill, gets GST returns ready, chases every payment and audits every entry."
        actions={<><Pill to={navCta.to} tone="dark">Book a Demo</Pill><Pill to="/parrot-ai">See Parrot AI work</Pill></>}
      />

      {/* 02 One agent, two roles */}
      <Approach
        title="Your Accountant. Your Auditor. The Same Agent."
        label="One agent · two roles"
        columns={[
          `The accountant does the work: ${duo.accountant.join(', ').toLowerCase()}.`,
          `The auditor checks it, instantly: ${duo.auditor.join(', ')}. ${duo.foot.join('. ')}.`,
        ]}
        statement={<>Built by <span className="text-seal">accountants</span>, for business owners and accountants. That is <Brand />.</>}
        cta={{ label: 'All agentic solutions', to: '/services' }}
      />

      {/* 03 Twelve agentic solutions */}
      <TileGrid
        eyebrow="Agentic solutions"
        title="Twelve Agentic Solutions. One Ledger."
        tiles={solutions.map((s) => ({ title: s.name, body: s.line, Icon: solutionIcon(s.key), to: `/services/${s.key}` }))}
        footerLink={{ label: 'All agentic solutions', to: '/services' }}
      />

      {/* 04 One working day */}
      <BlueSteps
        eyebrow="The agentic accountant · a team of agents"
        intro="One working day. Zero chasing. Five agents at work, one decision for you, and the books closed the same day."
        steps={workingDay}
        image="m-city-bridge"
        closing="Books closed the same day."
        cta={{ label: 'Meet the agents', to: '/services' }}
      />

      {/* 05 Real-time Health Check */}
      <CardRail
        title="An Auditor That Never Leaves."
        intro="Real-time Health Check: 70 built-in checks across 12 areas, live on every posting. Your rules, checked daily."
        cta={{ label: 'See every check', to: '/health-check' }}
        cards={healthChecks.map((c) => ({ title: c.name, tag: c.status, featured: c.status === 'Problem', rows: [['Status', c.status], ['Result', c.result]] }))}
      />

      {/* 06 Parrot AI */}
      <StoryCarousel
        title="Just Ask. Parrot AI Does the Entry."
        intro="Your AI accounting assistant. Type or speak in English, Tamil or Hindi, confirm in one tap. Nothing goes to an outside AI."
        cta={{ label: 'Everything Parrot AI can do', to: '/parrot-ai' }}
        items={parrotStories}
        itemCta={{ label: 'See it in a demo', to: navCta.to }}
      />

      {/* 07 Why PairoApps */}
      <QuoteCarousel
        title="Built by Accountants, for Business Owners."
        intro={['Your accountant. Your auditor. The same agent.', 'Checked as you post, a full audit any time, the audit trail always on, and no year-end surprises.']}
        items={whyStatements}
      />

      {/* 08 Implementation */}
      <CardRail
        title="Migration in 3 Days. Live in 2 Weeks."
        intro="Masters, balances and open bills moved and tied to your old books, then your team and approvals set up."
        cta={{ label: 'Book a demo', to: navCta.to }}
        cards={implementation.map((s, i) => ({ title: s.what, tag: s.when, featured: i === implementation.length - 1, rows: [['When', s.when], ['Phase', s.phase]] }))}
      />

      {/* 09 The law, built in */}
      <TileGrid
        eyebrow="Compliance"
        title="The Law, Built In."
        tiles={laws.map((l, i) => ({ title: l.name, body: l.act, Icon: lawIcons[i], to: '/compliance' }))}
        footerLink={{ label: 'Compliance depth', to: '/compliance' }}
      />

      <Marquee eyebrow="The agentic accountant, in numbers" rowA={vocabularyA} rowB={vocabularyB} />

      {/* 10 Insights */}
      <IntelGrid title="Ideas for a Smarter Way to Do Business." articles={articles.slice(0, 2)} cta={{ label: 'Read more', to: '/insights' }} />

      {/* 11 Final CTA */}
      <LetsTalk
        title="Hire the Accountant That Never Stops."
        intro="Book a demo and we'll show you the agents at work on books like yours. Start free, or see pricing. Fill in the form and we'll get back to you."
      />
    </>
  )
}
