import Seo from '../components/Seo'
import { Container, Reveal } from '../components/ui'
import LetsTalk from '../components/sections/LetsTalk'
import { seo } from '../content/site'

export default function Contact() {
  return (
    <>
      <Seo {...seo.contact} />
      <div aria-hidden className="h-16 md:h-20" />
      <LetsTalk
        as="h1"
        title="Let's Talk About What's Possible."
        intro="Whether you'd like a demo, pricing or just a conversation about your systems, fill in the form and our team will get back to you."
      />
      <section className="bg-paper pb-16 text-navy-900 sm:pb-24 md:pb-32">
        <Container>
          <Reveal className="relative lg:pl-[25%]">
            <span aria-hidden className="absolute -top-6 left-0 text-sm text-navy-800/70 lg:left-[calc(25%-1.5rem)]">+</span>
            <p className="heading-lg max-w-[22ch]">Your Next Business Improvement Starts with a Conversation.</p>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
