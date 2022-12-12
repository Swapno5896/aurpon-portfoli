
import React from 'react';
import AdminAboutAurpon from './AdminAboutAurpon/AdminAboutAurpon';
import AdminAddReview from './AdminAddReview/AdminAddReview';
import AdminContactMessage from './AdminContactMessage/AdminContactMessage';
import AdminCounter from './AdminCounter/AdminCounter';
import AdminDeletReview from './AdminDeletReview/AdminDeletReview';
import AdminFooter from './AdminFooter/AdminFooter';
import AdminTopBannar from './AdminTopBannar/AdminTopBannar';
import AdminVideo from './AdminVideo/AdminVideo';
import AdminVideoPage from './AdminVideoPage/AdminVideoPage';

const Admin = () => {
    return (
        <div className='m-5 bg-primary '>
            {/* top banner section */}
            {/* <AdminTopBannar></AdminTopBannar> */}

            {/* counter */}
            {/* <AdminCounter></AdminCounter> */}

            {/* video */}
            {/* <AdminVideo></AdminVideo> */}
            {/* <AdminAddReview />
            <AdminDeletReview></AdminDeletReview> */}
            {/* <AdminContactMessage></AdminContactMessage> */}
            {/* <AdminFooter></AdminFooter> */}
            {/* <AdminVideoPage></AdminVideoPage>
             */}
            <AdminAboutAurpon></AdminAboutAurpon>
        </div>
    );
};

export default Admin;