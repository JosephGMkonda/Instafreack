import Conversation from '../components/Conversation'
import TopBar from '../components/TopBar'
import '../styles/messenger.css'
import Messages from '../components/Messages'


import React, { useState,useEffect} from 'react'
import ChatOnline from '../components/ChatOnline'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios'

function Messenger() {
    const [conversation,setConversation] = useState([])

    const {user} = useContext(AuthContext);
    console.log(user)
    useEffect(() => {
        const getConversation = async () =>{
            try{
            const res = await axios.get("/conversations/" + user._id);
            console.log(res)

            }catch(err){
                console.log(err)
            }
          


        }
        getConversation();
    },[])
  return (
    <>
    <TopBar/>
    
    <div class="messenger">

        <div className="chatMenu">
            <div className="chatMenuWrapper">
                <input type="text" placeholder='search for friends' className="search" />
                <Conversation/>
                <Conversation/>
                <Conversation/>
                <Conversation/>
                <Conversation/>
            </div>
        </div>
        <div className="chatBox">
            <div className="chatBoxWrapper">
                <div className="chatBoxTop">
                    <Messages/>
                    <Messages own={true}/>
                    <Messages/>
                    <Messages/>
                    <Messages/>
                    <Messages/>
                    <Messages/>
                    <Messages/>
                    <Messages/>
                    <Messages/>
                    
                </div>
                <div className="chatBoxBottom">
                    <textarea  className="chatMessageInput" placeholder="Type..."></textarea>
                    <button className='chatButton'>Send</button>
                </div>
            </div>
        </div>
        <div className="chatOnline">
            <div className="chatOnlineWrapper">

                <ChatOnline/>
                
            </div> 
        </div>
    </div>

    </>
  )
}

export default Messenger