import { useNavigate } from "react-router-dom";
import {useState,useEffect} from "react";
import "./styles/InterestedEvents.styles.css"
import Cover from '../Images/place_cov.svg'
import ProfileImg from '../Images/place_prof.jpg'
import React from "react";
export const InterestedEvents = (props) => {

    const [eventDetails,seteventDetails] = useState('');
    const [isInterested,setIsInterested]=useState(false);
    const [commName,setcommName] = useState('')

    // const doNothing = (event) => {
    //     event.preventDefault();
    // }
    const doNothing = (event) => {
        event.preventDefault();
    }
    const getEventDetails = async () => {
        const response = await fetch('http://localhost:4000/event/'+props.eventID+'/getEventDetail',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
            },
        })
        const data = await response.json();
        seteventDetails(data)
        // data.sort(sortFunctcion)
        const response2 = await fetch('http://localhost:4000/event/'+props.eventID+'/getCommunityDetails',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
            },
        })
        const data2 = await response2.json()
        console.log(data2.commname)
        setcommName(data2.commname?data2.commname:'')
        const response1 = await fetch('http://localhost:4000/users/getEvent',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                eventID:props.eventID,
                email:localStorage.getItem('vet-email')
            })
        })
        const data1 = await response1.json()
        setIsInterested(data1.isInvited)
    }

    const MarkEventasInterested = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:4000/invitation/'+localStorage.getItem('vet-email')+'/markEventasInterested',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                EventID:props.eventID
            })
        })
        const data=await response.json();
        if (data.message=="done"){
            setIsInterested(true);
        }
    };


    useEffect(() => {
        getEventDetails();
    }, []);
    return (

    <div className="ai_profileCard_div">
        <div className="ai_profile_Images">
            <img className="ai_cov_img_prof" src={Cover} alt=""></img>
            <img src={ProfileImg} alt=""></img>
        </div>
        <div className="ai_profile_Name">
            <span>{commName}</span>
        </div>
        <div className="event_Details">
            <hr/>
            <div>
                <div className="details">
                    <span><b>Event Name: </b></span>
                    <span>{eventDetails!==''?eventDetails.data.eventName:''}</span>
                </div>
                <div className="ai_Line"></div>
                <div className="details">
                    <span><b>Event Time: </b></span>
                    <span>{eventDetails!==''?eventDetails.data.eventTime:''}</span>
                </div>
                <div className="details">
                    <span><b>Event Stars: </b></span>
                    <span>{eventDetails!==''?eventDetails.data.eventStars:''}</span>
                </div>
                <div className="details">
                    <span><b>Event Type: </b></span>
                    <span>{eventDetails!==''?eventDetails.data.eventType:''}</span>
                </div>
                <div className="details">
                    <span><b>Event Location: </b></span>
                    <span>{eventDetails!==''?eventDetails.data.eventlocation:''}</span>
                </div>
                <hr></hr>
                <div className="InterestedButton">
                <span className={isInterested?"markedBtn":"Interestedbtn"} onClick={isInterested?doNothing:MarkEventasInterested}>{isInterested?'Interested':'Set as Interested'}</span>
                    {/* <button className="IntButton" onClick={MarkEventasInterested}>Interested</button> */}
                </div>
            </div>
        </div>
    </div>
    )

} 