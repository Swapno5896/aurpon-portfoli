import React, { useEffect, useState } from 'react';
import './SmallVideo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
const SmallVideo = (props) => {

    const [videoData, SetVideoData] = useState({})
    useEffect(() => {
        fetch('http://localhost:5000/home/6377a5a22f2d042aac9dfc2c')
            .then(res => res.json())
            .then(data => SetVideoData(data))
    }, [])
    const { title, sub_title1, sub_title2 } = videoData
    // console.log(title, sub_title1, sub_title2)
    return (
        <div className='d-flex justify-content-center '>
            <section className='container small-video-container bg-cover' >
                <div class="overlay"></div>
                <div class="container text-white text-center">
                    <div class="row">
                        <div class="col-12 section-intro text-center" data-aos="fade-up">
                            <h1 className='video-title pb-3 pt-5'>{title}</h1>
                            <p className='pb-2 lh-3 fs-5'>
                                {sub_title1}
                                {/* zThere are many variations of passages of Lorem Ipsum available, but the*/}
                                <br />
                                {sub_title2}
                                {/* alteration in some form, by injected humour, or randomised words which don't look even slightly */}
                            </p>
                        </div>
                        <div className="row video-footer ">
                            {videoData.data.map(dt => <div className="col-md-4 col-sm-12 y-video"><iframe width="350" height="250" src={dt.youtube_link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>)}
                        </div>

                    </div>
                </div>
            </section>
        </div>

    );
};

export default SmallVideo;