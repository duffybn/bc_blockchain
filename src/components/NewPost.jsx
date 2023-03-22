import React, {useState, useContext} from "react";
import css from '../styles/newPost.module.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import posts from "../utils/posts.js"
import {StoreContext} from '../contexts/StoreContext.jsx';
import {
  useNavigate,
  useParams, 
  Navigate
} from "react-router-dom";

//    <Dropdown
//         isSearchable
        
//         placeHolder="Select..."
//         options={posts}
//         onChange={(value) => console.log(value)}
//       />


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
      <DropdownButton id="dropdown-basic-button" title="Dropdown button">
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
    </div>
  );
}

export default NewPost;
