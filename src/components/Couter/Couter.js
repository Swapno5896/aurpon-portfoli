import React, { useEffect, useState } from 'react';
import './counter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy, faVideoCamera, faPeopleGroup, faBuildingNgo } from '@fortawesome/free-solid-svg-icons'
const Couter = (props) => {
    const [counterData, SetCounterData] = useState({})
    useEffect(() => {
        fetch('http://localhost:5000/home/6377a5a22f2d042aac9dfc2b')
            .then(res => res.json())
            .then(data => SetCounterData(data))
    }, [])
    const { title, sub_title, detail, img_url } = counterData
    const data = counterData.data
    const award_won = data[0]
    const video_uploaded = data[1]
    const happy_student = data[2]
    const ngo = data[3]
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

                            <h1 class="mt-3 mb-2">{award_won.count}</h1>
                            <p className='fs-3'>{award_won.title}</p>
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

                            <h1 class="mt-3 mb-2">{happy_student.count}</h1>
                            <p className='fs-3'>{happy_student.title}</p>
                        </div>
                        <div class="col-md-3 icon-container">
                            <span>
                                <FontAwesomeIcon icon={faBuildingNgo} />
                            </span>

                            <h1 class="mt-3 mb-2">{ngo.count}</h1>
                            <p className='fs-3'>{ngo.title}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>


    );
};

export default Couter;