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

    useEffect(() => {
        fetch('blog.JSON')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])



    return (
        <div id='home'>
            {/* <div className="container  mt-5 pt-5">
                <TopBanner ></TopBanner>
                <div className="row text-start">

                    {blogs ?

                        blogs?.map(blog => <BlogCard
                            key={blog.id}
                            blog={blog}
                        ></BlogCard>) : ''}

                </div>
            </div>
            <SmallContact></SmallContact>
            <Couter ></Couter>
<SmallVideo ></SmallVideo> 
             */}

            {/* done */}


            <Review ></Review>


            {
                //  sendMsgData ? <ContactMessage sendMsgData={sendMsgData}></ContactMessage> : ''
            }


            <ContactMessage></ContactMessage>
        </div>
    );
};

export default Home;