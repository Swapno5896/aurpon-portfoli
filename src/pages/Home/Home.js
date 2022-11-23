import React, { useEffect } from 'react';
import './Home.css'
import SmallContact from '../../components/SmallContact/SmallContact';
import BlogCard from '../../components/BlogCard/BlogCard'
import SmallVideo from '../../components/SmallVideo/SmallVideo';
import Couter from '../../components/Couter/Couter';
import Review from '../../components/Revidw/Review';
import ContactMessage from '../../components/ContactMessage/ContactMessage';
import TopBanner from '../../components/TopBanner/TopBanner';
import { useState } from 'react';
const Home = () => {
    const [blogs, setBlogs] = useState([])
    const [homeData, sethomeData] = useState([])
    useEffect(() => {
        fetch('blog.JSON')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    useEffect(() => {
        fetch('http://localhost:5000/home')
            .then(res => res.json())
            .then(data => sethomeData(data))
    }, [])
    console.log(homeData);

    const topbannerData = homeData[0]
    const contentData = homeData[1]
    const counterData = homeData[2]
    const videoData = homeData[3]
    const reviewData = homeData[4]
    const sendMsgData = homeData[5]
    return (
        <div id='home'>
            <div className="container  mt-5 pt-5">
                <TopBanner ></TopBanner> : ''

                <div className="row text-start">

                    {blogs ?

                        blogs?.map(blog => <BlogCard
                            key={blog.id}
                            blog={blog}
                        ></BlogCard>) : ''}

                </div>
            </div>
            <SmallContact></SmallContact> : ''
            {/* 

*/}
            <Couter ></Couter>


            {/* 
6377a5a22f2d042aac9dfc2c
*/}

            {
                // videoData ? <SmallVideo videoData={videoData}></SmallVideo> : ''
            }
            {/* 
6377a5a22f2d042aac9dfc2d
*/}

            {
                reviewData ? <Review reviewData={reviewData}></Review> : ''
            }
            {/* 
6377a5a22f2d042aac9dfc2e
*/}

            {
                sendMsgData ? <ContactMessage sendMsgData={sendMsgData}></ContactMessage> : ''
            }

            {/* <SmallVideo></SmallVideo>
            <Review></Review>
            <ContactMessage></ContactMessage> */}
        </div>
    );
};

export default Home;