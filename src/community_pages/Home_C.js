import {Navbar_C} from "../Components_com/Navbar_C";
import "./styles/Home.styles.css"
// import {Post_C} from "../Components_com/Post_C"   may be i will delete it 
import { useNavigate} from "react-router-dom";

export const Home_C = () => {
  const navigate=useNavigate();
  
  return (
    <>
    <Navbar_C/>
    <div className="flex-events">
      <button className="create-event-btn"  onClick={()=>navigate("/add-event")}> Create Event</button>
      <button className="check-invite-btn" onClick={()=>navigate("/check-invites")}> Send Invites</button>
    </div>
    </>
  )
}

