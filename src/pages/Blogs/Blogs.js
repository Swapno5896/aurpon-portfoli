import React from 'react';
import specialBlog from '../../components/SpecialBlog/SpecialBlog';
import BlogSearch from '../../components/BlogSearch/BlogSearch';
import BlogCard from '../../components/BlogCard/BlogCard'
import './blogs.css';
import SpecialBlog from '../../components/SpecialBlog/SpecialBlog';
import TopBannerA from '../../components/TopBannerA/TopBannerA';
import Background from "../../images/blog_topbanner.jpg"
const Blogs = () => {
    const blogs = [
        { name: '', id: 1 },
        { name: '', id: 2 },
        { name: '', id: 3 },
        { name: '', id: 4 },
        { name: '', id: 5 },
        { name: '', id: 6 },
    ]
    const specialBlog = [
        { title: 'blog title', id: 1 },
        { title: 'blog title', id: 2 },
        { title: 'blog title', id: 3 },
        { name: '', id: 4 },
        { name: '', id: 5 },
        { name: '', id: 6 },
    ]
    return (
        <div id='blog' className='mt-5 pt-5'>
            <TopBannerA Background={Background}></TopBannerA>
            <SpecialBlog specialBlog={specialBlog} ></SpecialBlog>
            <BlogSearch></BlogSearch>
            <div className="container">
                <p className='recent-blog-text pt-5'>Recent Blogs</p>
                <p className='recent-blog-detail'>There are many variations of passages of Lorem <br />Ipsum available, but the majority have
                    suffered
                    alteration in some form,<br /> by injected humour, or randomised words which don't look even slightlydon't look even slightly
                </p>
                <div className="row text-start pt-5">
                    {
                        blogs.map(blog => <BlogCard
                            key={blog.id}

                            blog={blog}
                        ></BlogCard>)
                    }
                </div>
            </div>
            <nav className='mt-5' aria-label="...">
                <ul className="pagination d-flex justify-content-center">
                    <li className="page-item disabled">
                        <a className="page-link">Previous</a>
                    </li>
                    <li className="page-item"><a class="page-link" href="#">1</a></li>
                    <li className="page-item active" aria-current="page">
                        <a className="page-link" href="#">2</a>
                    </li>
                    <li className="page-item"><a class="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#">Next</a>
                    </li>
                </ul>

            </nav>

        </div>
    );
};

export default Blogs;