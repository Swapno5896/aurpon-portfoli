import React, { useEffect, useState } from 'react';
import AboutTopBanner from '../../components/AboutTopBanner/AboutTopBanner';
import Memories from '../../components/Memoris/Memories';

const About = () => {
    const [aboutMemoriData, setAboutMemoriData] = useState({})
    useEffect(() => {
        fetch('http://localhost:5000/memories')
            .then(res => res.json())
            .then(data => setAboutMemoriData(data))
    }, [])
    console.log(aboutMemoriData);
    const memories = [
        { id: 1, imgUlr: '', text: '' },
        { id: 2, imgUlr: '', text: '' },
        { id: 3, imgUlr: '', text: '' },
        { id: 4, imgUlr: '', text: '' },
        { id: 5, imgUlr: '', text: '' },
        { id: 6, imgUlr: '', text: '' },
    ]
    return (
        <div style={{ "backgroundColor": '#dffbf6' }}>
            <AboutTopBanner></AboutTopBanner>
            <hr />
            <div className='container py-5'>
                <h1 className="text-center pb-3">Some Of My Memories</h1>
                <p className='fs-5 pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Adipisci explicabo quo et pariatur  vel dolorum, voluptatum, aliquid voluptatem,<br />  non sit nulla officia nostrum. Nihil similique perferendis praesentium, assumenda laudantium ipsam.</p>
                <div className="row">
                    {
                        aboutMemoriData.map(memori => <Memories id={memori._id} memori={memori}></Memories>)
                    }
                </div>
            </div>

        </div>
    );
};

export default About;