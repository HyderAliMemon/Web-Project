import { useState,useEffect } from "react";
import { SingleEvent } from "./SingleEvent";
import "../community_pages/styles/All_Events.styles.css"
export const All_Events = (props) => {

    // const [posts, setPosts] = useState([0]);
    const [events,setEvents] = useState([])

    // const sortFunction = (a,b) => {  
    //     var dateA = new Date(a.date).getTime();
    //     var dateB = new Date(b.date).getTime();
    //     return dateA > dateB ? 1 : -1;  
    // };

    const getEvents = async () => {
        const response = await fetch('http://localhost:4000/event/'+localStorage.getItem('com-email')+'/getCommunityevent',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
            },
        })
        const data = await response.json();
        // data.sort(sortFunctcion)
        setEvents(data.data)
    }

    useEffect(() => {
        getEvents()
    }, []);

    return (
    <div className="All_Events_Div">
        {events.map((event)=>{
            return <SingleEvent data={event} seteventID={props.seteventID} setInvites={props.setInvites} key={event._id}/>
        })}
    </div>
    )

} 