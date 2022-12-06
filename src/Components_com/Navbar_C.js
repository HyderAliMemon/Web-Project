import { useState,useEffect } from "react"
import { Link} from "react-router-dom"
import "./styles/navbar.styles.css"
export const Navbar_C=()=>{
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

    return(
        <div className="navbar">
            <div className="title_search">
                <Link to="/com-home" className="title">Community</Link>
                <input  className="vet-search-bar" type="text" placeholder="Search" />
            </div>
            <div className="Flex-nav-vet">
                <Link to="/com-home" className="homebtn"> Home </Link>     
                <p className="email">{localStorage.getItem("com-email")}</p>
                <button className="logoutButton" onClick={handleLogout}>Logout </button>         
            </div>
        </div>
    )
}