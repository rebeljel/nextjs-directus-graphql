import fetchData from "../helpers/fetchData";

export const getHomepagePosts = async () => {
  let data = await fetchData(
    `
        query HomepagePosts {
            posts {
                title
                slug
                featured_image{
                    id
                }
                body
            }
        }
        `,
    {
      variables: {},
    }
  );

  return data.data.posts;
};
