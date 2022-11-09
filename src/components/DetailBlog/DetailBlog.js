import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import blogdata from '../../Data/blog.JSON'
const DetailBlog = () => {
    const react_param = useParams()
    const blog_id = react_param.id
    const [blog, setBlog] = useState([])
    useEffect(() => {
        fetch(blogdata)
            .then(res => res.json())
            .then(data => {
                setBlog(data.find(item => item.id == blog_id))

            })
    }, [blog_id])

    return (
        <div className='py-5 my-5'>
            <h3>{blog.title}</h3>
            <img className='w-50' src={blog.img_url} alt="" />
            <p className='px-5 my-5'>{blog.full_discription}</p>
        </div>
    );
};

export default DetailBlog;