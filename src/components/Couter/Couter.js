import React, { useEffect, useState } from 'react';
import './counter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy, faVideoCamera, faPeopleGroup, faBuildingNgo } from '@fortawesome/free-solid-svg-icons'
const Couter = () => {
    const [counterData, SetCounterData] = useState({})
    useEffect(() => {
        fetch('http://localhost:5000/home/63946e709127bfa3dec1fa9f')
            .then(res => res.json())
            .then(data => SetCounterData(data))
    }, [])

    console.log(counterData);
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

                            <h1 class="mt-3 mb-2">{counterData.award_count}</h1>
                            <p className='fs-3'>{counterData.award_title}</p>
                        </div>
                        <div class="col-md-3 icon-container">
                            <span>
                                <FontAwesomeIcon icon={faVideoCamera} />
                            </span>

                            <h1 class="mt-3 mb-2">{counterData.video_count}</h1>
                            <p className='fs-3'>{counterData.video_title}</p>
                        </div>
                        <div class="col-md-3 icon-container">
                            <span>
                                <FontAwesomeIcon icon={faPeopleGroup} />
                            </span>

                            <h1 class="mt-3 mb-2">{counterData.student_count}</h1>
                            <p className='fs-3'>{counterData.student_title}</p>
                        </div>
                        <div class="col-md-3 icon-container">
                            <span>
                                <FontAwesomeIcon icon={faBuildingNgo} />
                            </span>

                            <h1 class="mt-3 mb-2">{counterData.ngo_count}</h1>
                            <p className='fs-3'>{counterData.ngo_title}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>


    );
};

export default Couter;