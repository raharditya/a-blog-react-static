import path from "path";
import { request } from "graphql-request";
// process.env.NODE_ENV = "production";
// import Prismic from "prismic-javascript";

const endpoint =
  "https://api-apeast.graphcms.com/v1/ck03o8v010aa401d79rmoe30y/master";
const query = `
{
  posts{
    id
    link
    title
    date
    content
  }

  descriptions{
    about
  }
}
`;

export default {
  getRoutes: async () => {
    const { posts, descriptions } = await request(endpoint, query);

    return [
      {
        path: "/",
        getData: () => ({
          posts
        }),
        children: posts.map(post => ({
          path: `/post/${post.link}`,
          template: "src/pages/post",
          getData: () => ({
            post
          })
        }))
      },

      {
        path: "/about",
        template: "src/pages/about",
        getData: () => ({
          descriptions
        })
      }
    ];
  },
  plugins: [
    [
      require.resolve("react-static-plugin-source-filesystem"),
      {
        location: path.resolve("./src/pages")
      }
    ],
    require.resolve("react-static-plugin-reach-router"),
    require.resolve("react-static-plugin-sitemap")
  ]
};
