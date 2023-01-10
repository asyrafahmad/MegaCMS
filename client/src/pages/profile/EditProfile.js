import React from 'react'
import {Link} from 'react-router-dom'

import Header from '../Header'
import Sidebar from '../Sidebar'

import { useEffect, useState } from "react"
import axios from 'axios'

function EditProfile() {

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
                                            <input type="text" className="form-control" name="email" placeholder="Email"></input>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <label className="col-md-3 form-label">Username :</label>
                                        <div className="col-md-9">
                                            <input type="text" className="form-control" name="username" placeholder="Username"></input>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <label className="col-md-3 form-label">Password :</label>
                                        <div className="col-md-9">
                                            <input type="password" className="form-control" name="password" placeholder="Password"></input>
                                        </div>
                                    </div>
                        

                                    {/* <!--Row--> */}
                                    <div className="row">
                                        <label className="col-md-3 form-label mb-4">Upload Picture :</label>
                                        <div className="col-md-9">
                                            <input id="demo" type="file" name="files" accept=".jpg, .png, image/jpeg, image/png" multiple="" className="ff_fileupload_hidden"></input><div className="ff_fileupload_wrap"><div className="ff_fileupload_dropzone_wrap"><button className="ff_fileupload_dropzone" type="button" aria-label="Browse, drag-and-drop, or paste files to upload"></button></div><table className="ff_fileupload_uploads"></table></div>
                                        </div>
                                    </div>
                                    {/* <!--End Row--> */}
                                </div>
                                <div className="card-footer">
                                    {/* <!--Row--> */}
                                    <div className="row">
                                        <div className="col-md-3"></div>
                                        <div className="col-md-9">
                                            <Link href="#" className="btn btn-primary">Update</Link>
                                        </div>
                                    </div>
                                    {/* <!--End Row--> */}
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

export default EditProfile
