import React from 'react';
import './TopBanner.css'
const TopBanner = () => {
    return (
        <div className='container pb-5 mb-5'>
            <div className="row">
                <div className="col-md-6 col-sm-12 text-start d-flex justify-content-center align-items-center">
                    <div>
                        <h1>Hello I'm
                            <br />
                            <span className='topbanner-name'>Aurpon Chowdhury</span>
                        </h1>
                        <p className='topbanner-study'>International Student At Alberta</p>
                        <p className='topbanner-detal'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem corporis iste placeat in unde nisi molestiae dicta sapiente et dignissimos repudiandae, rerum quaerat! Optio saepe laudantium quam nesciunt esse totam?</p>
                    </div>
                </div>
                <div className="col-md-6 topbanner-image-container">
                    <img src={require("../../images/dada-2.jpg")} alt="" />
                </div>
            </div>
        </div>
    );
};

export default TopBanner;