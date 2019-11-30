module.exports = {
  siteMetadata: {
    title: `New York Diverticulitis Support Group`,
    description: `Gatsby starter styled with Tailwind`,
    news: {
      meeting: {
        date: "December 14th",
        time: "12 - 1:30pm"
      },
      title: "",
      body:
        "We look forward to seeing you at our next meeting on December 14 at the Sachem Public Library. Check back here for more information."
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `src/images/tailwind-icon.png`
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`]
      }
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-material-ui`
  ]
};
