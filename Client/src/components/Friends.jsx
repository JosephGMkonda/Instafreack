

import '../styles/sidebar.css'

function Friends({user}) {
  return (
    <li className="sidebarFriend">
    <img className="sidebarFriendImg" src={user.profilePicture} alt=""/>
    <span className="sidebarFriendName">{user.username}</span>
</li>

  )
}

export default Friends