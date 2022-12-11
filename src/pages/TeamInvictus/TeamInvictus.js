import React from 'react';
import './TeamInvictus.css'
import TopBannerA from '../../components/TopBannerA/TopBannerA';
import Background from '../../images/teamInvictus_topbanner.jpg'
import BlogCard from '../../components/BlogCard/BlogCard';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
const TeamInvictus = () => {
    const spacialitis = [
        { id: 1, post_date: '23 dec', title: 'title ', small_discription: 'this is description', img_url: 'img_url' },
        { id: 1, post_date: '23 dec', title: 'title ', small_discription: 'this is description', img_url: 'img_url' },
        { id: 1, post_date: '23 dec', title: 'title ', small_discription: 'this is description', img_url: 'img_url' },

    ]

    const invictusMember = [
        { user_img_url: 'https://i.ibb.co/5RpjPjj/dada-2.jpg', name: "Swapno Mondol", sub_title: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, quisquam.", review_msg: '', review_star: "", },
        { user_img_url: 'https://i.ibb.co/5RpjPjj/dada-2.jpg', name: "Swapno Mondol", sub_title: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, quisquam.", review_msg: '', review_star: "", },
        { user_img_url: 'https://i.ibb.co/5RpjPjj/dada-2.jpg', name: "Swapno Mondol", sub_title: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, quisquam.", review_msg: '', review_star: "", },



    ]

    return (
        <div >
            <TopBannerA Background={Background}></TopBannerA>
            <div className="container mt-5 py-5 ">
                {/* topbanner image */}
                <div className="row">
                    <div className="col-md-6 teamInvictus-top-text d-flex justify-content-center align-items-center">
                        <div>
                            <h1 className='pb-2 fw-bold text-primary'>Team Invictus</h1>
                            <hr />
                            <p className='fs-5 pt-3'>BYACA is composed of youths from different backgrounds who have gathered together on a single motto of serving the people. We have identified cancer as one of the leading threats to our society which can dismantle many lives and families
                                <br /> <br /> the rate of increase is not very optimistic.

                                Each of the dedicated souls has an immense contribution to the rise of this organization. You can check their credentials below.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img className='pt-4' src={require('../../images/content_creation.png')} alt="" />
                    </div>
                </div>
                {/* speciality section */}
                <div className="row mt-5 pt-5">
                    <h1 className='pb-5 '>Specialty OF team Invictus</h1>
                    {
                        spacialitis?.map(spaciality => <BlogCard blog={spaciality}></BlogCard>)
                    }
                </div>
                {/* team member section */}
                <div className="container">
                    <h1 className='mt-5 pt-5'>Team Member Of Team Invictus</h1>
                    <p className='pt-3 pb-5 fs-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat <br /> dignissimos magnam in provident porro laboriosam quasi debitis fuga architecto voluptates.
                    </p>
                    <div className="row g-5 px-2">
                        {
                            invictusMember.map(member => <ReviewCard review={member}></ReviewCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamInvictus;