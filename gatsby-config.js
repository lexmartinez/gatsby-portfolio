module.exports = {
  siteMetadata: {
    title: `Lex Martínez | FullStack Javascript Developer`,
  },
  plugins: [ 'gatsby-plugin-sass', 'gatsby-plugin-react-helmet', 'gatsby-transformer-json',
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
    }
  ],
}