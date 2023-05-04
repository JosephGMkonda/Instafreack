
import Feed from '../components/Feed'
import Rightbar from '../components/Rightbar'
import Sidebar from '../components/Sidebar'
import TopBar from '../components/TopBar'
import '../styles/profile.css'
import {useEffect,useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router'

function Profile() {

  const [user,setUser] = useState({})
  const username = useParams().username
  

  useEffect(() => {
    const fetchUser = async () => {

    const res = await axios.get(`/user?username=${username}`);
    setUser(res.data)
}
 fetchUser();
  },[username])


  return (
    <>
      <TopBar />

      <div className="profile">
        <Sidebar />
        <div className='profileRight'> 
        <div className="profileRightTop">
          <div className="profileCover">
          <img src={user.coverPicture || "/assets/pictures/profile.jpg"} alt="" className="profileCoverImg" />
          <img src={user.profilePicture || "/assets/pictures/profile.jpg"} alt="" className="profileUserImg" />
          </div>
          <div className="profileInfo">
            <h4 className="ProfileInfoName">{user.username}</h4>
            <span className="ProfileInfoDesc">{user.desc}</span>
          </div>
          </div>


        <div className="profileRightBottom">
          <Feed profile={username}/>
          <Rightbar user={user}/>
        
        </div>
        </div>

        


        </div>


      

    </>
  )
}

export default Profile