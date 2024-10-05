import { useParams } from "react-router-dom"
export default function RoutProps(){
    const params=useParams();
    const {name}=params;
    return(
        <div>
            <h1>Welcome to {name} Page</h1>
        </div>
    )
}