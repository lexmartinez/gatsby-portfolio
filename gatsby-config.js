module.exports = {
  siteMetadata: {
    title: `Lex Martínez`,
    description: `Freelance Javascript Developer`,
    author: `@lexmartinez`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Libre Baskerville',
            variants: ['400', '500', '700'],
          },
          {
            family: 'Anonymous Pro',
            variants: ['400', '700'],
          },
          {
            family: 'Rubik',
            variants: ['300', '400', '500', '700'],
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `@lexmartinez`,
        short_name: `@lexmartinez`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#0D4F8B`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
    'gatsby-plugin-offline',
  ],
}
