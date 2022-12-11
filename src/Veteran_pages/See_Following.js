import "./styles/See_Following.styles.css"
import {useEffect, useState} from "react";
import "./styles/Invites_V.styles.css"
import {ShowUsers} from "../Components_vet/ShowUsers"
import React from "react";
import {Navbar} from "../Components_vet/Navbar"
export const See_Following= () => {
        const[invitations,setInvitations]=useState([])
        // const handleSubmit= (event) => {
        //     event.preventDefault();
        //     // console.log(post);
        // };
        const getFollowers = async () => {
            const response = await fetch('http://localhost:4000/users/'+localStorage.getItem('vet-email')+'/getFollowing',{
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
            getFollowers();
        }, [invitations]);
    
        return (
            <div className="">
                <h1 className="followers-h1"> Followings </h1>
                <div className="InvitesV_profile_div">
                    {invitations.map((user) => {
                        console.log("user hoon",user)
                        return <ShowUsers email={user} setInvitations={setInvitations}></ShowUsers>;
                    })}
                </div>
            </div>
        )    
}





