import React from 'react';
import {
  Link,
  useParams
} from "react-router-dom";

function Dummy(){
    return(
    <div>
      You need to login before you can post
      <p></p>
      <Link to="/newPost">
        Let's say you logged in
      </Link>
    </div>
  );
}


export default Dummy;
