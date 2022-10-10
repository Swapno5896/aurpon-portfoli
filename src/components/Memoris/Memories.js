import React from 'react';
import './Memories.css'
const Memories = () => {
    return (

        <div className="col-md-4 memori-container mb-5" >
            <img className='memori-img rounded-5' src={require('../../images/dada-1.jpg')} alt="" />
            <div className="text-content">
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat et recusandae pariatur animi ullam quas neque omnis eos necessitatibus vero quaerat odit deserunt enim sit ipsam, provident quidem facilis voluptates!</p>

            </div>
        </div>



    );
};

export default Memories;