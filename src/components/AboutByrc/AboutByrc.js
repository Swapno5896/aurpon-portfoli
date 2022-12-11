import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons'
const AboutByrc = () => {
    const navigate = useNavigate();
    const [aboutByrcData, byrcAboutData] = useState({})
    useEffect(() => {
        fetch('http://localhost:5000/about/639600ed9127bfa3dee3fc0c')
            .then(res => res.json())
            .then(data => byrcAboutData(data))
    }, [])
    const { title, img_url, point_1, point_2, point_3, detail, youtube_link: byrc_site_link, facebook_group_link } = aboutByrcData;
    const handelClick = (link) => {
        navigate(`/${link}`);
    }
    return (
        <div className="row py-5 my-5 ">
            <div className="offset-md-1 col-md-7 text-start d-flex justify-content-center align-items-center">
                <div>
                    <h2 className='about_title_padding  pb-3 fw-bold'>{title}</h2>
                    <div className='icon-container'>
                        <p className='icons pt-2'>   <FontAwesomeIcon icon={faCheckDouble} /> {point_1}</p>
                        <p className='icons'>   <FontAwesomeIcon icon={faCheckDouble} /> {point_2}</p>
                        <p className='icons'>   <FontAwesomeIcon icon={faCheckDouble} /> {point_3}</p>
                    </div>

                    <p>{detail}</p>
                    <button className='btn btn-primary f-btn fw-bolder text-light' onClick={() => handelClick(byrc_site_link)}>You Tube</button>
                    <button className='btn btn-danger ms-3  f-btn fw-bolder text-light' onClick={() => handelClick(facebook_group_link)}>Facebook</button>
                </div>
            </div>
            <div className="col-md-4 about-topbanner-img-contaienr">

                <img src={img_url} alt="" />

            </div>
            {/* 
             */}
            {/* <div className="row py-5 my-5">
                <div className="offset-md-1 col-md-7 text-start d-flex justify-content-center align-items-center">
                    <div>
                        <h2 className='about_title_padding  pb-3 fw-bold'>BYRC</h2>
                        <div className='icon-container'>
                            <p className='icons pt-2'>   <FontAwesomeIcon icon={faCheckDouble} /> Canceer Awarness Ngo</p>
                            <p className='icons'>   <FontAwesomeIcon icon={faCheckDouble} /> Helps people to understand better</p>
                            <p className='icons'>   <FontAwesomeIcon icon={faCheckDouble} /> Founder Of Byrac</p>
                        </div>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur laudantium debitis nesciunt laborum dolorem aperiam omnis cumque doloribus quam est enim reprehenderit, quod maiores voluptatem animi quia amet. Illo, eum?</p>
                        <button className='btn btn-info f-btn fw-bolder text-light'>Visit Our Site</button>
                        <button className='btn btn-primary ms-3  f-btn fw-bolder text-light'>Facebook Group</button>
                    </div>
                </div>
                <div className="col-md-4 about-topbanner-img-contaienr">
                    <img src={require('../../images/dada-2.jpg')} alt="" />
                </div>
            </div> */}
        </div>
    );
};

export default AboutByrc;