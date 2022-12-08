import { useNavigate } from "react-router-dom";
import {useState,useEffect} from "react";
import "./styles/SingleInvitation.styles.css"
import Cover from '../Images/place_cov.svg'
import ProfileImg from '../Images/place_prof.jpg'
import React from "react";
export const SingleInvitation = (props) => {

    const [isInvited,setIsInvited] = useState(false);

    const doNothing = (event) => {
        event.preventDefault();
    }

    const checkInvite = async () => {
        const response = await fetch('http://localhost:4000/invitation/isInvited',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                EventID:props.eventID,
                VeteranEmail:props.data.email
            })
        })
        const res = await response.json();
        setIsInvited(res.isInvited)
    }

    const inviteUser = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:4000/invitation/sendInvite',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                EventID:props.eventID,
                VeteranEmail:props.data.email
            })
        })
        await response.json();
        checkInvite()
    };

    useEffect(() => {
        checkInvite()
    }, []);
    return (

    <div className="i_profileCard_div">
        <div className="i_profile_Images">
            <img className="i_cov_img_prof" src={props.data.coverPic!==''?props.data.coverPic:Cover} alt=""></img>
            <img src={props.data.profilePic!==''?props.data.profilePic:ProfileImg} alt=""></img>
        </div>
        <div className="i_profile_Name">
            <span>{props.data.name}</span>
            <span>Stars: {props.data.stars}</span>
        </div>
        <div className="i_profile_Follow">
            <hr/>
            <div>
                <div className="i_Followers">
                    <span>{props.data.user_followers.length}</span>
                    <span>Followers</span>
                </div>
                <div className="i_Line"></div>
                <div className="i_Following">
                    <span>{props.data.user_following.length}</span>
                    <span>Following</span>
                </div>
            </div>
            <hr/>
        </div>
        <span className={isInvited?"i_Profile_last_invited":"i_Profile_last"} onClick={isInvited?doNothing:inviteUser}>{isInvited?'Invited':'Send Invite'}</span>
    </div>
    )

} 