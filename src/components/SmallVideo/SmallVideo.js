import React from 'react';
import './SmallVideo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
const SmallVideo = (props) => {
    const data = props.videoData
    console.log(data);
    return (
        <div className='d-flex justify-content-center '>
            <section className='container small-video-container bg-cover' >
                <div class="overlay"></div>
                <div class="container text-white text-center">
                    <div class="row">
                        <div class="col-12 section-intro text-center" data-aos="fade-up">
                            <h1 className='video-title pb-3 pt-5'>{data.title}</h1>
                            <p className='pb-2 lh-3 fs-5'>
                                {data.sub_title1}
                                {/* zThere are many variations of passages of Lorem Ipsum available, but the*/}
                                <br />
                                {data.sub_title2}
                                {/* alteration in some form, by injected humour, or randomised words which don't look even slightly */}
                            </p>
                            {/* <a href="#" class="video-btn"><FontAwesomeIcon icon={faPlay} /></a> */}
                        </div>
                        <div className="row video-footer ">
                            {data.data.map(dt => <div className="col-md-4 col-sm-12 y-video"><iframe width="350" height="250" src={dt.youtube_link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>)}



                            {/* <div className="col-md-4 col-sm-12  y-video">
                               
                            </div>
                            <div className="col-md-4 col-sm-12 y-video"><iframe width="350" height="250" src={dt.youtube_link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

                            
                            <div className="col-md-4 col-sm-12 y-video"><iframe width="350" height="250" src="https://www.youtube.com/embed/IkydEhax-A4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div> */}
                        </div>

                    </div>
                </div>
            </section>
        </div>

    );
};

export default SmallVideo;