import './styles/SinglePost.styles.css'
import LikePic from '../Images/like.png'
import UnlikePic from '../Images/unlike.png'
import PostPic from '../Images/Cover.png'
import { useEffect,useState } from 'react'
export const SinglePost = ({data}) => {

    // const [post, setPost] = useState('');
    const [like,setLike] = useState(false);
    const checkLikes = async () => {
        console.log(data)
        const response = await fetch('http://localhost:4000/posts/'+data._id+'/isLiked',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                email:localStorage.getItem('vet-email')
            })
        })
        const res = await response.json();
        console.log(res.isLiked)
        setLike(res.isLiked)
    }

    const handleLike = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:4000/posts/'+data._id+'/likepost',{
            method:'PUT',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                email:localStorage.getItem('vet-email')
            })
        })
        await checkLikes()
    };

    useEffect(() => {
        checkLikes()
    }, []);

    // useEffect(()=>{
        
    // },[like]);
    return (

    <div className="Posts">
        <img src={data.image} className="postPic" alt=""></img>
        <div className="post_attributes">
            <img className='reactionPost' src={like?LikePic:UnlikePic} alt="" onClick={handleLike}></img>
            <span>{data.Postlikes?data.Postlikes.length:0} likes</span>
        </div>
        <div className='PostBy'>
            <span><b>{data.userID}</b></span>
            <span>{data.postDescription}</span>
        </div>
    </div>
    )

} 