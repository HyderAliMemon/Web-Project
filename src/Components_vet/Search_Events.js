import { useNavigate } from "react-router-dom";
import {useState,useEffect} from "react";
import "./styles/Search_Events.style.css"
import React from "react";
import { AcceptInvitation } from "./AcceptInvitation";
import {Navbar} from "../Components_vet/Navbar"





export const Search_Events = () => {

    const[invitations,setInvitations]=useState([])
    const [search, setSearch] = useState('');

    // const handleSubmit= (event) => {
    //     event.preventDefault();
    //     // console.log(post);
    const getEvents = async () => {
        const response = await fetch('http://localhost:4000/event/'+search+'/getLocationBasedEvents',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
            },
        })
        const data = await response.json();
        console.log(data)
        setInvitations(data)
    }
    

    // };
    const handleCreateEvent = async(event) => {
        event.preventDefault();
    }
   
    useEffect(() => {
        if(localStorage.getItem('vet-email')!=null)
          getEvents();
    }, [handleCreateEvent]);

    return (
        <div className="searchBar">
            <input className="vet-search-bar" type="text" placeholder="Search"
                value={search} required onChange={(e) => { setSearch(e.target.value); } } />
            <button className="search-post-btn" onClick={handleCreateEvent}>Q</button>
            <div className="Search_profile_div">
                {invitations.length > 0 && invitations.map((event) => {
                    return <AcceptInvitation eventID={event._id} setInvitations={setInvitations}></AcceptInvitation>;
                })}
            </div>
        </div>
    )

}





// export const Search_Events = () => {
    
    
//     const [search, setSearch] = useState('');
//     const [events,setEvents]=useState([]);
//     const getEvents = async () => {
//         const response = await fetch('http://localhost:4000/event/'+search+'/getLocationBasedEvents',{
//             method:'GET',
//             headers:{
//                 'Content-Type':'application/json',
//             },
//         })
//         const data = await response.json();
//         console.log(data)
//         setEvents(data)
//     }
    
//     const handleCreateEvent = async(event) => {
//         getEvents()
//     }
//     return (

//     <div className="main">
        
//         <input  className="vet-search-bar" type="text" placeholder="Search" 
//         value={search} required onChange={(e) => {setSearch(e.target.value)}}/> 
//         <button className="search-post-btn" onClick={handleCreateEvent}>Q</button>
//         <InviteBasedOnLocation eventDetails={events}/>

//     </div>
//     )

// } 