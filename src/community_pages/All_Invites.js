import { useNavigate } from "react-router-dom";
import {useState} from "react";
import "./styles/All_Invites.styles.css"
import {SingleInvitation} from "./SingleInvitation"
import React from "react";
export const All_Invites = (props) => {


    const handleSubmit= (event) => {
        event.preventDefault();
        // console.log(post);
    };
    return (

    <div className="invite_profile_div">
        {props.invites.map((user)=>{
            return <SingleInvitation eventID={props.eventID} data={user} key={user._id}/>
        })}
    </div>
    )

} 