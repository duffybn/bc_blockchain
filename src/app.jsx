import React, {useState} from "react";
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
export default function App(){
  const [page, setPage] = useState("home");
  const [currentUserId, setCurrentUserId] = useState(initialStore.currentUserId);
const [users, setUsers] = useState(initialStore.users);
const [posts, setPosts] = useState(initialStore.posts);
  const [likes, setLikes] = useState(initialStore.likes);
  const [comments, setComments] = useState(initialStore.comments);
  const [followers, setFollowers] = useState(initialStore.followers);
    

  // App.js
  function addLike(postId) {
    const like = {
      userId: currentUserId,
      postId, // make sure you understand this shorthand syntax
      datetime: new Date().toISOString(),
    };

    setLikes(likes.concat(like));
  }
  function removeLike(postId) {
    // console.log('removeLike',postId, store.likes.filter(like=>!(like.userId===store.currentUserId && like.postId===postId)));
    setLikes(likes.filter(
        (like) =>
          !(like.userId === currentUserId && like.postId === postId)
      ));
  }
  function renderMain(page) {
    switch (page) {
      case "home":
        return (
          <Home
            currentUserId={currentUserId}
            posts={posts}
            users={users}
            comments={comments}
            likes={likes}
            onLike={addLike}
            onUnlike={removeLike}
          />
        );
      case "add":
        return <NewPost />;
    }
  }
  
  return (
    <>
      <Seo />
      <div className={css.container}>
        <main role="main" className="wrapper">
          {renderMain(page)}
        </main>
        <Navbar onNavChange={setPage} />
      </div>
    </>
  );

}
