import React from 'react';
import { useEffect, useState } from 'react';

const AdminFooter = () => {
    const [updatData, setUpdateData] = useState({})
    const [footerData, setFooterData] = useState({});
    useEffect(() => {
        fetch('http://localhost:5000/home/6394b3d29127bfa3de760d1f')
            .then(res => res.json())
            .then(data => setFooterData(data))
    }, [])

    console.log(footerData);
    const handelSubmit = event => {
        event.preventDefault()
        // console.log(updatData);
        const url = `http://localhost:5000/home/6394b3d29127bfa3de760d1f`
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
            <form onSubmit={handelSubmit}>
                <div className='pt-5'>
                    <div>
                        <p>{footerData.title}</p>
                        <input type="text" name='title' placeholder='Please Enter title '
                            onChange={e => handleTopBannerFormChange(e)} />
                    </div>
                    <div>
                        <p>{footerData.sub_title}</p>
                        <input type="text" name='sub_title' placeholder='Please Enter sub_title '
                            onChange={e => handleTopBannerFormChange(e)} />
                    </div>
                    <div>
                        <p>{footerData.youtube_link}</p>
                        <input type="text" name='youtube_link' placeholder='Please Enter youtube_link '
                            onChange={e => handleTopBannerFormChange(e)} />
                    </div>
                    <div>
                        <p>{footerData.facebook_link}</p>
                        <input type="text" name='facebook_link' placeholder='Please Enter facebook_link '
                            onChange={e => handleTopBannerFormChange(e)} />
                    </div>
                    <div>
                        <p>{footerData.img_1}</p>
                        <input type="text" name='img_1' placeholder='Please Enter img_1 '
                            onChange={e => handleTopBannerFormChange(e)} />
                    </div>
                    <div>
                        <p>{footerData.img_2}</p>
                        <input type="text" name='img_2' placeholder='Please Enter img_2 '
                            onChange={e => handleTopBannerFormChange(e)} />
                    </div>
                    <div>
                        <p>{footerData.img_3}</p>
                        <input type="text" name='img_3' placeholder='Please Enter img_3 '
                            onChange={e => handleTopBannerFormChange(e)} />
                    </div>
                    <div>
                        <p>{footerData.img_4}</p>
                        <input type="text" name='img_4' placeholder='Please Enter img_4 '
                            onChange={e => handleTopBannerFormChange(e)} />
                    </div>
                    <div>
                        <p>{footerData.img_5}</p>
                        <input type="text" name='img_5' placeholder='Please Enter img_5'
                            onChange={e => handleTopBannerFormChange(e)} />
                    </div>
                    <div>
                        <p>{footerData.img_6}</p>
                        <input type="text" name='img_6' placeholder='Please Enter img_6 '
                            onChange={e => handleTopBannerFormChange(e)} />
                    </div>
                    <div>
                        <p>{footerData.location_main}</p>
                        <input type="text" name='location_main' placeholder='Please Enter location_main '
                            onChange={e => handleTopBannerFormChange(e)} />
                    </div>
                    <div>
                        <p>{footerData.location_secondary}</p>
                        <input type="text" name='location_secondary' placeholder='Please Enter location_secondary '
                            onChange={e => handleTopBannerFormChange(e)} />
                    </div>
                    <div>
                        <p>{footerData.contact}</p>
                        <input type="text" name='contact' placeholder='Please Enter contact '
                            onChange={e => handleTopBannerFormChange(e)} />
                    </div>
                </div>
                <input type="submit" value="Update" />

            </form>

        </div>
    );
};

export default AdminFooter;