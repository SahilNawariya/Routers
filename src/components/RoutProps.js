import { useLocation, useParams } from "react-router-dom"
export default function RoutProps(){
    const params=useParams();
    const {name}=params;
    const location=useLocation();
    console.log(location);
    
    return(
        <div>
            <h1>Welcome to {name} Page</h1>
        </div>
    )
}