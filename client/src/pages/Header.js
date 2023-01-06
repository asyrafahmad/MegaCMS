import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div>
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
    </div>
  )
}

export default Header
