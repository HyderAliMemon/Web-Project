import './styles/SinglePost.styles.css'
import LikePic from '../Images/like.png'
import UnlikePic from '../Images/unlike.png'
import PostPic from '../Images/Cover.png'
import { useEffect,useState } from 'react'
import Moment from 'react-moment';
export const SinglePost = ({data}) => {

    // const [post, setPost] = useState('');
    const [like,setLike] = useState(false);
    const[username,setUsername]=useState('')
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
    const getUsername = async () => {
        const response = await fetch('http://localhost:4000/users/'+data.userID+'/getUsername',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
            },
        })
        const data2 = await response.json();
        setUsername(data2)
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
        getUsername()
    }, []);

    // useEffect(()=>{
        
    // },[like]);
    return (

    <div className="Posts">
        <Moment fromNow>{new Date(data.postTime)}</Moment>
        <img src={data.image} className="postPic" alt=""></img>
        <div className="post_attributes">
            <img className='reactionPost' src={like?LikePic:UnlikePic} alt="" onClick={handleLike}></img>
            <span>{data.Postlikes?data.Postlikes.length:0} likes</span>
        </div>
        <div className='PostBy'>
            <span><b>{username}</b></span>
            <span>{data.postDescription}</span>
        </div>
    </div>
    )

} 