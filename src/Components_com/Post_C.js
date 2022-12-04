import { useNavigate } from "react-router-dom";
import "./styles/Posts.styles.css"
export const Post_C = () => {

    const handleSubmit= (data) => {
        console.log(data);
    };
    return (

    <div className={"post-container"} contenteditable>
    <form  onSubmit={handleSubmit}>
        <textarea  contenteditable placeholder="Hi I am doing web project ..."  />
        <button className="create-post-btn">  Post</button>
        
        </form>
    </div>
    )

} 