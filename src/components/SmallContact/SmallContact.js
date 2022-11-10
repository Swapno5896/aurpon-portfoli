import React from 'react';
import './SmallContact.css'
const SmallContact = () => {
    return (
        <div className='container mt-5 mb-5 p-3 cotact-container'>
            <div className="row">
                <div className="col-md-6 col-sm-12 pt-5 img-container">
                    <img src={require('../../images/content_creation.png')} alt="" />
                </div>
                <div className="col-md-6 col-sm-12 d-flex align-items-center  justify-content-center">
                    <div className='contact-detail'>
                        <h2 className='pb-3 '>Content Creation To <br /> Help Others</h2>
                        <p className='pb-2 '>University Admissions, Career guidance and a touch of vlogging- <br /> I love to help my massive following in every way possible.
                        </p>
                        <button className='btn btn-primary f-btn'>You Tube</button>
                        <button className='btn btn-danger ms-3  f-btn'>Facebook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmallContact;