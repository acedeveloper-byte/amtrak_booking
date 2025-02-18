'use client'
import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../app/meanmenu.css"
const Header = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <header class="main_header_arae">
            <div class={isVisible ? "navbar-area is-sticky" : "navbar-area"}>
                <div class="main-responsive-nav">
                    <div class="container">
                        <div class="main-responsive-menu mean-container">
                            {/* <div class="pos-f-t">
                                <div class="collapse" id="navbarToggleExternalContent">
                                    <div class="bg-dark p-4">
                                        <h4 class="text-white">Collapsed content</h4>
                                        <span class="text-muted">Toggleable via the navbar brand.</span>
                                    </div>
                                </div>
                                <nav class="navbar navbar-dark bg-dark">
                                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                </nav>
                            </div> */}
                            <div class="logo">
                                <a href="index.html">
                                    <img src="/images/logo_white.png" alt="logo" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="main-navbar">
                    <div class="container">
                        <nav class="navbar navbar-expand-md navbar-light">
                            <a class="navbar-brand" href="/">
                                <img src="/images/logo_white.png" alt="logo" class="header-logo" />
                            </a>
                            <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a href="/" class="nav-link active">
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
                                        <a href="/contact-us" class="nav-link">Contact <i class="fas fa-angle-down"></i></a>

                                    </li>
                                </ul>

                            </div>
                            <a class="alert-button" href="tel:+1 (855) 564-8004">Call @ (855) 564-8004</a>
                        </nav>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header
