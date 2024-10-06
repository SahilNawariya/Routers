import { useSearchParams } from "react-router-dom";
export default function Filter(){
    const [search,setsearch]=useSearchParams();
   /*  console.log(search.get('age'));
    console.log(search.get('city')); */
    const age=search.get("age")
    const city=search.get("city")
    return(
        <div>
            <h1>Filter Page</h1>
            <h3>Your Age Is {age}</h3>
            <h3>Your city Is {city}</h3>
            <input type="text" onChange={(e)=>setsearch({text:e.target.value,age:40})} placeholder="Set Text in query" />
            <button onClick={() => setsearch({ age: 40 })}>set age In Query Params</button>
        </div>
    )
}