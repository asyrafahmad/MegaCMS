import React from 'react'


import {Link} from 'react-router-dom'

function Index() {
  return (
    <div>
            
            {/* <div id="global-loader">
                <img src="../assets/images/loader.svg" className="loader-img" alt="Loader"/>
            </div> */}
            
            <br/><br/><br/>
            <div className="page">
                <div className="page-main">

                    {/* <!-- App-Header --> */}
                    <div className="app-header header sticky">
                        <div className="container-fluid main-container">
                            <div className="d-flex">
                                <Link aria-label="Hide Sidebar" className="app-sidebar__toggle" data-bs-toggle="sidebar" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>
                                </Link>
                                <Link className="logo-horizontal " href="index.html">
                                    <img src="../assets/images/brand/logo.png" className="header-brand-img desktop-logo" alt="logo"/>
                                    <img src="../assets/images/brand/logo-3.png" className="header-brand-img light-logo1" alt="logo"/>
                                </Link>
                                
                                <div className="header-search d-none d-lg-flex">
                                    <div className="form-inline">
                                        <div className="search-element">
                                            <input type="search" className="form-control header-search" placeholder="Search…"
                                                aria-label="Search" tabIndex="1"></input>
                                            <button className="btn btn-primary-color">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24"
                                                    width="24">
                                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                                    <path
                                                        d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex order-lg-2 ms-auto header-right-icons header-search-icon">
                                    <button className="navbar-toggler navresponsive-toggler d-lg-none ms-auto" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent-4"
                                        aria-controls="navbarSupportedContent-4" aria-expanded="false"
                                        aria-label="Toggle navigation">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"
                                            className="navbar-toggler-icon">
                                            <path d="M0 0h24v24H0V0z" fill="none" />
                                            <path
                                                d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                                        </svg>
                                    </button>
                                    <div className="navbar navbar-collapse responsive-navbar p-0">
                                        <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
                                            <div className="d-flex">
                                                <div className="dropdown d-lg-none d-flex">
                                                    <Link href="#" className="nav-link icon" data-bs-toggle="dropdown">
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24"
                                                            width="24">
                                                            <path d="M0 0h24v24H0V0z" fill="none" />
                                                            <path
                                                                d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                                                        </svg>
                                                    </Link>
                                                    <div className="dropdown-menu header-search dropdown-menu-start">
                                                        <div className="input-group w-100 p-2">
                                                            <input type="text" className="form-control " placeholder="Search...."></input>
                                                            <button type="button" className="btn btn-primary position-relative">
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="24"
                                                                    viewBox="0 0 24 24" width="24" fill="#fff">
                                                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                                                    <path
                                                                        d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- SEARCH --> */}
                                                <div className="dropdown d-flex main-header-theme">
                                                    <Link className="nav-link icon layout-setting">
                                                        <span className="dark-layout fs-0">
                                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z" /></svg>

                                                        </span>
                                                        <span className="light-layout fs-0">
                                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M3.55 19.09L4.96 20.5L6.76 18.71L5.34 17.29M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12C18 8.68 15.31 6 12 6M20 13H23V11H20M17.24 18.71L19.04 20.5L20.45 19.09L18.66 17.29M20.45 5L19.04 3.6L17.24 5.39L18.66 6.81M13 1H11V4H13M6.76 5.39L4.96 3.6L3.55 5L5.34 6.81L6.76 5.39M1 13H4V11H1M13 20H11V23H13" /></svg>
                                                        </span>
                                                    </Link>
                                                </div>
                                                {/* <!-- Theme-Layout --> */}
                                                <div className="dropdown  d-flex">
                                                    <Link className="nav-link icon full-screen-link nav-link-bg">
                                                        <svg className="fullscreen-button" xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M9.5,13.09L10.91,14.5L6.41,19H10V21H3V14H5V17.59L9.5,13.09M10.91,9.5L9.5,10.91L5,6.41V10H3V3H10V5H6.41L10.91,9.5M14.5,13.09L19,17.59V14H21V21H14V19H17.59L13.09,14.5L14.5,13.09M13.09,9.5L17.59,5H14V3H21V10H19V6.41L14.5,10.91L13.09,9.5Z" /></svg>
                                                    </Link>
                                                </div>
                                                {/* <!-- FULL-SCREEN --> */}
                                                <div className="dropdown  d-flex notifications">
                                                    <Link className="nav-link icon" data-bs-toggle="dropdown">
                                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M10 21H14C14 22.1 13.1 23 12 23S10 22.1 10 21M21 19V20H3V19L5 17V11C5 7.9 7 5.2 10 4.3V4C10 2.9 10.9 2 12 2S14 2.9 14 4V4.3C17 5.2 19 7.9 19 11V17L21 19M17 11C17 8.2 14.8 6 12 6S7 8.2 7 11V18H17V11Z" /></svg>
                                                        <span className="pulse1 bg-success"></span>
                                                    </Link>
                                                    <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                        <div className="p-4 border-bottom">
                                                            <h5 className="border-bottom-0 mb-0 fs-16 font-weight-semibold ">Notifications</h5>
                                                        </div>
                                                        <div className="notifications-menu">
                                                            <Link className="dropdown-item d-flex" href="email-inbox.html">
                                                                <div className="me-3 notifyimg  bg-primary brround box-shadow-primary">
                                                                    <i className="fe fe-mail"></i>
                                                                </div>
                                                                <div className="w-80">
                                                                    <h6 className="notification-label mb-0 text-wrap">Commented on your post </h6>
                                                                    <span className="notification-subtext text-muted fs-12">3 days ago</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="dropdown-item d-flex" href="email-inbox.html">
                                                                <div className="me-3 notifyimg  bg-secondary brround box-shadow-secondary">
                                                                    <i className="fe fe-download"></i>
                                                                </div>
                                                                <div className="w-80">
                                                                    <h6 className="notification-label mb-0 text-wrap">New file has been Uploaded </h6>
                                                                    <span className="notification-subtext text-muted fs-12">3 days ago</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="dropdown-item d-flex" href="email-inbox.html">
                                                                <div className="me-3 notifyimg  bg-warning brround box-shadow-warning">
                                                                    <i className="fe fe-user"></i>
                                                                </div>
                                                                <div className="w-80">
                                                                    <h6 className="notification-label mb-0 text-wrap">User account has
                                                                        Updated</h6>
                                                                    <span className="notification-subtext text-muted fs-12">2 days ago</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="dropdown-item d-flex" href="email-inbox.html">
                                                                <div className="me-3 notifyimg  bg-danger brround box-shadow-danger">
                                                                    <i className="fe fe-shopping-cart"></i>
                                                                </div>
                                                                <div className="w-80">
                                                                    <h6 className="notification-label mb-0 text-wrap">New Order Recevied </h6>
                                                                    <span className="notification-subtext text-muted fs-12">1 hour ago</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="dropdown-item d-flex" href="email-inbox.html">
                                                                <div className="me-3 notifyimg  bg-info brround box-shadow-info">
                                                                    <i className="fe fe-server"></i>
                                                                </div>
                                                                <div className="w-80">
                                                                    <h6 className="notification-label mb-0 text-wrap">Server Rebooted </h6>
                                                                    <span className="notification-subtext text-muted fs-12">2 hour ago</span>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                        <div className="dropdown-divider m-0"></div>
                                                        <Link href="email-inbox.html" className="dropdown-item text-center">View all Notification</Link>
                                                    </div>
                                                </div>
                                                {/* <!-- NOTIFICATIONS --> */}
                                                <div className="dropdown  d-flex message">
                                                    <Link className="nav-link icon text-center" data-bs-toggle="dropdown">
                                                        <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M20 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H18L22 22V4C22 2.9 21.1 2 20 2M20 17.2L18.8 16H4V4H20V17.2Z" /></svg>
                                                        <span className="nav-unread badge bg-danger rounded-pill pulse">3</span>
                                                    </Link>
                                                    <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                        <div className="p-4 border-bottom">
                                                            <h5 className="border-bottom-0 mb-0 fs-16 font-weight-semibold ">Messages</h5>
                                                        </div>
                                                        <div className="message-menu message-menu-scroll message-menu">
                                                            <Link className="dropdown-item d-flex" href="chat.html">
                                                                {/* <img className="avatar-md brround me-3" src="../assets/images/users/1.jpg" alt="image"/> */}
                                                                <div className="w-90">
                                                                    <div className="d-flex">
                                                                        <h6 className="my-1 text-break">Madeleine</h6>
                                                                        <span className="text-muted ms-auto text-wrap fs-12"> 35 sec ago </span>
                                                                    </div>
                                                                    <span className="text-muted fs-13">Hey! there I' am available..</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="dropdown-item d-flex" href="chat.html">
                                                                {/* <img className="avatar-md brround me-3" src="../assets/images/users/2.jpg" alt="image"/> */}
                                                            <div className="w-90">
                                                                    <div className="d-flex">
                                                                    <h6 className="my-1 text-break">Anthony</h6>
                                                                    <span className="text-muted ms-auto text-wrap fs-12"> 15 mins ago </span>
                                                                </div>
                                                                <span className="text-muted fs-13">New product Launching...</span>
                                                            </div>
                                                        </Link>
                                                            <Link className="dropdown-item d-flex" href="chat.html">
                                                                {/* <img className="avatar-md brround me-3" src="../assets/images/users/9.jpg" alt="image"/> */}
                                                            <div className="w-90">
                                                                    <div className="d-flex">
                                                                    <h6 className="my-1 text-break">Olivia</h6>
                                                                    <span className="text-muted ms-auto text-wrap fs-12"> 2 hrs ago </span>
                                                                </div>
                                                                <span className="text-muted fs-13">New Schedule Realease...</span>
                                                            </div>
                                                        </Link>
                                                            <Link className="dropdown-item d-flex" href="chat.html">
                                                                {/* <img className="avatar-md brround me-3" src="../assets/images/users/18.jpg" alt="image"/> */}
                                                            <div className="w-90">
                                                                    <div className="d-flex">
                                                                    <h6 className="my-1 text-break">Sanderson</h6>
                                                                    <span className="text-muted ms-auto text-wrap fs-12"> 4 hrs ago </span>
                                                                </div>
                                                                <span className="text-muted fs-13">New Schedule Realease...</span>
                                                            </div>
                                                        </Link>
                                                        </div>
                                                        <div className="dropdown-divider m-0"></div>
                                                        <Link href="#" className="dropdown-item text-center">See all Messages</Link>
                                                    </div>
                                                </div>
                                                {/* <!-- MESSAGE-BOX --> */}
                                                <div className="dropdown  d-flex country-selector">
                                                    <Link href="#" className="d-flex nav-link icon leading-none" data-bs-toggle="dropdown"
                                                        aria-expanded="true">
                                                        <img src="../assets/images/flags/us_flag.jpg" alt="img"
                                                            className="align-self-center"/>
                                                    </Link>
                                                    <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                        <Link href="#" className="dropdown-item d-flex pb-2 px-4">
                                                            <img src="../assets/images/flags/french_flag.jpg" alt="flag-img"
                                                                className="avatar  me-3 align-self-center"/>
                                                            <div className="countries">
                                                                <strong>French</strong>
                                                            </div>
                                                        </Link>
                                                        <Link href="#" className="dropdown-item d-flex pb-2 px-4">
                                                            <img src="../assets/images/flags/germany_flag.jpg" alt="flag-img"
                                                                className="avatar  me-3 align-self-center"/>
                                                            <div className="countries">
                                                                <strong>Germany</strong>
                                                            </div>
                                                        </Link>
                                                        <Link href="#" className="dropdown-item d-flex pb-2 px-4">
                                                            <img src="../assets/images/flags/italy_flag.jpg" alt="flag-img"
                                                                className="avatar  me-3 align-self-center"/>
                                                            <div className="countries">
                                                                <strong>Italy</strong>
                                                            </div>
                                                        </Link>
                                                        <Link href="#" className="dropdown-item d-flex pb-2 px-4">
                                                            <img src="../assets/images/flags/russia_flag.jpg" alt="flag-img"
                                                                className="avatar  me-3 align-self-center"/>
                                                            <div className="countries">
                                                                <strong>Russia</strong>
                                                            </div>
                                                        </Link>
                                                        <Link href="#" className="dropdown-item d-flex pb-2 px-4">
                                                            <img src="../assets/images/flags/spain_flag.jpg" alt="flag-img"
                                                                className="avatar  me-3 align-self-center"/>
                                                            <div className="countries">
                                                                <strong>Spain</strong>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="dropdown profile-1 d-flex">
                                                    <Link href="#" data-bs-toggle="dropdown"
                                                        className="nav-link icon leading-none d-flex">
                                                        <img src="../assets/images/users/4.jpg" alt="profile-user"
                                                            className="avatar profile-user brround cover-image"/>
                                                    </Link>
                                                    <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                        <Link className="dropdown-item" href="profile.html">
                                                            <i className="dropdown-icon mdi mdi-account-outline"></i> My Profile
                                                        </Link>
                                                        <Link className="dropdown-item" href="profile.html">
                                                            <i className="dropdown-icon zmdi zmdi-edit"></i> Edit Profile
                                                        </Link>
                                                        <Link className="dropdown-item" href="settings.html">
                                                            <i className="dropdown-icon  mdi mdi-settings"></i> Settings
                                                        </Link>
                                                        <Link className="dropdown-item" href="email-inbox.html">
                                                            <span className="float-end"></span>
                                                            <i className="dropdown-icon mdi  mdi-message-outline"></i> Inbox
                                                        </Link>
                                                        <Link className="dropdown-item" href="email-compose.html">
                                                            <i className="dropdown-icon mdi mdi-comment-check-outline"></i> Message
                                                        </Link>
                                                        <Link className="dropdown-item" href="faq.html">
                                                            <i className="dropdown-icon mdi mdi-compass-outline"></i> Need help?
                                                        </Link>
                                                        <Link className="dropdown-item" href="login.html">
                                                            <i className="dropdown-icon mdi  mdi-logout-variant"></i> Sign out
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="dropdown  d-flex header-settings">
                                                    <Link href="#" className="nav-link icon " data-bs-toggle="sidebar-right"
                                                        data-bs-target=".sidebar-right">
                                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>
                                                    </Link>
                                                </div>
                                                {/* <!-- SIDE-MENU --> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- App-Header --> */}
                    
                    {/* <!--APP-SIDEBAR--> */}
                    <div className="sticky">
                        <div className="app-sidebar__overlay" data-bs-toggle="sidebar"></div>
                        <div className="app-sidebar">
                            <div className="side-header">
                                <Link className="header-brand1" href="index.html">
                                    <img src="../assets/images/brand/logo.png" className="header-brand-img desktop-logo" alt="logo"/>
                                    <img src="../assets/images/brand/logo-1.png" className="header-brand-img toggle-logo" alt="logo"/>
                                    <img src="../assets/images/brand/logo-2.png" className="header-brand-img light-logo" alt="logo"/>
                                    <img src="../assets/images/brand/logo-3.png" className="header-brand-img light-logo1" alt="logo"/>
                                </Link>
                            </div>
                            <div className="main-sidemenu">
                                <div className="slide-left disabled" id="slide-left"><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="#7b8191" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" />
                                    </svg></div>
                                    <ul className="side-menu">
                                        <li>
                                            <h3 className="sub-category">Main</h3>
                                        </li>
                                        <li className="slide is-expanded">
                                            <Link className="side-menu__item" data-bs-toggle="slide" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="side-menu__icon" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22" /></svg>
                                                <span className="side-menu__label">Dashboard</span><i className="angle fe fe-chevron-right"></i>
                                            </Link>
                                            <ul className="slide-menu">
                                                <li className="side-menu-label1"><Link href="">Dashboard</Link></li>
                                                <li><Link className="slide-item" href="index.html"><span>Sales Dashboard</span></Link></li>
                                                <li><Link className="slide-item" href="index2.html"><span>Marketing Dashboard</span></Link></li>
                                                <li><Link className="slide-item" href="index3.html"><span>App Dashboard</span></Link></li>
                                                <li><Link className="slide-item" href="index4.html"><span>LMS Dashboard</span></Link></li>
                                                <li><Link className="slide-item" href="index5.html"><span>Analytics Dashboard</span></Link></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h3 className="sub-category">Apps</h3>
                                        </li>
                                        <li className="slide">
                                            <Link className="side-menu__item" data-bs-toggle="slide" href="#">
                                                <svg  className="side-menu__icon" xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M16.7 4.5L19.5 7.3L16.7 10.1L13.9 7.3L16.7 4.5M9 5V9H5V5H9M19 15V19H15V15H19M16.7 1.7L11 7.3L16.7 13H13V21H21V13H16.7L22.3 7.3L16.7 1.7M11 3H3V11H11V3M9 15V19H5V15H9M11 13H3V21H11V13Z" /></svg>
                                                <span className="side-menu__label">Apps</span><i className="angle fe fe-chevron-right"></i>
                                            </Link>
                                            <ul className="slide-menu">
                                                <li className="side-menu-label1"><Link href="#">Apps</Link></li>
                                                <li><Link className="slide-item" href="widgets.html"><span>Widgets</span></Link></li>
                                                <li><Link className="slide-item" href="switcher.html"><span>Switcher</span></Link></li>
                                                <li className="sub-slide">
                                                    <Link className="sub-side-menu__item" data-bs-toggle="sub-slide" href="#"><span
                                                            className="sub-side-menu__label">Maps</span><i
                                                            className="sub-angle fa fa-angle-right"></i></Link>
                                                    <ul className="sub-slide-menu">
                                                        <li><Link className="sub-slide-item" href="maps-leaflet.html"> Leaflet Maps</Link></li>
                                                        <li><Link className="sub-slide-item" href="maps-mapel.html"> Mapel Maps</Link></li>
                                                        <li><Link className="sub-slide-item" href="maps-vector.html"> Vector Maps</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="sub-slide">
                                                    <Link className="sub-side-menu__item" data-bs-toggle="sub-slide" href="#"><span
                                                            className="sub-side-menu__label">Mails</span><i
                                                            className="sub-angle fa fa-angle-right"></i></Link>
                                                    <ul className="sub-slide-menu">
                                                        <li><Link className="sub-slide-item" href="email-compose.html"> Mail-Compose</Link></li>
                                                        <li><Link className="sub-slide-item" href="email-inbox.html"> Mail-Inbox</Link></li>
                                                        <li><Link className="sub-slide-item" href="email-view.html"> View-Mail</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h3 className="sub-category">Elements</h3>
                                        </li>
                                        <li className="slide">
                                            <Link className="side-menu__item" data-bs-toggle="slide" href="#">
                                                <svg className="side-menu__icon" xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M7,17L10.2,10.2L17,7L13.8,13.8L7,17M12,11.1A0.9,0.9 0 0,0 11.1,12A0.9,0.9 0 0,0 12,12.9A0.9,0.9 0 0,0 12.9,12A0.9,0.9 0 0,0 12,11.1M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" /></svg>
                                                <span className="side-menu__label">Components</span><i className="angle fe fe-chevron-right"></i>
                                            </Link>
                                            <ul className="slide-menu">
                                                <li className="side-menu-label1"><Link href="#">Components</Link></li>
                                                <li><Link href="cards.html" className="slide-item"> Cards design</Link></li>
                                                <li><Link href="calendar.html" className="slide-item"> Default calendar</Link></li>
                                                <li><Link href="calendar2.html" className="slide-item"> Full calendar</Link></li>
                                                <li><Link href="contacts.html" className="slide-item"> Contacts</Link></li>
                                                <li><Link href="collapse.html" className="slide-item"> Collapse</Link></li>
                                                <li><Link href="chat.html" className="slide-item"> Default Chat</Link></li>
                                                <li><Link href="notify.html" className="slide-item"> Notifications</Link></li>
                                                <li><Link href="sweetalert.html" className="slide-item"> Sweet alerts</Link></li>
                                                <li><Link href="rangeslider.html" className="slide-item"> Range slider</Link></li>
                                                <li><Link href="scroll.html" className="slide-item"> Content Scroll bar</Link></li>
                                                <li><Link href="loaders.html" className="slide-item"> Loaders</Link></li>
                                                <li><Link href="counters.html" className="slide-item"> Counters</Link></li>
                                                <li><Link href="rating.html" className="slide-item"> Rating</Link></li>
                                                <li><Link href="timeline.html" className="slide-item"> Timeline</Link></li>
                                                <li><Link href="treeview.html" className="slide-item"> Treeview</Link></li>
                                            </ul>
                                        </li>
                                        <li className="slide">
                                            <Link className="side-menu__item" data-bs-toggle="slide" href="#">
                                                <svg  className="side-menu__icon" xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M12 3C7.58 3 4 4.79 4 7V17C4 19.21 7.59 21 12 21S20 19.21 20 17V7C20 4.79 16.42 3 12 3M18 17C18 17.5 15.87 19 12 19S6 17.5 6 17V14.77C7.61 15.55 9.72 16 12 16S16.39 15.55 18 14.77V17M18 12.45C16.7 13.4 14.42 14 12 14C9.58 14 7.3 13.4 6 12.45V9.64C7.47 10.47 9.61 11 12 11C14.39 11 16.53 10.47 18 9.64V12.45M12 9C8.13 9 6 7.5 6 7S8.13 5 12 5C15.87 5 18 6.5 18 7S15.87 9 12 9Z" /></svg>
                                                <span className="side-menu__label">Elements</span><i className="angle fe fe-chevron-right"></i>
                                            </Link>
                                            <ul className="slide-menu">
                                                <li className="side-menu-label1"><Link href="#">Elements</Link></li>
                                                <li><Link href="alerts.html" className="slide-item"> Alerts</Link></li>
                                                <li><Link href="buttons.html" className="slide-item"> Buttons</Link></li>
                                                <li><Link href="dropdown.html" className="slide-item"> Dropdowns</Link></li>
                                                <li><Link href="colors.html" className="slide-item"> Colors</Link></li>
                                                <li><Link href="avatarsquare.html" className="slide-item"> Avatar-Square</Link></li>
                                                <li><Link href="avatar-round.html" className="slide-item"> Avatar-Rounded</Link></li>
                                                <li><Link href="avatar-radius.html" className="slide-item"> Avatar-Radius</Link></li>
                                                <li><Link href="list.html" className="slide-item"> Lists & ListGroups</Link></li>
                                                <li><Link href="tags.html" className="slide-item"> Tags</Link></li>
                                                <li><Link href="toast.html" className="slide-item"> Toast</Link></li>
                                                <li><Link href="offcanvas.html" className="slide-item"> Offcanvas</Link></li>
                                                <li><Link href="scrollspy.html" className="slide-item"> Scrollspy</Link></li>
                                                <li><Link href="pagination.html" className="slide-item"> Pagination</Link></li>
                                                <li><Link href="navigation.html" className="slide-item"> Navigation</Link></li>
                                                <li><Link href="typography.html" className="slide-item"> Typography</Link></li>
                                                <li><Link href="breadcrumbs.html" className="slide-item"> Breadcrumbs</Link></li>
                                                <li><Link href="badge.html" className="slide-item"> Badges</Link></li>
                                                <li><Link href="panels.html" className="slide-item"> Panels</Link></li>
                                                <li><Link href="thumbnails.html" className="slide-item"> Thumbnails</Link></li>
                                            </ul>
                                        </li>
                                        <li className="slide">
                                            <Link className="side-menu__item" data-bs-toggle="slide" href="#">
                                                <svg  className="side-menu__icon" xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L6.04,7.5L12,10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V9.21L13,12.58V19.29L19,15.91Z" /></svg>
                                                <span className="side-menu__label">Advanced UI</span>
                                                <i className="angle fe fe-chevron-right"></i>
                                            </Link>
                                            <ul className="slide-menu">
                                                <li className="side-menu-label1"><Link href="#">Advanced Elements</Link></li>
                                                <li><Link href="mediaobject.html" className="slide-item"> Media Object</Link></li>
                                                <li><Link href="accordion.html" className="slide-item"> Accordions</Link></li>
                                                <li><Link href="tabs.html" className="slide-item"> Tabs</Link></li>
                                                <li><Link href="modal.html" className="slide-item"> Modal</Link></li>
                                                <li><Link href="tooltipandpopover.html" className="slide-item"> Tooltip and popover</Link></li>
                                                <li><Link href="progress.html" className="slide-item"> Progress</Link></li>
                                                <li><Link href="carousel.html" className="slide-item"> Carousels</Link></li>
                                                <li><Link href="footers.html" className="slide-item"> Footers</Link></li>
                                                <li><Link href="users-list.html" className="slide-item"> User List</Link></li>
                                                <li><Link href="search.html" className="slide-item">Search</Link></li>
                                                <li><Link href="crypto-currencies.html" className="slide-item"> Crypto-currencies</Link></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h3 className="sub-category">Icons</h3>
                                        </li>
                                        <li className="slide">
                                            <Link className="side-menu__item" data-bs-toggle="slide" href="#">
                                                <svg className="side-menu__icon" xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2C17.5,2 22,6 22,11A6,6 0 0,1 16,17H14.2C13.9,17 13.7,17.2 13.7,17.5C13.7,17.6 13.8,17.7 13.8,17.8C14.2,18.3 14.4,18.9 14.4,19.5C14.5,20.9 13.4,22 12,22M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C12.3,20 12.5,19.8 12.5,19.5C12.5,19.3 12.4,19.2 12.4,19.1C12,18.6 11.8,18.1 11.8,17.5C11.8,16.1 12.9,15 14.3,15H16A4,4 0 0,0 20,11C20,7.1 16.4,4 12,4M6.5,10C7.3,10 8,10.7 8,11.5C8,12.3 7.3,13 6.5,13C5.7,13 5,12.3 5,11.5C5,10.7 5.7,10 6.5,10M9.5,6C10.3,6 11,6.7 11,7.5C11,8.3 10.3,9 9.5,9C8.7,9 8,8.3 8,7.5C8,6.7 8.7,6 9.5,6M14.5,6C15.3,6 16,6.7 16,7.5C16,8.3 15.3,9 14.5,9C13.7,9 13,8.3 13,7.5C13,6.7 13.7,6 14.5,6M17.5,10C18.3,10 19,10.7 19,11.5C19,12.3 18.3,13 17.5,13C16.7,13 16,12.3 16,11.5C16,10.7 16.7,10 17.5,10Z" /></svg>
                                                <span className="side-menu__label">Icons</span><i className="angle fe fe-chevron-right"></i>
                                            </Link>
                                            <ul className="slide-menu">
                                                <li className="side-menu-label1"><Link href="#">Icons</Link></li>
                                                <li><Link href="icons.html" className="slide-item"> Font Awesome</Link></li>
                                                <li><Link href="icons2.html" className="slide-item"> Material Design Icons</Link></li>
                                                <li><Link href="icons3.html" className="slide-item"> Simple Line Icons</Link></li>
                                                <li><Link href="icons4.html" className="slide-item"> Feather Icons</Link></li>
                                                <li><Link href="icons5.html" className="slide-item"> Ionic Icons</Link></li>
                                                <li><Link href="icons6.html" className="slide-item"> Flag Icons</Link></li>
                                                <li><Link href="icons7.html" className="slide-item"> pe7 Icons</Link></li>
                                                <li><Link href="icons8.html" className="slide-item"> Themify Icons</Link></li>
                                                <li><Link href="icons9.html" className="slide-item">Typicons Icons</Link></li>
                                                <li><Link href="icons10.html" className="slide-item">Weather Icons</Link></li>
                                                <li><Link href="icons11.html" className="slide-item">Bootstrap Icons</Link></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h3 className="sub-category">Pages</h3>
                                        </li>
                                        <li className="slide">
                                            <Link className="side-menu__item" data-bs-toggle="slide" href="#">
                                                <svg className="side-menu__icon" xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M12,18.54L19.37,12.8L21,14.07L12,21.07L3,14.07L4.62,12.81L12,18.54M12,16L3,9L12,2L21,9L12,16M12,4.53L6.26,9L12,13.47L17.74,9L12,4.53Z" /></svg>
                                                <span className="side-menu__label">Pages</span><i className="angle fe fe-chevron-right"></i>
                                            </Link>
                                            <ul className="slide-menu">
                                                <li className="side-menu-label1"><Link href="#">Pages</Link></li>
                                                <li><Link href="profile.html" className="slide-item"> Profile</Link></li>
                                                <li><Link href="gallery.html" className="slide-item"> Gallery</Link></li>
                                                <li><Link href="about.html" className="slide-item"> About Company</Link></li>
                                                <li><Link href="services.html" className="slide-item"> Services</Link></li>
                                                <li><Link href="faq.html" className="slide-item"> FAQS</Link></li>
                                                <li><Link href="terms.html" className="slide-item"> Terms</Link></li>
                                                <li><Link href="invoice.html" className="slide-item"> Invoice</Link></li>
                                                <li><Link href="pricing.html" className="slide-item"> Pricing Tables</Link></li>
                                                <li><Link href="settings.html" className="slide-item"> Settings</Link></li>
                                                <li className="sub-slide">
                                                    <Link className="sub-side-menu__item" data-bs-toggle="sub-slide" href="#.html"><span
                                                            className="sub-side-menu__label">Blog</span><i
                                                            className="sub-angle fa fa-angle-right"></i></Link>
                                                    <ul className="sub-slide-menu">
                                                        <li><Link className="sub-slide-item" href="blog.html"> Blog Page</Link></li>
                                                        <li><Link className="sub-slide-item" href="blog-details.html"> Blog Details</Link></li>
                                                        <li><Link className="sub-slide-item" href="blog-post.html"> Blog Post</Link></li>
                                                    </ul>
                                                </li>

                                                <li className="sub-slide">
                                                    <Link className="sub-side-menu__item" data-bs-toggle="sub-slide" href="#"><span
                                                            className="sub-side-menu__label">Charts</span><i
                                                            className="sub-angle fa fa-angle-right"></i></Link>
                                                    <ul className="sub-slide-menu">
                                                        <li><Link className="sub-slide-item" href="chart-chartist.html">Chart Js</Link></li>
                                                        <li><Link className="sub-slide-item" href="chart-flot.html"> Flot Charts</Link></li>
                                                        <li><Link className="sub-slide-item" href="chart-echart.html"> ECharts</Link></li>
                                                        <li><Link className="sub-slide-item" href="chart-morris.html"> Morris Charts</Link></li>
                                                        <li><Link className="sub-slide-item" href="chart-nvd3.html"> Nvd3 Charts</Link></li>
                                                        <li><Link className="sub-slide-item" href="charts.html"> C3 Bar Charts</Link></li>
                                                        <li><Link className="sub-slide-item" href="chart-line.html"> C3 Line Charts</Link></li>
                                                        <li><Link className="sub-slide-item" href="chart-donut.html"> C3 Donut Charts</Link></li>
                                                        <li><Link className="sub-slide-item" href="chart-pie.html"> C3 Pie charts</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="sub-slide">
                                                    <Link className="sub-side-menu__item" data-bs-toggle="sub-slide" href="#"><span
                                                            className="sub-side-menu__label">Tables</span><i
                                                            className="sub-angle fa fa-angle-right"></i></Link>
                                                    <ul className="sub-slide-menu">
                                                        <li><Link className="sub-slide-item" href="tables.html">Default table</Link></li>
                                                        <li><Link className="sub-slide-item" href="datatable.html"> Data Tables</Link></li>
                                                        <li><Link className="sub-slide-item" href="edit-table.html"> Edit Tables</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="sub-slide">
                                                    <Link className="sub-side-menu__item" data-bs-toggle="sub-slide" href="#"><span
                                                            className="sub-side-menu__label">Forms</span><i
                                                            className="sub-angle fa fa-angle-right"></i></Link>
                                                    <ul className="sub-slide-menu">
                                                        <li><Link className="sub-slide-item" href="form-elements.html"> Form Elements</Link></li>
                                                        <li><Link className="sub-slide-item" href="form-layouts.html"> Form Layouts</Link></li>
                                                        <li><Link className="sub-slide-item" href="form-editor.html"> Form Editor</Link></li>
                                                        <li><Link className="sub-slide-item" href="form-wizard.html"> Form Wizard</Link></li>
                                                        <li><Link className="sub-slide-item" href="form-validation.html"> Form Validation</Link></li>
                                                        <li><Link className="sub-slide-item" href="form-sizes.html"> Form Element Sizes</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="sub-slide">
                                                    <Link className="sub-side-menu__item" data-bs-toggle="sub-slide" href="#"><span
                                                            className="sub-side-menu__label">File Manager</span><i
                                                            className="sub-angle fa fa-angle-right"></i></Link>
                                                    <ul className="sub-slide-menu">
                                                        <li><Link className="sub-slide-item" href="file-manager.html"> File Manager</Link></li>
                                                        <li><Link className="sub-slide-item" href="filemanager-list.html"> File Manager List</Link></li>
                                                        <li><Link className="sub-slide-item" href="filemanager-details.html"> File Details</Link></li>
                                                        <li><Link className="sub-slide-item" href="file-attachments.html"> File Attachments</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link href="empty.html" className="slide-item"> Empty Page</Link></li>
                                            </ul>
                                        </li>
                                        <li className="slide">
                                            <Link className="side-menu__item" data-bs-toggle="slide" href="#">
                                                <svg className="side-menu__icon" xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M2,16H10V14H2M18,14V10H16V14H12V16H16V20H18V16H22V14M14,6H2V8H14M14,10H2V12H14V10Z" /></svg>
                                                <span className="side-menu__label">Submenu Items</span><i className="angle fe fe-chevron-right"></i>
                                            </Link>

                                            <ul className="slide-menu">
                                                <li className="side-menu-label1"><Link href="#">Submenu Items</Link></li>
                                                <li><Link href="#" className="slide-item"> Submenu-1</Link></li>
                                                <li className="sub-slide">
                                                    <Link className="sub-side-menu__item" data-bs-toggle="sub-slide" href="#"><span
                                                            className="sub-side-menu__label">Submenu-2</span><i
                                                            className="sub-angle fa fa-angle-right"></i></Link>
                                                    <ul className="sub-slide-menu">
                                                        <li><Link className="sub-slide-item" href="#"> Submenu-2.1</Link></li>
                                                        <li className="sub-slide2">
                                                            <Link className="sub-side-menu__item2" href="#" data-bs-toggle="sub-slide2"><span
                                                                    className="sub-side-menu__label2">Submenu-2.2</span><i
                                                                    className="sub-angle2 fe fe-chevron-right"></i></Link>
                                                            <ul className="sub-slide-menu2">
                                                                <li><Link href="#" className="sub-slide-item2"> Submenu-2.2.1</Link></li>
                                                                <li><Link href="#" className="sub-slide-item2"> Submenu-2.2.2</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li><Link className="sub-slide-item" href="#"> Submenu-2.3</Link></li>
                                                        <li><Link className="sub-slide-item" href="#"> Submenu-2.4</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h3 className="sub-category">E-Commerce</h3>
                                        </li>
                                        <li className="slide">
                                            <Link className="side-menu__item" data-bs-toggle="slide" href="#">
                                                <svg className="side-menu__icon" xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z" /></svg>
                                                <span className="side-menu__label">E-Commerce</span><i className="angle fe fe-chevron-right"></i>
                                            </Link>
                                            <ul className="slide-menu">
                                                <li className="side-menu-label1"><Link href="#">E-Commerce</Link></li>
                                                <li><Link href="shop.html" className="slide-item"> Shop</Link></li>
                                                <li><Link href="shop-description.html" className="slide-item">Product Details</Link></li>
                                                <li><Link href="cart.html" className="slide-item"> Shopping Cart</Link></li>
                                                <li><Link href="add-product.html" className="slide-item">Add Product</Link></li>
                                                <li><Link href="wishlist.html" className="slide-item">Wish List</Link></li>
                                                <li><Link href="checkout.html" className="slide-item"> Checkout</Link></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h3 className="sub-category">Custom & Error Pages</h3>
                                        </li>
                                        <li className="slide">
                                            <Link className="side-menu__item" data-bs-toggle="slide" href="#">
                                                <svg className="side-menu__icon" xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z" /></svg>
                                                <span className="side-menu__label">Custom Pages</span><i className="angle fe fe-chevron-right"></i>
                                            </Link>
                                            <ul className="slide-menu">
                                                <li className="side-menu-label1"><Link href="#">Custom Pages</Link></li>
                                                <li><Link href="login.html" className="slide-item"> Login</Link></li>
                                                <li><Link href="register.html" className="slide-item"> Register</Link></li>
                                                <li><Link href="forgot-password.html" className="slide-item"> Forgot Password</Link></li>
                                                <li><Link href="lockscreen.html" className="slide-item"> Lock screen</Link></li>
                                                <li><Link href="construction.html" className="slide-item"> Under Construction</Link></li>
                                            </ul>
                                        </li>
                                        <li className="slide">
                                            <Link className="side-menu__item" data-bs-toggle="slide" href="#">
                                                <svg className="side-menu__icon" xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M8.27,3L3,8.27V15.73L8.27,21H15.73C17.5,19.24 21,15.73 21,15.73V8.27L15.73,3M9.1,5H14.9L19,9.1V14.9L14.9,19H9.1L5,14.9V9.1M11,15H13V17H11V15M11,7H13V13H11V7" /></svg>
                                                <span className="side-menu__label">Error Pages</span><i className="angle fe fe-chevron-right"></i>
                                            </Link>
                                            <ul className="slide-menu">
                                                <li className="side-menu-label1"><Link href="#">Error Pages</Link></li>
                                                <li><Link href="400.html" className="slide-item"> 400</Link></li>
                                                <li><Link href="401.html" className="slide-item"> 401</Link></li>
                                                <li><Link href="403.html" className="slide-item"> 403</Link></li>
                                                <li><Link href="404.html" className="slide-item"> 404</Link></li>
                                                <li><Link href="500.html" className="slide-item"> 500</Link></li>
                                                <li><Link href="503.html" className="slide-item"> 503</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                <div className="slide-right" id="slide-right"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191"
                                        width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />
                                    </svg></div>
                            </div>
                        </div>
                        
                    </div>
                    {/* <!--APP-SIDEBAR--> */}
                    
                    {/* <!--app-content open--> */}
                    <div className="main-content app-content mt-0">
                        <div className="side-app">


                            <div className="main-container container-fluid">

                                {/* <!-- PAGE-HEADER --> */}
                                <div className="page-header">
                                    <div>
                                        <h1 className="page-title">Hi! Welcome To Dashboard</h1>
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
                    {/* <!--app-content open--> */}

                </div>

                {/* <!-- SIDE-BAR --> */}
                <div className="sidebar sidebar-right sidebar-animate">
                    <div className="">
                        <Link href="#" className="sidebar-icon text-end float-end" data-bs-toggle="sidebar-right"
                            data-bs-target=".sidebar-right"><i className="fe fe-x"></i></Link>
                    </div>
                    <div className="p-3 border-bottom">
                        <h5 className="border-bottom-0 mb-0">General Settings</h5>
                    </div>
                    <div className="p-4">
                        <div className="switch-settings">
                            <div className="d-flex mb-2">
                                <span className="me-auto">Notifications</span>
                                <label className="custom-switch">
                                    <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input"></input>
                                    <span className="custom-switch-indicator"></span>
                                </label>
                            </div>
                            <div className="d-flex mb-2">
                                <span className="me-auto">Show your emails</span>
                                <label className="custom-switch">
                                    <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input"></input>
                                    <span className="custom-switch-indicator"></span>
                                </label>
                            </div>
                            <div className="d-flex mb-2">
                                <span className="me-auto">Show Task statistics</span>
                                <label className="custom-switch">
                                    <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input"></input>
                                    <span className="custom-switch-indicator"></span>
                                </label>
                            </div>
                            <div className="d-flex mb-2">
                                <span className="me-auto">Show recent activity</span>
                                <label className="custom-switch">
                                    <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input"></input>
                                    <span className="custom-switch-indicator"></span>
                                </label>
                            </div>
                            <div className="d-flex mb-2">
                                <span className="me-auto">System Logs</span>
                                <label className="custom-switch">
                                    <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input"></input>
                                    <span className="custom-switch-indicator"></span>
                                </label>
                            </div>
                            <div className="d-flex mb-2">
                                <span className="me-auto">Error Reporting</span>
                                <label className="custom-switch">
                                    <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input"></input>
                                    <span className="custom-switch-indicator"></span>
                                </label>
                            </div>
                            <div className="d-flex mb-2">
                                <span className="me-auto">Show your status to all</span>
                                <label className="custom-switch">
                                    <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input"></input>
                                    <span className="custom-switch-indicator"></span>
                                </label>
                            </div>
                            <div className="d-flex mb-2">
                                <span className="me-auto">Keep up to date</span>
                                <label className="custom-switch">
                                    <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input"></input>
                                    <span className="custom-switch-indicator"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 border-bottom">
                        <h5 className="border-bottom-0 mb-0">Overview</h5>
                    </div>
                    <div className="p-4">
                        <div className="progress-wrapper">
                            <div className="mb-3">
                                <p className="mb-2">Achieves<span className="float-end text-muted font-weight-normal">80%</span></p>
                                <div className="progress h-1">
                                    <div className="progress-bar bg-primary w-80 " role="progressbar"></div>
                                </div>
                            </div>
                        </div>
                        <div className="progress-wrapper pt-2">
                            <div className="mb-3">
                                <p className="mb-2">Projects<span className="float-end text-muted font-weight-normal">60%</span></p>
                                <div className="progress h-1">
                                    <div className="progress-bar bg-secondary w-60 " role="progressbar"></div>
                                </div>
                            </div>
                        </div>
                        <div className="progress-wrapper pt-2">
                            <div className="mb-3">
                                <p className="mb-2">Earnings<span className="float-end text-muted font-weight-normal">50%</span></p>
                                <div className="progress h-1">
                                    <div className="progress-bar bg-success w-50" role="progressbar"></div>
                                </div>
                            </div>
                        </div>
                        <div className="progress-wrapper pt-2">
                            <div className="mb-3">
                                <p className="mb-2">Balance<span className="float-end text-muted font-weight-normal">45%</span></p>
                                <div className="progress h-1">
                                    <div className="progress-bar bg-warning w-45 " role="progressbar"></div>
                                </div>
                            </div>
                        </div>
                        <div className="progress-wrapper pt-2">
                            <div className="mb-3">
                                <p className="mb-2">Toatal Profits<span className="float-end text-muted font-weight-normal">75%</span>
                                </p>
                                <div className="progress h-1">
                                    <div className="progress-bar bg-danger w-75" role="progressbar"></div>
                                </div>
                            </div>
                        </div>
                        <div className="progress-wrapper pt-2">
                            <div className="mb-3">
                                <p className="mb-2">Total Likes<span className="float-end text-muted font-weight-normal">70%</span></p>
                                <div className="progress h-1">
                                    <div className="progress-bar bg-teal w-70" role="progressbar"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- SIDE-BAR CLOSED --> */}

                {/* <!-- FOOTER --> */}
                <footer className="footer">
                    <div className="container">
                        <div className="row align-items-center flex-row-reverse">
                            <div className="col-md-12 col-sm-12 text-center">
                                Copyright © 2022 <Link href="#">Yoha</Link>. Designed with <span
                                    className="fa fa-heart text-danger"></span> by <Link href="#"> Spruko </Link> All rights reserved.
                            </div>
                        </div>
                    </div>
                </footer>
                {/* <!-- FOOTER END --> */}
            </div>
            
    </div>
  )
}

export default Index
