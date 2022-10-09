import React from 'react';
import './AboutTopBanner.css'
const AboutTopBanner = () => {
    return (
        <div className='container pt-5 mt-5'>
            <div className="row">
                <div className="col-md-4 about-topbanner-img-contaienr">
                    <img src={require('../../images/dada-2.jpg')} alt="" />
                </div>
                <div className="col-md-8 text-start d-flex justify-content-center align-items-center">
                    <div>
                        <h2>Aurpon Chowdhury</h2>
                        <p>Student of Alberta</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur laudantium debitis nesciunt laborum dolorem aperiam omnis cumque doloribus quam est enim reprehenderit, quod maiores voluptatem animi quia amet. Illo, eum?</p>
                    </div>

                </div>
            </div>

            {/* byrc */}
            <div className="row">
                <div className="col-md-8 text-start d-flex justify-content-center align-items-center">
                    <div>
                        <h2>BYRC</h2>
                        <p>Student of Alberta</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur laudantium debitis nesciunt laborum dolorem aperiam omnis cumque doloribus quam est enim reprehenderit, quod maiores voluptatem animi quia amet. Illo, eum?</p>
                    </div>
                </div>
                <div className="col-md-4 about-topbanner-img-contaienr">
                    <img src={require('../../images/dada-2.jpg')} alt="" />
                </div>
            </div>
            {/* team invactus */}
            <div className="row">
                <div className="col-md-4 about-topbanner-img-contaienr">
                    <img src={require('../../images/dada-2.jpg')} alt="" />
                </div>
                <div className="col-md-8 text-start d-flex justify-content-center align-items-center">
                    <div>
                        <h2>Team Invactus</h2>
                        <p>Student of Alberta</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur laudantium debitis nesciunt laborum dolorem aperiam omnis cumque doloribus quam est enim reprehenderit, quod maiores voluptatem animi quia amet. Illo, eum?</p>
                    </div>

                </div>
            </div>

            {/* memories */}
            <div className="row">
                <h1 className="text-center">memories</h1>
                <p>hear will be some image in grid</p>
            </div>

            {/* youtube jouney */}
            <div className="row">
                <h1 className="text-center">This is youtube journey</h1>
            </div>
        </div>
    );
};

export default AboutTopBanner;