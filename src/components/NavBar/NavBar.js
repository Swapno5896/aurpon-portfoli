import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const NavBar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg   bg-white">
            <div className="container px-5">
                <a className="navbar-brand fs-3 fw-bold text-info" href="#">Aurpon Chowdhury</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav ms-auto navbar-tag-container">
                        <li className="nav-item">
                            <Link id='home' className="nav-link bg-white my-nav-link fw-semibold " aria-current="page" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link id='blog' className="nav-link bg-white  my-nav-link fw-semibold  " aria-current="page" to='/blog'>Blogs</Link>
                        </li>
                        <li className="nav-item">
                            <Link id='video' className="nav-link  my-nav-link fw-semibold " aria-current="page" to='/video'>Videos</Link>
                        </li>
                        <li className="nav-item">
                            <Link id='teamInvictus' className="nav-link  my-nav-link fw-semibold teamInvictus" aria-current="page" to='/teamInvictus'> Team Invictus </Link>
                        </li>
                        <li className="nav-item">
                            <Link id='video' className="nav-link  my-nav-link fw-semibold " aria-current="page" to='/about'>About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;