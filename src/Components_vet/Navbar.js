import { useState,useEffect } from "react"
import { Link} from "react-router-dom"
import "./styles/navbar.styles.css"
export const Navbar=()=>{
    // current user info, loading dstate any error 
    // const [user,loading,error ]= useAuthState(auth);
    // but for simplicty reasons we need user only now
    const [user,setUser]=useState(true)

    const handleLogout = (event) =>{
        event.preventDefault();
        localStorage.removeItem("vet-token");
        localStorage.removeItem("vet-email");
        window.location.reload();
    }

    return(
        <div className="navbar">
            <Link to="/home" className="title">Veterans</Link>
            
            <input  className="vet-search-bar" type="text" placeholder="Search" />
            
            <div className="Flex-nav-vet">
            <ul>
                <Link to="/vet-home" className="homebtn"> Home </Link> 
            </ul>
            <ul>
                <Link to="/vet-invites" className="invbtn"> Invites </Link> 
            </ul>
            <ul>
                <Link to="/vet-follow" className="sendbtn"> Send Request </Link> 
            </ul>
                <p className="email">{localStorage.getItem("vet-email")}</p>
    
            
                <button className="logoutButton" onClick={handleLogout}>Logout </button>
            
                </div>
        </div>
    )
                }