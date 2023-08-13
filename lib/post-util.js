import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postDirectory = path.join(process.cwd(), "posts");

export function getPostFiles() {
  return fs.readdirSync(postDirectory);
}

export function getPostData(fileIdentifier) {
  const fileSlug = fileIdentifier.replace(/\.md$/, "");
  const filePath = path.join(postDirectory, `${fileSlug}.md`);
  const fileContent = fs.readFileSync(filePath);
  const { data, content } = matter(fileContent);

  const postData = {
    slug: fileSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = getPostFiles();

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPost() {
  const allPosts = getAllPosts();
  const featuredPost = allPosts.filter((post) => post.isFeatured);

  return featuredPost;
}
