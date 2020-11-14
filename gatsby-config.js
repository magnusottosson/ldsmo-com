module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        background_color: '#000',
        description: 'LDSMO New Ventures.',
        display: 'standalone',
        icon: 'static/black-circle.png',
        lang: 'en',
        name: 'LDSMO New Ventures.',
        short_name: 'LDSMO',
        start_url: '/',
        theme_color: '#fff',
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        workboxConfig: {
          globPatterns: ['**/icon-path*'],
        },
      },
    },
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
