
import "./styles/Follow.styles.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Follow = () => {

    const [email, setEmail] = useState('');
    const navigate=useNavigate();

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // console.log(email)
    //     navigate("/com-home")
    // }

    const handleFollow = async (event) => {
        event.preventDefault()
        const response = await fetch('http://localhost:4000/users/'+localStorage.getItem("vet-email")+'/followuser',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                email
            })
        })
        const data = await response.json();
        alert(data.message)
    }

    const handleUnfollow = async (event) => {
        event.preventDefault()
        const response = await fetch('http://localhost:4000/users/'+localStorage.getItem("vet-email")+'/unfollowuser',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                email
            })
        })
        const data = await response.json();
        alert(data.message)
    }

return (
    <>
        <h1  className="event-h1" style={{ textAlign:"center" }}>Follow fellow Vet</h1>    
    
        <div className="follow-container">
            <label className="event-label">Email</label> <br/>
            <input className="event-input" value={email} required onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder="Please Enter Email" id="invite-email" name="send-invite" /><br/>    
        </div>

        <div className="follow-container">    
            <button className="follow-btn" onClick={handleFollow}>Follow</button>
            <button className="unfollow-btn" onClick={handleUnfollow}>Unfollow</button>
        </div>

        <button   className="vet-home-btn" onClick={() => {navigate("/vet-home")}}>Go to Home Page</button>
    
    </>
    )
}
