import React from 'react';
import AboutTopBanner from '../../components/AboutTopBanner/AboutTopBanner';
import Memories from '../../components/Memoris/Memories';

const About = () => {
    const memories = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
    ]
    return (
        <div>
            <AboutTopBanner></AboutTopBanner>
            <hr />
            <div className='container py-5'>
                <h1 className="text-center pb-3">Some Of My Memories</h1>
                <p className='fs-5 pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Adipisci explicabo quo et pariatur  vel dolorum, voluptatum, aliquid voluptatem,<br />  non sit nulla officia nostrum. Nihil similique perferendis praesentium, assumenda laudantium ipsam.</p>
                <div className="row">
                    {
                        memories.map(memori => <Memories id={memori.id}></Memories>)
                    }
                </div>
            </div>

        </div>
    );
};

export default About;