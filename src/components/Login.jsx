import React from 'react';
import { useState, useEffect, useContext } from "react";
import {
  Link,
  useNavigate
} from "react-router-dom";
import jwt_decode from "jwt-decode";

function Login(){
    const [ user, setUser ] = useState({});
  
    function handleCallbackResponse(response) {
      console.log("Encoded JWT ID token: " + response.credential);
      var userObject = jwt_decode(response.credential);
      console.log(userObject);
      setUser(userObject);
      document.getElementById("signInDiv").hidden = true;
    }
  
    function handleSignOut(event) {
      setUser({});
      document.getElementById("signInDiv").hidden = false;
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
    // if no user, show sign in button
    // if there is an user, show log out
    
    return(
    <div className="Login">
    <div id="signInDiv"></div>
        
    { Object.keys(user).length != 0 &&
    <button onClick={ (e) => handleSignOut(e)}>Sign Out</button>          
        }

    { user &&
      <div>
        <img src={user.picture}></img>
        <h3>{user.name}</h3>
      </div>   
        } 
    </div>
  );
}


export default Login;
