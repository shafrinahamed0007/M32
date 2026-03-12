import React, { use } from "react";
import Post from "./Post";

export default function Posts({ allPosts }) {
  const posts = use(allPosts);
  //   console.log(posts.length);
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </div>
  );
}
