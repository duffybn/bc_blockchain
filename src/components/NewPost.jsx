import React from "react";
import {
  useNavigate
} from "react-router-dom";
function NewPost() {
  const navigate = useNavigate();
  function handleClick(){
    navigate(-1)
  }
  return (
    
    <div>
      <button style={{ border: "solid 1px gray", cursor: "grab" }} onClick={handleClick}>NewPost</button>
    </div>
  );
}

export default NewPost;
