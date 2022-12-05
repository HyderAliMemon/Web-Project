import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from 'react-select';
import "./styles/Register.styles.css"


export const Register_C = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [ctype, setCtype] = useState('');
    const navigate=useNavigate();
    
    const handleCRegister = async (event) => {
        event.preventDefault()
        const response = await fetch('http://localhost:4000/community/addCommunity',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                name,
                ctype,
                email,
                pass,
            })
        })
        const data = await response.json();
        if(data.status === 'ok'){
            alert('Registration Successful')
            navigate('/com-login')
        }
        else
            alert('Registration Failed') 
    };

    return (
    <>
        <div className="flex">
        
            <img className="pic" src={ require ("../Images/proj.png")} height="300px"/>
        
        
        <form className="register-form" onSubmit={handleCRegister}>
            <label className="reg-label">Community name</label><br/>
            <input className="reg-input" value={name} required onChange={(e) =>{ setName(e.target.value)}} type="text" placeholder="Please Enter Community Name" /> <br/>
            <label className="reg-label">Community type</label><br/>
            <input className="reg-input"value={ctype} required onChange={(e) =>{ setCtype(e.target.value)}} type="text" placeholder="Please Enter Community Type" id="type" name="type" /><br/>
            <label className="reg-label">Email</label><br/>
            <input className="reg-input"value={email} required onChange={(e) =>{ setEmail(e.target.value)}} type="email" placeholder="Please Enter Community Email" id="email" name="email" /><br/>
            <label className="reg-label">Password</label><br/>
            <input className="reg-input" value={pass} required onChange={(e) => {setPass(e.target.value)}} type="password" placeholder="Please Enter Password" id="password" name="password" /><br/>
            <button type="submit" className="reg-btn">Register</button>
        </form>
        <button className="link-btn" onClick={() => {navigate("/com-login")}}>
                Already have an account? Login here.
        </button>
    </div>
    </>
    )
}