import React from "react";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import NewPost from "./components/NewPost.jsx";
// Import and apply global CSS stylesheet
import "./styles/styles.css";
// Import and apply App specific css
import css from "./styles/App.module.css"

// The component that adds our Meta tags to the page
import Seo from './components/seo.jsx';

// App function that is reflected across the site
export default class App extends React.Component{
  constructor(props){
    this.state = {
      page: "home"
    }
    super(props);
  }
  setPage(page){
    this.setState({ page: page});
  }
  renderMain(){
    switch(page){
      case "home":  return <Home/>;
      case "add": return <NewPost/>
    }
  }
  render() {
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

}
