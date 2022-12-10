import React, { useEffect, useState } from 'react';
import ReviewCard from '../../../components/ReviewCard/ReviewCard';

const AdminDeletReview = () => {
    const [review, setReview] = useState({})
    const [deletId, setDeletId] = useState({})
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    const handelDelet = (id) => {
        console.log(id);
    }
    return (
        <div className='row'>


            {
                review.length > 1 ? review?.map(review => <ReviewCard id={review._id} review={review} setDeletId={setDeletId}></ReviewCard>)
                    : ''
            }

        </div>
    );
};

export default AdminDeletReview;