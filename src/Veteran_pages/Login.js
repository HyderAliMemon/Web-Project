import React, { useState } from "react";
import "./styles/Login.styles.css"
import {Home} from "./Home"
import { useNavigate ,Route,Routes,Link} from "react-router-dom";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [login,setLogin]=useState(false);
    const navigate=useNavigate();
    // <Navbar/>
    
    
    // login ? navigate('/Home') : navigate('/')

    const handleLogin = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:4000/users/loginuser',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                email,
                pass,
            })
        })
        const data = await response.json();
        if(data.status === 'ok'){
            setLogin(true)
            alert('Login Successful')
            localStorage.setItem("token",data.data)
            localStorage.setItem("user",data.name)
            window.location='./vet-home'
        }
        else
            alert(data.error)
    };
    

    return (
        // <div className="auth-form-container">

        <>
        <div className="flex">

            <img className="pic" alt="" src={ require ("../Images/proj.png")} height="300px"/>
            <form className="login-form" onSubmit={handleLogin}>
                <label>Email</label><br/>
                <input className="login-input" value={email}  required onChange={(e) => {setEmail(e.target.value)}}type="email" placeholder="i190501@nu.edu.pk" id="email" name="email" /><br/>
                <label>Password</label> <br/>
                <input className="login-input" value={pass} required onChange={(e) => {setPass(e.target.value)}} type="password" placeholder="******" id="password" name="password" /><br/>
                <button className="form-btn" type="submit">Login</button>
            </form>
            <button className="login-link-btn" onClick={() => {navigate("/register")}}>Don't have an account? Register here.</button>
             {/* {   login &&<Home/>} */}
        </div>
        </>
    )
}