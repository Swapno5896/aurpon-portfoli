import React from 'react';
import './BlogCard.css'
const BlogCard = () => {
    return (
        <div class="col-md-4 mb-5">
            <div class="p-3 bg-white shadow rounded"  >
                <img style={{ 'height': '300px' }} src={require('../../images/invictus.png')} alt="" />
                <div class="mt-4 ">
                    <small>Posted in <a href="#">Web Design</a>, 12 Dec 2055</small>
                    <h5 class="mt-2 mb-2"><a href="#">Website design in 2055</a></h5>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis aperiam unde officiis?</p>
                </div>
            </div>
        </div>

    );
};

export default BlogCard;