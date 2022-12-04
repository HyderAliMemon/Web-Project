import { useState } from "react"
import { Link} from "react-router-dom"
import "./styles/navbar.styles.css"
export const Navbar_C=()=>{
    // current user info, loading dstate any error 
    // const [user,loading,error ]= useAuthState(auth);
    // but for simplicty reasons we need user only now
const [user,setUser]=useState(true)
    return(
        <div className="navbar">
            <Link to="/com-home" className="title">Veterans</Link>
            
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

            <ul>
                <Link to="/com-home"> Home </Link>
            </ul>  

            <ul>
                <Link to="/com-login"> Logout </Link>
            </ul>

            </div>
        </div>
    )
                }