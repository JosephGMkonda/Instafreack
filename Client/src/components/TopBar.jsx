import "../styles/topbar.css";
import {Search,Person,Chat,Notifications}  from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function TopBar() {
  const {user} = useContext(AuthContext)
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/">
        <span className="logo">Instafreack</span>
        </Link>

      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon"/>
        <input placeholder="Search for friends or post" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">

        <div className="topbarlinks">
          <span className="topbarLink">HomePage</span>
          <span className="topbarLink">TimeLine</span>
        </div>

        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person/>
            <span className="topbarIconBedge">1</span>
          </div>

          <div className="topbarIconItem">
            <Chat/>
            <span className="topbarIconBedge">2</span>
          </div>

          <div className="topbarIconItem">
            <Notifications/>
            <span className="topbarIconBedge">1</span>
          </div>
        </div>
       {/* <Link to={`/profile/${user.username}`}> */}
        
      {/* <img src={user.profilePicture ? user.profilePicture : 
        "/assets/pictures/profile.jpg"} alt="" className="topbarProfile" /> */}
        
        
      </div>


    </div>
  )
}

export default TopBar