import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SpecialBlog.css'
import { Link } from 'react-router-dom';

const SpecialBlog = (props) => {
  const navigate = useNavigate()
  const [firstBlog, secondBlog, ThirdBlog] = props.specialBlog

  return (
    <div className="container">
      <h2 className='most-famous-blog'>Most Famous Blogs</h2>
      <div className="row text-start d-flex justify-content-center">
        {/* first blog */}
        <Link to={`/blog/${firstBlog.id}`} className="col-md-6 col-sm-12 photo-frame">
          <div className='photo'>
            <img src={require('../../images/invictus.png')} alt="" />
          </div>
          {/* <div className='photo-detail'>
          <h3>{firstBlog.title} </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate veniam eligendi sapiente quam expedita alias obcaecati velit eveniet nostrum eos cum eaque repellendus tempore nisi atque quis vitae, est id.</p>
         </div> */}
        </Link>

        {/* next two blog */}
        <div className="col-md-6 col-sm-12">
          {/* top blog */}
          <Link to={`/blog/${secondBlog.id}`} className="card mt-3 mb-5 shadow rounded">
            <div className="row g-0 shadow rounded">
              <div className="col-md-4">
                <img src={secondBlog.img_url} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title"> {secondBlog.title}</h5>
                  <p className="card-text">{secondBlog.small_discription}</p>
                  <p className="card-text"><small className="text-muted">Posted in : {secondBlog.post_date}</small></p>
                </div>
              </div>
            </div>
          </Link>
          {/* blow blog */}
          <Link to={`/blog/${ThirdBlog.id}`} className="card mt-3 mb-5 shadow rounded">
            <div className="row g-0 shadow rounded">
              <div className="col-md-4">
                <img src={ThirdBlog.img_url} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title"> {ThirdBlog.title}</h5>
                  <p className="card-text">{ThirdBlog.small_discription}</p>
                  <p className="card-text"><small className="text-muted">Posted in : {ThirdBlog.post_date}</small></p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default SpecialBlog;