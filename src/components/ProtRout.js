import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Protected(props) {
    const { Components }=props;
    const Navigate=useNavigate();
    useEffect(()=>{
        let login=localStorage.getItem('login');
        if(!login){
            Navigate('login')
        }
    });
    return (
        <div>
            <Components />
        </div>
    )
}