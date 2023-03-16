import React from "react";
import css from "../styles/Header.module.css";
import {
  Link
} from "react-router-dom";


function Header() {
  return (
    <nav className={css.header}>
      <div className={css.headitem}>
          <Link to="/">
        <img src="https://cdn.glitch.global/d7674480-73e0-49e0-acd4-3805874f347b/home.svg?v=1645800816915"/>
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
    </nav>
  );
}

export default Header;