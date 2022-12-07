import {Navbar} from "../Components_vet/Navbar"
import { useState } from 'react';
import "./styles/Hobby.styles.css"
export const Hobby=()=> {
    
    const [Hobby_arr, setHobby_arr] = useState([]);
    const [hobby, setHobby] = useState("");

    const handleChange = (event) => {
        setHobby(event.target.value);
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
    

    const handleCreateEvent = e => { 
        e.preventDefault();
        console.log(Hobby_arr);  // prints the hobbies array
        // navigate('/vet-home')
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