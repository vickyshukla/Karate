import React from 'react';
import Logo from '../images/logo.jpg';


const Navbar = () => {
    return (
        <>
            <nav className="navbar container navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container-fluid">
                    <a href='#'  className="navbar-brand logo">
                        <img src={Logo} alt="Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                               <a href='#home' className="nav-link">Home</a> 
                            </li>
                            <li className="nav-item">
                              <a href='#about' className="nav-link">About Us</a>
                            </li>
                            <li className="nav-item">
                              <a href='#program' className="nav-link">Program</a>
                            </li>
                            
                            <li className="nav-item">
                                <a href='#contact' className="nav-link">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
