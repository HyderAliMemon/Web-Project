import { useNavigate } from 'react-router-dom';
import './start.css';
export const Start = () => {

const navigate=useNavigate();

return(
    <>
    <div className="main-div">
    <div className="main-center">
        <h1 className="home-h1">SELECT</h1>
        <div className="btn-div">
        <button  className="start-btn" onClick={()=>navigate("/com-login")}> Community </button>
        <button  className="start-btn" onClick= {()=>navigate("/vet-login")}> Veterans </button>
        </div>
    </div>
    </div>
    </>
);

}


