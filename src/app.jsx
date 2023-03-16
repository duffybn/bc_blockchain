import React, {useState} from "react";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import NewPost from "./components/NewPost.jsx";
import StoreContextProvider from "./contexts/StoreContext";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// Import and apply global CSS stylesheet
import "./styles/styles.css";
// Import and apply App specific css
import css from "./styles/App.module.css";

// The component that adds our Meta tags to the page
import Seo from "./components/seo.jsx";

// App function that is reflected across the site
export default function App(){


  
  return (
    <Router>
      <Seo />
      <StoreContextProvider>
      
      <div className={css.container}>
        <main role="main" className="wrapper">
          <Routes>
            <Route path="/" element={
                <Home                 
                />
              }/>
            <Route path="/add" element={
                <NewPost />
              }/>
            
            <Route path=":param" element={
                <NewPost />
              }/>
          </Routes>
        </main>
        <Navbar  />
      </div>
      </StoreContextProvider>
    </Router>
  );

}
