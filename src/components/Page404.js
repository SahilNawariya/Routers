import React from "react";
import { Link } from "react-router-dom";
export default function Page404(){
    return(
        <div>
            <h1>404 Page</h1>
            <p>this Url is not Present</p>
            <Link to='/'>Back To Home Page</Link>
        </div>
    )
}