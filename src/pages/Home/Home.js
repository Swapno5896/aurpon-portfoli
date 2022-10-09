import React from 'react';
import './Home.css'
import SmallContact from '../../components/SmallContact/SmallContact';
import BlogCard from '../../components/BlogCard/BlogCard'
import SmallVideo from '../../components/SmallVideo/SmallVideo';
import Couter from '../../components/Couter/Couter';
import Review from '../../components/Revidw/Review';
import ContactMessage from '../../components/ContactMessage/ContactMessage';
import TopBanner from '../../components/TopBanner/TopBanner';
const Home = () => {
    const data = [
        { a: 3 },
        { a: 3 },
        { a: 3 },
    ]
    return (
        <div id='home'>
            <div className="container  mt-5 pt-5">
                <TopBanner></TopBanner>
                <div className="row text-start">

                    {data.map(d => <BlogCard></BlogCard>)}
                </div>
            </div>
            <SmallVideo></SmallVideo>
            <SmallContact></SmallContact>
            <Couter></Couter>
            <Review></Review>
            <ContactMessage></ContactMessage>

        </div>
    );
};

export default Home;