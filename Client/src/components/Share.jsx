
import '../styles/share.css'
import {PermMedia} from '@material-ui/icons'
import {useContext, useRef,useState} from 'react'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios'

function Share() {
  const {user} = useContext(AuthContext)
  const [file,setFile] = useState(null)
  const desc = useRef()

  const onChangeHandler = async (e) => {
    e.preventDefault()
    const newPost = {
      userId: user._id,
      desc: desc.current.value

    }
    try{

     await axios.post("/posts", newPost)

    }catch(err){

    }
  }

  
  return (
    <div className="share">
    <div className='shareWrapper'>
        <div className="shareTop">
            <img className="shareProfilePicture" src="/assets/pictures/profile.jpg" alt="" />
            <input placeholder="What's on your mind?" className='shareInput' ref={desc} /> 
        </div>
        <hr className='shareHr'/>
        <form className="shareBottom" onSubmit={onChangeHandler}>

            <div className='shareOptions'>
                <label htmlFor='file' className="shareOption">
                <PermMedia htmlColor="tomato" className="shareIcon"/>
                <span className="shareOptionText">Photo or video</span>
                <input 
                style={{display:'none'}}
                type='file' 
                id='file' 
                accept=".jpg,.png,.jpeg" 
                onChange={(e) => setFile(e.target.files[0])}/> 
                </label>
            </div>
            <button className='postButton' type='submit'>Post</button>
        </form>
    </div>
    </div>
  )
}

export default Share