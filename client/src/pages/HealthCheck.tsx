import { ShieldCheck } from 'lucide-react'
import Seo from '../components/Seo'
import { Pill } from '../components/ui'
import Hero from '../components/sections/Hero'
import TileGrid from '../components/sections/TileGrid'
import CardRail from '../components/sections/CardRail'
import BlueSteps from '../components/sections/BlueSteps'
import LetsTalk from '../components/sections/LetsTalk'
import { navCta, seo } from '../content/site'
import { healthAreas, healthChecks } from '../content/pairo'

export default function HealthCheck() {
  return (
    <>
      <Seo {...seo.health} />
      <Hero
        title={<>Your <span className="text-seal">Auditor</span>, Always On.</>}
        image="m-analyst"
        labels={['70 built-in checks', 'Custom checks', 'Alerts']}
        text="70 checks across 12 areas on your live books — run any time, in seconds. Add your own rules."
        actions={<Pill to={navCta.to} tone="dark">Book a Demo</Pill>}
      />
      <CardRail
        title="Health 96. Checking as You Post."
        intro="A live run: 70 checks · 67 clear, 2 warnings, 1 problem. Motor car repairs ₹18,400 claimed as ITC — reverse it before GSTR-3B."
        cards={healthChecks.map((c) => ({ title: c.name, tag: c.status, featured: c.status === 'Problem', rows: [['Status', c.status], ['Result', c.result]] }))}
      />
      <TileGrid
        eyebrow="Areas audited"
        title="Every Area Your Auditor Would Check."
        tiles={healthAreas.map(([area, n, body]) => ({ title: `${area} · ${n}`, body, Icon: ShieldCheck }))}
      />
      <BlueSteps
        eyebrow="Customised checks"
        intro="Build the checks your auditor would. Any rule on rows or totals, like “cash expense over ₹10,000 a day”. Tune the built-ins: switch off, change severity or threshold, all audited."
        steps={[
          'Pick data: sales invoices.',
          'Set rule: discount over 15%.',
          'Severity: warning.',
          'Alert: Owner and Accounts head, daily at 8 am, by email and in-app.',
        ]}
        closing="Professional Plus: up to 10 custom checks · Enterprise: unlimited. Built-in checks in every pack."
        cta={{ label: 'See packs', to: '/pricing' }}
      />
      <LetsTalk title="Run a Health Check on Your Books." intro="Book a demo and we'll show you every check running live on books like yours." />
    </>
  )
}
