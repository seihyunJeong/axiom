module.exports = {
  siteMetadata: {
    title: `Axiom Associates`,
    description: `Empower entrepreneurs seeking to advance humanity.`,
    author: `@axiom.associates`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data/`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto:400,500,700', 'Playfair+Display+SC'],
        },
      },
    },
    `gatsby-plugin-react-svg`,
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Axiom associates`,
        short_name: `axiom.associates`,
        start_url: `/`,
        background_color: `#003A81`,
        theme_color: `#003A81`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
