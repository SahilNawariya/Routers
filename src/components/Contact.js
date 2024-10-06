import { Link, Outlet } from "react-router-dom";

export default function Contact(){
    return(
        <div>
            <h1>Contact Us Page</h1>
            <h2>Here We Have Some Other business</h2>
            <Link to="company">Company</Link>
            <Link to="chanel">Chanel</Link>
            <Link to="other">Other</Link>
            <Outlet />
        </div>
    )
}