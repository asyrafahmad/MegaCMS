import React from 'react'
import {Link} from 'react-router-dom'

function Sidebar() {
  return (
    <div>
       <div className="sticky">
            <div className="app-sidebar__overlay" data-bs-toggle="sidebar"></div>
            <div className="app-sidebar">
                <div className="side-header">
                    <Link className="header-brand1" to="/index">
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
                            <li className="slide is-expanded">
                                <Link className="side-menu__item" data-bs-toggle="slide" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="side-menu__icon" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22" /></svg>
                                    <span className="side-menu__label">MEGA CMS</span><i className="angle fe fe-chevron-right"></i>
                                </Link>
                                <ul className="slide-menu">
                                    <li className="side-menu-label1"><Link href="#">MEGA CMS</Link></li>
                                    <li className="sub-slide is-expanded">
                                        <Link className="sub-side-menu__item" data-bs-toggle="sub-slide" href="#">
                                            <span className="sub-side-menu__label">Blog</span>
                                            <i className="sub-angle fa fa-angle-right"></i>
                                        </Link>
                                        <ul className="sub-slide-menu" >
                                            <li><Link className="sub-slide-item" to="/blog_dashboard">Dashboard</Link></li>
                                            <li><Link className="sub-slide-item" to="/blog_posts">Posts</Link></li>
                                            <li><Link className="sub-slide-item" to="/blog_comments">Comment</Link></li>
                                            <li><Link className="sub-slide-item" to="/blog_likes">Likes</Link></li>
                                        </ul>
                                    </li>
                                    <li className="sub-slide is-expanded">
                                        <Link className="sub-side-menu__item" data-bs-toggle="sub-slide" href="#">
                                            <span className="sub-side-menu__label">Super Chat</span>
                                            <i className="sub-angle fa fa-angle-right"></i>
                                        </Link>
                                        <ul className="sub-slide-menu" >
                                            <li><Link className="sub-slide-item" href="maps-leaflet.html">ChatBox</Link></li>
                                        </ul>
                                    </li>
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
    </div>
  )
}

export default Sidebar
