
import '../styles/rightbar.css'
import {Users} from '../dummyData'
import Online from './Online'

function Rightbar({user}) {

  const HomeRightbar = () => {
    return(
      <>
        <div className="onlineFriends">
          <h4 className='onlineFriendsTitle'>Online Friends</h4>
          <ul className="onlineFriendsList">
             
            {Users.map(u => (
              <Online key={u.id} user={u}/>
            ))}
          </ul>
        </div>
      </>
    )
  }

  const ProfileRightbar = () => {
    return(
      <>
      <h4 className='rightbarTitle'>User Information</h4>
       <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Nationality:</span>
          <span className="rightbarInfoValue">{user.nationality}</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">{user.location}</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">{user.relationship ===1 ? "Single" : user.relationship ===2 ? "Married" : "-" }</span>
        </div>
       </div>

       <h4 className='rightbarTitle'>User Followers</h4>

       <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="/assets/pictures/post.jpg" alt="" className="writingbarFollowingImg" />
          <span className="rightbarFollowingName">Joseph Banda</span>
        </div>
        <div className="rightbarFollowing">
          <img src="/assets/pictures/post.jpg" alt="" className="writingbarFollowingImg" />
          <span className="rightbarFollowingName">Joseph Banda</span>
        </div>
        <div className="rightbarFollowing">
          <img src="/assets/pictures/post.jpg" alt="" className="writingbarFollowingImg" />
          <span className="rightbarFollowingName">Joseph Banda</span>
        </div>
        <div className="rightbarFollowing">
          <img src="/assets/pictures/post.jpg" alt="" className="writingbarFollowingImg" />
          <span className="rightbarFollowingName">Joseph Banda</span>
        </div>
        <div className="rightbarFollowing">
          <img src="/assets/pictures/post.jpg" alt="" className="writingbarFollowingImg" />
          <span className="rightbarFollowingName">Joseph Banda</span>
        </div>
        <div className="rightbarFollowing">
          <img src="/assets/pictures/post.jpg" alt="" className="writingbarFollowingImg" />
          <span className="rightbarFollowingName">Joseph Banda</span>
        </div>
       </div>


      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
    { user ? <ProfileRightbar/> : <HomeRightbar/>}
      

      </div>
    </div>
  )
}

export default Rightbar