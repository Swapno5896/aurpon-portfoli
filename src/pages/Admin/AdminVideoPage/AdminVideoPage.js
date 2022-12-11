import React, { useEffect, useState } from 'react';

const AdminVideoPage = () => {
    const [videos, setVideos] = useState([]);
    const [video, setVideo] = useState({})
    const handBlur = (e) => {
        let data = {}
        data.date = new Date()
        data.video_link = e.target.value
        setVideo(data)
    }
    const handelSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:5000/video', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(video),
        })
            .then((response) => response.json())
            .then((data) => {
                alert(' Update complete :' + data?.result.insertedId)
                e.target.reset()
                console.log('Success:', data.result.insertedId);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        console.log(video);
    }

    //  loading all data
    useEffect(() => {
        fetch('http://localhost:5000/video')
            .then(res => res.json())
            .then(data => setVideos(data))
    }, [])
    // deleting data
    const hadelDelet = (id) => {
        console.log(id);
        fetch('http://localhost:5000/video/' + id, {
            method: 'DELETE',
        })
            .then(res => res.json()) // or 
            .then(res => {
                alert(
                    'Deleted ' + res.deletedCount
                )
                console.log(res)
            })
    }
    return (
        <div>
            <form onSubmit={handelSubmit}>
                <div className='pt-5'>
                    <div>
                        <p>Add Video</p>
                        <input type="text" name='video_link' placeholder='Please Enter Youtube Link  '
                            onBlur={e => handBlur(e)} />
                    </div>
                </div>
                <input type="submit" value="Update" />
            </form>
            {/* delete data */}
            <div>
                <p>Delet video</p>
                <ol>
                    {
                        videos.map(video => <li>

                            <iframe width="360" height="200" src={video.video_link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <button onClick={() => hadelDelet(video._id)}>Delet</button>
                        </li>)
                    }

                </ol>
            </div>
        </div>
    );
};

export default AdminVideoPage;