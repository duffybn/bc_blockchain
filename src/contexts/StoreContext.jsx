import React, { createContext, useEffect, useState } from "react";
import initialStore from "../utils/initialStore.js";

export const StoreContext = createContext();

export default function StoreContextProvider(props) {
  // initialStore
  const [currentUserId, setCurrentUserId] = useState(
    JSON.parse(window.localStorage.getItem("currentUserId")) ||    
    initialStore.currentUserId
  );
  useEffect(() => {
    window.localStorage.setItem("currentUserId", JSON.stringify(currentUserId));
  }, [currentUserId]);
  
  const [users, setUsers] = useState(JSON.parse(window.localStorage.getItem("users")) || initialStore.users);
    useEffect(() => {
    window.localStorage.setItem("users", JSON.stringify(users));
  }, [users]);
  
  const [posts, setPosts] = useState(JSON.parse(window.localStorage.getItem("posts")) ||initialStore.posts);
    useEffect(() => {
    window.localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);
  
  const [likes, setLikes] = useState(JSON.parse(window.localStorage.getItem("likes")) ||initialStore.likes);
  useEffect(() => {
    window.localStorage.setItem("likes", JSON.stringify(likes));
  }, [likes]);
  
  const [comments, setComments] = useState(JSON.parse(window.localStorage.getItem("comments")) ||initialStore.comments);
  useEffect(() => {
    window.localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);
  
  const [followers, setFollowers] = useState(JSON.parse(window.localStorage.getItem("followers")) ||initialStore.followers);
  useEffect(() => {
    window.localStorage.setItem("followers", JSON.stringify(followers));
  }, [followers]);

  function addLike(postId) {
    const like = {
      userId: currentUserId,
      postId, // make sure you understand this shorthand syntax
      datetime: new Date().toISOString(),
    };

    setLikes(likes.concat(like));
  }
  function removeLike(postId) {
    // console.log('removeLike',postId, store.likes.filter(like=>!(like.userId===store.currentUserId && like.postId===postId)));
    setLikes(
      likes.filter(
        (like) => !(like.userId === currentUserId && like.postId === postId)
      )
    );
  }

  function addComment(postId, text) {
    const comment = {
      userId: currentUserId,
      postId,
      text,
      datetime: new Date().toISOString(),
    };
    setComments(comments.concat(comment));
  }

  return (
    <StoreContext.Provider
      value={{
        currentUserId,
        users,
        posts,
        likes,
        comments,
        followers,
        addLike,
        removeLike,
        addComment,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
}
