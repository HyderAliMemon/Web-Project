import { useNavigate } from "react-router-dom";
import {useState} from "react";
import "./styles/PostColumn.styles.css"
import { WritePost } from "./WritePost";
import { Posts } from './Posts';
export const PostColumn = () => {

    // const [post, setPost] = useState('');
    const [posts,setPosts] = useState(Array)
    const handleSubmit= (event) => {
        event.preventDefault();
        // console.log(post);
    };
    return (

    <div className="Post_Column">
        <WritePost setPosts={setPosts}/>
        <Posts posts={posts} setPosts={setPosts}/>
    </div>
    )

} 