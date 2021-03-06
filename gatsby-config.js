module.exports = {
  pathPrefix: "/vaccine-scheduler",
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Vaccine Scheduler",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    // "gatsby-plugin-sharp",
    // "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-mdx`,
      // растягивание текста по ширине тоже не очень смотрится
      // options: {
      //   defaultLayouts: {
      //     default: require.resolve('./src/components/MDXLayout'),
      //   },
      // },
    },
  ],
};
