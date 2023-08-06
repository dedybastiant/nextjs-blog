import classes from "./posts-grid.module.css";
import PostItem from "./post-item";

function PostsGrid(props) {
  const posts = props.posts;

  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem post={post} />
      ))}
    </ul>
  );
}

export default PostsGrid;
