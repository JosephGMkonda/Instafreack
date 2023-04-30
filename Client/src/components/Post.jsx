import '../styles/post.css'
import {MoreVert} from '@material-ui/icons'
import {Users} from '../dummyData'
import { useState } from 'react'

function Post({post}) {
    const [like,setLike] = useState(post.likes)
    const [isLiked,setIsLiked] = useState(false)

    const likeHandler = () => {
        setLike(isLiked ? like-1: like+1)
        setIsLiked(!isLiked)
    }

  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src={Users.filter(u=>u.id === post.userId)[0].profilePicture} alt="" />
                    <span className="postUsername">{Users.filter(u=>u.id === post.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className="postImage" src={post.photo} alt="" />

            </div>
            <div className="postBottom">
                <div className="postBottomRight">
                    <img className="likeIconImg" src="/assets/pictures/like.png" onClick = {likeHandler} alt="" />
                    <img className="likeIcon" src="/assets/pictures/love like.png" onClick = {likeHandler} alt="" />
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