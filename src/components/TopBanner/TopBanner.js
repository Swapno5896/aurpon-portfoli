import React from 'react';
import { useEffect } from 'react';
import './TopBanner.css'
const TopBanner = () => {

    return (
        <div className='container pb-5 mb-5'>

            <div className="row">
                <div className="col-md-6 col-sm-12 text-start d-flex justify-content-center align-items-center">
                    <div>
                        <h1>Welcome! I am
                            <br />
                            <span className='topbanner-name'>Aurpon Chowdhury</span>
                        </h1>
                        <p className='topbanner-study'>Content Creator,  Travelling lover </p>
                        <p className='topbanner-detal'>
                            Highly proficient in the use of Microsoft Office, successfully completed a specialization course from New Horizons, USA.
                            <hr />
                            4 years of leadership and volunteering experience for 3 nonprofit organizations with a special attachment to community service and humanitarian activities.



                        </p>
                    </div>
                </div>
                <div className="col-md-6 topbanner-image-container">
                    <img src={require("../../images/dada-2.jpg")} alt="" />
                </div>
            </div>
        </div>
    );
};

export default TopBanner;