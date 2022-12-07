import { useNavigate } from "react-router-dom";
import {useState,useEffect} from "react";
import "./styles/ProfileCard.styles.css"
import Cover from '../Images/place_cov.svg'
import ProfileImg from '../Images/place_prof.jpg'
import React from "react";
export const ProfileCard = () => {
    const [title, setTitle] = useState('');
    const [user,setUser] = useState('');
    const [titleClass,setTitleClass] = useState('')

    const getUser = async () => {
        const response = await fetch('http://localhost:4000/users/'+localStorage.getItem('vet-email')+'/getUser',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
            },
        })
        const data = await response.json();
        setUser(data.user)
        if (data.user.stars>=100000){
            setTitle('Eternal Sage')
            setTitleClass('Profile_last sage')
        }
        else if (data.user.stars>=70000){
            setTitle('Platinum Veteran')
            setTitleClass('Profile_last plat')
        }
        else if (data.user.stars>=65000){
            setTitle('Sapphire Veteran')
            setTitleClass('Profile_last sapp')
        }
        else if (data.user.stars>=60000){
            setTitle('Diamond Veteran')
            setTitleClass('Profile_last dmnd')
        }
        else if (data.user.stars>=50000){
            setTitle('Golden Veteran')
            setTitleClass('Profile_last gold')
        }
        else if (data.user.stars>=40000){
            setTitle('Ruby Veteran')
            setTitleClass('Profile_last ruby')
        }
        else if (data.user.stars>=25000){
            setTitle('Silver Veteran')
            setTitleClass('Profile_last silv')            
        }
        else{
            setTitle('New Veteran')
            setTitleClass('Profile_last')
        }
    }

    useEffect(() => {
        getUser()
    }, []);
    return (

    <div className="profileCard_div">
        <div className="profile_Images">
            <img className="cov_img_prof" src={user!==''?(user.coverPic!==''?user.coverPic:Cover):Cover} alt=""></img>
            <img src={user!==''?(user.profilePic!==''?user.profilePic:ProfileImg):ProfileImg} alt=""></img>
        </div>
        <div className="profile_Name">
            <span>{user!==''?user.name:''}</span>
            <span>Stars: {user!==''?user.stars:''}</span>
        </div>
        <div className="profile_Follow">
            <hr/>
            <div>
                <div className="Followers">
                    <span>{user!==''?user.user_followers.length:''}</span>
                    <span>Followers</span>
                </div>
                <div className="Line"></div>
                <div className="Following">
                    <span>{user!==''?user.user_following.length:''}</span>
                    <span>Following</span>
                </div>
            </div>
            <hr/>
        </div>
        <span className={titleClass}>{title}</span>
    </div>
    )

} 