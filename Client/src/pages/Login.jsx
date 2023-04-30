
import '../styles/login.css'

function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginTop">
                <h3 className="loginLogo">Instafreack</h3>
            </div>
            <div className="loginBox">
                <input placeholder="Username" type="text" className="Input" />
                <input placeholder="Password" type="password" className="Input" />
                <button className="loginButton">Log In</button>
                <span className="loginForgot">Forgot Password?</span>
                <button className="registerButton">Create a New Account</button>
            </div>
        </div>
    </div>
  )
}

export default Login