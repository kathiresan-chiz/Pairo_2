import { NavLink, useParams } from 'react-router'
import Seo from '../components/Seo'
import { Container, Eyebrow, Reveal } from '../components/ui'
import Hero from '../components/sections/Hero'
import IntelGrid, { ArticleVisual } from '../components/sections/IntelGrid'
import { articles, insightCategories, seo } from '../content/site'

const chip = ({ isActive }: { isActive: boolean }) =>
  `rounded-none border px-4 py-1.5 text-[13px] md:text-[14px] transition-colors ${isActive ? 'border-navy-900 bg-navy-900 text-paper' : 'border-navy-800/20 hover:border-navy-900'}`

export default function Insights() {
  const { category } = useParams()
  const current = insightCategories.find((c) => c.slug === category)
  // On the main Insights page the first two articles are already featured above, so the list starts after them.
  const list = current ? articles.filter((a) => a.category === current.slug) : articles.slice(2)

  return (
    <>
      <Seo
        title={current ? `${current.name} | PairoApps Insights` : seo.insights.title}
        description={seo.insights.description}
        path={current ? `/insights/${current.slug}` : seo.insights.path}
      />
      <Hero
        title={current ? current.name : 'Ideas for a Smarter Way to Do Business.'}
        image="m-analyst"
        labels={['ERP & AI', 'Automation', 'Finance & Operations']}
        text="Practical thinking on ERP, artificial intelligence, automation and running a more connected business."
      />

      {!current && <IntelGrid title="Featured articles" articles={articles.slice(0, 2)} />}

      <section className="bg-paper pb-16 pt-4 text-navy-900 sm:pb-28">
        <Container>
          <div className="border-t border-navy-800/15 pt-5"><Eyebrow className="text-navy-800/60">All insights</Eyebrow></div>
          <nav aria-label="Categories" className="mt-8 flex flex-wrap gap-2">
            <NavLink end to="/insights" className={chip}>All</NavLink>
            {insightCategories.map((c) => <NavLink key={c.slug} to={`/insights/${c.slug}`} className={chip}>{c.name}</NavLink>)}
          </nav>

          {list.length === 0 ? (
            <p className="mt-14 text-navy-800/60">No articles in this category yet.</p>
          ) : (
            <ul className="mt-14 grid gap-x-4 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
              {list.map((a, i) => (
                <Reveal as="li" key={a.slug} delay={(i % 4) * 70}>
                  <article className="group">
                    <ArticleVisual a={a} className="aspect-[4/3]" />
                    <p className="mt-4 text-[11px] md:text-[13px] text-navy-800/60">{insightCategories.find((c) => c.slug === a.category)?.name} · {a.readTime}</p>
                    <h2 className="mt-1 text-lg leading-snug tracking-tight font-light">{a.title}</h2>
                    <p className="mt-2 text-xs leading-relaxed text-navy-800/60">{a.excerpt}</p>
                  </article>
                </Reveal>
              ))}
            </ul>
          )}
        </Container>
      </section>
    </>
  )
}
