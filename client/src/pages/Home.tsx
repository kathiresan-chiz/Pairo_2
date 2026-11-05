import Seo from '../components/Seo'
import { Brand, Pill } from '../components/ui'
import Hero from '../components/sections/Hero'
import Approach from '../components/sections/Approach'
import TileGrid from '../components/sections/TileGrid'
import StoryCarousel from '../components/sections/StoryCarousel'
import BlueSteps from '../components/sections/BlueSteps'
import QuoteCarousel from '../components/sections/QuoteCarousel'
import Marquee from '../components/sections/Marquee'
import IntelGrid from '../components/sections/IntelGrid'
import LetsTalk from '../components/sections/LetsTalk'
import { moduleIcons } from '../content/icons'
import { aiStories, articles, howItWorks, modules, navCta, seo, SITE_URL, vocabularyA, vocabularyB, whyStatements } from '../content/site'

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
        title={<>Business, Connected. <span className="text-seal">Intelligence, Built In.</span></>}
        labels={['Finance & Accounting', 'Inventory & Purchase', 'People & HR']}
        text="AI-powered ERP that brings your entire business together. Simplify operations, connect workflows and make smarter business decisions through one intelligent platform."
        actions={<><Pill to={navCta.to} tone="dark">Book a Demo</Pill><Pill to="/services">Explore Solutions</Pill></>}
      />

      {/* 02 Brand statement */}
      <Approach
        title="Your Business Deserves More Than Disconnected Systems."
        label="The problem we solve"
        columns={[
          'Most growing businesses run on a patchwork of tools: one for accounts, another for stock, spreadsheets for everything in between. Information is scattered, the same data is keyed in again and again, and nobody is quite sure which number is right.',
          'PairoApps replaces that patchwork with one unified business management platform, where finance, inventory, procurement and people move in step, without the friction.',
        ]}
        statement={<><Brand /> brings finance, inventory, procurement and people into <span className="text-seal">one calm, connected system</span> for growing businesses.</>}
        cta={{ label: 'View services', to: '/services' }}
      />

      {/* 03 ERP ecosystem */}
      <TileGrid
        eyebrow="ERP ecosystem"
        title="One Platform. A More Connected Business."
        tiles={modules.map((m) => ({ title: m.name, body: m.blurb, Icon: moduleIcons[m.key as keyof typeof moduleIcons], to: `/services#${m.key}` }))}
        footerLink={{ label: 'View all modules', to: '/services' }}
      />

      {/* 04 AI differentiation */}
      <StoryCarousel
        title="Intelligence That Works Behind Your Business."
        intro="Intelligence is built into the way PairoApps works, so the system does more of the routine work and surfaces what matters."
        cta={{ label: 'Explore AI capabilities', to: '/services' }}
        items={aiStories}
        itemCta={{ label: 'See it in a demo', to: navCta.to }}
      />

      {/* 05 How it works */}
      <BlueSteps
        eyebrow="How it works"
        intro="From business complexity to operational clarity, in five steps that build on each other."
        steps={howItWorks}
        image="m-city-bridge"
        closing="One connected business. Smarter decisions. Better growth."
        cta={{ label: 'Learn more', to: '/about' }}
      />

      {/* 06 Why PairoApps */}
      <QuoteCarousel
        title="Built Around the Way Businesses Work."
        intro={['Software should fit the business, not the other way round.', 'These are the principles that shape every module, screen and workflow in PairoApps.']}
        items={whyStatements}
      />

      {/* 07–08 Customer proof & Integrations: hidden until confirmed testimonials, logos and integrations are supplied */}
      <Marquee eyebrow="What we stand for" rowA={vocabularyA} rowB={vocabularyB} />

      {/* 09 Insights */}
      <IntelGrid title="Ideas for a Smarter Way to Do Business." articles={articles.slice(0, 2)} cta={{ label: 'Read more', to: '/insights' }} />

      {/* 10 Final CTA */}
      <LetsTalk
        title="Ready to Bring Your Business Together?"
        intro="Book a demo and we'll show you how PairoApps connects finance, stock and people for a business like yours. Fill in the form and we'll get back to you."
      />
    </>
  )
}
