import React, { useEffect, useState } from 'react';
import TopBannerA from '../../components/TopBannerA/TopBannerA';
import './Video.css'
import Background from "../../images/video_topbanner.jpg";
const Video = () => {
    const [videoData, setVideoData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/video')
            .then(res => res.json())
            .then(data => setVideoData(data))
    }, [])
    return (
        <div className='container py-5 my-5' style={{ 'backgroundColor': '#fff9f9' }}>
            <TopBannerA Background={Background}></TopBannerA>
            <div className="row">
                <p className='recent-blog-text pt-5'>Recent Videos</p>
                <p className='recent-blog-detail'>There are many variations of passages of Lorem <br />Ipsum available, but the majority have
                    suffered
                    alteration in some form,<br /> by injected humour, or randomised words which don't look even slightlydon't look even slightly
                </p>
                {
                    videoData.map(video => <div className="col-md-4 pt-5  iframe-container">
                        <iframe width="360" height="200" src={video.video_link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Video;