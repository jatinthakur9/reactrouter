import React from "react";
import { useEffect, useState } from "react";

import Post from "../componenets/Post";

const endpoint = "https://jsonplaceholder.typicode.com/posts";
function Posts() {
  const [Posts, setPost] = useState(null);
  async function fetchPost() {
    const respone = await fetch(endpoint);

    const data = await respone.json();

    setPost(data);
  }
  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <>
      {Posts && Posts.map((post) => <Post id={post.id} title={post.title} />)}
    </>
  );
}

export default Posts;
