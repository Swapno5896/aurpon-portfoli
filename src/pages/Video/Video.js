import React from 'react';
import TopBannerA from '../../components/TopBannerA/TopBannerA';
import './Video.css'
import Background from "../../images/video_topbanner.jpg";
const Video = () => {
    const videos = [
        { src: "https://www.youtube.com/embed/IkydEhax-A4" },
        { src: "https://www.youtube.com/embed/IkydEhax-A4" },
        { src: "https://www.youtube.com/embed/IkydEhax-A4" },
        { src: "https://www.youtube.com/embed/IkydEhax-A4" },
        { src: "https://www.youtube.com/embed/IkydEhax-A4" },
        { src: "https://www.youtube.com/embed/IkydEhax-A4" },
    ]

    return (
        <div className='container py-5 my-5' style={{ 'backgroundColor': '#fff9f9' }}>
            <TopBannerA Background={Background}></TopBannerA>
            <div className="row">
                {
                    videos.map(video => <div className="col-md-4 pt-5  iframe-container">
                        <iframe width="400" height="200" src={video.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Video;