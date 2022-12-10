import React from 'react';
import { useEffect, useState } from 'react';

const AdminVideo = () => {
    const [updatData, setUpdateData] = useState({})
    const [videoData, setVideoData] = useState({})
    // load data for top bannar
    useEffect(() => {
        fetch('http://localhost:5000/home/63947ea19127bfa3deeb3530')
            .then(res => res.json())
            .then(data => setVideoData(data))
    }, [])

    console.log(videoData);
    const handelSubmit = event => {
        event.preventDefault()
        // console.log(updatData);
        const url = `http://localhost:5000/home/63947ea19127bfa3deeb3530`
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
        <form onSubmit={handelSubmit}>
            <div className='pt-5'>
                <div>
                    <p>{videoData.title}</p>
                    <input type="text" name='title' placeholder='Please Enter title '
                        onChange={e => handleTopBannerFormChange(e)} />
                </div>
                <div>
                    <p>{videoData.sub_title1}</p>
                    <input type="text" name='sub_title1' placeholder='Please Enter sub_title1 '
                        onChange={e => handleTopBannerFormChange(e)} />
                </div>
                <div>
                    <p>{videoData.sub_title2}</p>
                    <input type="text" name='sub_title2' placeholder='Please Enter sub_title2 '
                        onChange={e => handleTopBannerFormChange(e)} />
                </div>
                <div>
                    <p>{videoData.youtube_link_1}</p>
                    <input type="text" name='youtube_link_1' placeholder='Please Enter youtube_link_1 '
                        onChange={e => handleTopBannerFormChange(e)} />
                </div>
                <div>
                    <p>{videoData.youtube_link_2}</p>
                    <input type="text" name='youtube_link_2' placeholder='Please Enter youtube_link_2 '
                        onChange={e => handleTopBannerFormChange(e)} />
                </div>
                <div>
                    <p>{videoData.youtube_link_3}</p>
                    <input type="text" name='youtube_link_3' placeholder='Please Enter youtube_link_3 '
                        onChange={e => handleTopBannerFormChange(e)} />
                </div>
            </div>
            <input type="submit" value="Update" />

        </form>

    );
};

export default AdminVideo;