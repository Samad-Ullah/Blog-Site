import "./Register.scss"
import { Link } from "react-router-dom"

function Register() {
    return (
        <div className="register">
             <h1>Register</h1>
            <form className="register_form">
            <label className="label">UserName</label>
                <input className="input" type="text" placeholder="Enter your username here...."></input>
                <br></br>
                <label className="label">Email</label>
                <input className="input" type="text" placeholder="Enter your email here...."></input>
                <br></br>
                <label className="label">Password</label>
                <input className="input" type="password" placeholder="Enter your password here...."></input>
                <br></br>
                <button className="register_btn">Register</button>
            </form>
            <Link to="/login">
            <button className="login_btn">Login</button>
            </Link>
            
            
        </div>
    )
}

export default Register
