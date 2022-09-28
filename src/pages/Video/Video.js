import React from 'react';

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
            <div className="row">
                {
                    videos.map(video => <div className="col-md-4 pt-5">
                        <iframe width="400" height="290" src={video.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Video;