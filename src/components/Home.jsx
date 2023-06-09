import React, { useContext, useState} from "react";
import Post from "./Post.jsx";
import Search from "./Search.jsx"
import posts from "../utils/posts.js"
import css from "../styles/Search.module.css";
// import { StoreContext } from "../contexts/StoreContext";
import {
  Link,
  useParams
} from "react-router-dom";

// function Home(props) {
//   const {
//     posts,
//     users,
//     likes,
//     comments,
//     currentUserId,
//     addLike,
//     removeLike,
//     addComment,
//   } = useContext(StoreContext); // retrieve data
//   function fineUser(post, users) {
//     return users.find((user) => user.id === post.userId);
//   }

//   function findComments(post, comments) {
//     return comments.filter((comment) => comment.postId === post.id);
//   }

//   function findLikes(post, likes) {
//     let postLikes = likes.filter((like) => like.postId === post.id);
//     return {
//       self: postLikes.some((like) => like.userId === currentUserId),
//       count: postLikes.length,
//     };
//   }
//   return (
//     <div>
//       {posts
//         .sort((a, b) => new Date(b.datetime) - new Date(a.datetime))
//         .map((post) => (
//           <Post
//             key={post.id}
//             user={fineUser(post, users)}
//             post={post}
//             comments={findComments(post, comments)}
//             likes={findLikes(post, likes)}
//             onLike={addLike}
//             onUnlike={removeLike}
//             onComment={addComment}
//           />
//         ))}
//     </div>
//   );
// }

// function Home(){
  
//   const searchBar = () => {
    
//   }
//   return(<div>Test</div>);

// }

// export default Home;

 // 

const Home = ({keyword, onChange}) => {
  // const BarStyle = {width:"111rem",background:"#F0F0F0", border:"none", padding:"0.5rem", };
  const BarStyle = {width: "500px", padding:"10px", margin:"10px"};
  const [filtered, setFiltered] = useState("");
  const [searchInput, setSearchInput] = useState("");  
   const {userId} = useParams();
  
  function handleChange(event) {

    console.log(event.target.value);
    const test = posts.filter(d=>d.professor.toLowerCase().includes(event.target.value.toLowerCase()));
    setFiltered(test);
    console.log("inside", filtered)
    
  }
  
  console.log("This is working", keyword)
  
  return (
    <div className={css.back}>
      <div className={css.test}>
      <input 
       className={css.bar}
       key="search-bar"
       value={keyword}
       placeholder={"Search Professor"}
       onChange = {handleChange}
      />
      </div>
  
      <div >
          {((filtered.length == 0 )) ?
            posts.map((post) => (
          <div key = {post.id}  className={css.box}>
            <Link to={`/profile/` + post.professor} className={css.text} >
              <strong>{post.professor}</strong> <p></p> {post.college}
            </Link>
          </div>  
        ))
        // console.log("empty")
          :
          filtered.map((post) => (
          <div key = {post.id}  className={css.box}>
            <Link to={`/profile/` + post.professor}  className={css.text}>
              <strong>{post.professor}</strong> <p></p> {post.college}
            </Link>
          </div>  
        ))}
      </div>
    </div>
  );
}

export default Home;