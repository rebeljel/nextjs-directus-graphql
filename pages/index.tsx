import type { NextPage } from "next";
import Head from "next/head";
import { useQuery } from "react-query";
import { getHomepagePosts } from "../queries/queries";
import PostCard from "../components/PostCard";

const Home: NextPage = () => {
  const { data: posts, isSuccess } = useQuery(
    "posts",
    async () => await getHomepagePosts()
  );

  return (
    <div className="flex flex-col items-center py-2 max-w-2xl mx-auto">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isSuccess &&
        posts.map(
          (post: { title: string; featured_image: any; body: string }) => (
            <div>
              <PostCard
                body={post.body}
                image={post.featured_image.id}
                title={post.title}
              ></PostCard>
            </div>
          )
        )}
    </div>
  );
};

export default Home;
