import React, {useState, useContext} from "react";
import css from '../styles/newPost.module.css';

import posts from "../utils/posts.js"
import colleges from "../utils/colleges.js"
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


function NewPost(props, {keyword}) {
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
  const [bool, setBool] = useState("")
  const [professor, setProfessor] = useState("")
  const [filtered, setFiltered] = useState("");
  const {param} = useParams();
  const value = ""
  
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
      userId: professor,
      desc: desc,
      grade: grade,
      college: drop
      
    };
    setTest(post)
    setBool("True")
    console.log(post)
  }
  
  function selectProfessor(event){
    console.log("professor", event.target.value)
    setProfessor(event.target.value)
  }
  
  function handleChange(){
    

  
    (event.target.value != "") ? (
    setFiltered(posts.filter(d=>d.professor.toLowerCase().includes(event.target.value.toLowerCase()))))
 :
    setFiltered("")
  }
  
  function dropClick(){
    setDrop("")
  }
 
  function profClick(){
    setProfessor("")
    setFiltered("")
  }
  
  const BarStyle = {width:"11.4rem",background:"#F0F0F0", border:"none", padding:"0.5rem"};
  
  return (
    <div>
      {(drop == "")?
      (<div className = {css.box}><Dropdown
        trigger={<button>Select College: {drop}</button>}
        menu={colleges.map((post) => ( <button onClick={handleMenu} value={post.school}>{post.school} </button> ))}

         /></div>) :
      (<div>
      <div>You have selected {drop}</div>
      <button onClick={dropClick}> Undo </button>
      </div>)
      }
      <p></p>
      {console.log("keyword",drop)}
  
      {(professor == "")?console.log("yes"):console.log("no")}
      
      {
      (professor == "")?
      (<div><input 
       className={css.bar}
       key="search-bar"
       value= {keyword}
       placeholder={"Search Professor... "}
       onChange = {handleChange}
      /> 
      
      <div>
        {(filtered.length == 0) ? console.log("hi") 
        : filtered.map((post) => (
        <div>
          <button onClick={selectProfessor} value={post.professor}>
            {post.professor}
          </button>
        </div>
        ))}
      </div>
      </div>) :
      <div>
      <div>You have selected {professor} </div>
      <button onClick={profClick}> Undo </button>
      </div>
      }
        
      
      {console.log(professor)}
      <p></p>
      <textarea placeholder="Enter review..." value={desc} onChange={handleDescChange}></textarea>
      <p></p>
      <input type="number" placeholder="0-10" value={grade} onChange={handleGradeChange} min = "0.0" max="10.0"/>
      <p></p>
      <button onClick={handlePost}>
      Submit
      </button>
      <p></p>
      {
      (((test.college != "")&&(test.grade != "")) && ((test.userId != "") && (test.desc != "")))?
      
      ((bool == "True") ?(<div>Review for {test.userId} at {test.college}
      <p></p>
      Review: {test.desc} <p></p>
      Grade: {test.grade}   
      {console.log(test)}
      </div> 
      )
       
      :
       
      console.log("test")) :(<div> ERROR: Not all fields filled</div>)
      }
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
