import React from "react";
import css from "../styles/Header.module.css";
import {
  Link,
  useNavigate
} from "react-router-dom";

import {Navigate} from 'react-router-dom';


function Header() {
  const navigate = useNavigate();
  function handleCancel(e){
     navigate(-1);
  }
  return (
    <nav className={css.header}>
       <div className={css.headitem}>
          <button onClick={handleCancel} className={css.headitem}>
              Back
          </button>
      </div>
      <div className={css.headitem}>
           <Link to="/" className={css.headitem}>
            Search
          </Link>
      </div>
      <div>
        <button className={css.title}>
          EVA          
        </button>
      </div>
      <div className={css.headitem}>
           <Link to="/dummy" className={css.headitem}>
             New Post
          </Link>
      </div>
      <div className={css.headitem}>
           <Link to="/login" className={css.headitem}>
              Login
          </Link>
      </div>
    </nav>
  );
}

export default Header;