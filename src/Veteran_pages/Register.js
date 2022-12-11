import React, { useState,useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Register.styles.css"

export const Register = (props) => {
    const image1Ref = useRef()
    const image2Ref = useRef()
    const [profImage,setProfImage] = useState('');
    const [coverImage,setCoverImage] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const navigate=useNavigate();

    const onProfLoad = (event)=>{
        if(event.target.files && event.target.files[0]){
            // let img = event.target.files[0];
            
            // setImage({image:URL.createObjectURL(img)});
            var file_read = new FileReader();
		    file_read.readAsDataURL(event.target.files[0]);
		    file_read.onload = function (e) {
                setProfImage(e.target.result)
		    }     
        }
    }
    const onCovLoad = (event)=>{
        if(event.target.files && event.target.files[0]){
            // let img = event.target.files[0];
            
            // setImage({image:URL.createObjectURL(img)});
            var file_read = new FileReader();
		    file_read.readAsDataURL(event.target.files[0]);
		    file_read.onload = function (e) {
                setCoverImage(e.target.result)
		    }     
        }
    }

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
                profImage,
                coverImage
            })
        })
        const data = await response.json();
        if(data.status === 'ok'){
            alert('Registration Successful')
            navigate('/vet-login')
        }
        else
            alert('Registration Failed')
    };

    return (
    <>
        <div className="flex">
        
            <img className="pic" src={ require ("../Images/proj.png")} height="300px"/>
        
        
        <form className="register-form" onSubmit={handleRegister}>
            <label className="reg-label">Full name</label><br/>
            <input className="reg-input" value={name} required onChange={(e) =>{ setName(e.target.value)}} type="text" placeholder="Please Enter Name" /> <br/>
            <label className="reg-label">Email</label><br/>
            <input className="reg-input"value={email} required onChange={(e) =>{ setEmail(e.target.value)}} type="email" placeholder="Please Enter Email" id="email" name="email" /><br/>
            <label className="reg-label">Password</label><br/>
            <input className="reg-input" value={pass} required onChange={(e) => {setPass(e.target.value)}} type="password" placeholder="Please Enter Password" id="password" name="password" /><br/>
            <div style={{display:"none"}}>
                <input type="file" name="post_img" ref={image1Ref} onChange={onProfLoad}></input>
            </div>
            <div style={{display:"none"}}>
                <input type="file" name="post_img" ref={image2Ref} onChange={onCovLoad}></input>
            </div>
            <div className="Photo-reg-btns">
            <button className="reg-btn" onClick={(e)=>{e.preventDefault();image1Ref.current.click()}}>Add Profile Pic</button>
            <button className="reg-btn" onClick={(e)=>{e.preventDefault();image2Ref.current.click()}}>Add Cover Pic</button>
            <button type="submit" className="reg-btn">Register</button>
            </div>
        </form>
        <button className="link-btn" onClick={() => {navigate("/vet-login")}}>
                Already have an account? Login here.
        </button>
    </div>
    </>
    )
}