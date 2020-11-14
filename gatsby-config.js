module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sass`,
    'gatsby-plugin-no-javascript',
    {
      resolve: 'gatsby-plugin-no-javascript-utils',
      options: {
        noSourcemaps: true,
        removeGeneratorTag: true,
        removeReactHelmetAttrs: true,
        noInlineStyles: false,
        removeGatsbyAnnouncer: true,
        removeFocusWrapper: false,
        removePreloadLinks: false,
      },
    },
  ],
}
