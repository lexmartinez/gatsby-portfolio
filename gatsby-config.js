module.exports = {
  siteMetadata: {
    title: `Lex Martínez | FullStack Javascript Developer`,
  },
  plugins: [ 'gatsby-plugin-sass', 'gatsby-plugin-react-helmet', 'gatsby-transformer-json', 'gatsby-plugin-scroll-reveal', 
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Poppins',
            variants: ['300', '400', '500', '700', '800']
          }
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `data`,
        path: `${__dirname}/src/data`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `@lexmartinez`,
        short_name: `@lexmartinez`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#0D4F8B`,
        display: `standalone`,
        icon: `static/favicon.png`
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
    'gatsby-plugin-offline'
  ],
}