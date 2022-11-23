import React, { useState } from 'react';
import { useEffect } from 'react';
import './TopBanner.css'
const TopBanner = () => {
    const [topbannerData, SetTopbannerData] = useState({})
    useEffect(() => {
        fetch('http://localhost:5000/home/6377a5a22f2d042aac9dfc29')
            .then(res => res.json())
            .then(data => SetTopbannerData(data))
    }, [])
    const { title, sub_title, detail, img_url } = topbannerData
    console.log(topbannerData);
    return (
        <div className='container pb-5 mb-5'>

            <div className="row">
                <div className="col-md-6 col-sm-12 text-start d-flex justify-content-center align-items-center">
                    <div>
                        <h1 className='p-2'>
                            {title}
                            {/* Welcome! I am
                            <br />
                            <span className='topbanner-name'>Aurpon Chowdhury</span> */}
                        </h1>
                        <p className='topbanner-study'>
                            {sub_title}
                            {/* Content Creator,  Travelling lover  */}
                        </p>
                        <p className='topbanner-detal'>
                            {/* Highly proficient in the use of Microsoft Office, successfully completed a specialization course from New Horizons, USA.
                            <hr />
                            4 years of leadership and volunteering experience for 3 nonprofit organizations with a special attachment to community service and humanitarian activities. */}

                            {detail}

                        </p>
                    </div>
                </div>
                <div className="col-md-6 topbanner-image-container">
                    <img src={img_url} alt="" />
                </div>
            </div>
        </div>
    );
};

export default TopBanner;