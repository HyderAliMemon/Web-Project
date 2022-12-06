import { Navigate, useNavigate } from "react-router-dom";
import {useRef, useState} from "react";
import "./styles/WritePost.styles.css"
import ProfileImg from '../Images/ProfileImg.png';
import {Posts} from '../Components_vet/Posts'
// import {UilScenery} from '../../node_modules/@iconscout/react-unicons/icons/uil-scenery';
export const WritePost = (props) => {
    const navigate = useNavigate()
    // const [post, setPost] = useState('');
    const imageRef = useRef()
    const inputRef = useRef()
    const [image,setImage] = useState({image:''});
    // const [imageStore,setImageStore] = useState('');
    const [text,setText] = useState('');

    const onImageLoad = (event) => {
        if(event.target.files && event.target.files[0]){
            let img = event.target.files[0];
            setImage({image:URL.createObjectURL(img)});
        }
    };

    const handlePostSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:4000/posts/addpost',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                email:localStorage.getItem('vet-email'),
                postDescription:text,
                image:image.image,
            })
        })
        const data = await response.json();
        if(data.status === 'ok'){
            setImage({image:''})
            inputRef.current.value=''
            setText('')
            props.setPosts([])
        }
        else
            alert('Failed')
    };
    return (

    <div className="write_Post">
        <div className="Post_Body">
            <img src={ProfileImg} alt=""></img>
            <div className="input_div">
                <input type="text" ref={inputRef} onChange={(e)=>{setText(e.target.value)}} placeholder="Write Your Post"/>
            </div>
        </div>
        {image.image!=='' && (
            <div className="ShowImage">
                <button className="removeImage" onClick={()=>setImage(null)}>Remove</button>
                <img src={image.image} alt=""/>
            </div>
        )}
        <div className="Post_options">
            <button className="Add_Photo" onClick={()=>imageRef.current.click()}>Upload Photo</button>
            <button className="Submit_Post" onClick={handlePostSubmit}>Post</button>
            <div style={{display:"none"}}>
                <input type="file" name="post_img" ref={imageRef} onChange={onImageLoad}></input>
            </div>
        </div>

    </div>
    )

} 