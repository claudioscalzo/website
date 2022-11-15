const siteAddress = new URL("https://claudioscalzo.com");
const siteTitle = "ClaudioScalzo.com";

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    author: "@claudioscalzo",
    title: siteTitle,
    siteDescription: "Claudio Scalzo - Personal Website",
    siteHeadline: siteTitle,
    siteLanguage: "en",
    siteTitle: siteTitle,
    siteTitleAlt: "Claudio Scalzo",
    siteUrl: siteAddress.href,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-s3",
      options: {
        bucketName: siteAddress.hostname,
        region: "eu-south-1",
        protocol: siteAddress.protocol.slice(0, -1),
        hostname: siteAddress.hostname,
        acl: null,
        enableS3StaticWebsiteHosting: false,
      },
    },
    {
      resolve: "@lekoarts/gatsby-theme-cara",
      options: {
        basePath: "/",
        mdx: true,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/src/images/icons`,
        },
      },
    },
    {
      resolve: "gatsby-plugin-emoji-favicon",
      options: {
        emoji: `🍔`,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: siteAddress.href,
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: siteAddress.href,
        sitemap: new URL(`/sitemap/sitemap-index.xml`, siteAddress.href).href,
        policy: [{ userAgent: `*`, allow: `/` }],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
  ],
  trailingSlash: `never`,
};
