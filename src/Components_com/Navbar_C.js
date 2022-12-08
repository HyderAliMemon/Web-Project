import { useState,useEffect } from "react"
import { Link} from "react-router-dom"
import "./styles/Navbar_C.styles.css"
import { useNavigate} from "react-router-dom";
export const Navbar_C=()=>{
    const navigate=useNavigate();
    // current user info, loading dstate any error 
    // const [user,loading,error ]= useAuthState(auth);
    // but for simplicty reasons we need user only now
    const [user,setUser]=useState(true)

    const handleLogout = (event) =>{
        event.preventDefault();
        localStorage.removeItem("com-token");
        localStorage.removeItem("com-email");
        window.location.reload();
    }

    const reloadPage = (event) => {
        event.preventDefault()
        window.location.reload()
    }

    return(
        <div className="c_navbar">
            <div className="c_title_search">
                <button onClick={reloadPage} className="c_title">Community</button>
                <input  className="c_vet-search-bar" type="text" placeholder="Search" />
            </div>
            <div className="c_Flex-nav-vet">
                <button onClick={reloadPage} className="c_homebtn"> Home </button>   
                <Link className="c_homebtn"  to="/add-event"> Add Event</Link>  
                <p className="c_email">{localStorage.getItem("com-email")}</p>
                <button className="c_logoutButton" onClick={handleLogout}>Logout </button>         
            </div>
        </div>
    )
}