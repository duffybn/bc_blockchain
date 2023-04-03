import React from 'react';
import { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import {
  Link,
  
} from "react-router-dom";
import {Navigate} from 'react-router-dom';
import initialStore from "../utils/initialStore.js"

function Profile(){
  const {userId} = useParams();
  const [filtered, setFiltered] = useState("")
  const placeholder = "Jill"
  
  console.log("the man", userId)
  
  
  // function sort(data) {
  //   const test = data.filter(d=> (d.userId == placeholder));
  //   setFiltered(test);
  // }
  const filtered2 = initialStore.filter(d=> (d.userId == userId));
  
    return(
    <div>
        {userId}'s Profile
      <p></p>
      {filtered2.map((post) => (
          <div> {post.desc} {post.grade}</div>
        ))}
    </div>
  );
}


export default Profile;
