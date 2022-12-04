import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Register.styles.css"

export const Register_C = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const navigate=useNavigate();

    const handleSubmit =e=>{e.preventDefault(); console.log(name) };

    return (
    <>
        <div className="flex">
        
            <img className="pic" src={ require ("../Images/proj.png")} height="300px"/>
        
        
        <form className="register-form" onSubmit={handleSubmit}>
            <label>Full name</label><br/>
            <input className="reg-input" value={name} required onChange={(e) =>{ setName(e.target.value)}} type="text" placeholder="Johnny Jamali" /> <br/>
            <label>Email</label><br/>
            <input className="reg-input"value={email} required onChange={(e) =>{ setEmail(e.target.value)}} type="email" placeholder="hyderJamali@gmail.com" id="email" name="email" /><br/>
            <label>Password</label><br/>
            <input className="reg-input" value={pass} required onChange={(e) => {setPass(e.target.value)}} type="password" placeholder="*******" id="password" name="password" /><br/>
            <button type="submit" className="reg-btn">Register</button>
        </form>
        <button className="link-btn" onClick={() => {navigate("/com-login")}}>
                Already have an account? Login here.
        </button>
    </div>
    </>
    )
}