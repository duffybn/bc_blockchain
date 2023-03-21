import React from "react";
import css from "../styles/Header.module.css";
import {
  Link,
  useNavigate
} from "react-router-dom";

import {Navigate} from 'react-router-dom';


function Header() {
  const navigate = useNavigate();
  return (
    <nav className={css.header}>
       <div className={css.headitem}>
          <button onClicl =>
              <img src="https://cdn.glitch.global/d7674480-73e0-49e0-acd4-3805874f347b/back.svg?v=1645800817845" alt="Back"/>
          </button>
      </div>
      <div className={css.headitem}>
           <Link to="/">
              <img src="https://cdn.glitch.global/d7674480-73e0-49e0-acd4-3805874f347b/explore.svg?v=1645800816800" alt="NewPost"/>
          </Link>
      </div>
      <div>
        <button>
          EVA          
        </button>
      </div>
      <div className={css.headitem}>
           <Link to="/newpost">
              <img src="https://cdn.glitch.global/ce7a503b-7720-4b27-9a59-4a32173ba09d/newpost.svg?v=1647444622487" alt="NewPost"/>
          </Link>
      </div>
      <div className={css.headitem}>
           <Link to="/login">
              <img src="https://cdn.glitch.global/d7674480-73e0-49e0-acd4-3805874f347b/profile.svg?v=1645800817556" alt="NewPost"/>
          </Link>
      </div>
    </nav>
  );
}

export default Header;