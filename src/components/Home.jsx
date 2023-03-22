import React, { useContext, useState} from "react";
import Post from "./Post.jsx";
import Search from "./Search.jsx"
import posts from "../utils/posts.js"
import { StoreContext } from "../contexts/StoreContext";
import {
  Link
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
  const BarStyle = {width:"111rem",background:"#F0F0F0", border:"none", padding:"0.5rem"};
  const [query, setQuery] = useState("");
  const [searchInput, setSearchInput] = useState("");  
  
  function handleChange(event) {

    console.log(event.target.value);
    const filtered = posts.filter(d=>d.professor.includes(event.target.value))
    console.log("inside", filtered[0].professor)
    
  }
  
  
  
  return (
    <div>
      
      <input 
       style={BarStyle}
       key="search-bar"
       value={keyword}
       placeholder={"Search Professor"}
       onChange = {handleChange}
      />
       
      {console.log()}
      <div>
        {posts.map((post) => (
          <div key = {post.id}>
            <Link to="/profile">
              {post.professor} at {post.college}
            </Link>
          </div>  
        ))}
      </div>
     
    </div>
  );
}

export default Home;