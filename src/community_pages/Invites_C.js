import "./styles/Invites.styles.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Invites_C = () => {

    const [email, setEmail] = useState('');
    const navigate=useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(email)
        navigate("/com-home")
    }

return (
    <div className="flex">
    
        <h1  className="event-h1" style={{ textAlign:"center" }}>Send Invite</h1>
        
        <form className="login-form" onSubmit={handleSubmit}>
            <label className="event-label">Email</label> <br/>
            <input className="event-input" value={email} required onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder="Please Enter Veteran Email" id="invite-email" name="send-invite" /><br/>
            <button className="event-btn" type="submit">Send Invite</button>
        </form>
        <button   className="com-home-btn" onClick={() => {navigate("/com-home")}}>Go to Home Page</button>
    
    </div>
    )
}
