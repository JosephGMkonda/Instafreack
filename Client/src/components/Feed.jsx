import '../styles/feed.css'
import Share from './Share'
import Post from './Post'
import {useContext, useEffect,useState} from 'react'
import axios from "axios"
import { AuthContext } from '../context/AuthContext'




function Feed({username}) {
  const [posts, setPosts] = useState([])
  const {user} = useContext(AuthContext)
  

  useEffect(() => {

    const fetchPosts = async () => {

    const res = username ? 
    await axios.get("/posts/profile/" + username): 
    await axios.get("/posts/timeline/" + user._id);
    setPosts(res.data)

    };
    fetchPosts();
    
  },[username,user._id])
  return (
    <div className='feed'>
      <div className="feedWrapper">

      <Share/>
      {posts.map((p) => (
        <Post key={p._id} post={p}/>


      ))}
      
    

      </div>
    </div>
  )
}

export default Feed