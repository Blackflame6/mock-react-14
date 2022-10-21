import OnePost from "./OnePost";
const PostItem = ({ post, makeOnePost }) => {
  const handleClick = () => {
    makeOnePost(post);
  };

  return (
    <div className="listItem" onClick={handleClick}>
      <h1>{post.title}</h1>
      <p>{post.id}</p>
    </div>
  );
};

export default PostItem;
