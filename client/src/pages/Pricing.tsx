// PRICING PAGE: switched off for now, kept for future use.
// To bring it back: uncomment this file, then uncomment the Pricing lines in
//   src/App.tsx (import + route), src/components/Header.tsx, src/components/Footer.tsx,
//   src/content/site.ts (nav) and public/sitemap.xml.
//
// import { useState } from 'react'
// import Seo from '../components/Seo'
// import { Container, Eyebrow, Pill, Reveal } from '../components/ui'
// import Hero from '../components/sections/Hero'
// import CardRail from '../components/sections/CardRail'
// import BlueSteps from '../components/sections/BlueSteps'
// import LetsTalk from '../components/sections/LetsTalk'
// import { plans, pricingFactors, pricingFaq, seo } from '../content/site'
// 
// function Faq() {
//   const [open, setOpen] = useState<number | null>(0)
//   return (
//     <section className="bg-paper py-20 text-navy-900 md:py-24">
//       <Container className="grid gap-12 lg:grid-cols-4">
//         <div>
//           <Eyebrow className="text-navy-800/60">FAQ</Eyebrow>
//           <Reveal><h2 className="heading-lg mt-6">Questions, answered.</h2></Reveal>
//         </div>
//         <ul className="border-t border-navy-800/15 lg:col-span-2 lg:col-start-3">
//           {pricingFaq.map((f, i) => (
//             <li key={f.q} className="border-b border-navy-800/15">
//               <button
//                 className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg tracking-tight"
//                 aria-expanded={open === i}
//                 onClick={() => setOpen(open === i ? null : i)}
//               >
//                 {f.q}
//                 <span aria-hidden className={`text-2xl font-light transition-transform ${open === i ? 'rotate-45' : ''}`}>+</span>
//               </button>
//               <div className={`grid transition-all duration-500 ${open === i ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]'}`}>
//                 <p className="overflow-hidden text-[13px] leading-relaxed text-navy-800/80">{f.a}</p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </Container>
//     </section>
//   )
// }
// 
// export default function Pricing() {
//   return (
//     <>
//       <Seo {...seo.pricing} />
//       <Hero
//         title="The Right ERP Solution for Your Business."
//         image="m-retail"
//         labels={plans.map((p) => p.name)}
//         text="Every business is different, so pricing is shaped around the users, modules and support you need."
//         actions={<Pill to="/contact?intent=sales">Talk to Sales</Pill>}
//       />
//       {/* Plan names are proposals from the content architecture doc, not confirmed packages */}
//       <CardRail
//         title="Plans that grow with you."
//         intro="Start with what you need today and add modules, users and services as your business grows."
//         cta={{ label: 'Request a quote', to: '/contact?intent=sales' }}
//         cards={plans.map((p) => ({
//           title: p.name,
//           tag: p.featured ? 'Most popular' : undefined,
//           featured: p.featured,
//           rows: [['Best for', p.audience], ['Pricing', 'Custom quote'], ['Modules', 'Choose what you need']],
//         }))}
//       />
//       <BlueSteps
//         eyebrow="Pricing factors"
//         intro="Your price reflects exactly what your business uses. These are the five things that shape it."
//         steps={pricingFactors}
//         closing="You only pay for what your business actually uses."
//         cta={{ label: 'Request a quote', to: '/contact?intent=sales' }}
//       />
//       <Faq />
//       <LetsTalk title="Not Sure Which Plan Is Right for You?" intro="Tell us about your team and requirements and we'll recommend the right plan and setup." />
//     </>
//   )
// }
