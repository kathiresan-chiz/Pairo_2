import Hero from '../components/sections/Hero'
import { Pill } from '../components/ui'

export default function NotFound() {
  return (
    <>
      <title>Page not found | PairoApps</title>
      <meta name="robots" content="noindex" />
      <Hero image="m-city-bridge" title="This page isn't connected." text="The page you're looking for doesn't exist or has moved." actions={<Pill to="/">Back to home</Pill>} />
    </>
  )
}
