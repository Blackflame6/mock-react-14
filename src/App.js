import { useState, useEffect } from "react";
import Posts from "./components/Posts";
import Loading from "./components/Loading";
import Title from "./components/Title";
import OnePost from "./components/OnePost";
import PostItem from "./components/PostItem";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [onePost, setOnePost] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts");
      const json = await data.json();

      setPosts(json);
    };

    getPosts();
  }, []);

  const makeOnePost = (newstate) => {
    setOnePost(newstate);
  };

  const backToNull = () => {
    setOnePost(null);
  };

  {
    /* {onePost === null ? <Posts  posts={posts} makeOnePost={makeOnePost} id="list" /> : <OnePost onePost={onePost} backToNull={backToNull} />}  */
  }

  if (onePost === null) {
    return (
      <>
        <Title />
        <Posts posts={posts} makeOnePost={makeOnePost} id="list" />
      </>
    );
  } else {
    return (
      <>
        <OnePost onePost={onePost} backToNull={backToNull} />
      </>
    );
  }
};

export default App;
