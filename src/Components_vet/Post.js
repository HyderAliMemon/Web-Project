import { useNavigate } from "react-router-dom";
import {useState} from "react";
import "./styles/post.styles.css"
export const Post = () => {

    const [post, setPost] = useState('');

    const handleSubmit= (event) => {
        event.preventDefault();
        console.log(post);
    };
    return (

    <div className={"post-container"} contenteditable>
    <form  onSubmit={handleSubmit}>
        <textarea   value={post}  onChange={(e) => {setPost(e.target.value)}} type="text" id="post" name="post" placeholder="Write Your Post..."  />
        <button type="submit" className="create-post-btn">  Post</button>
        </form>
    </div>
    )

} 