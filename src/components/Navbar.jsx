
import React from "react";
import css from "styles/Navbar.module.css";

function Navbar() {
  return <nav className={css.navBar}>
    <div className={css.navItem}>
      <button>
        <img src="https://cdn.glitch.global/d7674480-73e0-49e0-acd4-3805874f347b/home.svg?v=1645800816915"/>
      </button>
    </div>
    <div className={css.navItem}>
    </div>
    <div className={css.navItem}>
    </div>
    
  </nav>;
}


export default Navbar;