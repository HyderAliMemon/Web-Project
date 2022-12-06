import { useNavigate } from "react-router-dom";
import {useState} from "react";
import "./styles/ProfileCard.styles.css"
import Cover from '../Images/Cover.png'
import ProfileImg from '../Images/ProfileImg.png'
import React from "react";
export const ProfileCard = () => {
    const [post, setPost] = useState('');

    const handleSubmit= (event) => {
        event.preventDefault();
        console.log(post);
    };
    return (

    <div className="profileCard_div">
        <div className="profile_Images">
            <img src={Cover} alt=""></img>
            <img src={ProfileImg} alt=""></img>
        </div>
        <div className="profile_Name">
            <span>My Name</span>
            <span>My Email</span>
        </div>
        <div className="profile_Follow">
            <hr/>
            <div>
                <div className="Followers">
                    <span>40</span>
                    <span>Followers</span>
                </div>
                <div className="Line"></div>
                <div className="Following">
                    <span>3</span>
                    <span>Following</span>
                </div>
            </div>
            <hr/>
        </div>
        <span className="Profile_last">Profile</span>
    </div>
    )

} 