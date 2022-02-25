import React from "react";

// Import and apply global CSS stylesheet
import "./styles/styles.css";
// Import and apply App specific css
import css from "./styles/App.module.css"

// The component that adds our Meta tags to the page
import Seo from './components/seo.jsx';

// Home function that is reflected across the site
export default function Home() {
  return (
    <>
      <Seo />
      <div className={css.container}>
        <main role="main" className="wrapper">
          Content   
        </main>
        
      </div>
    </>
  );
}
