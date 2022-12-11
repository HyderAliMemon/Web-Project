import { useNavigate } from "react-router-dom";
import {useState} from "react";
import "./styles/Profile.styles.css"
import { ProfileCard } from "./ProfileCard";
import { ProfileNavbar } from "./ProfileNavbar";
import React from "react";
export const Profile = (props) => {

    return (

    <div className="profile_div">
        <ProfileCard profPic={props.profPic} setProfPic={props.setProfPic}/>
        <ProfileNavbar/>
    </div>
    )

} 