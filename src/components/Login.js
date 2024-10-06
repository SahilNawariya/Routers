import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

export default function Login() {
    const handleLogin = () => {
        localStorage.setItem('login', true);
        Navigate('/')
        console.log("Lenovo");
    }
    const Navigate = useNavigate();
    useEffect(() => {
        let login = localStorage.getItem('login');
        if (login) {
            Navigate('/')
            console.log("hihjlnklnln");
        }
        
    })
    return (
        <div>
            <h1>Login Page</h1>
            <input type="text" /><br />
            <input type="text" /><br />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}