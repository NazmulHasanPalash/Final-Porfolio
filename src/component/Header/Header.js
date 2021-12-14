import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar navbar-dark  w-100 mx-auto   header-style">
                <div class="container-fluid">
                    <a class="navbar-brand ms-5 logo-style" href="/">Portfo<span class="span-style">lio.</span> </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ms-auto me-5">
                            <li class="nav-item">
                                <HashLink className="nav-link active" to="/home">Home</HashLink>

                            </li>
                            <li class="nav-item">
                                <HashLink className="nav-link active" to="/home#projects">Projects</HashLink>

                            </li>
                            <li class="nav-item ">
                                <HashLink className="nav-link active" to="/home#contact">contact</HashLink>

                            </li>
                            <li class="nav-item ">
                                <HashLink className="nav-link active" to="/home#about">About me</HashLink>

                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;