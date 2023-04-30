import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import '../styles/home.css'




function Home() {
  return (
    <>
    <TopBar/>
  
    <div className="homeContainer">
       <Sidebar/>
      
      <Feed/>

      <Rightbar/>
      
    </div>
    
    </>
  )
}

export default Home