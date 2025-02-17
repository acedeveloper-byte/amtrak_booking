import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <header class="main_header_arae">

            <div class="navbar-area">
                <div class="main-responsive-nav">
                    <div class="container">
                        <div class="main-responsive-menu">
                            <div class="logo">
                                <a href="/">
                                    <img src="/images/logo.png" alt="logo" style={{
                                        maxWidth: "50%",
                                        filter: "invert(1)", // Ensure the parent isn't interfering
                                        display: "block" // Prevent inline spacing issues
                                    }} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="main-navbar">
                    <div class="container">
                        <nav class="navbar navbar-expand-md navbar-light">
                            <a class="navbar-brand" href="#">
                                <img src="/images/logo.png" alt="logo" />
                            </a>
                            <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a href="#" class="nav-link active">
                                            Home
                                            <i class="fas fa-angle-down"></i>
                                        </a>
                                        {/* <ul class="dropdown-menu">
                                            <li class="nav-item">
                                                <a href="index.html" class="nav-link active">Home One</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="index-2.html" class="nav-link">Home Two</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="index-3.html" class="nav-link">Home Three</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="index-4.html" class="nav-link">Home Four</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="index-5.html" class="nav-link">Home Five</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="index-6.html" class="nav-link">Home six</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="index-7.html" class="nav-link">Home seven</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="index-8.html" class="nav-link">Home Eight</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="index-9.html" class="nav-link">Home nine</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="index-10.html" class="nav-link">Home ten</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="index-11.html" class="nav-link">Home eleven</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="index-12.html" class="nav-link">Home twelve</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="index-13.html" class="nav-link">Home thirteen</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="index-14.html" class="nav-link">Home fourteen</a>
                                            </li>
                                        </ul> */}
                                    </li>
                                    <li class="nav-item">
                                        <a href="/about-us" class="nav-link">
                                            About Us
                                            <i class="fas fa-angle-down"></i>
                                        </a>

                                    </li>

                                    <li class="nav-item">
                                        <a href="#" class="nav-link">Train Deals <i class="fas fa-angle-down"></i></a>

                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link">Contact <i class="fas fa-angle-down"></i></a>

                                    </li>
                                </ul>

                            </div>
                        </nav>
                    </div>
                </div>
                <div class="others-option-for-responsive">
                    <div class="container">
                        <div class="dot-menu">
                            <div class="inner">
                                <div class="circle circle-one"></div>
                                <div class="circle circle-two"></div>
                                <div class="circle circle-three"></div>
                            </div>
                        </div>
                        <div class="container">
                            <div class="option-inner">
                                <div class="others-options d-flex align-items-center">
                                    <div class="option-item">
                                        <a href="#" class="search-box"><i class="fas fa-search"></i></a>
                                    </div>
                                    <div class="option-item">
                                        <a href="contact.html" class="btn  btn_navber">Get free quote</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
