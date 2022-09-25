import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <a className="navbar-brand fs-3 fw-bold text-info" href="#">Aurpon</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav ms-auto navbar-tag-container">
                        <li className="nav-item">
                            <Link className="nav-link active my-nav-link" aria-current="page" to='/'>Home</Link>

                            {/* <a className="nav-link active fw-bolder text-success " aria-current="page" href="#">Home</a> */}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active fw-bolder text-success" aria-current="page" href="#">Blogs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active fw-bolder text-success" aria-current="page" href="#">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;