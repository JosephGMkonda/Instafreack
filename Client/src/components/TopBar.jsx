import "../styles/topbar.css";
import {Search,Person,Chat,Notifications}  from "@material-ui/icons";

function TopBar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Instafreack</span>

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

        <img src="/assets/pictures/profile.jpg" alt="" className="topbarProfile" />
      </div>


    </div>
  )
}

export default TopBar