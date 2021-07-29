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
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Playfair Display`,
              variants: [ `400`, `500` ],
            },
            {
              family: `Open Sans`,
              variants: [ `300`, `500`, `700` ],
            },
          ],
        },
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
    `gatsby-plugin-remove-serviceworker`,
  ],
};
