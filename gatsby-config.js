module.exports = {
  siteMetadata: {
    title: `QC Makeup Academy`,
    description: `Become a Professional Makeup Artist with top-rated online makeup courses from QC. QC Makeup Academy is the world leader in interactive online makeup education. Get the makeup training you deserve and start an exciting profitable career as a certified MUA!`,
    author: `QC Career School`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-background-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `QC Makeup Academy`,
        short_name: `QC Makeup`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/qcma-favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Playfair Display`,
            variants: [ `400`, `500` ],
            // subsets: [`latin`],
          },
          {
            family: `Open Sans`,
            variants: [ `300`, `500`, `700` ],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          `UA-3632503-9`,
          `AW-1071836607`,
        ],
        gtagConfig: {
          site_speed_sample_rate: 100,
          optimize_id: 'GTM-5BPH5PS',
        },
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '1725004270923176',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resovle: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          // importWorkboxFrom: `local`,
          // globDirectory: rootDir,
          // globPatterns,
          // modifyURLPrefix: {
          //   // If `pathPrefix` is configured by user, we should replace
          //   // the default prefix with `pathPrefix`.
          //   '/': `${pathPrefix}/`,
          // },
          // cacheId: `gatsby-plugin-offline`,
          // // Don't cache-bust JS or CSS files, and anything in the static directory,
          // // since these files have unique URLs and their contents will never change
          // dontCacheBustURLsMatching: /(\.js$|\.css$|static\/)/,
          runtimeCaching: [
            {
              // Don't cache cypress files in __ folder
              urlPattern: /^https?:.*\/__\/.*/,
              handler: `NetworkOnly`,
            },
            {
              // Use cacheFirst since these don't need to be revalidated (same RegExp
              // and same reason as above)
              urlPattern: /(\.js$|\.css$|static\/)/,
              handler: `CacheFirst`,
            },
            {
              // page-data.json files, static query results and app-data.json
              // are not content hashed
              urlPattern: /^https?:.*\/page-data\/.*\.json/,
              handler: `StaleWhileRevalidate`,
            },
            {
              // Add runtime caching of various other page resources
              urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
              handler: `StaleWhileRevalidate`,
            },
            {
              // Google Fonts CSS (doesn't end in .css so we need to specify it)
              urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
              handler: `StaleWhileRevalidate`,
            },
          ],
          // skipWaiting: true,
          // clientsClaim: true,
        },
      },
    },
  ],
};
