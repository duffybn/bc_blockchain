import React from "react";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import NewPost from "./components/NewPost.jsx";
import initialStore from "./utils/initialStore.js";
// Import and apply global CSS stylesheet
import "./styles/styles.css";
// Import and apply App specific css
import css from "./styles/App.module.css";

// The component that adds our Meta tags to the page
import Seo from "./components/seo.jsx";

// App function that is reflected across the site
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "home",
      ...initialStore,
    };
    this.setPage = this.setPage.bind(this);
  }
  setPage(page) {
    this.setState({ page: page });
  }

  // App.js
  addLike(postId) {
    const like = {
      userId: this.state.currentUserId,
      postId, // make sure you understand this shorthand syntax
      datetime: new Date().toISOString(),
    };

    this.setState({
      likes: this.state.likes.concat(like),
    });
  }
  removeLike(postId) {
    // console.log('removeLike',postId, store.likes.filter(like=>!(like.userId===store.currentUserId && like.postId===postId)));
    this.setState({
      likes: this.state.likes.filter(
        (like) =>
          !(like.userId === this.state.currentUserId && like.postId === postId)
      ),
    });
  }
  renderMain(page) {
    switch (page) {
      case "home":
        return (
          <Home
            currentUserId={this.state.currentUserId}
            posts={this.state.posts}
            users={this.state.users}
            comments={this.state.comments}
            likes={this.state.likes}
            onLike={this.addLike}
            onUnlike={this.removeLike}
          />
        );
      case "add":
        return <NewPost />;
    }
  }
  render() {
    return (
      <>
        <Seo />
        <div className={css.container}>
          <main role="main" className="wrapper">
            {this.renderMain(this.state.page)}
          </main>
          <Navbar onNavChange={this.setPage} />
        </div>
      </>
    );
  }
}
