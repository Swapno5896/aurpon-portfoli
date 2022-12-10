import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
const ReviewCard = (props) => {
    const review = props.review
    let n = parseInt(review.review_star)
    let stars = []
    for (let i = 0; i < n; ++i) {
        stars.push(<FontAwesomeIcon className='ps-2' icon={faStar} />)
    }
    const handelDelet = (id) => {
        console.log(id);
        props.setDeletId(id)
    }
    return (
        <div onClick={() => handelDelet(review._id)} class="col-md-4 " data-aos="fade-up">
            <div class="review text-start p-4 bg-white">
                <div class="person ">
                    <img src={review.user_img_url} alt="" />
                    <div class="text ms-3">
                        <h6 class="mb-2 fs-5">{review.name}</h6>
                        <small className=' ps-2 fs-6'>{review.sub_title}</small>
                    </div>
                </div>
                <p class="pt-2 lh-3 ">{review.review_msg}</p>
                <div class="stars">
                    {stars}

                    {/* <FontAwesomeIcon className='ps-2' icon={faStar} />

                    <FontAwesomeIcon className='ps-2' icon={faStar} />
                    <FontAwesomeIcon className='ps-2' icon={faStar} />
                    <FontAwesomeIcon className='ps-2' icon={faStar} /> */}

                </div>
            </div>
        </div>
    );
};

export default ReviewCard;