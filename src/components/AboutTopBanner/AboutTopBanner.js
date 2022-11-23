import React from 'react';
import './AboutTopBanner.css'
// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons'
const AboutTopBanner = () => {
    return (
        <div className='container  mt-5'>
            {/* aurpon */}
            <div className="row py-5 my-5 ">
                <div className=" offset-md-1 col-md-4 about-topbanner-img-contaienr">
                    <img src={require('../../images/dada-2.jpg')} alt="" />
                </div>
                <div className=" col-md-7 text-start d-flex justify-content-center align-items-center">
                    <div>
                        <h2 className='about_title_padding pb-3 fw-bold'>Aurpon Chowdhury</h2>
                        <div className='icon-container'>
                            <p className='icons pt-2'>   <FontAwesomeIcon icon={faCheckDouble} /> Student Of Alberta</p>
                            <p className='icons'>   <FontAwesomeIcon icon={faCheckDouble} /> Ceo Of Big Business</p>
                            <p className='icons'>   <FontAwesomeIcon icon={faCheckDouble} /> Founder Of Byrac</p>
                        </div>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur laudantium debitis nesciunt laborum dolorem aperiam omnis cumque doloribus quam est enim reprehenderit, quod maiores voluptatem animi quia amet. Illo, eum?</p>
                        <button className='btn btn-primary f-btn fw-bolder text-light'>You Tube</button>
                        <button className='btn btn-danger ms-3  f-btn fw-bolder text-light'>Facebook</button>
                    </div>

                </div>
            </div>
            <hr />

            {/* byrc */}
            <div className="row py-5 my-5">
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
            </div>

            <hr />
            {/* team invactus */}
            <div className="row py-5 my-5">
                <div className="col-md-4 about-topbanner-img-contaienr">
                    <img src={require('../../images/dada-2.jpg')} alt="" />
                </div>
                <div className="ps-4 col-md-8 text-start d-flex justify-content-center align-items-center">
                    <div>
                        <h2 className='about_title_padding pb-3 text-bolder'>Team Invactus</h2>
                        <div className='icon-container'>
                            <p className='icons pt-2'>   <FontAwesomeIcon icon={faCheckDouble} /> Student Of Alberta</p>
                            <p className='icons'>   <FontAwesomeIcon icon={faCheckDouble} /> Ceo Of Big Business</p>
                            <p className='icons'>   <FontAwesomeIcon icon={faCheckDouble} /> Founder Of Byrac</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur laudantium debitis nesciunt laborum dolorem aperiam omnis cumque doloribus quam est enim reprehenderit, quod maiores voluptatem animi quia amet. Illo, eum?</p>
                        <button className='btn btn-success f-btn fw-bolder text-light'>See Our Activity</button>
                        <button className='btn btn-warning ms-3  f-btn fw-bolder text-light'>Facebook</button>
                    </div>

                </div>
            </div>

            <hr />
            {/* youtube jouney */}
            <div className="row py-5 my-5">
                <h1 className="text-center">This is youtube journey</h1>
            </div>
        </div>
    );
};

export default AboutTopBanner;