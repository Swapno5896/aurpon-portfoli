import React from 'react';
import './TopBannerA.css'
const TopBannerA = (props) => {
    const { Background } = props
    return (
        <div style={{
            backgroundImage: `url(${Background})`,

        }}
            className='row top_bannera_container'>
        </div>
    );
};

export default TopBannerA;