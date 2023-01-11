import axios from 'axios'
import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../helpers/AuthContext'

function Login() {

  const [ email, setUsername] = useState()
  const [ password, setPassword] = useState()

  const { setAuthState } = useContext(AuthContext)

  let navigate = useNavigate()

  const login = () => {
    
    const data = { email: email, password: password}

    axios
      .post("http://localhost:3002/authentication/login", data)
      .then((response) => {
      
        if (response.data.error) {
          alert(response.data.error)
        } else {
          // store token in web local storage
          localStorage.setItem("accessToken", response.data.Token)
          setAuthState({
            email: response.data.email,
            username: response.data.username,
            id: response.data.id,
            status: true
          })

          navigate("/index")
          // window.location.reload(true)

          console.log(response.data)
        }
      })
      .catch((error) => {
        alert(error)
      })
  }

  return (
    <div className="App">
      <div className="error-image">

        <div className="page">
          <div>
            <div className="col col-login mx-auto mt-7">
              <div className="text-center">
                <a href="index.html"><img src="../assets/images/brand/logo.png" className="header-brand-img" alt=""/></a>
              </div>
            </div>
            <div className="container-login100">
              <div className="wrap-login100 p-6">
                <div className="login100-form validate-form">
                  <span className="login100-form-title">
                    Login
                  </span>
                  <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                    <input className="input100" type="text" onChange={(event) => { setUsername(event.target.value) }}></input>
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                      <i className="fe fe-mail"></i>
                    </span>
                  </div>
                  <div className="wrap-input100 validate-input" data-validate = "Password is required">
                    <input className="input100" type="password" onChange={(event) => { setPassword(event.target.value) }}></input>
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                      <i className="fe fe-lock"></i>
                    </span>
                  </div>
                  <div className="text-center pt-1">
                    <p className="mb-0">
                      <Link href="forgot-password.html" className="text-primary ms-1">Forgot Password?</Link>
                    </p>
                  </div>
                  <div className="container-login100-form-btn">
                      <button type="submit" className="login100-form-btn btn-primary" onClick={login}>Login</button>
                    </div>    
                  {/* <Link to="/index"> 
                    <div className="container-login100-form-btn">
                      <div className="login100-form-btn btn-primary">Login</div>
                    </div>
                  </Link> */}
                  <div className="text-center pt-3">
                    <p className="text-dark mb-0">Not a member?
                      <Link to="/register" className="text-primary ms-1"> Sign Up</Link>
                    </p>
                  </div>
                  <div className=" flex-c-m text-center mt-2">
                    <p className="text-muted">Or</p>
                    <div className="btn-list">
                      <Link className="btn btn-icon bg-danger-transparent"><i className="fa fa-google text-danger"></i></Link>
                      <Link className="btn btn-icon bg-primary-transparent"><i className="fa fa-facebook text-primary"></i></Link>
                      <Link className="btn btn-icon bg-info-transparent"><i className="fa fa-twitter text-info"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;
