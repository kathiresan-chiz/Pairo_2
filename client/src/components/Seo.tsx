import { SITE_URL } from '../content/site'

type Props = { title: string; description: string; path: string; jsonLd?: object }

/** React 19 hoists <title>, <meta> and <link> rendered anywhere into <head>. */
export default function Seo({ title, description, path, jsonLd }: Props) {
  const url = SITE_URL + path
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </>
  )
}
