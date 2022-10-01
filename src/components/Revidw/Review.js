import React from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Review.css'
const Review = () => {
    const fakeData = [
        { id: 1, star: 5 },
        { id: 2, star: 4 },
        { id: 3, star: 3 },
        { id: 4, star: 4 },
        { id: 5, star: 3 },
        { id: 6, star: 4 },
    ]
    return (
        <section id="reviews" class="text-center pt-5">
            <div class="container pb-5 mb-5" >
                <div class="row">
                    <div class="col-12 section-intro text-center">
                        <h1 className='pb-4'>Our Testimonials</h1>
                        <div class="divider"></div>
                        <p className='pb-3 lh-lg'>There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered<br />
                            alteration in some form, by injected humour, or randomised words which don't look even slightly
                        </p>
                    </div>
                </div>
                <div class="row g-4 text-start">
                    {/* review cart */}

                    {
                        fakeData.map(review => <ReviewCard id={review.id} review={review}></ReviewCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Review;