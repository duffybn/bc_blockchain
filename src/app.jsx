import React from "react";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
// Import and apply global CSS stylesheet
import "./styles/styles.css";
// Import and apply App specific css
import css from "./styles/App.module.css"

// The component that adds our Meta tags to the page
import Seo from './components/seo.jsx';

// App function that is reflected across the site
export default function App() {
  
  
  return (
    <>
      <Seo />
      <div className={css.container}>
        <main role="main" className="wrapper">
          <Home/>   
        </main>
        <Navbar/>
        
      </div>
    </>
  );
}
