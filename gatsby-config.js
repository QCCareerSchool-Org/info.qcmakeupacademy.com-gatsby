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
    `gatsby-plugin-tslint`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
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
        // formatAgents: {
        //   eot: `Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E)`,
        //   ttf: `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/534.59.8 (KHTML, like Gecko) Version/5.1.9 Safari/534.59.8`,
        //   woff: `Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko`,
        //   woff2: `Mozilla/5.0 (Windows NT 10.0; Win64; x64; ServiceUI 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393`,
        // },
        // formats: ['woff2', 'woff'],
        // useMinify: true,
        // usePreload: true,
        // usePreconnect: false,
      },
    },
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Playfair Display`,
    //         variants: [ `400`, `500` ],
    //         // subsets: [`latin`],
    //       },
    //       {
    //         family: `Open Sans`,
    //         variants: [ `300`, `500`, `700` ],
    //       },
    //     ],
    //   },
    // },
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
    // {
    //   resolve: `gatsby-plugin-offline`,
    //   options: {
    //     // Don't cache cypress files in /__ or /__cypress folders
    //     workboxConfig: {
    //       runtimeCaching: [
    //         {
    //           urlPattern: /^https?:.*\/__(cypress)?\//, // this will also match https://example.com/some/other/dir/__
    //           handler: `NetworkOnly`,
    //         },
    //       ],
    //     },
    //   },
    // },
    `gatsby-plugin-remove-serviceworker`,
  ],
};
