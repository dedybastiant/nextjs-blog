import AllPosts from "../../component/posts/all-posts";

function AllPostsPage() {
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
  ];

  return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostsPage;
