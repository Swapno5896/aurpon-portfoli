import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Review.css'
const Review = () => {
    const [topTextData, SetTopTextData] = useState({})
    const [review, setReview] = useState({})
    useEffect(() => {
        fetch('http://localhost:5000/home/6377a5a22f2d042aac9dfc2d')
            .then(res => res.json())
            .then(data => SetTopTextData(data))
    }, [])
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    // console.log(review);
    const { title, subtitle } = topTextData

    return (
        <section id="reviews" class="text-center pt-5">
            <div class="container pb-5 mb-5" >
                <div class="row">
                    <div class="col-12 section-intro text-center">
                        <h1 className='pb-4 review-title'>{title}</h1>
                        <p className='pb-3  review-detail'>
                            {subtitle}
                            {/* There are many variations of passages of Lorem Ipsum available, but the <br />
                            alteration in some form, by injected humour, or randomised words which don't look even slightly */}
                        </p>
                    </div>
                </div>
                <div class="row g-4 text-start">
                    {/* review cart */}

                    {
                        review.length > 1 ? review?.map(review => <ReviewCard id={review.id} review={review}></ReviewCard>)
                            : ''
                    }
                </div>
            </div>
        </section>
    );
};

export default Review;