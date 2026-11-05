import { useState, type FormEvent } from 'react'
import { useSearchParams } from 'react-router'
import axios from 'axios'
import { brandify, Arrow, Container, Etch, Pill, Reveal } from '../ui'
import { contactInfo, industries } from '../../content/site'

type Status = 'idle' | 'sending' | 'sent' | 'error'
const field = 'w-full border border-navy-800/20 bg-white/50 px-4 py-3 text-[13px] md:text-[15px] text-navy-900 placeholder:text-navy-800/50 outline-none transition-colors focus:border-navy-900 focus:bg-white/80'
const intents = [
  { value: 'demo', label: 'Book a demo' },
  { value: 'sales', label: 'Pricing / sales' },
  { value: 'general', label: 'Other' },
]

/**
 * "Let's talk" on etching paper: title / intro / contact on the left above an etched vignette,
 * boxed hairline form on the right.
 */
export default function LetsTalk({ title = "Let's talk", intro, as: H = 'h2' }: { title?: string; intro: string; as?: 'h1' | 'h2' }) {
  const [params] = useSearchParams()
  const initial = params.get('intent')
  const [status, setStatus] = useState<Status>('idle')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    setStatus('sending')
    try {
      await axios.post('/api/contact', data)
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="talk" className="bg-paper py-14 text-navy-900 sm:py-20 md:py-24">
      <Container>
        <div className="grid gap-14 border-t border-navy-800/15 pt-14 lg:grid-cols-2">
        <div>
          <Reveal><H className="heading-lg max-w-[16ch]">{title}</H></Reveal>
          <p className="mt-6 max-w-xs text-[13px] md:text-[15px] leading-relaxed text-navy-800/80">{brandify(intro)}</p>
          <ul className="mt-8 space-y-2 text-xs">
            <li><a href={`mailto:${contactInfo.email}`} className="inline-flex items-center gap-2 hover:text-seal">{contactInfo.email} <Arrow /></a></li>
            {contactInfo.phone && <li>{contactInfo.phone}</li>}
            <li className="text-navy-800/60">{contactInfo.hours}</li>
          </ul>
          <Reveal className="mt-10"><Etch name="m-handshake" className="block w-full max-w-[420px]" sizes="(min-width: 1024px) 420px, 90vw" /></Reveal>
        </div>

        <form onSubmit={onSubmit} className="grid content-start gap-2">
          <fieldset className="flex flex-wrap items-center gap-x-6 gap-y-2 border border-navy-800/20 bg-white/50 px-4 py-3 text-[13px] md:text-[15px]">
            <legend className="sr-only">I'm interested in</legend>
            <span className="mr-auto text-navy-800/70">I'm interested in</span>
            {intents.map((o) => (
              <label key={o.value} className="flex cursor-pointer items-center gap-2">
                <input type="radio" name="intent" value={o.value} defaultChecked={(initial ?? 'demo') === o.value} className="h-3 w-3 accent-navy-900" />
                {o.label}
              </label>
            ))}
          </fieldset>
          <input required name="fullName" placeholder="Full name" className={field} autoComplete="name" />
          <input required type="email" name="email" placeholder="Business email" className={field} autoComplete="email" />
          <div className="grid gap-2 sm:grid-cols-2">
            <input required name="company" placeholder="Company name" className={field} autoComplete="organization" />
            <input type="tel" name="phone" placeholder="Phone number" className={field} autoComplete="tel" />
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <select name="industry" defaultValue="" className={field}>
              <option value="">Industry</option>
              {industries.map((i) => <option key={i}>{i}</option>)}
            </select>
            <select name="contactMethod" defaultValue="Email" className={field}>
              <option value="Email">Contact me by email</option>
              <option value="Phone">Contact me by phone</option>
            </select>
          </div>
          <textarea name="requirements" rows={5} placeholder="Tell us about your requirements" className={field} />

          <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs" aria-live="polite">
              {status === 'sent' && <span className="text-navy-800">Thanks, we'll be in touch shortly.</span>}
              {status === 'error' && <span className="text-crimson">Something went wrong. Please try again or email us.</span>}
            </p>
            <Pill type="submit" tone="dark" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send message'}</Pill>
          </div>
        </form>
        </div>
      </Container>
    </section>
  )
}
