import React from 'react'
import {Link} from 'react-router-dom'

import Header from './Header'
import Sidebar from './Sidebar'

function Index() {
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
                                    <h1 className="page-title">Hi! Welcome User</h1>
                                </div>
                            </div>
                            {/* <!-- PAGE-HEADER END --> */}

                            {/* <!-- ROW-1 --> */}
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card  banner">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-xl-3 col-lg-3 text-center mb-3 mb-lg-0">
                                                    <img src="../assets/images/pngs/profit.png" alt="img" className="w-95"/>
                                                </div>
                                                <div className="col-xl-9 col-lg-9 ps-lg-0">
                                                    <div className="row">
                                                        <div className="col-xl-7 col-lg-6">
                                                            <div className="text-start text-white mt-xl-4">
                                                                <h3 className="font-weight-semibold">Congratulations Steven</h3>
                                                                <h4 className="font-weight-normal">You are Reached your targeted
                                                                    milestone</h4>
                                                                <p className="mb-lg-0 text-white-50">If you are going to use a
                                                                    passage of Lorem Ipsum, you need to be sure there isn't
                                                                    anything embarrassing hidden in the middle of text.</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-5 col-lg-6 text-lg-center mt-xl-4">
                                                            <h5 className="font-weight-semibold mb-1 text-white">This Month Sales
                                                                Profit Today</h5>
                                                            <h2 className="mb-3 number-font text-white">$10M</h2>
                                                            <div className="btn-list mb-xl-0">
                                                                <Link href="#" className="btn btn-pink mb-xl-0">Check Details</Link>
                                                                <Link href="#" className="btn btn-white mb-xl-0" id="skip">No,
                                                                    Thanks</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- ROW-1 End--> */}


                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Index
