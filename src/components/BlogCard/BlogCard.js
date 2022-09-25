import React from 'react';
import './BlogCard.css'
const BlogCard = () => {
    return (
        <div className='col-md-4 col-sm-6 '>
            <div class="card blog-card rounded-4"  >
                <img src={require('../../images/invictus.png')} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">How To Get 7 In IELTS</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary blog-button">Read More</a>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;