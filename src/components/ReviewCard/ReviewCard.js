import React from 'react';

const ReviewCard = () => {
    return (
        <div class="col-md-4" data-aos="fade-up">
            <div class="review p-4">
                <div class="person">
                    <img src={require("../../images/aurpon-top-banner.jpg")} alt="" />
                    <div class="text ms-3">
                        <h6 class="mb-0">Swapno Mondol</h6>
                        <small>Google</small>
                    </div>
                </div>
                <p class="pt-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected</p>
                <div class="stars">
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;