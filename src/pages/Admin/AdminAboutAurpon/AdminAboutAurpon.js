import React from 'react';
import { useEffect, useState } from 'react';

const AdminAboutAurpon = () => {
    const [updatData, setUpdateData] = useState({})
    const [aurponData, setAurponData] = useState({})

    // load data for top bannar
    useEffect(() => {
        fetch('http://localhost:5000/about/639600ed9127bfa3dee3fc0a')
            .then(res => res.json())
            .then(data => setAurponData(data))
    }, [])

    const handelSubmit = event => {
        event.preventDefault()
        console.log(updatData);
        const url = `http://localhost:5000/about/639600ed9127bfa3dee3fc0a`
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
        <div className="row bg-info m-5 p-5">
            <div className="col-md-8">
                <form onSubmit={handelSubmit}>
                    {/* title */}
                    <div class="form-floating">
                        <p>Title : {aurponData.title}</p>

                        <textarea
                            onChange={e => handleTopBannerFormChange(e)}
                            name='title' class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">Please give your Title</label>
                    </div>
                    {/* image link */}
                    <div class="form-floating">
                        <p>img_url : {aurponData.img_url}</p>

                        <textarea
                            onChange={e => handleTopBannerFormChange(e)}
                            name='img_url' class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">Please give your Image link</label>
                    </div>
                    {/* point 1 */}
                    <div class="form-floating">
                        <p>point_1 : {aurponData.point_1}</p>
                        <textarea
                            onChange={e => handleTopBannerFormChange(e)}
                            name='point_1' class="form-control" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">Please give your point_1</label>
                    </div>
                    {/* point 2 */}
                    <div class="form-floating">
                        <p>point_2 : {aurponData.point_2}</p>
                        <textarea
                            onChange={e => handleTopBannerFormChange(e)}
                            name='point_2' class="form-control" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">Please give your point_2</label>
                    </div>
                    {/* point 3 */}
                    <div class="form-floating">
                        <p>point_3 : {aurponData.point_3}</p>
                        <textarea
                            onChange={e => handleTopBannerFormChange(e)}
                            name='point_3' class="form-control" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">Please give your point_3</label>
                    </div>
                    {/* detail */}
                    <div class="form-floating">
                        <p>detail : {aurponData.detail}</p>
                        <textarea
                            onChange={e => handleTopBannerFormChange(e)}
                            name='detail' class="form-control" id="floatingTextarea"></textarea>
                        {/* <label for="floatingTextarea">Please give your detail</label> */}
                    </div>
                    {/* facebook */}
                    <div class="form-floating">
                        <p>Facebook Link : {aurponData.facebook_link}</p>
                        <textarea
                            onChange={e => handleTopBannerFormChange(e)}
                            name='facebook_link' class="form-control" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">Please give your facebook_link</label>
                    </div>
                    {/* youtube */}
                    <div class="form-floating">
                        <p>youtube_link : {aurponData.youtube_link}</p>
                        <textarea
                            onChange={e => handleTopBannerFormChange(e)}
                            name='youtube_link' class="form-control" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">Please give your youtube_link</label>
                    </div>
                    <input type="submit" value="Update" />
                </form>


            </div>
            <div className="col-md-4">

            </div>
        </div>
    );
};

export default AdminAboutAurpon;