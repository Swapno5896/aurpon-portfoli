import React, { useEffect, useState } from 'react';
import BlogCard from '../../components/BlogCard/BlogCard';
import BlogSearch from '../../components/BlogSearch/BlogSearch';
import SpecialBlog from '../../components/SpecialBlog/SpecialBlog';
import TopBannerA from '../../components/TopBannerA/TopBannerA';

// importing json blog arraty locally
import blogdata from '../../Data/blog.JSON'

// importing image
import Background from "../../images/blog_topbanner.jpg"
const BlogPage = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch(blogdata)
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    // const blogs = [
    //     { name: '', id: 1 },
    //     { name: '', id: 2 },
    //     { name: '', id: 3 },
    //     { name: '', id: 4 },
    //     { name: '', id: 5 },
    //     { name: '', id: 6 },
    // ]
    const specialBlog = [
        { id: 1, post_date: '25 Nov', title: 'This is title', small_discription: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', img_url: 'https://i.ibb.co/F6cywtr/download.jpg' },
        { id: 2, post_date: '25 Nov', title: 'This is title', small_discription: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', img_url: 'https://i.ibb.co/F6cywtr/download.jpg' },
        { id: 3, post_date: '25 Nov', title: 'This is title', small_discription: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', img_url: 'https://i.ibb.co/F6cywtr/download.jpg' },
        { name: '', id: 4 },
        { name: '', id: 5 },
        { name: '', id: 6 },
    ]
    return (
        <div className='pt-5 my-5'>
            {/* top image */}
            <TopBannerA Background={Background}></TopBannerA>

            {/* top 3 liked blogs */}
            <SpecialBlog
                specialBlog={specialBlog}
            ></SpecialBlog>

            <BlogSearch>
            </BlogSearch>

            {/* all our blogs */}
            <div className="container">
                <p className='recent-blog-text pt-5'>Recent Blogs</p>
                <p className='recent-blog-detail'>There are many variations of passages of Lorem <br />Ipsum available, but the majority have
                    suffered
                    alteration in some form,<br /> by injected humour, or randomised words which don't look even slightlydon't look even slightly
                </p>
                <div className="row text-start pt-5">
                    {
                        blogs?.map(blog => <BlogCard
                            key={blog.id}
                            blog={blog}
                        ></BlogCard>)
                    }
                </div>
            </div>
            {/* Go another page to see more blog */}
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

export default BlogPage;