import React from 'react';
import './Memories.css'
const Memories = (props) => {
    const { memories_title, img_ulr } = props.memori
    return (
        <section className="photo_album col-md-4 memori-container mb-5" >
            <div className='photo_frame'>
                <div className="photo">
                    <img className='memori-img rounded-5' src={img_ulr} alt="" />
                </div>
                <div className="photo_detail text-container">
                    <p className='text-content'> {memories_title}</p>
                </div>
            </div>
        </section>



    );
};

export default Memories;