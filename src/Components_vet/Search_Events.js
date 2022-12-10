import {useState,useEffect} from "react";
import "./styles/Search_Events.style.css"
import React from "react";
import { InterestedEvents } from "./InterestedEvents";





export const Search_Events = () => {

    const[invitations,setInvitations]=useState([])
    const [search, setSearch] = useState('');
    const [type, setType] = useState('');


    // const handleSubmit= (event) => {
    //     event.preventDefault();
    //     // console.log(post);
    const getEvents = async () => {
        const response = await fetch('http://localhost:4000/event/'+search+'/'+type+'/getLocationBasedEvents',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
            },
        })
        const data = await response.json();
        setInvitations(data)
    }
    

    // };
    const handleCreateEvent = async(event) => {
    }
   
    useEffect(() => {
        if(localStorage.getItem('vet-email')!=null)
          getEvents();
    }, [handleCreateEvent]);

    return (
        <div className="searchBar">
            <label className="search-label">Location </label> 
            <input className="loc-search-bar" type="text" placeholder="Location"
                value={search} required onChange={(e) => { setSearch(e.target.value); } } />
            <button className="search-post-btn">Submit</button>
           
            <label className="type-label">Type</label> 
            <input className="type-search-bar" type="text" placeholder="type"
                value={type} required onChange={(e) => { setType(e.target.value); } } />
            <button className="search-post-btn" onClick={handleCreateEvent}>Submit</button>
           
            <div className="Search_profile_div">
                {invitations.length > 0 && invitations.map((event) => {
                    return <InterestedEvents eventID={event._id} setInvitations={setInvitations}></InterestedEvents>;
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