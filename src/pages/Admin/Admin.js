
import React from 'react';
import AdminAddReview from './AdminAddReview/AdminAddReview';
import AdminContactMessage from './AdminContactMessage/AdminContactMessage';
import AdminCounter from './AdminCounter/AdminCounter';
import AdminDeletReview from './AdminDeletReview/AdminDeletReview';
import AdminTopBannar from './AdminTopBannar/AdminTopBannar';
import AdminVideo from './AdminVideo/AdminVideo';

const Admin = () => {
    return (
        <div className='m-5 bg-primary vh-100'>
            {/* top banner section */}
            {/* <AdminTopBannar></AdminTopBannar> */}

            {/* counter */}
            {/* <AdminCounter></AdminCounter> */}

            {/* video */}
            {/* <AdminVideo></AdminVideo> */}
            {/* <AdminAddReview />
            <AdminDeletReview></AdminDeletReview> */}
            <AdminContactMessage></AdminContactMessage>
        </div>
    );
};

export default Admin;