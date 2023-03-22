import React, {useState, useContext} from "react";
import css from '../styles/newPost.module.css';
import Dropdown from "./Dropdown.jsx";
import {StoreContext} from '../contexts/StoreContext.jsx';
import {
  useNavigate,
  useParams, 
  Navigate
} from "react-router-dom";


function NewPost(props) {
  let {addPost} = useContext(StoreContext);
  const [desc, setDesc] = useState('');
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState('');
  const [photo, setPhoto] = useState(null);
  const navigate = useNavigate();
  const {param} = useParams();
  function handleClick(){
    navigate(-1)
  }
  return (
    <div>
      New Post
      <Dropdown placeHolder="Select..." />
    </div>
  );
}

export default NewPost;
