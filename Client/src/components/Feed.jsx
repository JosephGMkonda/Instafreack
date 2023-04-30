import '../styles/feed.css'
import Share from './Share'
import Post from './Post'
import {Posts} from '../dummyData'


function Feed() {
  return (
    <div className='feed'>
      <div className="feedWrapper">

      <Share/>
      {Posts.map((p) => (
        <Post key={p.id} post={p}/>


      ))}
      
    

      </div>
    </div>
  )
}

export default Feed