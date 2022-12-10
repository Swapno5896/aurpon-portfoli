import React, { useEffect, useState, useRef } from 'react';

const AdminContactMessage = () => {
    const [contactMessageData, setContactMessageData] = useState({});
    const [updatData, setUpdateData] = useState({})
    const { title, sub_title1, sub_title2 } = contactMessageData
    //  load data
    useEffect(() => {
        fetch('http://localhost:5000/home/6377a5a22f2d042aac9dfc2e')
            .then(res => res.json())
            .then(data => setContactMessageData(data))
    }, [])
    const handleTopBannerFormChange = (event) => {
        let data = { ...updatData };
        data[event.target.name] = event.target.value;
        setUpdateData(data)
    }
    const handelSubmit = event => {
        event.preventDefault()
        // console.log(updatData);
        const url = `http://localhost:5000/home/6377a5a22f2d042aac9dfc2e`
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
    return (
        <form onSubmit={handelSubmit}>
            <div className='pt-5'>
                <div>
                    <p>{title}</p>
                    <input type="text" name='title' placeholder='Please Enter title '
                        onChange={e => handleTopBannerFormChange(e)} />
                </div>
                <div>
                    <p>{sub_title1}</p>
                    <input type="text" name='sub_title1' placeholder='Please Enter sub_title1 '
                        onChange={e => handleTopBannerFormChange(e)} />
                </div>
                <div>
                    <p>{sub_title2}</p>
                    <input type="text" name='sub_title2' placeholder='Please Enter sub_title1 '
                        onChange={e => handleTopBannerFormChange(e)} />
                </div>
            </div>
            <input type="submit" value="Update" />

        </form>
    );
};

export default AdminContactMessage;