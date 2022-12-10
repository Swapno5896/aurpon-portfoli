import React from 'react';
import { useEffect, useState } from 'react';

const AdminAddReview = () => {
    const [updatData, setUpdateData] = useState({})
    const handelSubmit = (e) => {
        e.preventDefault()
        console.log(updatData);
        e.target.reset()
    }
    const handleTopBannerFormChange = (event) => {
        let data = { ...updatData };
        data[event.target.name] = event.target.value;
        setUpdateData(data)
    }
    return (
        <div className='pt-5'>
            <form onSubmit={handelSubmit}>
                <input type="text" name='user_img_url' placeholder='Enter user image url'
                    onChange={e => handleTopBannerFormChange(e)} required />
                <input type="text" name='name' placeholder='Enter user name'
                    onChange={e => handleTopBannerFormChange(e)} required />
                <input type="text" name='sub_title' placeholder='Enter user sub_title'
                    onChange={e => handleTopBannerFormChange(e)} required />
                <input type="text" name='review_msg' placeholder='Enter user review_msg'
                    onChange={e => handleTopBannerFormChange(e)} required />
                <input type="text" name='review_star' placeholder='Enter user start'
                    onChange={e => handleTopBannerFormChange(e)} required />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AdminAddReview;