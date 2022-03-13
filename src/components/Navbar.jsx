
import React from "react";
import css from "../styles/Navbar.module.css";

function Navbar(props) {
  
  function handleClick(page){
    console.log("page clicked!", page);
    props.onNavChange(page)
  }
  return <nav className={css.navbar}>
    <div className={css.navitem} onClick={e=>handleClick("home")}>
        <img src="https://cdn.glitch.global/d7674480-73e0-49e0-acd4-3805874f347b/home.svg?v=1645800816915"/>
    </div>
    <div className={css.navitem} onClick={e=>handleClick("add")}>
      <img src="https://cdn.glitch.global/d7674480-73e0-49e0-acd4-3805874f347b/newpost.svg?v=1645800817387"/>
    </div>    
  </nav>;
}


export default Navbar;