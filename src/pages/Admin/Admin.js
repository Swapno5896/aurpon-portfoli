import React from 'react';
import AdminCounter from './AdminCounter/AdminCounter';
import AdminTopBannar from './AdminTopBannar/AdminTopBannar';

const Admin = () => {
    return (
        <div className='m-5 bg-primary vh-100'>
            {/* top banner section */}
            {/* <AdminTopBannar></AdminTopBannar> */}

            {/* counter */}
            <AdminCounter></AdminCounter>
        </div>
    );
};

export default Admin;