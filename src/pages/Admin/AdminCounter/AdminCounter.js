import React from 'react';
import { useEffect, useState } from 'react';

const AdminCounter = () => {
    const [updatData, setUpdateData] = useState({})
    const [counterData, setCounterData] = useState({})

    // load data for top bannar
    useEffect(() => {
        fetch('http://localhost:5000/home/63946e709127bfa3dec1fa9f')
            .then(res => res.json())
            .then(data => setCounterData(data))
    }, [])

    const handelSubmit = event => {
        event.preventDefault()
        // console.log(updatData);
        const url = `http://localhost:5000/home/63946e709127bfa3dec1fa9f`
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
        <div>
            <div className="row bg-info m-5 p-5">
                <div className="col-md-8">
                    <form onSubmit={handelSubmit}>
                        <div>
                            <p>Award Count : {counterData.award_count}</p>
                            <input
                                type="text"
                                name="award_count" id=""
                                placeholder='Pleace enter award_count'

                                onChange={e => handleTopBannerFormChange(e)}
                            />
                        </div>
                        <div>
                            <p>Award Title : {counterData.award_title}</p>
                            <input
                                type="text"
                                name="award_title" id=""
                                placeholder='Pleace enter award_title'
                                onChange={e => handleTopBannerFormChange(e)}
                            />
                        </div>

                        <div>
                            <p>Ngo Count : {counterData.ngo_count}</p>
                            <input
                                type="text"
                                name="ngo_count" id=""
                                placeholder='Pleace enter ngo_count'
                                onChange={e => handleTopBannerFormChange(e)}
                            />
                        </div>
                        <div>
                            <p>Ngo Title : {counterData.ngo_title}</p>
                            <input
                                type="text"
                                name="ngo_title" id=""
                                placeholder='Pleace enter ngo_title'
                                onChange={e => handleTopBannerFormChange(e)}
                            />
                        </div>

                        <div>
                            <p>Student Count : {counterData.student_count}</p>
                            <input
                                type="text"
                                name="student_count" id=""
                                placeholder='Pleace enter student_count'
                                onChange={e => handleTopBannerFormChange(e)}
                            />
                        </div>

                        <div>
                            <p>Student Title : {counterData.student_title}</p>
                            <input
                                type="text"
                                name="student_title" id=""
                                placeholder='Pleace enter student_title'
                                onChange={e => handleTopBannerFormChange(e)}
                            />
                        </div>

                        <div>
                            <p>Video Count : {counterData.video_count}</p>
                            <input
                                type="text"
                                name="video_count" id=""
                                placeholder='Pleace enter video_count'
                                onChange={e => handleTopBannerFormChange(e)}
                            />
                        </div>

                        <div>
                            <p>Video Title : {counterData.video_title}</p>
                            <input
                                type="text"
                                name="video_title" id=""
                                placeholder='Pleace enter video_title'
                                onChange={e => handleTopBannerFormChange(e)}
                            />
                        </div>

                        <input type="submit" value="Update" />
                    </form>


                </div>
                <div className="col-md-4">

                </div>
            </div>

        </div>
    );
};

export default AdminCounter;