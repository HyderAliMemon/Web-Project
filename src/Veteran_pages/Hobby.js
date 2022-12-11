import {Navbar} from "../Components_vet/Navbar"
import { useState } from 'react';
import "./styles/Hobby.styles.css"
import { Navigate, useNavigate } from "react-router-dom";
export const Hobby=()=> {
    
    const [Hobby_arr, setHobby_arr] = useState([]);
    const [hobby, setHobby] = useState("");
    const navigate=useNavigate();
    const handleChange = (event) => {
        let value=event.target.value
        const letter=value[0].toUpperCase()
        let temp=''
        for (let i=1; i<value.length;i++){
            temp+=value[i].toLowerCase()
        }
        let finalValue=letter+temp
        setHobby(finalValue);
    };
    

    const addHobby = () => {
        const add_hobby = {
        id: Hobby_arr.length === 0 ? 1 : Hobby_arr[Hobby_arr.length - 1].id + 1,
        hobby: hobby
    };
        setHobby_arr(add_hobby.hobby !== "" ? [...Hobby_arr, add_hobby] : Hobby_arr);
        console.log(Hobby_arr)
    };

    const deleteHobby = (id) =>  setHobby_arr(Hobby_arr.filter((hobb) => hobb.id !== id));
    

    const handleCreateEvent = async(event) => { 
        event.preventDefault();
        alert("hobbies added")
        const response = await fetch('http://localhost:4000/users/'+localStorage.getItem('vet-email')+'/addHobbies',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                hobbies:Hobby_arr
            })
        })
        const data = await response.json();
        console.log(data)
        // if(data.status === 'ok'){
        //     alert('Event Successfully Added!')
        // }
        // else
        //     alert(data.message)
        navigate("/vet-home")        

    }


    return (
    
        <>
        <Navbar/>
        <div className="flex">
            
            <div>
                <input onChange={handleChange} placeholder="Shooting" />
                <button className="hobby-add-btn" onClick={addHobby}> Add Hobby</button>

            </div>
        
            <div >
                {Hobby_arr.map(hobb => {
                    return (
                        <>
                        {hobb.hobby}
                        <button  className="hobby-rmv-btn" onClick={() => {deleteHobby(hobb.id)}}> X </button>
                        <br/>
                    </>
                );
            })}
            </div>

            <button className="hobby-post-btn" onClick={handleCreateEvent}>Post</button>
        </div>
        </>
    );
}