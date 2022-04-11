import React, { createContext, useEffect, useState } from "react";
import initialStore from "../utils/initialStore.js";

export const StoreContext = createContext();

export default function StoreContextProvider(props) {
  const [currentUserId, setCurrentUserId] = useState(
    initialStore.currentUserId
  );
  const [users, setUsers] = useState(initialStore.users);
  const [posts, setPosts] = useState(initialStore.posts);
  const [likes, setLikes] = useState(initialStore.likes);
  const [comments, setComments] = useState(initialStore.comments);
  const [followers, setFollowers] = useState(initialStore.followers);

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
