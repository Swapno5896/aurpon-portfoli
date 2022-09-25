import React from 'react';

import SmallContact from '../../components/SmallContact/SmallContact';
import BlogCard from '../../components/BlogCard/BlogCard'
const Home = () => {
    const data = [
        { a: 3 },
        { a: 3 },
        { a: 3 },
    ]
    return (
        <div>



            <div className="container">
                <div className="row">

                    {data.map(d => <BlogCard></BlogCard>)}
                </div>
            </div>

            <SmallContact></SmallContact>
        </div>
    );
};

export default Home;