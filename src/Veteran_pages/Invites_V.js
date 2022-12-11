import { useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";
import "./styles/Invites_V.styles.css"
import {AcceptInvitation} from "../Components_vet/AcceptInvitation"
import React from "react";
import {Navbar} from "../Components_vet/Navbar"
export const Invites_V = () => {

    const[invitations,setInvitations]=useState([])
    // const handleSubmit= (event) => {
    //     event.preventDefault();
    //     // console.log(post);
    // };
    const getInvitations = async () => {
        const response = await fetch('http://localhost:4000/invitation/'+localStorage.getItem('vet-email')+'/getInvitations',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
            },
        })
        const data = await response.json();
        // data.sort(sortFunctcion)
        setInvitations(data)
    }
    useEffect(() => {
        if(localStorage.getItem('vet-email')!=null)
          getInvitations();
    }, [invitations]);

    return (
      <div className="InvitesV_profile_div">
        <Navbar/>
        {invitations.length>0 && invitations.map((event)=>{
            return <AcceptInvitation eventID={event.EventID} setInvitations={setInvitations}></AcceptInvitation>
        })}
        {invitations.length==0 && (
            <div>No Invitations Yet</div>
        )}
      </div>
    )

}