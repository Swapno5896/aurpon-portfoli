import React from 'react';

import SmallContact from '../../components/SmallContact/SmallContact';
import BlogCard from '../../components/BlogCard/BlogCard'
import SmallVideo from '../../components/SmallVideo/SmallVideo';
import Couter from '../../components/Couter/Couter';
const Home = () => {
    const data = [
        { a: 3 },
        { a: 3 },
        { a: 3 },
    ]
    return (
        <div id='home'>
            <div className="container">
                <div className="row">

                    {data.map(d => <BlogCard></BlogCard>)}
                </div>
            </div>
            <SmallVideo></SmallVideo>
            <SmallContact></SmallContact>
            <Couter></Couter>

        </div>
    );
};

export default Home;