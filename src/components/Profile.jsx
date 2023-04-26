import React from 'react';
import css from "../styles/Profile.module.css";
import { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import {
  Link,
  
} from "react-router-dom";
import {Navigate} from 'react-router-dom';
import initialStore from "../utils/initialStore.js"
import axios from 'axios';

function Profile(){
  const {userId} = useParams();
  const [filtered, setFiltered] = useState("")
  const placeholder = "Jill"
  const grade = "8.5"  
  console.log("the man", userId)
  
  
  // function sort(data) {
  //   const test = data.filter(d=> (d.userId == placeholder));
  //   setFiltered(test);
  // }
  const filtered2 = initialStore.filter(d=> (d.userId == userId));
  
  axios.get("")
    .then(d => {
    
    
    
  })
  
  
    return(
    <div className={css.left}>
        <div className={css.name}>{userId}</div>
        <div ><h2 className={css.grade}>{grade}</h2></div>
      <p></p>
      {filtered2.map((post) => (
          <div className={css.posts}> {post.desc} </div>
        ))}
    </div>
  );
}


export default Profile;
