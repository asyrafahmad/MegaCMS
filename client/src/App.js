// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="App">
      <div className="error-image">

        <div id="global-loader">
          <img src="../assets/images/loader.svg" className="loader-img" alt="Loader"/>
        </div>

        <div className="page">
          <div>
            <div className="col col-login mx-auto mt-7">
              <div className="text-center">
                <a href="index.html"><img src="../public/assets/images/brand/logo.png" className="header-brand-img" alt=""/></a>
              </div>
            </div>
            <div className="container-login100">
              <div className="wrap-login100 p-6">
                <form className="login100-form validate-form">
                  <span className="login100-form-title">
                    Login
                  </span>
                  <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                    <input className="input100" type="text" name="email" placeholder="Email"></input>
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                      <i className="fe fe-mail"></i>
                    </span>
                  </div>
                  <div className="wrap-input100 validate-input" data-validate = "Password is required">
                    <input className="input100" type="password" name="pass" placeholder="Password"></input>
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                      <i className="fe fe-lock"></i>
                    </span>
                  </div>
                  <div className="text-center pt-1">
                    <p className="mb-0"><a href="forgot-password.html" className="text-primary ms-1">Forgot Password?</a></p>
                  </div>
                  <div className="container-login100-form-btn">
                    <a href="index.html" className="login100-form-btn btn-primary">
                      Login
                    </a>
                  </div>
                  <div className="text-center pt-3">
                    <p className="text-dark mb-0">Not a member?<a href="register.html" className="text-primary ms-1"> Sign Up</a></p>
                  </div>
                  <div className=" flex-c-m text-center mt-2">
                    <p className="text-muted">Or</p>
                    <div className="btn-list">
                      <a className="btn btn-icon bg-danger-transparent"><i className="fa fa-google text-danger"></i></a>
                      <a className="btn btn-icon bg-primary-transparent"><i className="fa fa-facebook text-primary"></i></a>
                      <a className="btn btn-icon bg-info-transparent"><i className="fa fa-twitter text-info"></i></a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
