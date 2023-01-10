import React from 'react'

import Header from '../Header'
import Sidebar from '../Sidebar'

import { useEffect, useState } from "react"
import axios from 'axios'

function Profile() {

    const [authState, setAuthState] = useState({
        email: "",
        username: "",
        id: 0,
        status: false
    })
    
    useEffect (() => {
        axios
            .get("http://localhost:3002/authentication/validation", {
                headers:{
                    accessToken: localStorage.getItem("accessToken")
                }
            })
            .then((response) => {

            if(response.data.error) {
                setAuthState({
                    ...authState, status: false
                })
            }
            else {
                setAuthState({
                    email: response.data.validToken.email,
                    username: response.data.validToken.username,
                    id: response.data.validToken.id,
                    status: true
                })
            }

            })
    })
    
  return (
    <div>
        <br/><br/><br/>
        <div className="page">
            <div className="page-main">

                {/* <!-- App-Header --> */}
                <Header />
                {/* <!-- App-Header --> */}
                
                {/* <!--APP-SIDEBAR--> */}
                <Sidebar />
                {/* <!--APP-SIDEBAR--> */}

                <div className="main-content app-content mt-0">
                    <div className="side-app">

                        <div className="main-container container-fluid">

                            {/* <!-- PAGE-HEADER --> */}
                            <div className="page-header">
                                <div>
                                    <h1 className="page-title">Hi! Welcome {authState.username}</h1>
                                </div>
                            </div>
                            {/* <!-- PAGE-HEADER END --> */}

                            <div className="card">
                                <div className="card-header">
                                    <div className="card-title">Profile</div>
                                </div>
                                <div className="card-body">
                                    <div className="row mb-4">
                                        <label className="col-md-3 form-label">Email :</label>
                                        <div className="col-md-9">
                                            <label className="col-md-5 form-label">{authState.email}</label>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <label className="col-md-3 form-label">Username :</label>
                                        <div className="col-md-9">
                                            <label  className="col-md-3 form-label">{authState.username}</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Profile
