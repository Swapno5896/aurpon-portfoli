import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons'


const AboutInvactus = () => {


    const navigate = useNavigate();
    const [aboutInvactusData, setInvactusData] = useState({})
    useEffect(() => {
        fetch('http://localhost:5000/about/639600ed9127bfa3dee3fc0b')
            .then(res => res.json())
            .then(data => setInvactusData(data))
    }, [])
    const { title, img_url, point_1, point_2, point_3, detail, activity_link, facebook_profile_link } = aboutInvactusData;
    const handelClick = (link) => {
        navigate(`/${link}`);
    }
    return (
        <div className="row py-5 my-5 ">
            <div className=" offset-md-1 col-md-4 about-topbanner-img-contaienr">
                <img src={img_url} alt="" />
            </div>
            <div className=" col-md-7 text-start d-flex justify-content-center align-items-center">
                <div>
                    <h2 className='about_title_padding pb-3 fw-bold'>{title}</h2>
                    <div className='icon-container'>
                        <p className='icons pt-2'>   <FontAwesomeIcon icon={faCheckDouble} /> {point_1}</p>
                        <p className='icons'>   <FontAwesomeIcon icon={faCheckDouble} /> {point_2}</p>
                        <p className='icons'>   <FontAwesomeIcon icon={faCheckDouble} /> {point_3}</p>
                    </div>

                    <p>{detail}</p>
                    <button className='btn btn-primary f-btn fw-bolder text-light' onClick={() => handelClick(activity_link)}>You Tube</button>
                    <button className='btn btn-danger ms-3  f-btn fw-bolder text-light' onClick={() => handelClick(facebook_profile_link)}>Facebook</button>
                </div>

            </div>
        </div>
    );
};

export default AboutInvactus;