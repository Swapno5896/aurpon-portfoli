import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.css'
const BlogCard = (props) => {
    const { id, post_date, title, small_discription, img_url } = props.blog

    return (
        <Link to={`/blog/${id}`} class="col-md-4 mb-5 card-container" >
            {/* <div class="col-md-4 mb-5"> */}

            <div class="p-3 bg-white shadow rounded"  >


                <img style={{ 'height': '300px' }} src={img_url} alt="" />

                <div class="mt-4 ">
                    <small>Posted in {id} <a href="#">Web Design</a>, {post_date}</small>
                    <h5 class="mt-2 mb-2"><a href="#">{title}</a></h5>
                    <p>{small_discription}</p>
                </div>
            </div>
            {/* </div> */}
        </Link>

    );
};

export default BlogCard;