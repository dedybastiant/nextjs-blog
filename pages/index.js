import { Fragment } from "react";
import Hero from "../component/home-page/hero";
import FeaturedPosts from "../component/home-page/featured-posts";
import { getFeaturedPost } from "../lib/post-util";

function HomePage(props) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const featuredPost = await getFeaturedPost();

  return {
    props: {
      posts: featuredPost,
    },
  };
}

export default HomePage;
