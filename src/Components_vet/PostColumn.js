import { useNavigate } from "react-router-dom";
import {useState} from "react";
import "./styles/PostColumn.styles.css"
import { WritePost } from "./WritePost";
import { Posts } from './Posts';
export const PostColumn = (props) => {

    // const [post, setPost] = useState('');
    const [posts,setPosts] = useState(Array)
    return (

    <div className="Post_Column">
        <WritePost image={props.image} setPosts={setPosts}/>
        <Posts posts={posts} setPosts={setPosts}/>
    </div>
    )

} 