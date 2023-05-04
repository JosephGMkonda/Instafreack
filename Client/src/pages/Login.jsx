
import { useContext,useRef } from 'react'
import '../styles/login.css'
import { LoginCall } from '../APICalls'
import {AuthContext} from '../context/AuthContext'
import {CircularProgress} from '@material-ui/core'


function Login() {
  const username = useRef()
  const password = useRef()
  const {user,isFetching,error,dispatch} = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault()
   
   LoginCall({username: username.current.value,password: password.current.value},dispatch);
  
  }
  console.log(user)
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginTop">
                <h3 className="loginLogo">Instafreack</h3>
            </div>
            <form className="loginBox" onSubmit={handleClick}>
                <input 
                placeholder="Username" 
                required
                type="text" className="Input" 
                 ref={username}/>
                <input 
                placeholder="Password" 
                required
                minLength="6"
                type="password" 
                className="Input"
                 ref={password}/>
                <button className="loginButton" disabled={isFetching}>{isFetching ? <CircularProgress color='white'/> : "Log In"} </button>
                <span className="loginForgot">Forgot Password?</span>
                <button className="registerButton">{isFetching ? <CircularProgress color='white'/> : "Create a New Account"}</button>
            </form>
        </div>
    </div>
  )
}

export default Login