import '../styles/post.css'
import {MoreVert} from '@material-ui/icons'

import {useContext, useEffect, useState } from 'react'
import {format} from 'timeago.js'
import {Link} from "react-router-dom"

import axios from "axios"
import { AuthContext, user } from '../context/AuthContext'

function Post({post}) {
    const [like,setLike] = useState(post.likes.length)
    const [isLiked,setIsLiked] = useState(false)
    const [user, setUser] = useState({})
    const {user:currentUser} = useContext(AuthContext)

    useEffect(() => {
        setIsLiked(post.likes.includes(currentUser._id));

    },[currentUser._id,post.likes])

    useEffect(() => {

        const fetchUser = async () => {
        const res = await axios.get(`/user?userId=${post.userId}`)

        setUser(res.data)
    
    
        };
        fetchUser();
        
      },[post.Id])

    const likeHandler = () => {
        try{
            axios.put("/posts/"+post._id+"/like",{userId:currentUser._id})
        }catch{}
        setLike(isLiked ? like-1: like+1)
        setIsLiked(!isLiked)
        
    }

  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <Link to={`profile/${user.username}`}>
                    <img className="postProfileImg" src={user.profilePicture} alt="" />
                    </Link>
                    <span className="postUsername">{user.username}</span>
                    <span className="postDate">{format(post.createdAt)}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className="postImage" src={post.picture} alt="" />

            </div>
            <div className="postBottom">
                <div className="postBottomRight">
                    <img className="likeIconImg" src="/assets/pictures/like.png" onClick = {likeHandler} alt="" />
                    <img className="likeIcon" src="/assets/pictures/love.png" onClick = {likeHandler} alt="" />
                    <span className="likeCounter">{like} people liked it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postComments">{post.comment} comments</span>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Post