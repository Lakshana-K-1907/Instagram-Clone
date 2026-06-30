import React from "react";
import img from "./assets/insta.jpg";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate=useNavigate();
  return (
    <div className="sidebar d-flex flex-column justify-content-between">
      <div>
        <div className="logotext">
          <img src={img} alt="Instagram" />
        </div>

        <div className="menu">
          <div><i className="bi bi-house-door"></i><span>Home</span></div>
          <div><i className="bi bi-play-btn"></i>Reels</div>
          <div><i className="bi bi-send"></i>Messages</div>
          <div><i className="bi bi-search"></i>Search</div>
          <div><i className="bi bi-heart"></i>Notifications</div>
          <div><i className="bi bi-plus-lg"></i>Create</div>
          <div onClick={()=>{navigate(`/profile`)}}><i className="bi bi-person-circle"></i>Profile</div>
        </div>
      </div>

      <div className="bottom-menu">
        <div><i className="bi bi-list"></i>More</div>
        <div><i className="bi bi-meta"></i>Also from Meta</div>
      </div>
    </div>
  );
}

export default Sidebar;