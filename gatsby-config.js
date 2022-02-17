module.exports = {
  siteMetadata: {
      title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-mdx", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": `blog`,
        "path": `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ]
};