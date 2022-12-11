import {Navbar_C} from "../Components_com/Navbar_C";
import "./styles/Home.styles.css"
import { useState } from "react";
// import {Post_C} from "../Components_com/Post_C"   may be i will delete it 
import { useNavigate} from "react-router-dom";
import {All_Events} from "./All_Events"
import {All_Invites} from "./All_Invites"

export const Home_C = () => {
  const navigate=useNavigate();
  const [invites,setInvites] = useState([]);
  const [eventID,seteventID] = useState('');
  
  return (
    <div className="Home_C_Div">
    <Navbar_C/>
      <div className="conditional_Div">
        {invites.length===0 && (
          <All_Events setInvites={setInvites} seteventID={seteventID}/>
        )}

        {invites.length>0 && (
          <All_Invites invites={invites} eventID={eventID} setInvites={setInvites}/>
        )}
      </div>
    </div>
  )
}

