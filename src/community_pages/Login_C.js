import React, { useState } from "react";
import "./styles/Login.styles.css"
import {Home_C} from "./Home_C"
import { useNavigate ,Route,Routes,Link} from "react-router-dom";

export const Login_C = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [login,setLogin]=useState(true);
    const navigate=useNavigate();
    // <Navbar/>
    
    
    // login ? navigate('/Home') : navigate('/')
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        // console.log(login)
        navigate("/com-home")
    }

    return (
        // <div className="auth-form-container">

        <>
        <div className="flex">

                <img className="pic" src={ require ("../Images/proj.png")} height="300px"/>

            <form className="login-form" onSubmit={handleSubmit}>
                <label>Email</label><br/>
                <input className="login-input" value={email}  required onChange={(e) => {setEmail(e.target.value)}}type="email" placeholder="i190501@nu.edu.pk" id="email" name="email" /><br/>
                <label>Password</label> <br/>
                <input className="login-input" value={pass} required onChange={(e) => {setPass(e.target.value)}} type="password" placeholder="******" id="password" name="password" /><br/>
                <button className="form-btn" type="submit">Login</button>
            </form>
            <button className="login-link-btn" onClick={() => {navigate("/com-register")}}>Don't have an account? Register here.</button>
             {/* {   login &&<Home/>} */}
        </div>
        </>

    )
}