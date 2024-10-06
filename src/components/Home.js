import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function Home(){
    const Navigate=useNavigate();
    const navToPage=(url)=>{
        Navigate(url)
    }
   /*  var navToPage=()=>{
        let x=true;
        if(x){
            Navigate('/about');
        }else{
            Navigate('/filter');
        }
    } */
    return(
        <div>
            <h1>Home Page</h1>
            <p>This Is a Home Page Of Our Awesome App</p>
            <p>and Here we are Learning About Routes</p>
            <Link to="/about">Go to About Page</Link><br/>
            <button onClick={() => navToPage('/about')}>Go to About</button><br />
            <button onClick={() => navToPage('/filter')}>Go to Filter Page</button><br />
            {/* <button onClick={() => navToPage()}>Go to About</button><br />
            <button onClick={() => navToPage()}>Go to Filter Page</button><br /> */}
           {/*  <button onClick={()=>Navigate('/about')}>Go to About</button><br />
            <button onClick={() => Navigate('/filter')}>Go to Filter Page</button><br /> */}
        </div>
    )
}