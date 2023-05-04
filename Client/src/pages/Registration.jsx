
import { useRef } from 'react'
import '../styles/registration.css'
import axios from 'axios'
import { useHistory } from 'react-router'

function Registration() {
  const username = useRef()
  const email = useRef()
  const password = useRef()
  const passwordAgain = useRef()
  const history = useHistory()
  

  const handleClick = async (e) => {
    e.preventDefault();

    if(passwordAgain.current.value !== password.current.value){
      password.current.setCustomValidity("passwords don't match")
    }else{
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value
      }

      try{
        await axios.post("/auth/register/", user);
        history.push("/login")


      }catch(err){
        console.log(err)

      }
    }

  }
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginTop">
                <h3 className="loginLogo">Instafreack</h3>
            </div>
            <form className="loginBox" onSubmit={handleClick}>

                <input 
                placeholder="Username" 
                ref={username} 
                type="text" 
                required
                className="Input" />

                <input 
                placeholder="Email" 
                ref={email} 
                type="email"
                required
                className="Input" />

                <input 
                placeholder="Password" 
                ref={password} 
                type="password" 
                minLength="6"
                required
                className="Input" />

                <input 
                placeholder="Password Again" 
                ref={passwordAgain}
                type="password"
                minLength="6" 
                required
                className="Input" />
                
                <button className="loginButton" type='submit'>Sign Up</button>
              
                <button className="registerButton">Log into Account</button>
            </form>
        </div>
    </div>
  )
}

export default Registration