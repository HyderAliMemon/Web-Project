import { useNavigate } from "react-router-dom";
import {useState,useEffect} from "react";
import "./styles/AcceptInvitation.styles.css"
import Cover from '../Images/place_cov.svg'
import ProfileImg from '../Images/place_prof.jpg'
import React from "react";
export const AcceptInvitation = (props) => {

    const [eventDetails,seteventDetails] = useState('');
    const [communityName,setCommunityName]=useState('');

    // const doNothing = (event) => {
    //     event.preventDefault();
    // }
    
    const getEventDetails = async () => {
        const response = await fetch('http://localhost:4000/event/'+props.eventID+'/getEventDetail',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
            },
        })
        const data = await response.json();
        seteventDetails(data)
    }
    const getCommunityName = async () => {
        const response = await fetch('http://localhost:4000/event/'+props.eventID+'/getCommunityDetails',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
            },
        })
        const data = await response.json();
        console.log(data)
        // data.sort(sortFunctcion)
        setCommunityName(data)
    }


    const AcceptRequest = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:4000/invitation/'+localStorage.getItem('vet-email')+'/acceptInvite',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
        })
        const data=await response.json();
        if (data.message="done"){
            props.setInvitations([])
        }
    };
    const RejectRequest = async (event) => {
        event.preventDefault();
        console.log("here")
        const response = await fetch('http://localhost:4000/invitation/'+props.eventID+'/rejectInvite',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
        })
        console.log("jello")
        const data=await response.json();
        if (data.message="done"){
            props.setInvitations([])
        }
    };

    useEffect(() => {
        getEventDetails();
        getCommunityName();
    }, []);
    return (

    <div className="ai_profileCard_div">
        <div className="ai_profile_Images">
            <img className="ai_cov_img_prof" src={Cover} alt=""></img>
            <img src={ProfileImg} alt=""></img>
        </div>
        <div className="ai_profile_Name">
            <span>{communityName}</span>
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
                <div className="ButtonsOption">
                    <button className="AcceptBtn" onClick={AcceptRequest}>Accept</button>
                    <button className="RejectBtn" onClick={RejectRequest}>Reject</button>
                </div>
            </div>
        </div>
    </div>
    )

} 