import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Admin = () => {
    const [homeData, sethomeData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/home')
            .then(res => res.json())
            .then(data => sethomeData(data))
    }, [])

    const topbannerData = homeData[0]

    const contentData = homeData[1]
    const counterData = homeData[2]
    const videoData = homeData[3]
    const reviewData = homeData[4]
    const sendMsgData = homeData[5]
    // console.log([topbannerData, contentData, counterData, videoData, reviewData, sendMsgData]);
    // update data 

    const [updatData, setUpdateData] = useState({})


    console.log(updatData);
    const handelSubmit = event => {
        event.preventDefault()
        // console.log(updatData);

        // update data
        const url = `http://localhost:5000/home/${topbannerData._id}`

        fetch(url, {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                alert(' Update complete :' + data.modifiedCount)
                event.target.reset()
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const handleTopBannerFormChange = (event) => {
        let data = { ...updatData };
        data[event.target.name] = event.target.value;
        setUpdateData(data)


    }

    return (
        <div className='m-5 bg-primary vh-100'>
            {/* top banner section */}
            <div className='pt-5'>
                <h2>Top banner section</h2>
                {

                    topbannerData ?
                        <div className="row bg-info m-5 p5">


                            <div className="col-md-8">
                                <p> <span className='bg-warning p-2'>Title text :</span>  {topbannerData?.title}</p>
                                <p><span className='bg-warning p-2'>Sub-title text :</span>  {topbannerData.sub_title}</p>
                                <p><span className='bg-warning p-2'>Description text :</span>  {topbannerData.detail}</p>
                                <p><span className='bg-warning p-2'>Image url text :</span>  {topbannerData.img_url}</p>
                            </div>


                            <div className="col-md-4">
                                <form onSubmit={handelSubmit}>
                                    <input
                                        type="text"
                                        name="title" id=""
                                        placeholder='Pleace enter title'

                                        onChange={e => handleTopBannerFormChange(e)}
                                    />
                                    <input
                                        type="text"
                                        name="sub_title" id=""
                                        placeholder='Pleace enter sub_title'
                                        onChange={e => handleTopBannerFormChange(e)}
                                    />
                                    <input
                                        type="text"
                                        name="detail" id=""
                                        placeholder='Pleace enter detail'
                                        onChange={e => handleTopBannerFormChange(e)}
                                    />
                                    <input
                                        type="text"
                                        name="img_url" id=""
                                        placeholder='Pleace enter img_url'
                                        onChange={e => handleTopBannerFormChange(e)}
                                    />
                                    <input type="submit" value="Update" />
                                </form>
                            </div>
                        </div>
                        : ''
                }
            </div>
        </div>
    );
};

export default Admin;