import '../styles/sidebar.css'
import {RssFeed,Chat,VideoCall,WorkOutline,Event} from '@material-ui/icons'
import { Users } from '../dummyData'
import Friends from './Friends'

function Sidebar() {
  return (
    <div className='sideMenu'>
        <div className="sidebarWrapper">
            <ul className='sidebarList'>
                <li className="sidebarListItem">
                    <RssFeed className="sidebarIcon"/>
                    <span className="sidebarListItemText">Feed</span>

                </li>

                <li className="sidebarListItem">
                    <Chat className="sidebarIcon"/>
                    <span className="sidebarListItemText">Chats</span>

                </li>

                <li className="sidebarListItem">
                    <VideoCall className="sidebarIcon"/>
                    <span className="sidebarListItemText">Videos</span>

                </li>

                <li className="sidebarListItem">
                    <Event className="sidebarIcon"/>
                    <span className="sidebarListItemText">Events</span>

                </li>

                <li className="sidebarListItem">
                    <WorkOutline className="sidebarIcon"/>
                    <span className="sidebarListItemText">Market</span>

                </li>

            </ul>

            <button className='sidebarButton'>Show more</button>
            <hr className="sidebarHr"/>
            <ul className="sidebarFriendsList">
                {Users.map(u => (
                    <Friends  key={u.id} user={u}/>

                ))}
              


           
            </ul>

        </div>
        </div>
  )
}

export default Sidebar