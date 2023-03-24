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
  
  
  function sort(data) {
    const test = data.filter(d=> (d.userId == placeholder));
    setFiltered(test);
  }
    return(
    <div>
      Profile
      {initialStore.map((post) => (
          <div>{post.id}</div>
        ))}
    </div>
  );
}


export default Profile;
