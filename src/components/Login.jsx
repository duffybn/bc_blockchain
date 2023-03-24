import React from 'react';
import {
  Link,
  useNavigate
} from "react-router-dom";

function Login(){
    return(
    <div>
  
      <Link to="/newpost">
        Login button
      </Link>
    </div>
  );
}


export default Login;
