import { Container, NavNavLink } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import '../styles/styles.css'
export default function NavBar(){
    const clear=()=>{
        localStorage.clear('login');
        console.log("sahilbbniobiob");
        
    }
    return(
        <div>
            <ul className="navebar">
                
                <li><NavLink className="navlink" to="/">Home</NavLink></li>
                <li><NavLink className="navlink" to="/about">About</NavLink></li>
                <li><NavLink className="navlink" to="/Login">Login</NavLink></li>
                <li><NavLink className="navlink" to="/Filter">filters</NavLink></li>
                <li><NavLink className="navlink" to="/Contact">Contact US</NavLink></li>
                <li><NavLink className="navlink" onClick={() =>clear()}>Logout</NavLink></li>
                  
            </ul>
        </div>
        
    )
 
}
/* style={({ isActive }) => { return { backgroundColor: 'green' } } */