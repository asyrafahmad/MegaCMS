import React from 'react'
import {Link} from 'react-router-dom'

import { Formik, Form, Field} from "formik";

import * as Yup from 'yup';
import axios from "axios"

function Register() {

    const initialValues = {
        username: "",
        email: "",
        password: "",
    }

    const validationSchema = Yup.object().shape({
        username: Yup.string().min(3).max(15).required(),
        email: Yup.string().email().required(),
        password: Yup.string().min(3).max(20).required(),
    })

    const onSubmit = (data) => {
        axios
            .post("http://localhost:3002/authentication/register", data)
            .then((response) => {
                console.log(data)
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }


  return (
    <div className="App">
        <div className="error-image">
            <div className="page">
                <div>
                    {/* <!-- CONTAINER OPEN --> */}
                    <div className="col col-login mx-auto mt-7">
                        <div className="text-center">
                            <a href="index.html"><img src="../assets/images/brand/logo.png" className="header-brand-img" alt=""/></a>
                        </div>
                    </div>
                    <div className="container-login100">
                        <div className="wrap-login100 p-6">
                            <div className="login100-form validate-form">
                                <span className="login100-form-title">
                                    Registration
                                </span>
                                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                                    <Form className="formContainer">
                                        <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                                            <Field 
                                                className="input100"
                                                autoComplete="off"
                                                id="inputUsername" 
                                                name="username"
                                                placeholder="Username"
                                            />
                                            {/* <ErrorMessage name="username" component="span" /> */}
                                            <span className="focus-input100"></span>
                                            <span className="symbol-input100">
                                                <i className="fe fe-user"></i>
                                            </span>
                                        </div>
                                        <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                                            <Field 
                                                className="input100"
                                                autoComplete="off"
                                                id="inputEmail" 
                                                name="email"
                                                placeholder="Email"
                                            />
                                            {/* <ErrorMessage name="email" component="span" /> */}
                                            <span className="focus-input100"></span>
                                            <span className="symbol-input100">
                                                <i className="fe fe-mail"></i>
                                            </span>
                                        </div>
                                        <div className="wrap-input100 validate-input" data-validate = "Password is required">
                                            <Field 
                                                className="input100"
                                                autoComplete="off"
                                                type="password"
                                                id="inputPassword" 
                                                name="password" 
                                                placeholder="Password"
                                            />
                                            {/* <ErrorMessage name="password" component="span" /> */}
                                            <span className="focus-input100"></span>
                                            <span className="symbol-input100">
                                                <i className="fe fe-lock"></i>
                                            </span>
                                        </div>
                                        <div className="container-login100-form-btn">
                                            <button type="submit" className="login100-form-btn btn-primary">
                                                Register
                                            </button>
                                        </div>
                                    </Form>
                                </Formik>
                                <div className="text-center pt-3">
                                    <p className="text-dark mb-0">Already have account?
                                        <Link to="/login" className="text-primary ms-1">Sign In</Link>
                                    </p>
                                </div>
                                <div className=" flex-c-m text-center mt-3">
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
                    {/* <!-- CONTAINER CLOSED --> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register
