
import '../styles/share.css'
import {PermMedia} from '@material-ui/icons'

function Share() {
  return (
    <div className="share">
    <div className='shareWrapper'>
        <div className="shareTop">
            <img className="shareProfilePicture" src="/assets/pictures/profile.jpg" alt="" />
            <input placeholder="What's on your mind?" className='shareInput' /> 
        </div>
        <hr className='shareHr'/>
        <div className="shareBottom">

            <div className='shareOptions'>
                <div className="shareOption">
                <PermMedia htmlColor="tomato" className="shareIcon"/>
                <span className="shareOptionText">Photo or video</span>
                </div>
            </div>
            <button className='postButton'>Post</button>
        </div>
    </div>
    </div>
  )
}

export default Share