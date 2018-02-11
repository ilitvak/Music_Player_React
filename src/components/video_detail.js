import React from 'react';

const VideoDetail = (props) => {

    if(!props.video) {
        return <div>Loading...</div>
    }

    const video = props.video;
    const videoId = video.id.videoId;
    const url = `https://youtube.com/embed/${videoId}`;
    const videoTitle = video.snippet.title;
    const videoDesc = video.snippet.description;
    console.log("Inside VideoDetail sect: " + JSON.stringify(video));

    return (
        <div className='video-detail col-md-8'>
            <div className='embed-responsive embed-responsive-16by9'>
                <iframe className='embed-responsive-item' src={url}></iframe>
            </div>
            <div className='details'>
                <div>{videoTitle}</div>
                <div>{videoDesc}</div>
            </div>
        </div>
    );
}

export default VideoDetail;