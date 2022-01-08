const siteAddress = new URL("https://claudioscalzo.com");
const siteTitle = "ClaudioScalzo.com";

module.exports = {
  siteMetadata: {
    author: "@claudioscalzo",
    title: siteTitle,
    siteDescription: siteTitle,
    siteHeadline: siteTitle,
    siteImage: "/profile.png",
    siteLanguage: "en",
    siteTitle: siteTitle,
    siteTitleAlt: siteTitle,
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
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
  ],
};
