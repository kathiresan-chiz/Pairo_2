import { useState } from 'react'
import Seo from '../components/Seo'
import { Container, Eyebrow, Pill, Reveal } from '../components/ui'
import Hero from '../components/sections/Hero'
import CardRail from '../components/sections/CardRail'
import BlueSteps from '../components/sections/BlueSteps'
import LetsTalk from '../components/sections/LetsTalk'
import { navCta, seo } from '../content/site'
import { packFaq, packs, packTrust } from '../content/pairo'

function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section className="bg-paper py-20 text-navy-900 md:py-24">
      <Container className="grid gap-12 lg:grid-cols-4">
        <div>
          <Eyebrow className="text-navy-800/60">Questions</Eyebrow>
          <Reveal><h2 className="heading-lg mt-6">Before you choose.</h2></Reveal>
        </div>
        <ul className="border-t border-navy-800/15 lg:col-span-2 lg:col-start-3">
          {packFaq.map((f, i) => (
            <li key={f.q} className="border-b border-navy-800/15">
              <button
                className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg tracking-tight"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? null : i)}
              >
                {f.q}
                <span aria-hidden className={`text-2xl font-light transition-transform ${open === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              <div className={`grid transition-all duration-500 ${open === i ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]'}`}>
                <p className="overflow-hidden text-[13px] leading-relaxed text-navy-800/80">{f.a}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export default function Pricing() {
  return (
    <>
      <Seo {...seo.pricing} />
      <Hero
        title={<>One Price per Company. <span className="text-seal">Every Agent Included.</span></>}
        image="m-retail"
        labels={['Free', 'Standard', 'Professional', 'Professional Plus', 'Enterprise']}
        text="Start free. Add people, companies and control as you grow. Pay yearly and get 2 months free."
        actions={<><Pill to={navCta.to} tone="dark">Book a Demo</Pill><Pill to="/contact?intent=sales">Talk to Sales</Pill></>}
      />
      <CardRail
        title="Packs That Grow With You."
        intro="Yearly prices per company, before GST. Monthly billing is a tenth of the yearly price, each month."
        cta={{ label: 'Start free', to: navCta.to }}
        cards={packs.map((p) => ({
          title: p.name,
          tag: p.featured ? 'Most popular' : p.soon ? 'Coming soon' : undefined,
          featured: p.featured,
          rows: [
            ['Best for', p.tag],
            ['Price', p.price],
            ...(p.builds ? [['Includes', `Everything in ${p.builds}, plus`]] : []),
            ...(p.feats.length ? [['Scale', p.feats[0]], ['Adds', p.feats.slice(1).join(' · ')]] : []),
          ] as [string, string][],
        }))}
      />
      <BlueSteps
        eyebrow="Every pack"
        intro="Users, branches and warehouses are shared across your companies, and every pack is set up the same way."
        steps={packTrust}
        closing="Your books stay as they are when you move up a pack; new features switch on."
        cta={{ label: 'Request a quote', to: '/contact?intent=sales' }}
      />
      <Faq />
      <LetsTalk title="Not Sure Which Pack Is Right for You?" intro="Tell us about your team and companies and we'll recommend the right pack and setup." />
    </>
  )
}
