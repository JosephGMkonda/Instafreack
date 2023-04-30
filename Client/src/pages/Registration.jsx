
import '../styles/registration.css'

function Registration() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginTop">
                <h3 className="loginLogo">Instafreack</h3>
            </div>
            <div className="loginBox">
                <input placeholder="Username" type="text" className="Input" />
                <input placeholder="Email" type="password" className="Input" />
                <input placeholder="Password" type="password" className="Input" />
                <input placeholder="Password Again" type="password" className="Input" />
                
                <button className="loginButton">Sign Up</button>
              
                <button className="registerButton">Log into Account</button>
            </div>
        </div>
    </div>
  )
}

export default Registration