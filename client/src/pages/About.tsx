import Seo from '../components/Seo'
import { Pill } from '../components/ui'
import Hero from '../components/sections/Hero'
import Approach from '../components/sections/Approach'
import TileGrid from '../components/sections/TileGrid'
import BlueSteps from '../components/sections/BlueSteps'
import LetsTalk from '../components/sections/LetsTalk'
import { principleIcons } from '../content/icons'
import { navCta, principles, seo } from '../content/site'

export default function About() {
  return (
    <>
      <Seo {...seo.about} />
      <Hero
        title="Technology Should Move Business Forward."
        image="m-team"
        labels={['Connection', 'Intelligence', 'Progress']}
        text="PairoApps exists to make business management more connected, intelligent and efficient."
        actions={<Pill to={navCta.to}>Book a Demo</Pill>}
      />

      {/* Our story: TODO replace with the confirmed company story */}
      <Approach
        title="Built on a Better Way to Manage Business."
        label="Our story"
        columns={[
          'PairoApps was founded on a simple observation: businesses lose time and clarity when their finance, stock and people live in separate systems.',
          'We set out to build one calm, connected platform with intelligence built in, so growing businesses can run smarter without adding complexity.',
        ]}
        image="m-warehouse"
        statement={<>Our approach to business technology is simple: <span className="text-seal">connect everything</span>, then make it intelligent.</>}
      />

      <TileGrid
        eyebrow="Our philosophy"
        title="Three Principles Behind Everything We Build."
        tiles={principles.map((p, i) => ({ title: p.name, body: p.meaning, Icon: principleIcons[i] }))}
      />

      {/* Vision & Mission: TODO confirm wording with the PairoApps team */}
      <BlueSteps
        eyebrow="Vision & mission"
        intro="Our vision is a world where every growing business runs as one connected whole. Our mission is to deliver that through an intelligent, easy-to-use ERP platform."
        steps={['Understand how each business really works.', 'Connect its functions on one platform.', 'Add intelligence where it saves real effort.', 'Support teams through implementation and beyond.']}
        closing="Designed Around the Way Businesses Work."
        cta={{ label: 'Explore services', to: '/services' }}
      />

      <LetsTalk title="Let's Build a Smarter Way Forward." intro="Tell us about your business and we'll show you what a connected, intelligent way of working could look like." />
    </>
  )
}
