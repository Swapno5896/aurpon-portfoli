import React, { useEffect, useState } from 'react';
import './counter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy, faVideoCamera, faPeopleGroup, faBuildingNgo } from '@fortawesome/free-solid-svg-icons'
const Couter = () => {
    const [counterData, SetCounterData] = useState({})
    useEffect(() => {
        fetch('http://localhost:5000/home/6377a5a22f2d042aac9dfc2b')
            .then(res => res.json())
            .then(data => SetCounterData(data.data))
    }, [])

    return (
        <div className='d-flex justify-content-center'>

            <section class="container bg-cover counter-counter" >
                <div class="overlay"></div>

                <div class="container text-white text-center">
                    <div class="row gy-4" data-aos="fade-up">
                        <div class="col-md-3  icon-container">
                            <span>
                                <FontAwesomeIcon icon={faTrophy} />
                            </span>

                            <h1 class="mt-3 mb-2">{counterData[0].count}</h1>
                            <p className='fs-3'>{counterData[0].title}</p>
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

                            <h1 class="mt-3 mb-2">{counterData[2].count}</h1>
                            <p className='fs-3'>{counterData[2].title}</p>
                        </div>
                        <div class="col-md-3 icon-container">
                            <span>
                                <FontAwesomeIcon icon={faBuildingNgo} />
                            </span>

                            <h1 class="mt-3 mb-2">{counterData[3].count}</h1>
                            <p className='fs-3'>{counterData[3].title}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>


    );
};

export default Couter;