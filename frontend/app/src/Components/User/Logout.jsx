import { useNavigate } from "react-router-dom";

const Logout  = () => {
    const navigate = useNavigate();
    const rmv = localStorage.removeItem("token");
    if(rmv){
        navigate("/")
    }
     
}
export default Logout