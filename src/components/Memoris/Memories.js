import React from 'react';
import './Memories.css'
const Memories = () => {
    return (
        <section className="photo_album col-md-4 memori-container mb-5" >
            <div className='photo_frame'>
                <div className="photo">
                    <img className='memori-img rounded-5' src={require('../../images/dada-1.jpg')} alt="" />
                </div>
                <div className="photo_detail text-container">
                    <p className='text-content'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat et recusandae pariatur animi ullam quas neque omnis eos necessitatibus vero quaerat odit deserunt enim sit ipsam, provident quidem facilis voluptates!</p>
                </div>
            </div>
        </section>



    );
};

export default Memories;