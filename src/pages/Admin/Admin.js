
import React from 'react';
import AdminCounter from './AdminCounter/AdminCounter';
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
            <AdminVideo></AdminVideo>
        </div>
    );
};

export default Admin;