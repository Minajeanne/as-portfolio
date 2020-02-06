module.exports = {
  siteMetadata: {
    title: 'Alicia Santiago',
    author: 'Alicia Santiago',
    description: 'A personal portfolio showcasing development work, blog, and social media contacts',
    siteUrl: 'https://www.aliciasantiago.com',
    image: '/images/icon-white.png',
    twitterUsername: "@alicialsantiago",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Alicia Santiago',
        short_name: 'Alicia Santiago',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/icon-solid.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
  ],
}
