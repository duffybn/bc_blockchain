import React from "react";
import css from "../styles/Post.module.css";

function Post(props) {
  const user = props.user;
  const post = props.post;
  const likes = props.likes;
  
  return <div>
    <div className={css.user}>@{user.id}</div>
    <img className={css.photo} width="100%" src={post.photo}></img>
    <div className={css.like} >
      <img src="https://cdn.glitch.global/d7674480-73e0-49e0-acd4-3805874f347b/like.svg?v=1645800817056"></img>
    </div>
    
  </div>;
}


export default Post;
