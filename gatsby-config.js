module.exports = {
  siteMetadata:{
    title: `DSC Global LLC`,
    description: `DSC is focusing on product development and plastic injection model building`,
    author: `@Qunzhu Wang`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve:`gatsby-source-filesystem`,
      options:{
        name:`images`,
        path:`${__dirname}/src/images`
      }
    }
  ],
}
