require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  pathPrefix: `/ml`,
  siteMetadata: {
    siteTitle: `Machine Learning at Vernacular.ai`,
    siteTitleAlt: `Machine Learning | Vernacular.ai`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        feed: true,
        feedTitle: `Machine Learning at Vernacular.ai`,
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `Team`,
            slug: `/team`,
          },
          {
            title: `About`,
            slug: `/about`,
          }
        ],
        externalLinks: [
          {
            name: `github`,
            url: `https://github.com/Vernacular-ai`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Machine Learning at Vernacular.ai`,
        short_name: `machine learning`,
        description: `Notes from the Machine Learning team at Vernacular.ai`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
