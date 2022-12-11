import React from 'react';
import './AboutTopBanner.css'
// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons'
import AboutAurpon from '../AboutAurpon/AboutAurpon';
import AboutByrc from '../AboutByrc/AboutByrc';
import AboutInvactus from '../AboutInvactus/AboutInvactus';
const AboutTopBanner = () => {
    return (
        <div className='container  mt-5'>
            {/* aurpon */}
            <AboutAurpon></AboutAurpon>
            <hr />

            {/* byrc */}
            <AboutByrc></AboutByrc>

            <hr />
            {/* team invactus */}
            <AboutInvactus></AboutInvactus>
            {/* <div className="row py-5 my-5">
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
            </div> */}
        </div>
    );
};

export default AboutTopBanner;