import { Fragment } from "react";
import Hero from "../component/home-page/hero";
import FeaturedPosts from "../component/home-page/featured-posts";

function HomePage() {
  const DUMMY_POSTS = [
    {
      slug: "getting-started-nextjs",
      title: "Getting Started Nextjs",
      image: "getting-started-nextjs.png",
      excerpt:
        "Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.",
      date: "2022-02-10",
    },
    {
      slug: "getting-started-nextjs1",
      title: "Getting Started Nextjs",
      image: "getting-started-nextjs.png",
      excerpt:
        "Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.",
      date: "2022-02-10",
    },
    {
      slug: "getting-started-nextjs2",
      title: "Getting Started Nextjs",
      image: "getting-started-nextjs.png",
      excerpt:
        "Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.",
      date: "2022-02-10",
    },
    {
      slug: "getting-started-nextjs3",
      title: "Getting Started Nextjs",
      image: "getting-started-nextjs.png",
      excerpt:
        "Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.",
      date: "2022-02-10",
    },
    {
      slug: "getting-started-nextjs4",
      title: "Getting Started Nextjs",
      image: "getting-started-nextjs.png",
      excerpt:
        "Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.",
      date: "2022-02-10",
    },
  ];

  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

export default HomePage;
