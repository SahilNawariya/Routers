import { Container, NavNavLink } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import '../styles/styles.css'
export default function NavBar(){

    return(
        <Container>
            <ul className="navebar">
                <li><NavLink className="navlink" to="/about">About</NavLink></li>
                <li><NavLink className="navlink" to="/">Home</NavLink></li>
                <li><NavLink className="navlink" to="/contact">Contact US</NavLink></li>
                  
            </ul>
        </Container>
        
    )
 
}
