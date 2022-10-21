import PostItem from "./PostItem";

const Posts = ({ posts, makeOnePost }) => {
  return posts.map((post) => (
    <>
      <PostItem post={post} makeOnePost={makeOnePost} />
    </>
  ));
};

export default Posts;
