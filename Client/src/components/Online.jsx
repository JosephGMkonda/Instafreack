

import '../styles/online.css'

function Online({user}) {
  return (
    <li className="rightbarFriends">
    <div className="rightbarImgContainer">
      <img src={user.profilePicture} alt="" className="rightbarProfile" />
      <span className="rightbarOnlinebadge"></span>
    </div>
    <span className="rightbarUsername">{user.username}</span>
  </li>
  )
}

export default Online