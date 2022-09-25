import React from 'react';

const BlogCard = () => {
    return (
        <div className='col-md-4 col-sm-6 '>
            <div class="card"  >
                <img src={require('../../images/invictus.png')} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;