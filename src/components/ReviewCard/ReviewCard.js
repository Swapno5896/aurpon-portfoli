import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
const ReviewCard = (props) => {
    const { star } = props.review

    return (
        <div class="col-md-4 " data-aos="fade-up">
            <div class="review p-4 bg-white">
                <div class="person">
                    <img src={require("../../images/aurpon-top-banner.jpg")} alt="" />
                    <div class="text ms-3">
                        <h6 class="mb-0">Swapno Mondol</h6>
                        <small>Google</small>
                    </div>
                </div>
                <p class="pt-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected</p>
                <div class="stars">

                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />


                </div>
            </div>
        </div>
    );
};

export default ReviewCard;