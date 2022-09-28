import React from 'react';
import './SmallVideo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
const SmallVideo = () => {
    return (
        <div className='d-flex justify-content-center'>
            <section className='container small-video-container bg-cover' >
                <div class="overlay"></div>
                <div class="container text-white text-center">
                    <div class="row">
                        <div class="col-12 section-intro text-center" data-aos="fade-up">
                            <h1>Watch My video</h1>
                            <div class="divider"></div>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered<br />
                                alteration in some form, by injected humour, or randomised words which don't look even slightly
                            </p>
                            <a href="#" class="video-btn"><FontAwesomeIcon icon={faPlay} /></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default SmallVideo;