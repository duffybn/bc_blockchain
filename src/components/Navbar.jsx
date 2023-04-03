import React from "react";
import css from "../styles/Navbar.module.css";
import {
  Link
} from "react-router-dom";

function Navbar(props) {
 
  return <nav className={css.navbar}>
    <div className={css.navitem}>
      <Link to="/">
        <img src="https://cdn.glitch.global/d7674480-73e0-49e0-acd4-3805874f347b/home.svg?v=1645800816915"/>
      </Link>
    </div>
    <div className={css.navitem} >
      <Link to="/add">
        <img src="https://cdn.glitch.global/d7674480-73e0-49e0-acd4-3805874f347b/newpost.svg?v=1645800817387"/>
    </Link>
    </div>    
  </nav>;
}


export default Navbar;