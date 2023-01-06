import React from 'react'
import {Link} from 'react-router-dom'

import Header from '../Header'
import Sidebar from '../Sidebar'

function likes() {
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
                                    <h1 className="page-title">Hi! Welcome To Likes</h1>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link href="#">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Sales Dashboard</li>
                                    </ol>
                                </div>
                                <div className="ms-auto pageheader-btn">
                                    <div className="btn-list">
                                        <Link href="#" className="btn btn-primary btn-icon text-white" data-bs-toggle="tooltip"
                                            title="Add order" data-bs-placement="top">
                                            <span>
                                                <i className="fe fe-shopping-cart"></i>
                                            </span>
                                        </Link>
                                        <Link href="#" className="btn btn-orange btn-icon text-white" data-bs-toggle="tooltip"
                                            title="Download" data-bs-placement="top">
                                            <span>
                                                <i className="fe fe-download"></i>
                                            </span>
                                        </Link>
                                        <Link href="#" className="btn btn-info btn-icon text-white" data-bs-toggle="tooltip"
                                            title="Add User" data-bs-placement="top">
                                            <span>
                                                <i className="fe fe-plus"></i>
                                            </span>
                                        </Link>
                                        <Link href="#" className="btn btn-secondary btn-icon text-white dropdown-toggle me-0"
                                            data-bs-toggle="dropdown">
                                            <span className="d-inline-block">
                                                <i className="fe fe-external-link"></i>
                                            </span> Export <span className="caret"></span>
                                        </Link>
                                        <div className="dropdown-menu" role="menu">
                                            <Link href="#" className="dropdown-item"><i className="bx bxs-file-pdf me-2"></i>Export as
                                                Pdf</Link>
                                            <Link href="#" className="dropdown-item"><i className="bx bxs-file-image me-2"></i>Export as
                                                Image</Link>
                                            <Link href="#" className="dropdown-item"><i className="bx bxs-file me-2"></i>Export as
                                                Excel</Link>
                                        </div>
                                    </div>
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

                            {/* <!-- Row 2--> */}
                            <div className="row">
                                <div className="col-xxl-3 col-sm-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row mb-1">
                                                <div className="col">
                                                    <p className="mb-2">Product Sold</p>
                                                    <h3 className="mb-0 number-font">57,865</h3>
                                                </div>
                                                <div className="col-auto mb-0">
                                                    <div className="dash-icon text-orange">
                                                        <i className="bx bxs-shopping-bags fs-22"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="fs-12 text-success">
                                                <strong>2.6%</strong>
                                                <i className="mdi mdi-arrow-up"></i>
                                            </span>
                                            <span className="text-muted fs-12 ms-0 mt-1">than
                                                last week
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-sm-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row mb-1">
                                                <div className="col">
                                                    <p className="mb-2">Total Balance</p>
                                                    <h3 className="mb-0 number-font">$2,156</h3>
                                                </div>
                                                <div className="col-auto mb-0">
                                                    <div className="dash-icon text-secondary1">
                                                        <i className="bx bxs-wallet fs-22"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="fs-12 text-danger">
                                                <strong>0.06%</strong>
                                                <i className="mdi mdi-arrow-down"></i>
                                            </span>
                                            <span className="text-muted fs-12 ms-0 mt-1">than
                                                last week
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-sm-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row mb-1">
                                                <div className="col">
                                                    <p className="mb-2">Sales Profit</p>
                                                    <h3 className="mb-0 number-font">$12,105</h3>
                                                </div>
                                                <div className="col-auto mb-0">
                                                    <div className="dash-icon text-secondary">
                                                        <i className="bx bxs-badge-dollar fs-22"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="fs-12 text-danger">
                                                <strong>0.15%</strong>
                                                <i className="mdi mdi-arrow-down"></i>
                                            </span>
                                            <span className="text-muted fs-12 ms-0 mt-1">than
                                                last week
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-sm-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row mb-1">
                                                <div className="col">
                                                    <p className="mb-2">Total Expenses</p>
                                                    <h3 className="mb-0 number-font">$4,673</h3>
                                                </div>
                                                <div className="col-auto mb-0">
                                                    <div className="dash-icon text-warning">
                                                        <i className="bx bxs-credit-card-front fs-22"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="fs-12 text-success">
                                                <strong>1.05%</strong>
                                                <i className="mdi mdi-arrow-up"></i>
                                            </span>
                                            <span className="text-muted fs-12 ms-0 mt-1">than
                                                last week
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Row-2 End --> */}

                            {/* <!-- ROW-3 --> */}
                            <div className="row">
                                <div className="col-lg-5 col-md-12 col-sm-12 col-xl-3">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Sales By Category</h3>
                                        </div>
                                        <div className="card-body">
                                            <div className="canvasd">
                                                <canvas id="canvasDoughnut1" className="chartsh h-315"></canvas>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-12 col-sm-12 col-xl-9">
                                    <div className="card overflow-hidden">
                                        <div className="card-header">
                                            <h3 className="card-title">Monthly Sales Statistics</h3>
                                        </div>
                                        <div className="card-body">
                                            <div className="chartjs-demo">
                                                <canvas id="sales" className="chart-dropshadow"></canvas>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- ROW-3 END --> */}

                            {/* <!-- Row-4 --> */}
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-4">
                                    <div className="card overflow-hidden">
                                        <div className="card-body pb-0">
                                            <div className="">
                                                <div className="d-flex">
                                                    <div className="">
                                                        <p className="mb-2">Monthly Sales</p>
                                                        <h2 className="mb-1  number-font">42,567</h2>
                                                        <p className="text-muted fs-12 mb-0"><span
                                                                className="text-success me-2">(+43%)</span> than Last week</p>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <i className="bx bxs-shopping-bags fs-30 text-primary"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="chart-wrapper">
                                            <canvas id="widgetChart1" className="overflow-hidden"></canvas>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4">
                                    <div className="card overflow-hidden">
                                        <div className="card-header">
                                            <h3 className="card-title">Sales Overview</h3>
                                        </div>
                                        <div className="card-body">
                                            <div className="mb-5">
                                                <p className="mb-2">Total Profit<span className="float-end"><b>51,234</b><span
                                                            className="text-muted ms-1">(80%)</span></span></p>
                                                <div className="progress h-1">
                                                    <div className="progress-bar bg-primary" role="progressbar"></div>
                                                </div>
                                            </div>
                                            <div className="mb-5">
                                                <p className="mb-2">Total Income<span className="float-end"><b>12,786</b><span
                                                            className="text-muted ms-1">(50%)</span></span></p>
                                                <div className="progress h-1">
                                                    <div className="progress-bar bg-secondary" role="progressbar"></div>
                                                </div>
                                            </div>
                                            <div className="mb-0">
                                                <p className="mb-2">Total Expenses<span className="float-end"><b>32,167</b><span
                                                            className="text-muted ms-1">(60%)</span></span></p>
                                                <div className="progress h-1">
                                                    <div className="progress-bar bg-secondary1" role="progressbar"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="">
                                                <p className="mb-2">Your Current Balance</p>
                                                <h3 className="mb-0 number-font">$32745.00</h3>
                                            </div>
                                            <div className="mt-3">
                                                <p className="mb-1 d-flex">
                                                    <span className=""><i className="bi bi-cash text-muted me-2 fs-16"></i></span>
                                                    <span className="fs-13 font-weight-normal text-muted me-2">Received Amount
                                                    </span> : <span className="ms-auto fs-14">+ 1,50,500</span>
                                                </p>
                                                <p className="mb-1 d-flex">
                                                    <span className=""><i
                                                        className="bi bi-credit-card me-2 fs-16 text-muted"></i></span>
                                                    <span className="fs-13 font-weight-normal text-muted me-2">Sent Amount </span> :
                                                    <span className="ms-auto fs-14">- 25,500</span>
                                                </p>
                                                <p className="d-flex mb-1">
                                                    <span className=""><i className="bi bi-bank2 me-2 fs-16 text-muted"></i></span>
                                                    <span className="fs-13 font-weight-normal text-muted me-2">Total Amount </span>
                                                    : <span className="ms-auto font-weight-semibold fs-15">$ 1,00,500</span>
                                                </p>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-6">
                                                    <Link className="btn btn-primary btn-block btn-rounded" href="#">Transfer</Link>
                                                </div>
                                                <div className="col-6">
                                                    <Link className="btn btn-secondary btn-rounded btn-block" href="#">Receive</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Row-4 End --> */}

                            {/* <!-- ROW-5 --> */}
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-8">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Recent Orders</h3>
                                        </div>
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                <table className="table table-bordered table-hover text-nowrap mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th>Customer</th>
                                                            <th>Invoice ID</th>
                                                            <th>Category</th>
                                                            <th>Date</th>
                                                            <th>Price</th>
                                                            <th>Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <img src="../assets/images/users/3.jpg" alt="profile-user"
                                                                    className="brround  avatar-sm w-32 me-2"/>
                                                                Vashti Riccio
                                                            </td>
                                                            <td>#89345</td>
                                                            <td>Sport Shooes</td>
                                                            <td>07-02-2020</td>
                                                            <td className="font-weight-semibold fs-15">$893</td>
                                                            <td>
                                                                <Link href="#" className="badge bg-danger">Pending</Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <img src="../assets/images/users/4.jpg" alt="profile-user"
                                                                    className="brround  avatar-sm w-32 me-2"/>
                                                                Harriett Lauver
                                                            </td>
                                                            <td>#39281</td>
                                                            <td>T-Shirt</td>
                                                            <td>12-01-2020</td>
                                                            <td className="font-weight-semibold fs-15">$254</td>
                                                            <td>
                                                                <Link href="#" className="badge bg-primary text-white">Delivered</Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <img src="../assets/images/users/5.jpg" alt="profile-user"
                                                                    className="brround  avatar-sm w-32 me-2"/>
                                                                Darci Faw
                                                            </td>
                                                            <td>#35825</td>
                                                            <td>Hand Bag</td>
                                                            <td>15-01-2020</td>
                                                            <td className="font-weight-semibold fs-15">$352</td>
                                                            <td>
                                                                <Link href="#" className="badge bg-primary text-white">Delivered</Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <img src="../assets/images/users/6.jpg" alt="profile-user"
                                                                    className="brround  avatar-sm w-32 me-2"/>
                                                                Jamie Norville
                                                            </td>
                                                            <td>#62391</td>
                                                            <td>Lather Watch</td>
                                                            <td>10-01-2020</td>
                                                            <td className="font-weight-semibold fs-15">$643</td>
                                                            <td>
                                                                <Link href="#" className="badge bg-danger">Pending</Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <img src="../assets/images/users/7.jpg" alt="profile-user"
                                                                    className="brround  avatar-sm w-32 me-2"/>
                                                                Danae Kaba
                                                            </td>
                                                            <td>#92481</td>
                                                            <td>Laptop</td>
                                                            <td>07-01-2020</td>
                                                            <td className="font-weight-semibold fs-15">$392</td>
                                                            <td>
                                                                <Link href="#" className="badge bg-primary text-white">Completed</Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <img src="../assets/images/users/8.jpg" alt="profile-user"
                                                                    className="brround  avatar-sm w-32 me-2"/>
                                                                Jeromy Tricarico
                                                            </td>
                                                            <td>#29381</td>
                                                            <td>Office Chair</td>
                                                            <td>31-02-2020</td>
                                                            <td className="font-weight-semibold fs-15">$295</td>
                                                            <td>
                                                                <Link href="#" className="badge bg-danger">Pending</Link>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Recent Activity</h3>
                                        </div>
                                        <div className="card-body">
                                            <div className="activity-block">
                                                <ul className="task-list user-tasks">
                                                    <li>
                                                        <span className="avatar avatar-md brround cover-image task-icon1"
                                                            data-image-src="../assets/images/users/1.jpg"></span>
                                                        <h6>Successful Purchase<small className="float-end text-muted fs-12">29 Mar
                                                                2020</small></h6>
                                                        <span className="text-muted fs-11">Order ID: #4567</span>
                                                    </li>
                                                    <li>
                                                        <span className="avatar avatar-md brround cover-image task-icon1"
                                                            data-image-src="../assets/images/users/2.jpg"></span>
                                                        <h6>New Registered Seller<small className="float-end text-muted fs-12">25
                                                                Mar 2020</small></h6>
                                                        <span className="text-muted fs-11">User ID: #8976</span>
                                                    </li>
                                                    <li>
                                                        <span
                                                            className="avatar avatar-md brround cover-image task-icon1 bg-pink">H</span>
                                                        <h6>Order Verification<small className="float-end text-muted fs-12">14 Feb
                                                                2020</small></h6>
                                                        <span className="text-muted fs-11">Order ID: #6290</span>
                                                    </li>
                                                    <li>
                                                        <span className="avatar avatar-md brround cover-image task-icon1"
                                                            data-image-src="../assets/images/users/8.jpg"></span>
                                                        <h6>New Item Added<small className="float-end text-muted fs-12">02 Feb
                                                                2020</small></h6>
                                                        <span className="text-muted fs-11">Item ID: #0235</span>
                                                    </li>
                                                    <li>
                                                        <span className="avatar avatar-md brround cover-image task-icon1"
                                                            data-image-src="../assets/images/users/9.jpg"></span>
                                                        <h6>Purchase Cancellation<small className="float-end text-muted fs-12">28
                                                                Jan 2020</small></h6>
                                                        <span className="text-muted fs-11">Order ID: #1905</span>
                                                    </li>
                                                    <li className="mb-0">
                                                        <span
                                                            className="avatar avatar-md brround cover-image task-icon1 bg-success">M</span>
                                                        <h6>Overdue Shipments<small className="float-end text-muted fs-12">25 Jan
                                                                2020</small></h6>
                                                        <span className="text-muted fs-11">Order ID: #8902</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- ROW-5 END --> */}

                            {/* <!-- ROW-6 --> */}
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-5 col-xl-4">
                                    <div className="card overflow-hidden">
                                        <div className="card-header">
                                            <h3 className="card-title">New Customers</h3>
                                        </div>
                                        <div className="content list-group-flush">
                                            <div className="list-group-item d-flex  align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md brround cover-image"
                                                        data-image-src="../assets/images/users/1.jpg"></span>
                                                </div>
                                                <div className="">
                                                    <div className="font-weight-semibold">Mozelle Belt</div>
                                                    <small className="text-muted">Web Designer
                                                    </small>
                                                </div>
                                                <div className="ms-auto">
                                                    <Link href="#" className="badge bg-success text-white">Paid</Link>
                                                </div>
                                            </div>
                                            <div className="list-group-item d-flex  align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md brround cover-image"
                                                        data-image-src="../assets/images/users/13.jpg"></span>
                                                </div>
                                                <div className="">
                                                    <div className="font-weight-semibold">Thomos</div>
                                                    <small className="text-muted">Web Designer
                                                    </small>
                                                </div>
                                                <div className="ms-auto">
                                                    <Link href="#" className="badge bg-success text-white">Paid</Link>
                                                </div>
                                            </div>
                                            <div className="list-group-item d-flex  align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md brround cover-image"
                                                        data-image-src="../assets/images/users/14.jpg"></span>
                                                </div>
                                                <div className="">
                                                    <div className="font-weight-semibold">Harry Dyer</div>
                                                    <small className="text-muted">Administrator</small>
                                                </div>
                                                <div className="ms-auto">
                                                    <Link href="#" className="badge bg-danger text-white">Pending</Link>
                                                </div>
                                            </div>
                                            <div className="list-group-item d-flex  align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md brround cover-image"
                                                        data-image-src="../assets/images/users/12.jpg"></span>
                                                </div>
                                                <div className="">
                                                    <div className="font-weight-semibold">Anney Clair</div>
                                                    <small className="text-muted">Administrator</small>
                                                </div>
                                                <div className="ms-auto">
                                                    <Link href="#" className="badge bg-success text-white">Paid</Link>
                                                </div>
                                            </div>
                                            <div className="list-group-item d-flex  align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md brround cover-image"
                                                        data-image-src="../assets/images/users/6.jpg"></span>
                                                </div>
                                                <div className="">
                                                    <div className="font-weight-semibold">Steven Fraser</div>
                                                    <small className="text-muted">Manager
                                                    </small>
                                                </div>
                                                <div className="ms-auto">
                                                    <Link href="#" className="badge bg-danger text-white">Pending</Link>
                                                </div>
                                            </div>
                                            <div className="list-group-item d-flex  align-items-center border-bottom-0">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md brround cover-image"
                                                        data-image-src="../assets/images/users/7.jpg"></span>
                                                </div>
                                                <div className="">
                                                    <div className="font-weight-semibold">Nicola Parsons</div>
                                                    <small className="text-muted">Web Developer
                                                    </small>
                                                </div>
                                                <div className="ms-auto">
                                                    <Link href="#" className="badge bg-success text-white">Paid</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- COL END --> */}
                                <div className="col-lg-7 col-md-12 col-sm-12 col-xl-8">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Top Selling Products</h3>
                                        </div>
                                        <div className="">
                                            <div className="table-responsive">
                                                <table
                                                    className="table card-table table-vcenter text-nowrap align-items-center mb-0">
                                                    <thead className="">
                                                        <tr>
                                                            <th>Product Name</th>
                                                            <th>Category</th>
                                                            <th>Price</th>
                                                            <th>Sold</th>
                                                            <th>Status</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <img src="../assets/images/media/products/1.jpg" alt="img"
                                                                    className="h-7 w-7 br-5"/>
                                                                <p className="d-inline-block align-middle mb-0 ms-1">
                                                                    <Link href="#"
                                                                        className="d-inline-block align-middle mb-0 product-name text-dark font-weight-semibold">Chair</Link>
                                                                
                                                                    <span className="text-muted fs-12">wooden chair</span>
                                                                </p>
                                                            </td>
                                                            <td>Home Accessories</td>
                                                            <td className="font-weight-semibold">$59.00</td>
                                                            <td>261</td>
                                                            <td>
                                                                <div className="mt-sm-1 d-block">
                                                                    <span className="badge bg-danger-transparent text-danger">Out of stock</span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <Link className="btn btn-sm border br-5 me-1 mb-2 mb-xl-0"
                                                                    data-bs-toggle="tooltip" data-bs-original-title="Delete"><i
                                                                        className="fa fa-trash-o fs-15"></i></Link>
                                                                <Link className="btn btn-sm  border br-5  	mb-2 mb-xl-0"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-original-title="Save to Wishlist"><i
                                                                        className="fa fa-heart-o fs-15"></i></Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <img src="../assets/images/media/products/7.jpg" alt="img"
                                                                    className="h-7 w-7 br-5"/>
                                                                <p className="d-inline-block align-middle mb-0 ms-1">
                                                                    <Link href="#"
                                                                        className="d-inline-block align-middle mb-0 product-name text-dark font-weight-semibold">Small Pot</Link>
                                                                    
                                                                    <span className="text-muted fs-12">Pot</span>
                                                                </p>
                                                            </td>
                                                            <td>Home decorators</td>
                                                            <td className="font-weight-semibold">$45.00</td>
                                                            <td>149</td>
                                                            <td>
                                                                <div className="mt-sm-1 d-block">
                                                                    <span className="badge bg-success-transparent text-success">In Stock</span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <Link className="btn btn-sm mb-2 mb-xl-0 border br-5 me-1"
                                                                    data-bs-toggle="tooltip" data-bs-original-title="Delete"><i
                                                                        className="fa fa-trash-o fs-15"></i></Link>
                                                                <Link className="btn btn-sm mb-2 mb-xl-0 border br-5"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-original-title="Save to Wishlist"><i
                                                                        className="fa fa-heart-o fs-15"></i></Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <img src="../assets/images/media/products/2.jpg" alt="img"
                                                                    className="h-7 w-7 br-5"/>
                                                                <p className="d-inline-block align-middle mb-0 ms-1">
                                                                    <Link href="#"
                                                                        className="d-inline-block align-middle mb-0 product-name text-dark font-weight-semibold">T-Shirt</Link>
                                                                    
                                                                    <span className="text-muted fs-12">Half Slevees</span>
                                                                </p>
                                                            </td>
                                                            <td>Men Wear</td>
                                                            <td className="font-weight-semibold">$123.00</td>
                                                            <td>138</td>
                                                            <td>
                                                                <div className="mt-sm-1 d-block">
                                                                    <span className="badge bg-success-transparent text-success">In Stock</span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <Link className="btn btn-sm mb-2 border br-5 me-1 mb-xl-0"
                                                                    data-bs-toggle="tooltip" data-bs-original-title="Delete"><i
                                                                        className="fa fa-trash-o fs-15"></i></Link>
                                                                <Link className="btn btn-sm mb-2  border br-5 mb-xl-0"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-original-title="Save to Wishlist"><i
                                                                        className="fa fa-heart-o fs-15"></i></Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <img src="../assets/images/media/products/8.jpg" alt="img"
                                                                    className="h-7 w-7 br-5"/>
                                                                <p className="d-inline-block align-middle mb-0 ms-1">
                                                                    <Link href="#"
                                                                        className="d-inline-block align-middle mb-0 product-name text-dark font-weight-semibold">Shoes</Link>
                                                                    
                                                                    <span className="text-muted fs-12">Causal Shoe</span>
                                                                </p>
                                                            </td>
                                                            <td>Foot Wear</td>
                                                            <td className="font-weight-semibold">$123.00</td>
                                                            <td>123</td>
                                                            <td>
                                                                <div className="mt-sm-1 d-block">
                                                                    <span className="badge bg-success-transparent text-success">In Stock</span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <Link className="btn btn-sm mb-2 border br-5 me-1 mb-xl-0"
                                                                    data-bs-toggle="tooltip" data-bs-original-title="Delete"><i
                                                                        className="fa fa-trash-o fs-15"></i></Link>
                                                                <Link className="btn btn-sm mb-2 mb-xl-0 border br-5 "
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-original-title="Save to Wishlist"><i
                                                                        className="fa fa-heart-o fs-15"></i></Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <img src="../assets/images/media/products/9.jpg" alt="img"
                                                                    className="h-7 w-7 br-5"/>
                                                                <p className="d-inline-block align-middle mb-0 ms-1">
                                                                    <Link href="#"
                                                                        className="d-inline-block align-middle mb-0 product-name text-dark font-weight-semibold">Mobile</Link>
                                                                    
                                                                    <span className="text-muted fs-12">smart phone</span>
                                                                </p>
                                                            </td>
                                                            <td>Electronic gadgets</td>
                                                            <td className="font-weight-semibold">$98.00</td>
                                                            <td>37</td>
                                                            <td>
                                                                <div className="mt-sm-1 d-block">
                                                                    <span className="badge bg-danger-transparent text-danger">Out of Stock</span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <Link className="btn btn-sm mb-2 mb-xl-0 border br-5 me-1"
                                                                    data-bs-toggle="tooltip" data-bs-original-title="Delete"><i
                                                                        className="fa fa-trash-o fs-15"></i></Link>
                                                                <Link className="btn btn-sm mb-2 mb-xl-0 border br-5"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-original-title="Save to Wishlist"><i
                                                                        className="fa fa-heart-o fs-15"></i></Link>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- ROW-6 END --> */}

                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default likes
