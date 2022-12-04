import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Register.styles.css"

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const navigate=useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:4000/users/registeruser',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                pass,
            })
        })
        const data = await response.json();
        if(data.status === 'ok'){
            alert('Registration Successful')
            navigate('/')
        }
        else
            alert('Registration Failed')
    };

    return (
    <>
        <div className="flex">
        
            <img className="pic" src={ require ("../Images/proj.png")} height="300px"/>
        
        
        <form className="register-form" onSubmit={handleRegister}>
            <label>Full name</label><br/>
            <input className="reg-input" value={name} required onChange={(e) =>{ setName(e.target.value)}} type="text" placeholder="Johnny Jamali" /> <br/>
            <label>Email</label><br/>
            <input className="reg-input"value={email} required onChange={(e) =>{ setEmail(e.target.value)}} type="email" placeholder="hyderJamali@gmail.com" id="email" name="email" /><br/>
            <label>Password</label><br/>
            <input className="reg-input" value={pass} required onChange={(e) => {setPass(e.target.value)}} type="password" placeholder="*******" id="password" name="password" /><br/>
            <button type="submit" className="reg-btn">Register</button>
        </form>
        <button className="link-btn" onClick={() => {navigate("/")}}>
                Already have an account? Login here.
        </button>
    </div>
    </>
    )
}