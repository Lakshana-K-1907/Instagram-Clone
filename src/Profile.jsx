import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'


function Profile() {
    const [followers, setFollowers]=useState([]);
    const [profile, setProfile]= useState(null);
    const [unfollowed, setUnfolowed]=useState(0);
    useEffect(()=>{
        axios.get("http://localhost:3000/profile")
        .then(data=>setProfile(data.data))
        .catch(err=>console.log(err))

        axios.get("http://localhost:3000/followers") 
        .then(data=>setFollowers(data.data)) 
        .catch(err=>console.log(err)) 
    },[unfollowed]);

    function HandleOnChange(e) {
        setProfile((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
        
}
    const handleUpdate = async () => {
        axios
            .put("http://localhost:3000/profile", profile)
            .then(() => console.log("Updated"))
            .catch((err) => console.log(err));
    };
    const handleUnFollow = async (id) => {
  axios
    .delete(`http://localhost:3000/followers/${id}`)
    .then(() => alert("unfollowed"))
    .then(setUnfolowed(!unfollowed))
    .catch((err) => console.log(err));
};

  return (
    <div className='m-5'>{profile?(
        <div> 
            <div className='d-flex align-items-center'>
                <img src={profile.profile_pic} className='profile rounded-circle m-3'></img>
            <div className='text'>
                <h5>{profile.username}</h5>
            </div>
            </div>
            
            
                <input
                    type="text"
                    value={profile.username}
                    name="username"
                    className="form-control my-4"
                    onChange={HandleOnChange}
                />

                <input
                    type="text"
                    name="profile_pic"
                    value={profile.profile_pic}
                    className="form-control"
                    onChange={HandleOnChange}
                />

                <button className="btn btn-primary my-4" onClick={handleUpdate}>
                    Update
                </button>
            </div>
        ) : (
            <div>Loading...</div>
        )}
          {
              followers.length > 0 ? (
                  followers.map((follower) => (
                      <div key={follower.id} className='text d-flex'>
                          {follower.username}
                          <button className='ms-3' onClick={()=>{handleUnFollow(follower.id)}}>Unfollow</button>
                      </div>
                  ))
              ) : (
                  <div>Loading Followers</div>
              )
          }
        </div>
    )
}

export default Profile