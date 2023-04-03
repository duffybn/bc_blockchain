import React from 'react';
import { useState, useEffect, useContext } from "react";
import {
  Link,
  useNavigate
} from "react-router-dom";
import jwt_decode from "jwt-decode";

function Login(){
    function handleCallbackResponse(response) {
      console.log("Encoded JWT ID token: " + response.credential);
      var userObject = jwt_decode(response.credential);
    }
  
    useEffect(() => {
      /* global google */
      google.accounts.id.initialize({
        client_id: "905643232443-hpfvioc4oh13s07rlufsgb0ib31032vl.apps.googleusercontent.com",
        callback: handleCallbackResponse
      });
      
      google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        { theme: "outline", size: "large"}
      );
    },[]);
      
    
    return(
    <div className="Login">
    <div id="signInDiv"></div>
     
    </div>
  );
}


export default Login;
