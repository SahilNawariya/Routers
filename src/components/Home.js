import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home(){
    return(
        <Container>
            <h1>Home Page</h1>
            <p>This Is a Home Page Of Our Awesome App</p>
            <p>and Here we are Learning About Routes</p>
            <Link to="/about">Go to About Page</Link>
        </Container>
    )
}