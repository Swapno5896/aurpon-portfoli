import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
const ReviewCard = (props) => {

    return (
        <div class="col-md-4 " data-aos="fade-up">
            <div class="review text-start p-4 bg-white">
                <div class="person ">
                    <img src={require("../../images/aurpon-top-banner.jpg")} alt="" />
                    <div class="text ms-3">
                        <h6 class="mb-2 fs-5">Swapno Mondol</h6>
                        <small className=' ps-2 fs-6'>Google</small>
                    </div>
                </div>
                <p class="pt-2 lh-3 ">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected</p>
                <div class="stars">


                    <FontAwesomeIcon className='ps-2' icon={faStar} />

                    <FontAwesomeIcon className='ps-2' icon={faStar} />
                    <FontAwesomeIcon className='ps-2' icon={faStar} />
                    <FontAwesomeIcon className='ps-2' icon={faStar} />


                </div>
            </div>
        </div>
    );
};

export default ReviewCard;