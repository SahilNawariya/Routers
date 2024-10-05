import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function About() {
    return (
        <Container>
            <h1>About Page</h1>
            <p>This Is a About Page Of Our Awesome App</p>
            <p>and Here we are Learning Home Routes</p>
            <li><Link to="/RoutProps/anil's">anil</Link></li>
            <li><Link to="/RoutProps/peter">peter</Link></li>
            <Link to="/">Go to Home Page</Link>
        </Container>
    )
}