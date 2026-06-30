
import { useState, useEffect } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="d-flex justify-content-center">
      {posts.length > 0 ? (
        <div className="my-3">
          {posts.map((post) => (
            <div key={post.id}>
              <div className="d-flex align-items-center  ">
                <img
                className="dp rounded-circle " 
                src={post.user.profile_pic}
                alt="Profile Pic"></img>
                <h5 className="mb-0 ms-2">{post.user.username}</h5>
              </div>
              <img className="post" src={post.image} alt="post"/>
              <div>
                <i className="bi bi-heart"></i>
                <i className="bi bi-chat"></i>
                <i className="bi bi-repeat"></i>
                <i className="bi bi-send"></i>
              </div>
              <div>
                <b>{post.likes} Likes</b>
              </div>
              <p><b>{post.user.username}</b> {post.caption}</p>
            </div>
            
          ))}
        </div>
      ) : (
        <div>Loading posts...</div>
      )}
    </div>
  );
}

export default Posts;