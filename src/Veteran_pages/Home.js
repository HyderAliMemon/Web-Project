import {Navbar} from "../Components_vet/Navbar";
import "./styles/Home.styles.css"
import {PostColumn} from "../Components_vet/PostColumn"
import {Profile} from "../Components_vet/Profile"
import React from "react";
import { useState } from "react";
export const Home = () => {

  const [profPic,setProfPic] = useState('');

  return (
    <>
    <Navbar/>
    <div className="Home_Page">
      <Profile profPic ={profPic} setProfPic={setProfPic}/>
      <PostColumn image={profPic}/>
    </div>
    </>
  )
}

