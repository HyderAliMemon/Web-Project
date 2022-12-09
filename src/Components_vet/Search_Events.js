import { useNavigate } from "react-router-dom";
import {useState} from "react";
import "./styles/Search_Events.style.css"
import React from "react";

export const Search_Events = () => {
    
    const [search, setSearch] = useState('');

    const handleCreateEvent = async(event) => { 
    console.log(search)
    }
    return (

    <div className="main">
        
        <input  className="vet-search-bar" type="text" placeholder="Search" 
        value={search} required onChange={(e) => {setSearch(e.target.value)}}/> 
        <button className="search-post-btn" onClick={handleCreateEvent}>Q</button>

    </div>
    )

} 