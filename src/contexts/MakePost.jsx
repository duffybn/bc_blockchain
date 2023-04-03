import React, { createContext, useEffect, useState } from "react";
import initialStore from "../utils/initialStore.js";

export default function MakePost(professor, input, review){
  
    const [posts, setPosts] = useState("")
    
  //   const [users, setUsers] = useState(JSON.parse(window.localStorage.getItem("users")) || initialStore.users);
  //   useEffect(() => {
  //   window.localStorage.setItem("users", JSON.stringify(users));
  // }, [users]);
    
    const post ={
      userId: professor,
      desc: input,
      grade: review
    };

    //this is where I would sent post out
    setPosts(posts.concat(post));
}

