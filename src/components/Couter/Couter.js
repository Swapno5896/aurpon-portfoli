import React from 'react';
import './counter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy, faVideoCamera, faPeopleGroup, faBuildingNgo } from '@fortawesome/free-solid-svg-icons'
const Couter = () => {
    return (
        <div className='d-flex justify-content-center'>

            <section class="container bg-cover counter-counter" >
                <div class="overlay"></div>

                <div class="container text-white text-center">
                    <div class="row gy-4" data-aos="fade-up">
                        <div class="col-md-3 icon-container">
                            <span>
                                <FontAwesomeIcon icon={faTrophy} />
                            </span>

                            <h1 class="mt-3 mb-2">15</h1>
                            <p className='fs-3'>Awards Won</p>
                        </div>
                        <div class="col-md-3 icon-container">
                            <span>
                                <FontAwesomeIcon icon={faVideoCamera} />
                            </span>

                            <h1 class="mt-3 mb-2">12</h1>
                            <p className='fs-3'>Video Uploaded</p>
                        </div>
                        <div class="col-md-3 icon-container">
                            <span>
                                <FontAwesomeIcon icon={faPeopleGroup} />
                            </span>

                            <h1 class="mt-3 mb-2">300</h1>
                            <p className='fs-3'>Happy Students</p>
                        </div>
                        <div class="col-md-3 icon-container">
                            <span>
                                <FontAwesomeIcon icon={faBuildingNgo} />
                            </span>

                            <h1 class="mt-3 mb-2">3</h1>
                            <p className='fs-3'>Ngo Created</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>


    );
};

export default Couter;