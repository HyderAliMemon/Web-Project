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
        const response = await fetch('http://localhost:4000/event/getLocationBasedEvents',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                type:type,
                location:search
            })
        })
        const data = await response.json();
        setInvitations([])
        setInvitations(data)
        setSearch('')
        setType('')
    }
    

    // };
    const handleCreateEvent = async () => {
        getEvents()
    }

    return (
        <div className="searchBar">
            <div className="Bar">
            <label className="search-label">Location </label> 
            <input className="loc-search-bar" type="text" placeholder="Location"
                value={search} required onChange={(e) => { setSearch(e.target.value); } } />
            <label className="type-label">Type</label> 
            <input className="type-search-bar" type="text" placeholder="type"
                value={type} required onChange={(e) => { setType(e.target.value); } } />
            <button className="search-post-btn" onClick={(e)=>{e.preventDefault();setInvitations([]);handleCreateEvent()}}>Submit</button>
           </div>
            <div className="Search_profile_div">
                {invitations.length > 0 && invitations.map((event) => {
                    return <InterestedEvents eventID={event._id} setInvitations={setInvitations}></InterestedEvents>;
                })}
            </div>
        </div>
    )
}
