import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SpecialBlog.css'
const SpecialBlog = (props) => {
  const navigate = useNavigate()
  const [firstBlog, secondBlog, ThirdBlog] = props.specialBlog
  // console.log(firstBlog, secondBlog, ThirdBlog)
  const showDetailBlog = (id) => {
    navigate(`/blog/${id}`)
    console.log(id)
  }

  return (
    <div className="container">
      <h2 className='most-famous-blog'>Most Famous Blogs</h2>
      <div className="row text-start d-flex justify-content-center">
        <div onClick={() => showDetailBlog(firstBlog.id)} className="col-md-6 col-sm-12 photo-frame">
          <div className='photo'>
            <img src={require('../../images/invictus.png')} alt="" />
          </div>
          {/* <div className='photo-detail'>
          <h3>{firstBlog.title} </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate veniam eligendi sapiente quam expedita alias obcaecati velit eveniet nostrum eos cum eaque repellendus tempore nisi atque quis vitae, est id.</p>
         </div> */}
        </div>
        <div className="col-md-6 col-sm-12">
          <div onClick={() => showDetailBlog(secondBlog.id)} className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={require('../../images/invictus.png')} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
          <div onClick={() => showDetailBlog(ThirdBlog.id)} className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={require('../../images/invictus.png')} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SpecialBlog;