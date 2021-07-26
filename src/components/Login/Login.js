import './Login.scss'
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="login">
            <h1>Login</h1>
            <form className="login_form">
                <label className="label">Email</label>
                <input className="input" type="text" placeholder="Enter your email here...."></input>
                <br></br>
                <label className="label">Password</label>
                <input className="input" type="password" placeholder="Enter your password here...."></input>
                <br></br>
                <button className="login_btn">Login</button>
            </form>
            <Link to="/register">
            <button className="register_btn">Register</button>
            </Link>
            
            
        </div>
    )
}

export default Login
