import { useSearchParams } from "react-router-dom";
export default function Filter(){
    const [search,setsearch]=useSearchParams();
    console.log(search.get('age'));
    console.log(search.get('city'));
    
    return(
        <div>
            <h1>Filter Page</h1>
        </div>
    )
}