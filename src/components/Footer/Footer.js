import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer-container">
            <div className="row">
                <div className="col-md-4 footer-aurpon-container">
                    <h2>Aurpon Chowdhury</h2>
                    <p className='pt-3 lh-3 fs-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur amet quisquam rem. Nulla eaque soluta voluptate, maiores, quia magni totam numquam, explicabo </p>

                    <button className='btn btn-primary f-btn'>You Tube</button>
                    <button className='btn btn-danger ms-3  f-btn'>Facebook</button>
                </div>
                <div className="col-md-2 footer-links">
                    <Link to='/'>Home</Link>
                    <Link to='/blogs'>Blogs</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/videos'>Video</Link>
                    <Link to='/teamInvictus'>Team Invictus</Link>
                    <Link to='/about'>Contact Me</Link>
                </div>
                <div className="col-md-3 footer-img-container">
                    <img src={require('../../images/dada-1.jpg')} alt="" /><img src={require('../../images/dada-2.jpg')} alt="" /><img src={require('../../images/dada-1.jpg')} alt="" /><img src={require('../../images/dada-2.jpg')} alt="" /><img src={require('../../images/dada-1.jpg')} alt="" /><img src={require('../../images/dada-2.jpg')} alt="" />
                </div>
                <div className="col-md-3 footer-location ">
                    <p className='fs-5'>Momtaz Plaza (3rd Floor) House #07, Road #04,</p>
                    <p className='fs-5'>Dhanmondi, Dhaka</p>
                    <p className='fs-5'>0175454545</p>
                </div>
            </div>
            <p className="pt-5 text-center fw-semibold">Copyright © 2022 Aurpon Chowdhury</p>

        </div>
    );
};

export default Footer;