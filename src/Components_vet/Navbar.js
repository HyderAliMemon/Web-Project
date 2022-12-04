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
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.reload();
    }

    return(
        <div className="navbar">
            <Link to="/home" className="title">Veterans</Link>
            
                {/* {!user ? (
                    <Link to="/"> LogOut </Link>
                )   :   (
                    <Link to="/createpost"> CreatePost </Link>
                )} */}
                
            {/* <ul>
                <Link to="/create-post">Crea</Link>
            </ul> */}
               {/* <ul> */}

            <input  className="search-bar" type="text" placeholder="Search" />
                {/* <input type="text">Q</input> */}
               {/* </ul> */}
            
            <div className="Flex">
                <Link to="/"> Home </Link> 
                <p>{localStorage.getItem("user").toUpperCase()}</p>
                <button className="logoutButton" onClick={handleLogout}> Logout </button>
            </div>
        </div>
    )
                }