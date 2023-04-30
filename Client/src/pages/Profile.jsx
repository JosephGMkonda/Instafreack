
import Feed from '../components/Feed'
import Rightbar from '../components/Rightbar'
import Sidebar from '../components/Sidebar'
import TopBar from '../components/TopBar'
import '../styles/profile.css'

function Profile() {
  return (
    <>
      <TopBar />

      <div className="profile">
        <Sidebar />
        <div className='profileRight'> 
        <div className="profileRightTop">
          <div className="profileCover">
          <img src="/assets/pictures/profile.jpg" alt="" className="profileCoverImg" />
          <img src="/assets/pictures/profile.jpg" alt="" className="profileUserImg" />
          </div>
          <div className="profileInfo">
            <h4 className="ProfileInfoName">Joseph Mkonda</h4>
            <span className="ProfileInfoDesc">Here i am oh lord</span>
          </div>
          </div>


        <div className="profileRightBottom">
          <Feed/>
          <Rightbar profile/>
        
        </div>
        </div>

        


        </div>


      

    </>
  )
}

export default Profile