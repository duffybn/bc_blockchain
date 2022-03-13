import React from "react";
import Post from "./Post.jsx";
function Home() {
  const post = {
    user: {
      id: "judy",
    },
    post: {
      id: "post-1",
      userId: "judy",
      photo:
        "https://cdn.glitch.global/d7674480-73e0-49e0-acd4-3805874f347b/post1.png?v=1645800818011",
    },
    likes: {
      self: true,
      count: 1,
    },
  };
  return (
    <div>
      <Post user={post.user} likes={post.likes} post={post.post} />
    </div>
  );
}

export default Home;
