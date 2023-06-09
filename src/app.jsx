import React, {useState, useEffect} from "react";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import NewPost from "./components/NewPost.jsx";
// import StoreContextProvider from "./contexts/StoreContext";
import Header from "./components/Header.jsx";
import Profile from "./components/Profile.jsx";
import Login from "./components/Login.jsx";
import Dummy from "./components/Dummy.jsx"

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

import {
  Link,
  useParams
} from "react-router-dom";

// Import and apply global CSS stylesheet
import "./styles/styles.css";
// Import and apply App specific css
import css from "./styles/App.module.css";

// The component that adds our Meta tags to the page
import Seo from "./components/seo.jsx";

// App function that is reflected across the site
export default function App(){
 const {userId} = useParams();

  
  return (
    <Router>
      <Seo />
        <Header />
      <div className={css.container}>
        <main role="main" className="wrapper">
          <Routes>
            <Route path="/" element={
                <Home />
              }/>
            <Route path="/add" element={
                <NewPost />
              }/>

            <Route path="/profile/:userId" element={
             <Profile/> 
            }/>
            
            <Route path="newPost" element={
              <NewPost/>
            }/>
            
            <Route path="login" element={
             <Login/> 
            }/>
            
            <Route path="dummy" element={
             <Dummy/> 
            }/>
          </Routes>
        </main>
       
      </div>
    </Router>
  );

}
