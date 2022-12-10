import React from "react";
import '../Components_vet/styles/ProfileNavbar.styles.css'
import { useNavigate } from "react-router-dom";

export const ProfileNavbar = () => {

    // const [post, setPost] = useState('');
        const navigate=useNavigate();

    const handleSubmit= (event) => {
        event.preventDefault();
        // console.log(post);
    };
    return (

    <div className="card-pnav">
                <br/>   
                <button className="btn" type="submit" onClick={() => {navigate("/vet-search-events")}}>Search Event</button><br/>
                <br/>
                <button className="btn" type="submit">Login</button><br/>
                <br/>
                <button className="btn" type="submit">Login</button><br/>
                <br/>
                <button className="btn" type="submit">Login</button><br/>


    </div>
    )

} 