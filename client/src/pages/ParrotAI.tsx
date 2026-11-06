import Seo from '../components/Seo'
import ParrotMark from '../components/brand/ParrotMark'
import ParrotIcon from '../components/brand/ParrotIcon'
import { Pill } from '../components/ui'
import Hero from '../components/sections/Hero'
import StoryCarousel from '../components/sections/StoryCarousel'
import Approach from '../components/sections/Approach'
import LetsTalk from '../components/sections/LetsTalk'
import { navCta, seo } from '../content/site'
import { parrotStories } from '../content/pairo'

export default function ParrotAI() {
  return (
    <>
      <Seo {...seo.parrot} />
      <Hero
        title={<>Just <span className="text-seal">Ask</span>. Parrot AI Does the Entry.</>}
        image="m-office"
        labels={['Voice and photos of bills', 'English · Tamil · Hindi', 'Own model, no outside AI']}
        text="Type, speak or send a photo — in English, Tamil or Hindi. Nothing posts until you confirm."
        actions={<><Pill to={navCta.to} tone="dark">Book a Demo</Pill><Pill to="/services/parrot">Parrot AI and Connect</Pill></>}
      />
      <StoryCarousel
        title="Everything Parrot AI Can Do."
        intro="Nine scenarios: answer from your books, make entries, take voice notes, read documents, chase collections, explain reports, check compliance, speak your language and learn your way."
        items={parrotStories}
        visual={<ParrotMark />}
        itemCta={{ label: 'See it in a demo', to: navCta.to }}
      />
      <Approach
        title="Nothing Posts Until You Confirm."
        label="Parrot AI · your own model"
        columns={[
          'Parrot AI reads what you type, say or photograph, finds the right party and drafts the entry as a card you can check. Confirm in one tap; every check runs again before it posts.',
          "Runs on PairoApps' own model. Your data never goes to an outside AI.",
        ]}
        image="m-team"
        statement={<><ParrotIcon tone="brand" className="mr-3 inline-block h-[0.9em] w-auto align-[-0.05em]" />Ask in plain words. <span className="text-seal">Confirm in one tap.</span></>}
        cta={{ label: 'All agentic solutions', to: '/services' }}
      />
      <LetsTalk title="Ask Parrot AI About Your Own Books." intro="Book a demo and try Parrot AI in English, Tamil or Hindi on books like yours." />
    </>
  )
}
