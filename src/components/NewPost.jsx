import React, {useState, useContext} from "react";
import css from '../styles/newPost.module.css';

import posts from "../utils/posts.js"
// import {StoreContext} from '../contexts/StoreContext.jsx';
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
  // let {addPost} = useContext(StoreContext);
  const [desc, setDesc] = useState('');
  // const [dragging, setDragging] = useState(false);
  // const [error, setError] = useState('');
  // const [photo, setPhoto] = useState(null);
  const [grade, setGrade] = useState('')
  const navigate = useNavigate();
  const [drop, setDrop] = useState("");
  const [post, setPost] = useState("")
  const [test, setTest] = useState("")
  const {param} = useParams();
  
  function handleClick(){
    navigate(-1)
  }
  
  function handleMenu(event){
    console.log(this.value);
    setDrop(this.value);
  };
  
  function handleDescChange(e){
    setDesc(e.target.value);
  }

  function handleGradeChange(e){
    setGrade(e.target.value)
  }

  function handlePost(e){
    const post ={
      userId: drop,
      desc: desc,
      grade: grade
    };
    setTest(post)
    console.log(drop)
  }
  
  return (
    <div>
      
      <Dropdown
        trigger={<button>Select...</button>}
        menu={posts.map((post) => ( <button onClick={handleMenu} value={post.professor}>{post.professor} at {post.college} </button> ))}

        />
      You have selected {drop}
      <p></p>
      <textarea placeholder="Enter review..." value={desc} onChange={handleDescChange}></textarea>
      <p></p>
      {desc}
      <p></p>
      <input type="number" placeholder="" value={grade} onChange={handleGradeChange} min = "0.0" max="10.0"/>
      <p></p>
      {grade}
      <p></p>
      <button onClick={handlePost}>
      Submit
      </button>
      
   </div>
    
  );
};

const Dropdown = ({ trigger, menu }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      New Post Page
      <p></p>
      <div className="dropdown">
        {React.cloneElement(trigger, {
          onClick: handleOpen,
        })}
        {open ? (
          <ul className="menu">
            {menu.map((menuItem, index) => (
              <div key={index} className="menu-item">
                {React.cloneElement(menuItem, {
                  onClick: () => {
                    menuItem.props.onClick();
                    setOpen(false);
                  },
                })}
              </div>
            ))}
          </ul>
        ) : null}
      </div>
      
    </div>
  );
};

export default NewPost;
