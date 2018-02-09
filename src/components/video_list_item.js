import React from 'react';

const VideoListItem = (props) => {
    const video = props.video;
    console.log(video);
    const imageUrl = video.snippet.thumbnails.default.url;
    const videoTitle = video.snippet.title;

    return (
        <li className='list-group-item'>
            <div className='video-list media'>
                <div className='media-left'>
                    <a href=''>
                    <img className='media-object' src={imageUrl} alt="youtube-thumbnail"/>
                    </a>
                </div>

                <div className='media-body'>
                    <div className='media-heading'>{videoTitle}</div>
                </div>
            </div>
        </li>
    )

}

export default VideoListItem;