import './styles/SingleEvent.styles.css'
import LikePic from '../Images/like.png'
import UnlikePic from '../Images/unlike.png'
import PostPic from '../Images/Cover.png'
import { useEffect,useState } from 'react'
import Moment from 'react-moment';
export const SingleEvent = (props) => {

    // const [post, setPost] = useState('');

    const handleInvite = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:4000/users/'+props.data.eventType+'/getHobbyUsers',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
            },
        })
        const res = await response.json();
        if(res.status==='ok'){
            if(res.users.length>0){
                props.setInvites(res.users)
                props.seteventID(props.data._id)
            }
            else{
                alert('No Users matching Event Type')
            }
        }
        else{
            alert('Error')
        }
    };

    return (

    <div className="Single_Event">
        {/* <img src={data.image} className="postPic" alt=""></img>
        <div className="event_attributes">
            <img className='reactionPost' src={like?LikePic:UnlikePic} alt="" onClick={handleLike}></img>
            <span>{data.Postlikes?data.Postlikes.length:0} likes</span>
        </div> */}
        <div className='PostBy'>
            <div>
                <span><b>Event Name: </b></span>
                <span>{props.data.eventName}</span>
            </div>
            <div>
                <span><b>Event Time: </b></span>
                <Moment>{props.data.eventTime}</Moment>
            </div>
            <div>
                <span><b>Event Stars: </b></span>
                <span>{props.data.eventStars}</span>
            </div>
            <div>
                <span><b>Event Type: </b></span>
                <span>{props.data.eventType}</span>
            </div>
            <div>
                <span><b>Event Location: </b></span>
                <span>{props.data.eventlocation}</span>
            </div>
            <button className='send_invite_btn' onClick={handleInvite}>Send Invite</button>
        </div>
    </div>
    )

} 