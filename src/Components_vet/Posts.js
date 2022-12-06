import { useState,useEffect } from "react";
import { SinglePost } from "./SinglePost";
export const Posts = (props) => {

    // const [posts, setPosts] = useState([0]);

    const getPosts = async () => {
        const response = await fetch('http://localhost:4000/posts/'+localStorage.getItem('vet-email')+'/allposts',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
            },
        })
        const data = await response.json();
        localStorage.setItem('post-temp',0)
        props.setPosts(data)
    }

    useEffect(() => {
        getPosts()
    }, [props.posts]);

    return (

    <div className="AllPosts">
        {props.posts.map((post)=>{
            return <SinglePost data={post} key={post._id}/>
        })}
    </div>
    )

} 