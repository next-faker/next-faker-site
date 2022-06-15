export default {
  github: 'https://github.com/Bunlong/next-faker',
  docsRepositoryBase: 'https://github.com/Bunlong/next-faker',
  titleSuffix: ' – next-faker',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">next-faker</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        React hook for generating fake data for testing and development.
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="next-faker: React hook for generating fake data for testing and development." />
      <meta name="og:description" content="next-faker: React hook for generating fake data for testing and development." />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="/next-faker.png" />
      <meta name="twitter:site:domain" content="next-faker.github.io/" />
      <meta name="twitter:url" content="https://next-faker.github.io/" />
      <meta name="og:title" content="next-faker: React hook for generating fake data for testing and development." />
      <meta name="og:image" content="/next-faker.png" />
      <meta name="apple-mobile-web-app-title" content="next-faker" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>MIT {new Date().getFullYear()} © next-faker</>,
  unstable_faviconGlyph: '👋',
}
