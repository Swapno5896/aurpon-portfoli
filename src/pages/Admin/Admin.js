
import React from 'react';
import './Admin.css'
import { Link, Outlet } from 'react-router-dom';
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
        <div className='mt-5 pt-5 mb-5 rounded bg-primary  container'>
            <h2>This is admin page</h2>
            <div className="row h-100 p-3">
                <nav className='col-md-4 admin_side_navbar'>
                    <Link className=' admin_nav_item' to="/admin/aboutAurpon">about Aurpon</Link>
                    <Link className=' admin_nav_item' to="/admin/AdminVideoPage">Admin Video Page</Link>
                    <p>Home page</p>
                    <Link className=' admin_nav_item' to="/admin/AdminContactMessage"> Video Page</Link>
                    <Link className=' admin_nav_item' to="/admin/AdminTopBannar"> Top Bannar Page</Link>
                    <Link className=' admin_nav_item' to="/admin/AdminCounter"> counter</Link>
                    <Link className=' admin_nav_item' to="/admin/AdminVideo"> Video</Link>
                    <Link className=' admin_nav_item' to="/admin/AdminAddReview"> Add Review</Link>
                    <Link className=' admin_nav_item' to="/admin/AdminDeletReview"> Delet Review</Link>
                    <Link className=' admin_nav_item' to="/admin/AdminFooter"> Edit Footer</Link>

                </nav>
                <div className="col-md-8">
                    <Outlet></Outlet>
                </div>
            </div>





            {/* video */}
            {/* <AdminFooter></AdminFooter> */}
            {/* <AdminVideoPage></AdminVideoPage>
             */}
        </div>
    );
};

export default Admin;