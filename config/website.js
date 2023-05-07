module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Saransh Sharma - Technology and Art Goes Along', // Navigation and Site Title
  titleAlt: 'Saransh Sharma - Music, Martial arts and Mathematics', // Title for JSONLD
  description: 'This blog is personal - math and music and personal findings and musings',
  headline: 'Writing and publishing content for Saransh Sharma', // Headline for schema.org JSONLD
  url: 'https://saranshsharma.me', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/logos/logo-1024.png', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'Saransh', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Saransh Sharma', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '@none', // Twitter Username
  facebook: 'none', // Facebook Site Name
  googleAnalyticsID: 'UA-115874034-1',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}
