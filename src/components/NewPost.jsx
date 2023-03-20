import React from "react";
import {
  useNavigate,
  useParams
} from "react-router-dom";
function NewPost() {
  const navigate = useNavigate();
  const {param} = useParams();
  function handleClick(){
    navigate(-1)
  }
  return (
    
    <div>
      <button style={{ border: "solid 1px gray", cursor: "grab" }} onClick={handleClick}>Back</button>
      <div>{param}</div>
    </div>
  );
}

export default NewPost;
