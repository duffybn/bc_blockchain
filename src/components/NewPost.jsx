import React, {useState, useContext} from "react";
import css from '../styles/newPost.module.css';
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
      <button style={{ border: "solid 1px gray", cursor: "grab" }} onClick={handleClick}>Back</button>
      <div>{param}</div>
    </div>
  );
  
   
  function handleFileDragEnter(e){
    setDragging(true);
  }
  function handleFileDragLeave(e){
    setDragging(false);
  }
  function handleFileDrop(e){
    if (e.dataTransfer.types.includes('Files')===false){
      console.log("FAIL");
      return;
    }
    if (e.dataTransfer.files.length>=1){
      console.log("Success");
      let file = e.dataTransfer.files[0];
      if (file.size>1000000){
        console.log("TOO BIG");
        return;
      }
      if (file.type.match(/image.*/)){
        let reader = new FileReader();
        reader.onloadend = (e) => {
          setPhoto(e.target.result)
        };
        reader.readAsDataURL(file);
      }
    }
    setDragging(false);
  }
  
  function handleDescChange(e){
    {console.log("DESC CHANGE")};
    {console.log(desc)};
    setDesc(e.target.value);
  }
  function handleSubmit(e){
    if (photo){
      setError(false);
      addPost(photo, desc);
      navigate("/");
    }else{
      setError(true);
    }
    event.preventDefault();
  }
  
  function handleCancel(e){
    {console.log("handleCancel")};
    //cancelPost();
    navigate(-1);
  }
  
    return(
    !props.currentUserId? <Navigate to="/login"/>:<div className={css.newPost}>
      
      <div className={css.photo}>
        {!photo? <div className={css.message}>Drop your image</div>:
                <img src={photo} alt="New Post"/>}
          <FileLoader
            onDragEnter={handleFileDragEnter}
            onDragLeave={handleFileDragLeave}
            onDrop={handleFileDrop}
          >
            <div className={[css.dropArea, dragging?css.dragging:null].join('')}
            ></div>
        </FileLoader>
      
      </div>
      
      <div className={css.desc} >
        <textarea value={desc} onChange={handleDescChange} placeholder="Write your caption here!"/>
        
      </div>
      
      <div className={css.error}>
        {error? <div>You need to add a photo!</div> : <div></div>}
      </div>
      
      <div className={css.actions}>
        <button onClick={handleCancel}>Cancel</button>
        <button onClick={handleSubmit}>Share</button>
      </div>
      
    </div>
  );
  
}

export default NewPost;
