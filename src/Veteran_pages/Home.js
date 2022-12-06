import {Navbar} from "../Components_vet/Navbar";
import "./styles/Home.styles.css"
import {PostColumn} from "../Components_vet/PostColumn"
import {Profile} from "../Components_vet/Profile"
import React from "react";
export const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="Home_Page">
      <Profile/>
      <PostColumn/>
    </div>
    </>
  )
}

