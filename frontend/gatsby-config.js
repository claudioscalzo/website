const siteAddress = new URL("https://claudioscalzo.com");

module.exports = {
  siteMetadata: {
    siteUrl: siteAddress.href,
    title: "ClaudioScalzo.com",
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
  ],
};
