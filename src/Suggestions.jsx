import React, { useEffect, useState } from 'react'
import axios from "axios";

function Suggestions() {
  const[profile,setProfile]=useState(null);
  const[suggestions,setSuggestions]=useState([]);
  const handleFollow = async (id, username) => {
    axios
      .post("http://localhost:3000/followers", {
        id: id,
        username: username,
      })
      .then(() => alert("followed"))
      .catch((err) => console.log(err));
  };
  useEffect(()=>{
    fetch("http://localhost:3000/profile")
    .then(data=>data.json())
    .then(data=>setProfile(data))
    .catch(err=>console.log(err))

    fetch("http://localhost:3000/suggestions")
    .then(data=>data.json())
    .then(data=>setSuggestions(data))
    .catch(err=>console.log(err))
  },[]);
  return (
    <div>
      {profile ?
      <div className="d-flex ">
        <div className="suggest">
          <img
                className="dp rounded-circle align-items-center mt-4 ms-3" 
                src={profile.profile_pic}
                alt="Profile Pic"></img>
                <h5 className='ms-2 mt-3'>{profile.username}</h5>
                <p className='ms-auto mt-4 switch'>Switch</p>
        </div>
                
              </div>:
              <p>Loading</p>
  }
         <div className="suggest">
    <b className="mb-0 ms-4 mt-3 ">Suggested for you</b>
    <b className="ms-auto mt-3">See all</b>
</div>
{suggestions.length > 0 ? (
        <div className="my-3">
          {suggestions.map((suggestion) => (
            <div key={suggestion.id}>
              <div className="d-flex align-items-center mb-3 ms-4">
                <img
                  className="dp rounded-circle"
                  src={suggestion.profile_pic}
                  alt="Profile Pic"
                />

                <h5 className="mb-0 ms-2 username">
                  {suggestion.username}
                </h5>

                <a className="follow mb-0 ms-4 " onClick={()=>{handleFollow(suggestion.id,suggestion.username)}}>
                  Follow
                </a>
              </div>
              
            </div>
            
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}

              </div>
  )
}

export default Suggestions