import React from 'react';
import './TeamInvictus.css'
import TopBannerA from '../../components/TopBannerA/TopBannerA';
import Background from '../../images/teamInvictus_topbanner.jpg'
import BlogCard from '../../components/BlogCard/BlogCard';
const TeamInvictus = () => {
    const spacialitis = [
        { title: '' },
        { title: '' },
        { title: '' },
    ]
    return (
        <div>
            <TopBannerA Background={Background}></TopBannerA>
            <div className="container mt-5 py-5 ">
                <div className="row">
                    <div className="col-md-6 teamInvictus-top-text d-flex justify-content-center align-items-center">
                        <div>
                            <h1 className='pb-3'>Team Invictus</h1>
                            <hr />
                            <p className=''>BYACA is composed of youths from different backgrounds who have gathered together on a single motto of serving the people. We have identified cancer as one of the leading threats to our society which can dismantle many lives and families
                                <br /> <br /> the rate of increase is not very optimistic.

                                Each of the dedicated souls has an immense contribution to the rise of this organization. You can check their credentials below.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={require('../../images/content_creation.png')} alt="" />
                    </div>
                </div>
                <div className="row mt-5">
                    <h1 className='pb-5'>SPECIALITY OF team Invictus</h1>
                    {
                        spacialitis.map(spaciality => <BlogCard spaciality={spaciality}></BlogCard>)
                    }
                    {/* <div className="col-md-4 col-sm-12">

                </div>
                <div className="col-md-4 col-sm-12"></div>
                <div className="col-md-4 col-sm-12"></div> */}
                </div>
            </div>
        </div>
    );
};

export default TeamInvictus;