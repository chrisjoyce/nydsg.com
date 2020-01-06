module.exports = {
  siteMetadata: {
    title: `New York Diverticulitis Support Group`,
    description: `Gatsby starter styled with Tailwind`,
    news: {
      meeting: {
        date: "in January",
        time: ""
      },
      title: "",
      body: {
        p1:
          "Our next board meeting is scheduled for Saturday January 11 from 12 to 1:30 pm at the Sachem Library.",
        p2: "See directions below."
      }
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
