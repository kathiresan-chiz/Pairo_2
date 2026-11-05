import { Link } from 'react-router'
import { Container, Etch, Pill, Reveal } from '../ui'
import { articleVisual, insightCategories, type Article } from '../../content/site'

const catName = (slug: string) => insightCategories.find((c) => c.slug === slug)?.name ?? ''

/** Etched illustration standing in for article imagery, framed with a hairline. */
export function ArticleVisual({ a, className = '' }: { a: Article; className?: string }) {
  return (
    <div className={`overflow-hidden border border-navy-800/15 bg-paper ${className}`}>
      <Etch name={articleVisual(a)} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" sizes="(min-width: 1024px) 40vw, (min-width: 640px) 45vw, 90vw" />
    </div>
  )
}

/**
 * "Latest market intel" layout on etching paper: title + "Read more" pill,
 * one large framed etching left, one small article on the right.
 */
export default function IntelGrid({ title, articles, cta }: { title: string; articles: Article[]; cta?: { label: string; to: string } }) {
  const [lead, side] = articles
  return (
    <section className="bg-paper py-14 text-navy-900 sm:py-20 md:py-24">
      <Container>
        <div className="border-t border-navy-800/15 pt-10">
          <Reveal><h2 className="heading-lg max-w-[18ch]">{title}</h2></Reveal>
          {cta && <Pill to={cta.to} tone="dark" className="mt-5">{cta.label}</Pill>}
        </div>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 md:mt-14 lg:grid-cols-4">
          {lead && (
            <Link to={`/insights/${lead.category}`} className="group lg:col-span-2">
              <ArticleVisual a={lead} className="aspect-[4/3]" />
              <p className="mt-4 text-[11px] md:text-[13px] text-navy-800/60">{catName(lead.category)} · {lead.readTime}</p>
              <h3 className="mt-1 text-lg font-light">{lead.title}</h3>
            </Link>
          )}
          {side && (
            <Link to={`/insights/${side.category}`} className="group lg:col-start-4">
              <ArticleVisual a={side} className="aspect-[4/3]" />
              <p className="mt-4 text-[11px] md:text-[13px] text-navy-800/60">{catName(side.category)} · {side.readTime}</p>
              <h3 className="mt-1 text-lg font-light leading-snug">{side.title}</h3>
              <p className="mt-3 text-xs leading-relaxed text-navy-800/70">{side.excerpt}</p>
            </Link>
          )}
        </div>
      </Container>
    </section>
  )
}
