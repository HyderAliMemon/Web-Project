import { useState } from "react";
import "./styles/Login.styles.css"
import {Home_C} from "./Home_C"
import { useNavigate } from "react-router-dom";

export const Login_C = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [login,setLogin]=useState(true);
    const navigate=useNavigate();
    // <Navbar/>
    
    
    // login ? navigate('/Home') : navigate('/')
    
    
    const handleCLogin = async (event) => {
        event.preventDefault();

        const response = await fetch('http://localhost:4000/community/logincomm',{
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
            localStorage.setItem("com-token",data.data)
            localStorage.setItem("com-email",data.email)
            window.location='./com-home'
        }
        else
            alert(data.error)
    }

    return (
        // <div className="auth-form-container">

        <>
       <div className="flex">

            <img className="pic" alt="" src={ require ("../Images/proj.png")} height="300px"/>
            <form className="login-form" onSubmit={handleCLogin}>
                <label className="login-label">Email</label><br/>
                <input className="login-input" value={email}  required onChange={(e) => {setEmail(e.target.value)}}type="email" placeholder="Please Enter Community Email" id="email" name="email" /><br/>
                <label className="login-label">Password</label> <br/>
                <input className="login-input" value={pass} required onChange={(e) => {setPass(e.target.value)}} type="password" placeholder="Please Enter Password" id="password" name="password" /><br/>
                <button className="login-btn" type="submit">Login</button>
            </form>
            <button className="login-link-btn" onClick={() => {navigate("/com-register")}}>Don't have an account? Register here.</button>
             {/* {   login &&<Home/>} */}
        </div>
        </>

    )
}