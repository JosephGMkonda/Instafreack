
import '../styles/messages.css'

function Messages({own}) {
  return (
    <div className={own ? 'message own' : "message"}>
        <div className="messageTop">
            <img src="/assets/pictures/profile.jpg" alt="" className="messageImg" />
            <p className='messageText'>Hello mr messagekvdwksvk vk kvwkw kmkwwl; klmw lmlmfm lm 
            l m; m;   lmfmmflq; ;mf;mlql lm
             mfq; m;qmm mfmfl l;qlm fm mfo ;lmqlm lmlom lomfm ;qmmol fomomoof</p>
        </div>
        <div className="messageBottom">5 mins ago</div>

    </div>
  )
}

export default Messages