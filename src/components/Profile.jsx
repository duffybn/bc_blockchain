import React from 'react';
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
  const [server, setServer] = useState("")
  console.log("the man", userId)
  
  
  // function sort(data) {
  //   const test = data.filter(d=> (d.userId == placeholder));
  //   setFiltered(test);
  // }
  const filtered2 = initialStore.filter(d=> (d.userId == userId));
  
 
//   const api = "http://136.167.98.169:3001/api/getReviews/" 
//   console.log("api", api)

  
  
  axios.get("http://136.167.98.169:3001/api/getReviews/1")
    .then(d => {
    
    console.log("server", d)
    
  })
  .catch(d => {
    
    console.log("error", d)
  })
  .finally(d => {
    console.log("finally")
  })
  
// const axiosInstance = axios.create({
//   baseURL: 'http://136.167.98.169:3001/api', // Replace with your server's URL
// });
  
// axiosInstance.get('/getReviews/2')
//   .then(response => {
//     // Handle the response data
//     console.log(response.data);
//   })
//   .catch(error => {
//     // Handle the error
//     console.error(error);
//   });
  
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
