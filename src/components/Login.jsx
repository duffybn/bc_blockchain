import React from 'react';
import { useState, useEffect, useContext } from "react";
import {
  Link,
  useNavigate
} from "react-router-dom";

function Login(){
    function userLogin(e){
      
    }
    return(
    <div>
  
      <Link to="/newpost" onClick={userLogin}>
        Login button
      </Link>
    </div>
  );
}


export default Login;
