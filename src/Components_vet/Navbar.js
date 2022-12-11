import { useState,useEffect } from "react"
import { Link} from "react-router-dom"
import "./styles/Navbar.styles.css"
export const Navbar=()=>{
    // current user info, loading dstate any error 
    // const [user,loading,error ]= useAuthState(auth);
    // but for simplicty reasons we need user only now
    const [user,setUser]=useState('')
    const getUser = async () => {
        const response = await fetch('http://localhost:4000/users/'+localStorage.getItem('vet-email')+'/getUser',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
            },
        })
        const data = await response.json();
        setUser(data.user.name)
    }
    useEffect(() => {
        getUser();
    }, []);
    const handleLogout = (event) =>{
        event.preventDefault();
        localStorage.removeItem("vet-token");
        localStorage.removeItem("vet-email");
        window.location.reload();
    }

    return(
        <div className="navbar">
            <div className="title_search">
                <Link to="/vet-home" className="title">Veterans</Link>
                <input  className="vet-search-bar" type="text" placeholder="Search" />
            </div>
            <div className="Flex-nav-vet">
                <Link to="/vet-home" className="homebtn"> Home </Link> 
                <Link to="/vet-invites" className="invbtn"> Invites </Link> 
                <Link to="/vet-follow" className="sendbtn"> Follow </Link>
                <Link to="/vet-hobby" className="sendbtn"> Hobbies </Link>
                <p className="email">{user}</p>
                <button className="logoutButton" onClick={handleLogout}>Logout </button>         
            </div>
        </div>
    )
}