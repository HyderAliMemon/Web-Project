import React, { useState } from "react";
import "./styles/Event.styles.css"
import {Home_C} from "./Home_C"
import { useNavigate } from "react-router-dom";

export const Event_C = (props) => {
    const [name, setName] = useState('');
    const [time, setTime] = useState(Date());
    const [stars,setStars]=useState('');
    const [type,setType]=useState('');
    const [location,setLocation]=useState('');
    
    const navigate=useNavigate();
    // <Navbar/>
    
    

    const handleCreateEvent = async(event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:4000/event/addEvent',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                eventName:name,
                eventTime:time,
                eventlocation:location,
                eventType:type,
                eventStars:stars,
                email:localStorage.getItem('com-email')
            })
        })
        const data = await response.json();
        if(data.status === 'ok'){
            alert('Event Successfully Added!')
        }
        else
            alert(data.message)

    }

    return (
        <>
        <div className="flex">

            <h1  className="event-h1" style={{ textAlign:"center" }}>Add Event</h1>
            <form className="login-form" onSubmit={handleCreateEvent}>
                <label className="event-label">Event Name</label><br/>
                <input className="event-input" value={name}  required onChange={(e) => {setName(e.target.value)}}type="text" placeholder="Please Enter Event Name" id="event-name" name="E_name" /><br/>
                <label className="event-label">Event Time</label> <br/>
                <input className="event-input" value={time} required onChange={(e) => {setTime(e.target.value)}} type="datetime-local" placeholder="Please Enter Event Date" id="event-time" name="E_time" /><br/>
                <label className="event-label">Event Stars</label><br/>
                <input className="event-input" value={stars}  required onChange={(e) => {setStars(e.target.value)}}type="number" min="1" max="5000" placeholder="Please Enter Event Stars" id="event-stars" name="E_stars" /><br/>
                <label className="event-label">Event Type</label> <br/>
                <input className="event-input" value={type} required onChange={(e) => {setType(e.target.value)}} type="text" placeholder="Please Enter Event Type" id="event-type" name="E_type" /><br/>
                <label className="event-label">Event Location</label> <br/>
                <input className="event-input" value={location} required onChange={(e) => {setLocation(e.target.value)}} type="text" placeholder="Hyderabad" id="event-location" name="E_location" /><br/>
            
                <button className="event-btn" type="submit">Post</button>
            </form>
            <button className="login-link-btn" onClick={() => {navigate("/com-register")}}>Don't have an account? Register here</button>
             {/* {   login &&<Home/>} */}
            
            
        </div>
        </>

    )
}