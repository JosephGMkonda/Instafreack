

import '../styles/chatonline.css'

function ChatOnline() {
  return (
    <div className='chatOnline'>
        <div className="chatOnlineFriend">
            <div className="chatOnlineImgContainer">
                <img  className="chatOnlineImg" src="/assets/pictures/profile.jpg" alt="" />
                <div className="chatOnlineBadge"></div>
            </div>
            <span className="chatOnlineName">John Doe</span>
        </div>

    </div>
  )
}

export default ChatOnline