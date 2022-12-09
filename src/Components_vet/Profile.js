import { useNavigate } from "react-router-dom";
import {useState} from "react";
import "./styles/Profile.styles.css"
import { ProfileCard } from "./ProfileCard";
import { ProfileNavbar } from "./ProfileNavbar";
import React from "react";
export const Profile = () => {

    const [post, setPost] = useState('');

    const handleSubmit= (event) => {
        event.preventDefault();
        console.log(post);
    };
    return (

    <div className="profile_div">
        <ProfileCard/>
        <ProfileNavbar/>
    </div>
    )

} 