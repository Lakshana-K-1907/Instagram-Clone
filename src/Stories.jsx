import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Stories() {
  const navigate=useNavigate();
  const [stories,setStories]=useState([]);
useEffect(()=>{
  fetch("http://localhost:3000/story")
  .then(data=>data.json())
  .then(data=>setStories(data))
  .catch(err=>console.log(err))
},[]);
let tot=0;
  return (
    <div  className="story d-flex align-items-center">
      <div className='d-none'>
        {tot=stories.length}
      </div>
    {stories.length>0?(
      stories.map((story)=>(
        <div key={story.id}>
          <div className='gradient-border' onClick={()=>{navigate(`/story/${story.id}/${tot}`)}} >
            <img src={story.user.profile_pic} alt='dp' className='story-dp rounded-circle'></img> 
            </div>
          
          <p className='text-truncate' style={{width:"50px"}}>{story.user.username}</p>
        </div>
      ))
    ):(
      <p>Loading</p>
    )}
    </div>
  )
}

export default Stories